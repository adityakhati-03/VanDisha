import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useAtlasStore } from "@/store";
import FRAClaimLayer from "@/components/FRAClaimLayer";
import AssetLayer from "@/components/AssetLayer";
import Sidebar from "@/components/Sidebar";
import RecommendationCard from "@/components/RecommendationCard";
import UploadBox from "@/components/UploadBox";

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
        <MapContainer center={[28.624, 77.203]} zoom={14} className="h-full w-full">
          <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <FRAClaimLayer />
          <AssetLayer />
        </MapContainer>
        <div className="absolute right-4 top-4 z-[500] w-80">
          <UploadBox />
        </div>
        <RecommendationCard />
      </div>
    </div>
  );
}
