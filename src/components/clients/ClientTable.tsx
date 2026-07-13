export default function ClientTable() {
  const clients = [
    {
      id: 1,
      name: "Astrox",
      company: "SocialFlow",
      plan: "Premium",
      status: "Ativo",
    },
    {
      id: 2,
      name: "Maria",
      company: "Clínica Vida",
      plan: "Pro",
      status: "Pendente",
    },
    {
      id: 3,
      name: "João",
      company: "Loja Tech",
      plan: "Básico",
      status: "Ativo",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <table className="w-full">
        <thead className="border-b border-slate-800 text-left">
          <tr>
            <th className="p-4">Nome</th>
            <th>Empresa</th>
            <th>Plano</th>
            <th>Status</th>
            <th className="text-right">Ações</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((client) => (
            <tr
              key={client.id}
              className="border-b border-slate-800 hover:bg-slate-800/40 transition"
            >
              <td className="p-4 font-medium">{client.name}</td>

              <td>{client.company}</td>

              <td>{client.plan}</td>

              <td>
                <span className="rounded-full bg-green-500/15 px-3 py-1 text-sm text-green-400">
                  {client.status}
                </span>
              </td>

              <td className="text-right pr-4">
                <button className="mr-3 text-blue-400 hover:text-blue-300">
                  Editar
                </button>

                <button className="text-red-400 hover:text-red-300">
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}