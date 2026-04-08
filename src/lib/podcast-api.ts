import { getStoredAuthToken, getWordPressBaseUrl } from "@/lib/wordpress";

export interface PodcastEpisode {
  id: string;
  episode_number: number;
  title: string;
  description: string;
  features: string | null;
  tags: string[];
  audio_file_url: string | null;
  category: string | null;
  created_at: string;
  image_file_url: string | null;
  cloudinary_public_id?: string | null;
  image_public_id?: string | null;
}

interface CreatePodcastEpisodePayload {
  episodeNumber: string;
  title: string;
  description: string;
  features: string;
  tags: string;
  category: string;
  audioFile: File;
  imageFile?: File | null;
}

const getPodcastEndpointPath = () =>
  import.meta.env.VITE_WORDPRESS_PODCAST_ENDPOINT_PATH || "/wp-json/gnec/v1/podcast-episodes";

const buildPodcastEndpoint = (suffix = "") => {
  const base = `${getWordPressBaseUrl()}${getPodcastEndpointPath()}`;
  return suffix ? `${base}/${suffix}` : base;
};

const withAuthHeaders = (headers: HeadersInit = {}) => {
  const token = getStoredAuthToken();

  if (!token) {
    throw new Error("You must be logged in through WordPress to manage podcast episodes.");
  }

  return {
    ...headers,
    Authorization: `Bearer ${token}`,
  };
};

export async function fetchPodcastEpisodes() {
  const response = await fetch(buildPodcastEndpoint());

  if (!response.ok) {
    throw new Error("Unable to load podcast episodes from WordPress.");
  }

  return (await response.json()) as PodcastEpisode[];
}

export async function fetchPodcastEpisodeByNumber(episodeNumber: number) {
  const response = await fetch(buildPodcastEndpoint(String(episodeNumber)));

  if (!response.ok) {
    throw new Error("Unable to load this podcast episode from WordPress.");
  }

  return (await response.json()) as PodcastEpisode;
}

export async function createPodcastEpisode(payload: CreatePodcastEpisodePayload) {
  const formData = new FormData();
  formData.append("episode_number", payload.episodeNumber);
  formData.append("title", payload.title);
  formData.append("description", payload.description);
  formData.append("features", payload.features);
  formData.append("tags", payload.tags);
  formData.append("category", payload.category);
  formData.append("audio_file", payload.audioFile);

  if (payload.imageFile) {
    formData.append("image_file", payload.imageFile);
  }

  const response = await fetch(buildPodcastEndpoint(), {
    method: "POST",
    headers: withAuthHeaders(),
    body: formData,
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMessage =
      data && typeof data.message === "string"
        ? data.message
        : "Unable to create the podcast episode in WordPress.";
    throw new Error(errorMessage);
  }

  return data as PodcastEpisode;
}
