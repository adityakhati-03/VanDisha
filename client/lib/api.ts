export type GeoJSON = any;

export interface DSSRecommendation {
  scheme: string;
  reason: string;
  score: number;
}

export const api = {
  ingest: async (file: File) => {
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/ingest", {
      method: "POST",
      body: form,
    });
    if (!res.ok) throw new Error("Upload failed");
    return res.json();
  },
  getClaims: async (): Promise<GeoJSON> => {
    const res = await fetch("/api/claims");
    if (!res.ok) throw new Error("Failed to fetch claims");
    return res.json();
  },
  getAssets: async (): Promise<GeoJSON> => {
    const res = await fetch("/api/assets");
    if (!res.ok) throw new Error("Failed to fetch assets");
    return res.json();
  },
  getRecommendations: async (claimId: string): Promise<{claim_id: string; recommendations: DSSRecommendation[]}> => {
    const res = await fetch(`/api/dss/recommend/${encodeURIComponent(claimId)}`);
    if (!res.ok) throw new Error("Failed to fetch recommendations");
    return res.json();
  },
};
