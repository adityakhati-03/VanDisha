import { useCallback, useState } from "react";
import { useAtlasStore } from "@/store";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function UploadBox() {
  const { uploadFile, loading, error } = useAtlasStore();
  const [file, setFile] = useState<File | null>(null);
  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) setFile(f);
  }, []);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };
  const onUpload = async () => {
    if (!file) return;
    await uploadFile(file);
    setFile(null);
  };
  return (
    <div>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="border-2 border-dashed rounded-xl p-4 text-center bg-white"
      >
        <p className="text-sm text-muted-foreground">Drag & drop a claim PDF here, or select a file</p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <input id="file" type="file" accept="application/pdf" onChange={onChange} className="hidden" />
          <label htmlFor="file">
            <Button variant="outline">Choose File</Button>
          </label>
          <Button onClick={onUpload} disabled={!file || loading.ingest}>
            {loading.ingest ? (
              <>
                <LoadingSpinner /> Uploading
              </>
            ) : (
              "Upload"
            )}
          </Button>
        </div>
        {file && (
          <div className="mt-3 rounded-lg bg-muted p-3 text-left text-xs">
            <div className="font-medium">{file.name}</div>
            <div className="text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</div>
          </div>
        )}
        {error.ingest && <div className="mt-2 text-sm text-red-600">{error.ingest}</div>}
      </div>
    </div>
  );
}
