import { useState } from "react";
import { UploadCloud, FileImage } from "lucide-react";

type UploadModalProps = {
  onClose: () => void;
  onSave: (file: File) => void;
};

export default function UploadModal({
  onClose,
  onSave,
}: UploadModalProps) {
  const [file, setFile] = useState<File | null>(null);

  function handleSubmit() {
    if (!file) {
      alert("Selecione um arquivo.");
      return;
    }

    onSave(file);
    onClose();
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-sm
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-lg
          rounded-3xl
          border
          border-slate-700
          bg-slate-900
          p-6
          shadow-2xl
        "
      >
        <h2 className="text-2xl font-bold text-white">
          Upload de arquivo
        </h2>

        <p className="mt-2 text-slate-400">
          Escolha uma imagem ou vídeo para adicionar à biblioteca.
        </p>

        <label
          className="
            mt-8
            flex
            cursor-pointer
            flex-col
            items-center
            justify-center
            rounded-2xl
            border-2
            border-dashed
            border-slate-700
            bg-slate-800/50
            p-10
            transition
            hover:border-blue-500
            hover:bg-slate-800
          "
        >
          <UploadCloud
            size={48}
            className="text-blue-500"
          />

          <span className="mt-4 text-white font-medium">
            Clique para escolher um arquivo
          </span>

          <span className="mt-1 text-sm text-slate-400">
            PNG, JPG, WEBP, GIF, MP4...
          </span>

          <input
            type="file"
            accept="image/*,video/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.length) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </label>

        {file && (
          <div
            className="
              mt-6
              flex
              items-center
              gap-4
              rounded-xl
              bg-slate-800
              p-4
            "
          >
            <FileImage className="text-blue-500" />

            <div className="flex-1">
              <p className="truncate font-medium text-white">
                {file.name}
              </p>

              <p className="text-sm text-slate-400">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="
              rounded-xl
              bg-slate-800
              px-5
              py-3
              text-slate-300
              transition
              hover:bg-slate-700
            "
          >
            Cancelar
          </button>

          <button
            onClick={handleSubmit}
            className="
              rounded-xl
              bg-blue-600
              px-5
              py-3
              font-medium
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}