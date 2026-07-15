import { Pencil, Trash2 } from "lucide-react";

type Client = {
  id: number;
  companyName: string;
  instagram: string;
  niche: string;
  phone?: string;
  notes?: string;
  status: string;
};

type ClientTableProps = {
  clients: Client[];
  onEdit?: (client: Client) => void;
  onDelete?: (id: number) => void;
};

export default function ClientTable({
  clients,
  onEdit,
  onDelete,
}: ClientTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">

      <table className="w-full">

        <thead className="bg-slate-800 text-left">
          <tr>
            <th className="p-4">Empresa</th>
            <th>Instagram</th>
            <th>Nicho</th>
            <th>Status</th>
            <th className="text-right pr-6">Ações</th>
          </tr>
        </thead>

        <tbody>

          {clients.length === 0 ? (

            <tr>
              <td
                colSpan={5}
                className="py-10 text-center text-slate-400"
              >
                Nenhum cliente cadastrado.
              </td>
            </tr>

          ) : (

            clients.map((client) => (

              <tr
                key={client.id}
                className="border-t border-slate-800 transition hover:bg-slate-800/40"
              >

                <td className="p-4 font-semibold">
                  {client.companyName}
                </td>

                <td>{client.instagram}</td>

                <td>{client.niche}</td>

                <td>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      client.status === "active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {client.status === "active"
                      ? "Ativo"
                      : "Inativo"}
                  </span>

                </td>

                <td className="pr-6">

                  <div className="flex justify-end gap-3">

                    <button
                      onClick={() => onEdit?.(client)}
                      className="rounded-lg p-2 text-blue-400 transition hover:bg-blue-500/10 hover:text-blue-300"
                      title="Editar"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            `Deseja realmente excluir "${client.companyName}"?`
                          )
                        ) {
                          onDelete?.(client.id);
                        }
                      }}
                      className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
                      title="Excluir"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}