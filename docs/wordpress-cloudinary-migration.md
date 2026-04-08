# WordPress + Cloudinary Podcast Migration

This frontend no longer reads from or writes to Supabase. It now expects WordPress to be the backend system for authentication and podcast management, with Cloudinary used for podcast media storage.

## Target Architecture

1. The React app signs users in against WordPress.
2. WordPress returns a JWT token.
3. The React app stores that token locally and sends it on protected podcast requests.
4. WordPress receives podcast form submissions, uploads the audio and cover image to Cloudinary on the server side, and returns a normalized episode payload to the frontend.
5. WordPress also exposes public endpoints for listing episodes and fetching a single episode by number.

## Frontend Environment Variables

Create `.env` from `.env.example` and fill in:

```bash
VITE_WORDPRESS_URL=https://gnec.ngo
VITE_WORDPRESS_JWT_TOKEN_PATH=/wp-json/jwt-auth/v1/token
VITE_WORDPRESS_CURRENT_USER_PATH=/wp-json/wp/v2/users/me?context=edit
VITE_WORDPRESS_PODCAST_ENDPOINT_PATH=/wp-json/gnec/v1/podcast-episodes
```

## WordPress Endpoint Contract

The frontend now expects these routes:

### `POST /wp-json/jwt-auth/v1/token`

Request JSON:

```json
{
  "username": "editor-or-admin-login",
  "password": "secret"
}
```

Response shape used by the frontend:

```json
{
  "token": "jwt-token",
  "user_email": "member@example.org",
  "user_nicename": "member-login",
  "user_display_name": "Member Name"
}
```

### `GET /wp-json/wp/v2/users/me?context=edit`

Headers:

```http
Authorization: Bearer <jwt-token>
```

Response fields used by the frontend:

```json
{
  "id": 12,
  "name": "Member Name",
  "username": "member-login",
  "email": "member@example.org"
}
```

### `GET /wp-json/gnec/v1/podcast-episodes`

Response shape:

```json
[
  {
    "id": "cld_video_public_id_or_wp_id",
    "episode_number": 12,
    "title": "Episode title",
    "description": "Episode description",
    "features": "Guest name",
    "tags": ["health", "ngo"],
    "audio_file_url": "https://res.cloudinary.com/...",
    "image_file_url": "https://res.cloudinary.com/...",
    "category": "Health",
    "created_at": "2026-04-06T10:00:00",
    "cloudinary_public_id": "gnec/podcast/audio/episode-12",
    "image_public_id": "gnec/podcast/images/episode-12-cover"
  }
]
```

### `GET /wp-json/gnec/v1/podcast-episodes/{episode_number}`

Return one object in the same shape.

### `POST /wp-json/gnec/v1/podcast-episodes`

Protected multipart form-data fields:

- `episode_number`
- `title`
- `description`
- `features`
- `tags`
- `category`
- `audio_file`
- `image_file` optional

The WordPress handler should:

1. Verify the JWT-authenticated user can manage podcast content.
2. Upload the audio file to Cloudinary as `resource_type=video` because Cloudinary treats audio files like MP3 as video resources.
3. Upload the cover image to Cloudinary as `resource_type=image`.
4. Attach `tags` and `context` in Cloudinary so the asset carries the podcast details.
5. Return the normalized episode object shown above.

## GNEC Deployment Notes

- WordPress site URL: `https://gnec.ngo`
- React runtime: embedded into WordPress via ReactPress on the same domain
- JWT plugin: `JWT Authentication for WP REST API` by `tmeister`
- Podcast REST base path: `/wp-json/gnec/v1/podcast-episodes`
- Allowed WordPress roles: `Administrator` and `Editor`
- Cloudinary cloud name: `do4i1hv3r`
- Audio folder: `gnec/podcasts/audio`
- Cover folder: `gnec/podcasts/covers`
- Store episode details in Cloudinary `context` only

## WordPress Setup for `gnec.ngo`

1. Install and activate `JWT Authentication for WP REST API` by `tmeister`.
2. Add a strong JWT secret in `wp-config.php`:

```php
define('JWT_AUTH_SECRET_KEY', 'replace-this-with-a-long-random-secret');
```

3. Make sure the web server forwards the `Authorization` header to WordPress/PHP.

Apache `.htaccess` rule:

```apache
RewriteEngine on
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
```

WPEngine variant:

```apache
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
```

4. Because the React app is embedded on the same domain through ReactPress, keep the JWT endpoint on the same origin:

- Login: `https://gnec.ngo/wp-json/jwt-auth/v1/token`
- Validate token: `https://gnec.ngo/wp-json/jwt-auth/v1/token/validate`
- Current user: `https://gnec.ngo/wp-json/wp/v2/users/me?context=edit`

5. Create a small custom plugin for the podcast API. Register routes on `rest_api_init` using `register_rest_route`.
6. Make the public `GET` list and single-item routes readable by everyone with `permission_callback => '__return_true'`.
7. Make the `POST /wp-json/gnec/v1/podcast-episodes` route protected. In the permission callback, allow only users with Administrator or Editor permissions. A practical check is:

```php
current_user_can('administrator') || current_user_can('editor') || current_user_can('edit_others_posts')
```

8. In the create handler, use `$request->get_file_params()` for `audio_file` and `image_file`, and sanitize all scalar fields from `$request->get_params()`.
9. Return the normalized JSON object expected by the frontend, not raw Cloudinary responses.

## Cloudinary Setup for `do4i1hv3r`

1. In the Cloudinary Console, confirm the product environment cloud name is `do4i1hv3r`.
2. Copy the API key and API secret from Cloudinary Console Settings. These must live only on the WordPress server side.
3. Create these asset folders:

- `gnec/podcasts/audio`
- `gnec/podcasts/covers`

5. When uploading audio in WordPress, send it to Cloudinary with `resource_type=video` and a public ID such as `gnec/podcasts/audio/episode-12`.
6. When uploading cover images in WordPress, send them with `resource_type=image` and a public ID such as `gnec/podcasts/covers/episode-12-cover`.
7. On each upload, set:

- `tags`: `gnec`, `podcast`, `episode-12`, plus the normalized category slug
- `context`: `episode_number`, `title`, `description`, `features`, `category`, `tags_csv`, `published_at`

8. For episode listing in WordPress, query Cloudinary server-side using the Admin API or Search API for resources under the `gnec/podcasts/audio` prefix, and map the matching cover by episode number or stored image public ID.
9. If you want Cloudinary to be the only record store, keep the episode number unique and derive list responses from Cloudinary results. If you later need stronger editorial workflows, drafts, or revisions, move the episode record into a WordPress custom post type and keep Cloudinary as the media layer.

## Recommended WordPress Implementation

Use a small custom plugin instead of putting this logic in the theme. The plugin should:

1. Register the REST routes under `gnec/v1`.
2. Enforce capabilities such as `edit_posts` or a stricter custom capability for the create endpoint.
3. Read Cloudinary credentials from constants or environment-backed settings on the server side.
4. Use the Cloudinary PHP SDK or signed Upload/Admin API calls from WordPress.
5. Query Cloudinary Admin/Search APIs server-side to build the episode list without exposing the Cloudinary API secret to the browser.

## Recommended Cloudinary Asset Strategy

Use folders and stable public IDs, for example:

- Audio: `gnec/podcasts/audio/episode-12`
- Images: `gnec/podcasts/covers/episode-12-cover`

Recommended tags:

- `gnec`
- `podcast`
- `episode-12`
- category tag such as `health`

Recommended context keys:

- `episode_number`
- `title`
- `description`
- `features`
- `category`
- `tags_csv`

## Security Notes

- Do not put the Cloudinary API secret in Vite env vars. Vite exposes `VITE_*` values to the browser.
- Do not use WordPress application passwords directly from the frontend SPA. They are better suited to server-to-server use.
- If your React app and WordPress live on different origins, configure CORS on WordPress for the REST endpoints you expose.
- Because your React app is embedded on the same domain via ReactPress, CORS is not the main issue. The critical server check is making sure Apache or Nginx forwards the `Authorization` header so the JWT plugin can read it.
- If you use a JWT plugin, confirm the production server forwards the `Authorization` header to PHP.

## Data You Need Before Go-Live

- WordPress site base URL
- JWT login endpoint path
- Current-user endpoint path if different from core
- Final custom podcast endpoint path
- The WordPress role or capability allowed to create podcast episodes
- Cloudinary cloud name
- Cloudinary API key
- Cloudinary API secret
- Cloudinary folder naming convention
- The exact Cloudinary context keys you want to use for episodes
