import { getStoredAuthToken, getWordPressBaseUrl } from "@/lib/wordpress";

export interface NgoReporterIssue {
  id: string;
  volume_number: number;
  date: string;
  description: string;
  tags: string[];
  link: string;
  created_at: string;
  cloudinary_public_id?: string | null;
}

interface CreateNgoReporterIssuePayload {
  volumeNumber: string;
  date: string;
  description: string;
  tags: string;
  link: string;
}

const getNgoReporterEndpointPath = () =>
  import.meta.env.VITE_WORDPRESS_NGO_REPORTER_ENDPOINT_PATH || "/wp-json/gnec/v1/ngo-reporter-issues";

const buildNgoReporterEndpoint = (suffix = "") => {
  const base = `${getWordPressBaseUrl()}${getNgoReporterEndpointPath()}`;
  return suffix ? `${base}/${suffix}` : base;
};

const withAuthHeaders = (headers: HeadersInit = {}) => {
  const token = getStoredAuthToken();

  if (!token) {
    throw new Error("You must be logged in through WordPress to manage NGO Reporter issues.");
  }

  return {
    ...headers,
    Authorization: `Bearer ${token}`,
  };
};

export async function fetchNgoReporterIssues() {
  const response = await fetch(buildNgoReporterEndpoint());

  if (!response.ok) {
    throw new Error("Unable to load NGO Reporter issues from WordPress.");
  }

  return (await response.json()) as NgoReporterIssue[];
}

export async function createNgoReporterIssue(payload: CreateNgoReporterIssuePayload) {
  const response = await fetch(buildNgoReporterEndpoint(), {
    method: "POST",
    headers: withAuthHeaders({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      volume_number: payload.volumeNumber,
      date: payload.date,
      description: payload.description,
      tags: payload.tags,
      link: payload.link,
    }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMessage =
      data && typeof data.message === "string"
        ? data.message
        : "Unable to create the NGO Reporter issue in WordPress.";
    throw new Error(errorMessage);
  }

  return data as NgoReporterIssue;
}
