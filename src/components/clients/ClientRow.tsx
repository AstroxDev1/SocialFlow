import ClientStatus from "./ClientStatus";
import ClientActions from "./ClientActions";

import type { Client } from "./types";



interface Props {
  client: Client;
  onEdit: (client: Client) => void;
  onDelete: (id: number) => void;
}

export default function ClientRow({
  client,
  onEdit,
  onDelete,
}: Props) {
  return (
    <tr className="border-b border-slate-800 transition hover:bg-slate-800/40">
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-blue-500/15
              text-lg
              font-bold
              text-blue-400
            "
          >
            {client.companyName.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="font-semibold text-white">
              {client.companyName}
            </p>

            <p className="text-sm text-slate-500">
              ID #{client.id}
            </p>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 text-slate-300">
        {client.instagram}
      </td>

      <td className="px-6 py-4 text-slate-300">
        {client.niche}
      </td>

      <td className="px-6 py-4">
        <ClientStatus status={client.status} />
      </td>

      <td className="px-6 py-4 text-right">
        <ClientActions
          onEdit={() => onEdit(client)}
          onDelete={() => onDelete(client.id)}
        />
      </td>
    </tr>
  );
}