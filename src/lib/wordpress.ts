const AUTH_TOKEN_STORAGE_KEY = "gnec_wp_auth_token";
const env = import.meta.env as Record<string, string | undefined>;

export interface WordPressUser {
  id: number;
  email?: string;
  name: string;
  username: string;
}

interface LoginResponse {
  token: string;
  user_email?: string;
  user_display_name?: string;
  user_nicename?: string;
}

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const getBrowserOrigin = () =>
  typeof window !== "undefined" ? trimTrailingSlash(window.location.origin) : null;

export const getWordPressBaseUrl = () =>
  trimTrailingSlash(
    env.VITE_WORDPRESS_URL ||
      getBrowserOrigin() ||
      (() => {
        throw new Error("Missing WordPress base URL. Set VITE_WORDPRESS_URL.");
      })()
  );

const getWordPressJwtPath = () =>
  env.VITE_WORDPRESS_JWT_TOKEN_PATH || "/wp-json/jwt-auth/v1/token";

const getWordPressCurrentUserPath = () =>
  env.VITE_WORDPRESS_CURRENT_USER_PATH || "/wp-json/wp/v2/users/me?context=edit";

const buildUrl = (path: string) => `${getWordPressBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`;

export const getStoredAuthToken = () => localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);

export const storeAuthToken = (token: string) => {
  localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
};

export const clearStoredAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
};

const mapCurrentUser = (data: Record<string, unknown>): WordPressUser => ({
  id: Number(data.id),
  email: typeof data.email === "string" ? data.email : undefined,
  name:
    typeof data.name === "string"
      ? data.name
      : typeof data.username === "string"
        ? data.username
        : "WordPress User",
  username:
    typeof data.username === "string"
      ? data.username
      : typeof data.slug === "string"
        ? data.slug
        : "wordpress-user",
});

export async function loginWithWordPress(username: string, password: string) {
  const response = await fetch(buildUrl(getWordPressJwtPath()), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = (await response.json()) as LoginResponse & { message?: string };

  if (!response.ok || !data.token) {
    throw new Error(data.message || "WordPress login failed.");
  }

  storeAuthToken(data.token);

  return {
    token: data.token,
    user: {
      id: 0,
      email: data.user_email,
      name: data.user_display_name || data.user_nicename || username,
      username: data.user_nicename || username,
    } satisfies WordPressUser,
  };
}

export async function fetchCurrentWordPressUser(token: string) {
  const response = await fetch(buildUrl(getWordPressCurrentUserPath()), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Unable to fetch the authenticated WordPress user.");
  }

  const data = (await response.json()) as Record<string, unknown>;
  return mapCurrentUser(data);
}
