import { useEffect } from "react";
import { useAtlasStore } from "@/store";
import Sidebar from "@/components/Sidebar";
import RecommendationCard from "@/components/RecommendationCard";
import MapCanvas from "@/components/MapCanvas";

export default function MapPage() {
  const { fetchClaims, fetchAssets } = useAtlasStore();

  useEffect(() => {
    fetchClaims();
    fetchAssets();
  }, [fetchClaims, fetchAssets]);

  return (
    <div className="flex h-[calc(100vh-64px)]">
      <Sidebar />
      <div className="relative flex-1">
        <MapCanvas />
        <RecommendationCard />
      </div>
    </div>
  );
}
