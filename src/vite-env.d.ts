/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WORDPRESS_URL: string;
  readonly VITE_WORDPRESS_JWT_TOKEN_PATH?: string;
  readonly VITE_WORDPRESS_CURRENT_USER_PATH?: string;
  readonly VITE_WORDPRESS_PODCAST_ENDPOINT_PATH?: string;
  readonly VITE_WORDPRESS_NGO_REPORTER_ENDPOINT_PATH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
