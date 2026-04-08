<?php
/**
 * Plugin Name: GNEC Podcast API
 * Description: WordPress REST API endpoints for the GNEC podcast workflow backed by Cloudinary.
 * Version: 0.1.0
 * Author: GNEC
 */

if (!defined('ABSPATH')) {
    exit;
}

final class GNEC_Podcast_API {
    private const REST_NAMESPACE = 'gnec/v1';
    private const AUDIO_FOLDER = 'gnec/podcasts/audio';
    private const COVER_FOLDER = 'gnec/podcasts/covers';
    private const NGO_REPORTER_FOLDER = 'gnec/ngo-reporter/issues';

    public function __construct() {
        add_action('rest_api_init', [$this, 'register_routes']);
    }

    public function register_routes() {
        register_rest_route(
            self::REST_NAMESPACE,
            '/podcast-episodes',
            [
                [
                    'methods' => WP_REST_Server::READABLE,
                    'callback' => [$this, 'list_episodes'],
                    'permission_callback' => '__return_true',
                ],
                [
                    'methods' => WP_REST_Server::CREATABLE,
                    'callback' => [$this, 'create_episode'],
                    'permission_callback' => [$this, 'can_manage_podcasts'],
                ],
            ]
        );

        register_rest_route(
            self::REST_NAMESPACE,
            '/podcast-episodes/(?P<episode_number>\d+)',
            [
                'methods' => WP_REST_Server::READABLE,
                'callback' => [$this, 'get_episode'],
                'permission_callback' => '__return_true',
            ]
        );

        register_rest_route(
            self::REST_NAMESPACE,
            '/ngo-reporter-issues',
            [
                [
                    'methods' => WP_REST_Server::READABLE,
                    'callback' => [$this, 'list_ngo_reporter_issues'],
                    'permission_callback' => '__return_true',
                ],
                [
                    'methods' => WP_REST_Server::CREATABLE,
                    'callback' => [$this, 'create_ngo_reporter_issue'],
                    'permission_callback' => [$this, 'can_manage_podcasts'],
                ],
            ]
        );

        register_rest_route(
            self::REST_NAMESPACE,
            '/ngo-reporter-issues/(?P<volume_number>\d+)',
            [
                'methods' => WP_REST_Server::READABLE,
                'callback' => [$this, 'get_ngo_reporter_issue'],
                'permission_callback' => '__return_true',
            ]
        );
    }

    public function can_manage_podcasts() {
        return current_user_can('edit_others_posts');
    }

    public function list_episodes(WP_REST_Request $request) {
        $episodes = $this->fetch_episode_assets();

        if (is_wp_error($episodes)) {
            return $episodes;
        }

        usort(
            $episodes,
            static fn(array $a, array $b) => (int) $b['episode_number'] <=> (int) $a['episode_number']
        );

        return rest_ensure_response($episodes);
    }

    public function get_episode(WP_REST_Request $request) {
        $episode_number = absint($request['episode_number']);
        $episodes = $this->fetch_episode_assets();

        if (is_wp_error($episodes)) {
            return $episodes;
        }

        foreach ($episodes as $episode) {
            if ((int) $episode['episode_number'] === $episode_number) {
                return rest_ensure_response($episode);
            }
        }

        return new WP_Error('gnec_episode_not_found', 'Podcast episode not found.', ['status' => 404]);
    }

    public function list_ngo_reporter_issues(WP_REST_Request $request) {
        $issues = $this->fetch_ngo_reporter_assets();

        if (is_wp_error($issues)) {
            return $issues;
        }

        usort(
            $issues,
            static fn(array $a, array $b) => (int) $b['volume_number'] <=> (int) $a['volume_number']
        );

        return rest_ensure_response($issues);
    }

    public function get_ngo_reporter_issue(WP_REST_Request $request) {
        $volume_number = absint($request['volume_number']);
        $issues = $this->fetch_ngo_reporter_assets();

        if (is_wp_error($issues)) {
            return $issues;
        }

        foreach ($issues as $issue) {
            if ((int) $issue['volume_number'] === $volume_number) {
                return rest_ensure_response($issue);
            }
        }

        return new WP_Error('gnec_ngo_reporter_not_found', 'NGO Reporter issue not found.', ['status' => 404]);
    }

    public function create_episode(WP_REST_Request $request) {
        $params = $request->get_params();
        $files = $request->get_file_params();

        $episode_number = absint($params['episode_number'] ?? 0);
        $title = sanitize_text_field($params['title'] ?? '');
        $description = sanitize_textarea_field($params['description'] ?? '');
        $features = sanitize_text_field($params['features'] ?? '');
        $category = sanitize_text_field($params['category'] ?? '');
        $tags_csv = sanitize_text_field($params['tags'] ?? '');

        if (!$episode_number || !$title || !$description || empty($files['audio_file'])) {
            return new WP_Error('gnec_invalid_request', 'Missing required episode fields.', ['status' => 400]);
        }

        $tag_values = array_values(
            array_filter(
                array_map('trim', explode(',', $tags_csv))
            )
        );

        $normalized_tags = array_map(
            static fn(string $tag) => sanitize_title($tag),
            $tag_values
        );

        $context = [
            'episode_number' => (string) $episode_number,
            'title' => $title,
            'description' => $description,
            'features' => $features,
            'category' => $category,
            'tags_csv' => implode(', ', $tag_values),
            'published_at' => gmdate('c'),
        ];

        $audio_public_id = self::AUDIO_FOLDER . '/episode-' . $episode_number;
        $audio_upload = $this->upload_to_cloudinary(
            $files['audio_file'],
            'video',
            $audio_public_id,
            array_merge(
                [
                    'tags' => array_values(
                        array_filter(
                            array_merge(['gnec', 'podcast', 'episode-' . $episode_number], $normalized_tags)
                        )
                    ),
                ],
                [
                    'context' => $context,
                ]
            )
        );

        if (is_wp_error($audio_upload)) {
            return $audio_upload;
        }

        $image_secure_url = null;
        $image_public_id = null;

        if (!empty($files['image_file'])) {
            $image_public_id = self::COVER_FOLDER . '/episode-' . $episode_number . '-cover';
            $cover_context = array_merge($context, ['audio_public_id' => $audio_public_id]);

            $image_upload = $this->upload_to_cloudinary(
                $files['image_file'],
                'image',
                $image_public_id,
                [
                    'tags' => array_values(
                        array_filter(
                            array_merge(['gnec', 'podcast', 'cover', 'episode-' . $episode_number], $normalized_tags)
                        )
                    ),
                    'context' => $cover_context,
                ]
            );

            if (is_wp_error($image_upload)) {
                return $image_upload;
            }

            $image_secure_url = $image_upload['secure_url'] ?? null;
            $context['cover_public_id'] = $image_public_id;

            $this->update_cloudinary_context([$audio_public_id], 'video', $context);
        }

        return rest_ensure_response(
            [
                'id' => $audio_upload['public_id'],
                'episode_number' => $episode_number,
                'title' => $title,
                'description' => $description,
                'features' => $features,
                'tags' => $tag_values,
                'audio_file_url' => $audio_upload['secure_url'] ?? null,
                'category' => $category,
                'created_at' => gmdate('c'),
                'image_file_url' => $image_secure_url,
                'cloudinary_public_id' => $audio_upload['public_id'],
                'image_public_id' => $image_public_id,
            ]
        );
    }

    public function create_ngo_reporter_issue(WP_REST_Request $request) {
        $params = $request->get_json_params();

        if (!is_array($params) || empty($params)) {
            $params = $request->get_params();
        }

        $volume_number = absint($params['volume_number'] ?? 0);
        $date = sanitize_text_field($params['date'] ?? '');
        $description = sanitize_textarea_field($params['description'] ?? '');
        $tags_csv = sanitize_text_field($params['tags'] ?? '');
        $link = esc_url_raw($params['link'] ?? '');

        if (!$volume_number || !$date || !$description || !$link) {
            return new WP_Error('gnec_invalid_ngo_reporter_request', 'Missing required NGO Reporter fields.', ['status' => 400]);
        }

        $tag_values = array_values(
            array_filter(
                array_map('trim', explode(',', $tags_csv))
            )
        );

        $normalized_tags = array_map(
            static fn(string $tag) => sanitize_title($tag),
            $tag_values
        );

        $context = [
            'volume_number' => (string) $volume_number,
            'date' => $date,
            'description' => $description,
            'tags_csv' => implode(', ', $tag_values),
            'link' => $link,
            'published_at' => gmdate('c'),
        ];

        $public_id = self::NGO_REPORTER_FOLDER . '/volume-' . $volume_number;
        $body = implode("\n", [
            'NGO Reporter Vol ' . $volume_number,
            $date,
            $description,
            $link,
        ]);

        $upload = $this->upload_text_to_cloudinary(
            $body,
            'raw',
            $public_id,
            [
                'tags' => array_values(
                    array_filter(
                        array_merge(['gnec', 'ngo-reporter', 'volume-' . $volume_number], $normalized_tags)
                    )
                ),
                'context' => $context,
            ]
        );

        if (is_wp_error($upload)) {
            return $upload;
        }

        return rest_ensure_response(
            [
                'id' => $upload['public_id'],
                'volume_number' => $volume_number,
                'date' => $date,
                'description' => $description,
                'tags' => $tag_values,
                'link' => $link,
                'created_at' => gmdate('c'),
                'cloudinary_public_id' => $upload['public_id'],
            ]
        );
    }

    private function fetch_episode_assets() {
        $response = $this->cloudinary_admin_get('/resources/video/upload', [
            'prefix' => self::AUDIO_FOLDER,
            'context' => 'true',
            'tags' => 'true',
            'max_results' => 500,
        ]);

        if (is_wp_error($response)) {
            return $response;
        }

        $cover_public_ids = $this->fetch_cover_public_ids();

        if (is_wp_error($cover_public_ids)) {
            return $cover_public_ids;
        }

        $resources = $response['resources'] ?? [];
        $episodes = [];

        foreach ($resources as $resource) {
            $context = $resource['context']['custom'] ?? [];
            $episode_number = isset($context['episode_number'])
                ? absint($context['episode_number'])
                : 0;

            if (!$episode_number) {
                continue;
            }

            $derived_cover_public_id = self::COVER_FOLDER . '/episode-' . $episode_number . '-cover';
            $cover_public_id = $context['cover_public_id'] ?? null;

            if (!$cover_public_id && isset($cover_public_ids[$derived_cover_public_id])) {
                $cover_public_id = $derived_cover_public_id;
            }

            $episodes[] = [
                'id' => $resource['public_id'],
                'episode_number' => $episode_number,
                'title' => $context['title'] ?? ('Episode ' . $episode_number),
                'description' => $context['description'] ?? '',
                'features' => $context['features'] ?? '',
                'tags' => array_values($resource['tags'] ?? []),
                'audio_file_url' => $resource['secure_url'] ?? null,
                'category' => $context['category'] ?? 'General',
                'created_at' => $context['published_at'] ?? ($resource['created_at'] ?? gmdate('c')),
                'image_file_url' => $cover_public_id ? $this->cloudinary_delivery_url('image', $cover_public_id) : null,
                'cloudinary_public_id' => $resource['public_id'],
                'image_public_id' => $cover_public_id,
            ];
        }

        return $episodes;
    }

    private function fetch_cover_public_ids() {
        $response = $this->cloudinary_admin_get('/resources/image/upload', [
            'prefix' => self::COVER_FOLDER,
            'max_results' => 500,
        ]);

        if (is_wp_error($response)) {
            return $response;
        }

        $resources = $response['resources'] ?? [];
        $cover_public_ids = [];

        foreach ($resources as $resource) {
            if (!empty($resource['public_id'])) {
                $cover_public_ids[$resource['public_id']] = true;
            }
        }

        return $cover_public_ids;
    }

    private function fetch_ngo_reporter_assets() {
        $response = $this->cloudinary_admin_get('/resources/raw/upload', [
            'prefix' => self::NGO_REPORTER_FOLDER,
            'context' => 'true',
            'tags' => 'true',
            'max_results' => 500,
        ]);

        if (is_wp_error($response)) {
            return $response;
        }

        $resources = $response['resources'] ?? [];
        $issues = [];

        foreach ($resources as $resource) {
            $context = $resource['context']['custom'] ?? [];
            $volume_number = isset($context['volume_number'])
                ? absint($context['volume_number'])
                : 0;

            if (!$volume_number) {
                continue;
            }

            $tags = array_values(
                array_filter(
                    $resource['tags'] ?? [],
                    static fn(string $tag) => !in_array($tag, ['gnec', 'ngo-reporter', 'volume-' . $volume_number], true)
                )
            );

            $issues[] = [
                'id' => $resource['public_id'],
                'volume_number' => $volume_number,
                'date' => $context['date'] ?? '',
                'description' => $context['description'] ?? '',
                'tags' => $tags,
                'link' => $context['link'] ?? '',
                'created_at' => $context['published_at'] ?? ($resource['created_at'] ?? gmdate('c')),
                'cloudinary_public_id' => $resource['public_id'],
            ];
        }

        return $issues;
    }

    private function upload_to_cloudinary(array $file, string $resource_type, string $public_id, array $options) {
        if (empty($file['tmp_name']) || !file_exists($file['tmp_name'])) {
            return new WP_Error('gnec_missing_upload', 'Upload file is missing.', ['status' => 400]);
        }

        if (!function_exists('curl_init')) {
            return new WP_Error('gnec_curl_missing', 'The PHP cURL extension is required for Cloudinary uploads.', ['status' => 500]);
        }

        $timestamp = time();
        $params = [
            'public_id' => $public_id,
            'overwrite' => 'true',
            'timestamp' => (string) $timestamp,
            'context' => $this->format_context($options['context'] ?? []),
            'tags' => implode(',', $options['tags'] ?? []),
            'api_key' => $this->get_cloudinary_api_key(),
        ];

        $params['signature'] = $this->sign_cloudinary_params($params);

        $ch = curl_init(
            sprintf(
                'https://api.cloudinary.com/v1_1/%s/%s/upload',
                rawurlencode($this->get_cloudinary_cloud_name()),
                rawurlencode($resource_type)
            )
        );

        $params['file'] = new CURLFile(
            $file['tmp_name'],
            $file['type'] ?? 'application/octet-stream',
            $file['name'] ?? basename($file['tmp_name'])
        );

        curl_setopt_array(
            $ch,
            [
                CURLOPT_POST => true,
                CURLOPT_POSTFIELDS => $params,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_TIMEOUT => 45,
            ]
        );

        $response_body = curl_exec($ch);

        if ($response_body === false) {
            $error = curl_error($ch);
            curl_close($ch);

            return new WP_Error(
                'gnec_cloudinary_upload_failed',
                $error ?: 'Cloudinary upload failed.',
                ['status' => 500]
            );
        }

        $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        $body = json_decode($response_body, true);

        if ($status >= 400 || !is_array($body) || empty($body['public_id'])) {
            return new WP_Error(
                'gnec_cloudinary_upload_failed',
                $body['error']['message'] ?? 'Cloudinary upload failed.',
                ['status' => 500]
            );
        }

        return $body;
    }

    private function upload_text_to_cloudinary(string $contents, string $resource_type, string $public_id, array $options) {
        if (!function_exists('curl_init')) {
            return new WP_Error('gnec_curl_missing', 'The PHP cURL extension is required for Cloudinary uploads.', ['status' => 500]);
        }

        $timestamp = time();
        $params = [
            'public_id' => $public_id,
            'overwrite' => 'true',
            'timestamp' => (string) $timestamp,
            'context' => $this->format_context($options['context'] ?? []),
            'tags' => implode(',', $options['tags'] ?? []),
            'api_key' => $this->get_cloudinary_api_key(),
            'file' => 'data:text/plain;base64,' . base64_encode($contents),
        ];

        $signature_params = $params;
        unset($signature_params['file']);
        $params['signature'] = $this->sign_cloudinary_params($signature_params);

        $ch = curl_init(
            sprintf(
                'https://api.cloudinary.com/v1_1/%s/%s/upload',
                rawurlencode($this->get_cloudinary_cloud_name()),
                rawurlencode($resource_type)
            )
        );

        curl_setopt_array(
            $ch,
            [
                CURLOPT_POST => true,
                CURLOPT_POSTFIELDS => $params,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_TIMEOUT => 45,
            ]
        );

        $response_body = curl_exec($ch);

        if ($response_body === false) {
            $error = curl_error($ch);
            curl_close($ch);

            return new WP_Error(
                'gnec_cloudinary_upload_failed',
                $error ?: 'Cloudinary upload failed.',
                ['status' => 500]
            );
        }

        $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        $body = json_decode($response_body, true);

        if ($status >= 400 || !is_array($body) || empty($body['public_id'])) {
            return new WP_Error(
                'gnec_cloudinary_upload_failed',
                $body['error']['message'] ?? 'Cloudinary upload failed.',
                ['status' => 500]
            );
        }

        return $body;
    }

    private function update_cloudinary_context(array $public_ids, string $resource_type, array $context) {
        $timestamp = time();
        $params = [
            'command' => 'add',
            'context' => $this->format_context($context),
            'public_ids[]' => $public_ids,
            'timestamp' => (string) $timestamp,
        ];

        $signature_params = [
            'command' => 'add',
            'context' => $this->format_context($context),
            'public_ids' => implode(',', $public_ids),
            'timestamp' => (string) $timestamp,
        ];

        $params['signature'] = $this->sign_cloudinary_params($signature_params);
        $params['api_key'] = $this->get_cloudinary_api_key();

        wp_remote_post(
            sprintf(
                'https://api.cloudinary.com/v1_1/%s/%s/context',
                rawurlencode($this->get_cloudinary_cloud_name()),
                rawurlencode($resource_type)
            ),
            [
                'timeout' => 30,
                'body' => $params,
            ]
        );
    }

    private function cloudinary_admin_get(string $path, array $query = []) {
        $response = wp_remote_get(
            add_query_arg(
                $query,
                sprintf(
                    'https://api.cloudinary.com/v1_1/%s%s',
                    rawurlencode($this->get_cloudinary_cloud_name()),
                    $path
                )
            ),
            [
                'timeout' => 30,
                'headers' => [
                    'Authorization' => 'Basic ' . base64_encode(
                        $this->get_cloudinary_api_key() . ':' . $this->get_cloudinary_api_secret()
                    ),
                ],
            ]
        );

        if (is_wp_error($response)) {
            return $response;
        }

        $body = json_decode(wp_remote_retrieve_body($response), true);
        $status = wp_remote_retrieve_response_code($response);

        if ($status >= 400 || !is_array($body)) {
            return new WP_Error('gnec_cloudinary_admin_failed', 'Cloudinary Admin API request failed.', ['status' => 500]);
        }

        return $body;
    }

    private function cloudinary_delivery_url(string $resource_type, string $public_id) {
        return sprintf(
            'https://res.cloudinary.com/%s/%s/upload/%s',
            rawurlencode($this->get_cloudinary_cloud_name()),
            rawurlencode($resource_type),
            str_replace('%2F', '/', rawurlencode($public_id))
        );
    }

    private function format_context(array $values) {
        $pairs = [];

        foreach ($values as $key => $value) {
            if ($value === null || $value === '') {
                continue;
            }

            $pairs[] = sprintf(
                '%s=%s',
                $this->escape_cloudinary_value((string) $key),
                $this->escape_cloudinary_value((string) $value)
            );
        }

        return implode('|', $pairs);
    }

    private function escape_cloudinary_value(string $value) {
        return str_replace(['\\', '|', '='], ['\\\\', '\|', '\='], $value);
    }

    private function sign_cloudinary_params(array $params) {
        unset($params['api_key'], $params['file'], $params['resource_type'], $params['signature']);
        ksort($params);

        $flattened = [];

        foreach ($params as $key => $value) {
            if (is_array($value)) {
                $value = implode(',', $value);
            }

            if ($value === '' || $value === null) {
                continue;
            }

            $normalized_key = str_replace('[]', '', (string) $key);
            $flattened[] = $normalized_key . '=' . $value;
        }

        return sha1(implode('&', $flattened) . $this->get_cloudinary_api_secret());
    }

    private function get_cloudinary_cloud_name() {
        if (!defined('GNEC_CLOUDINARY_CLOUD_NAME')) {
            throw new RuntimeException('Missing GNEC_CLOUDINARY_CLOUD_NAME constant.');
        }

        return GNEC_CLOUDINARY_CLOUD_NAME;
    }

    private function get_cloudinary_api_key() {
        if (!defined('GNEC_CLOUDINARY_API_KEY')) {
            throw new RuntimeException('Missing GNEC_CLOUDINARY_API_KEY constant.');
        }

        return GNEC_CLOUDINARY_API_KEY;
    }

    private function get_cloudinary_api_secret() {
        if (!defined('GNEC_CLOUDINARY_API_SECRET')) {
            throw new RuntimeException('Missing GNEC_CLOUDINARY_API_SECRET constant.');
        }

        return GNEC_CLOUDINARY_API_SECRET;
    }
}

new GNEC_Podcast_API();
