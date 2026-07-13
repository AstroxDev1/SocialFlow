import MainLayout from "../layouts/MainLayout";
import MediaGrid from "../components/library/MediaGrid";

export default function Library() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">
              Biblioteca
            </h1>

            <p className="mt-2 text-slate-400">
              Gerencie suas imagens, vídeos e arquivos.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition">
            + Upload
          </button>
        </div>

        <input
          type="text"
          placeholder="Pesquisar mídia..."
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 outline-none"
        />

        <MediaGrid />
      </div>
    </MainLayout>
  );
}