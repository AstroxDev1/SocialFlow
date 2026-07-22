import { Users } from "lucide-react";

export default function EmptyClients() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-slate-700
        bg-[#121722]
        py-20
        text-center
      "
    >
      <div className="rounded-full bg-slate-800 p-5">
        <Users size={34} className="text-slate-500" />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-white">
        Nenhum cliente encontrado
      </h3>

      <p className="mt-2 max-w-sm text-slate-400">
        Cadastre seu primeiro cliente para começar a gerenciar
        projetos, posts e agendamentos.
      </p>
    </div>
  );
}