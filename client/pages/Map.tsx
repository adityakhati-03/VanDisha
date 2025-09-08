import { useEffect } from "react";
import { useAtlasStore } from "@/store";
import Sidebar from "@/components/Sidebar";

export default function MapPage() {
  const { fetchClaims, fetchAssets } = useAtlasStore();

  useEffect(() => {
    fetchClaims();
    fetchAssets();
  }, [fetchClaims, fetchAssets]);

  return (
    <div className="flex h-[calc(100vh-64px)]">
      <Sidebar />
      <div className="relative flex-1 grid place-items-center">
        <div className="text-2xl font-semibold">Map loading…</div>
      </div>
    </div>
  );
}
