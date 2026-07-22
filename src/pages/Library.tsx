import { useEffect, useState } from "react";

import MediaGrid from "../components/library/MediaGrid";
import UploadModal from "../components/library/UploadModal";

import api from "../services/api";

type Media = {
  id: number;
  name: string;
  filename: string;
  type: string;
  mimeType: string;
  size: number;
  url: string;
};

export default function Library() {
  const [showUpload, setShowUpload] = useState(false);
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMedia() {
      try {
        const response = await api.get<Media[]>("/media");

        setMedia(response.data);

      } catch (error) {
        console.error("Erro ao carregar mídias:", error);

      } finally {
        setLoading(false);
      }
    }

    loadMedia();
  }, []);


  async function handleUpload(file: File) {
    try {
      const formData = new FormData();

      formData.append("file", file);

      const response = await api.post("/media", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMedia((old) => [
        response.data,
        ...old,
      ]);

      setShowUpload(false);

    } catch (error) {
      console.error("Erro no upload:", error);

      alert("Erro ao enviar arquivo.");
    }
  }



  async function handleDelete(id: number) {
    try {

      await api.delete(`/media/${id}`);


      setMedia((old) =>
        old.filter((item) => item.id !== id)
      );


    } catch (error) {

      console.error(
        "Erro ao excluir mídia:",
        error
      );

      alert("Erro ao excluir mídia.");
    }
  }



  return (
    <div className="pt-6 space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold tracking-tight text-white">
            Biblioteca
          </h1>

          <p className="mt-2 text-slate-400">
            Gerencie suas imagens, vídeos e arquivos.
          </p>

        </div>


        <button
          onClick={() => setShowUpload(true)}
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
          + Upload
        </button>

      </div>



      <div
        className="
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          p-4
        "
      >

        <input
          placeholder="Pesquisar mídia..."
          className="
            w-full
            bg-transparent
            text-white
            placeholder:text-slate-500
            outline-none
          "
        />

      </div>



      {loading ? (

        <div className="py-20 text-center text-slate-400">
          Carregando biblioteca...
        </div>

      ) : (

        <MediaGrid
          media={media}
          onDelete={handleDelete}
        />

      )}



      {showUpload && (

        <UploadModal
          onClose={() => setShowUpload(false)}
          onSave={handleUpload}
        />

      )}

    </div>
  );
}