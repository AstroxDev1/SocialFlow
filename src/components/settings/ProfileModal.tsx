import { useState } from "react";
import { User, Mail, Save, X } from "lucide-react";

type ProfileModalProps = {
  onClose: () => void;
};

export default function ProfileModal({
  onClose,
}: ProfileModalProps) {
  const [name, setName] = useState("Astrox");
  const [email, setEmail] = useState("admin@socialflow.com");

  function handleSave() {
    // Depois vamos conectar ao backend
    alert("Perfil atualizado com sucesso!");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
            <User size={24} />
            Perfil
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg bg-slate-800 p-2 text-slate-300 transition hover:bg-slate-700 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-5">

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Nome
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              E-mail
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-11 pr-4 text-white outline-none transition focus:border-blue-500"
                placeholder="email@exemplo.com"
              />
            </div>
          </div>

        </div>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl bg-slate-700 px-5 py-2 text-white transition hover:bg-slate-600"
          >
            Cancelar
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            <Save size={18} />
            Salvar
          </button>

        </div>

      </div>
    </div>
  );
}