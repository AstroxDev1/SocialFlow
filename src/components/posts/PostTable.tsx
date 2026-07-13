import { Pencil, Trash2 } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Promoção de Julho",
    client: "Astrox",
    network: "Instagram",
    status: "Agendado",
    date: "20/07/2026",
  },
  {
    id: 2,
    title: "Reels Clínica",
    client: "Clínica Vida",
    network: "TikTok",
    status: "Rascunho",
    date: "--",
  },
  {
    id: 3,
    title: "Carrossel Tech",
    client: "Loja Tech",
    network: "LinkedIn",
    status: "Publicado",
    date: "18/07/2026",
  },
];

export default function PostTable() {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-800">
          <tr>
            <th className="text-left p-4">Título</th>
            <th className="text-left p-4">Cliente</th>
            <th className="text-left p-4">Rede</th>
            <th className="text-left p-4">Status</th>
            <th className="text-left p-4">Data</th>
            <th className="text-left p-4">Ações</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr
              key={post.id}
              className="border-t border-slate-800 hover:bg-slate-800/40"
            >
              <td className="p-4">{post.title}</td>
              <td className="p-4">{post.client}</td>
              <td className="p-4">{post.network}</td>
              <td className="p-4">{post.status}</td>
              <td className="p-4">{post.date}</td>
              <td className="p-4 flex gap-3">
                <button>
                  <Pencil size={18} />
                </button>

                <button>
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}