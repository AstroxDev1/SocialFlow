import MainLayout from "../layouts/MainLayout";
import PostTable from "../components/posts/PostTable";

export default function Posts() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">
              Posts
            </h1>

            <p className="mt-2 text-slate-400">
              Gerencie seus posts.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition">
            + Novo Post
          </button>
        </div>

        <input
          type="text"
          placeholder="Pesquisar post..."
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 outline-none"
        />

        <PostTable />
      </div>
    </MainLayout>
  );
}