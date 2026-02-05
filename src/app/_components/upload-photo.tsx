"use client";

import { Upload, X } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent, type DragEvent } from "react";

const ACCEPTED_TYPES = "image/png,image/jpeg,image/webp";

export function UploadPhoto() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [hasDrag, setHasDrag] = useState(false);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleSelectFile = (file: File | null) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) return;

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setFileName(file.name);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    handleSelectFile(file);
  };

  const handleRemove = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setFileName(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setHasDrag(false);
    const file = event.dataTransfer.files?.[0] ?? null;
    handleSelectFile(file);
  };

  return (
    <section className="w-full max-w-md space-y-6" id="como-funciona">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-slate-900">Envie sua foto</h2>
        <p className="text-sm text-slate-500">
          Escolha uma foto sua para transformar em um retrato profissional. Funciona melhor
          com fotos onde seu rosto esta bem visivel.
        </p>
      </div>

      <div
        className={[
          "relative flex min-h-45 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-8 text-center transition-colors",
          hasDrag ? "border-slate-900 bg-slate-50" : "border-slate-300 bg-white",
        ].join(" ")}
        onDragEnter={() => setHasDrag(true)}
        onDragLeave={() => setHasDrag(false)}
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        {previewUrl ? (
          <div className="relative w-full">
            <button
              className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:text-slate-900"
              onClick={handleRemove}
              type="button"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            <img
              className="mx-auto h-44 w-44 rounded-2xl object-cover"
              src={previewUrl}
              alt={fileName ?? "Preview da foto selecionada"}
            />
            {fileName && (
              <p className="mt-3 text-xs text-slate-500">{fileName}</p>
            )}
          </div>
        ) : (
          <>
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-700">
              <Upload className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-medium text-slate-700">
              Arraste sua foto aqui ou clique para selecionar
            </p>
            <p className="mt-1 text-xs text-slate-400">PNG, JPG ou WEBP</p>
          </>
        )}

        <input
          ref={inputRef}
          className={[
            "absolute inset-0 cursor-pointer opacity-0",
            previewUrl ? "pointer-events-none" : "",
          ].join(" ")}
          type="file"
          accept={ACCEPTED_TYPES}
          onChange={handleInputChange}
          aria-label="Selecione sua foto"
        />
      </div>

      {previewUrl && (
        <button
          className="w-full rounded-full bg-slate-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          type="button"
        >
          Gerar foto profissional
        </button>
      )}
    </section>
  );
}
