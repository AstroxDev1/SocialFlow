import {
  Bell,
  Search,
  UserCircle2,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <Search size={18} className="text-slate-400" />

        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-80 rounded-lg bg-slate-800 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell
          size={20}
          className="cursor-pointer text-slate-300 hover:text-white"
        />

        <div className="flex items-center gap-2">
          <UserCircle2 size={34} />

          <div>
            <p className="font-semibold">Astrox</p>

            <span className="text-xs text-slate-400">
              Administrador
            </span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
        >
          <LogOut size={18} />
          Sair
        </button>
      </div>
    </header>
  );
}