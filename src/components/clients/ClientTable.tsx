import ClientRow from "./ClientRow";
import EmptyClients from "./EmptyClients";

import type { Client } from "./types";

type ClientTableProps = {
  clients: Client[];
  onEdit: (client: Client) => void;
  onDelete: (id: number) => void;
};

export default function ClientTable({
  clients,
  onEdit,
  onDelete,
}: ClientTableProps) {
  if (clients.length === 0) {
    return <EmptyClients />;
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-[#121722]
        shadow-lg
      "
    >
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="border-b border-slate-800 bg-slate-900/50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
                Empresa
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
                Instagram
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
                Nicho
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
                Status
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-400">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {clients.map((client) => (
              <ClientRow
                key={client.id}
                client={client}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}