import { useState } from "react";
import {
  User,
  Building2,
  Palette,
  Link2,
  Bell,
  Shield,
  ChevronRight,
} from "lucide-react";

import ProfileModal from "./ProfileModal";
import CompanyModal from "./CompanyModal";
import ThemeModal from "./ThemeModal";

const settings = [
  {
    title: "Perfil",
    description: "Altere seus dados pessoais.",
    icon: User,
  },
  {
    title: "Empresa",
    description: "Configure as informações da empresa.",
    icon: Building2,
  },
  {
    title: "Tema",
    description: "Escolha entre tema claro ou escuro.",
    icon: Palette,
  },
  {
    title: "Integrações",
    description: "Instagram, Facebook, LinkedIn e TikTok.",
    icon: Link2,
  },
  {
    title: "Notificações",
    description: "Configure avisos e lembretes.",
    icon: Bell,
  },
  {
    title: "Segurança",
    description: "Senha e autenticação.",
    icon: Shield,
  },
];

export default function SettingsPanel() {
  const [showProfile, setShowProfile] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showTheme, setShowTheme] = useState(false);

  function handleOpen(title: string) {
    switch (title) {
      case "Perfil":
        setShowProfile(true);
        break;

      case "Empresa":
        setShowCompany(true);
        break;

      case "Tema":
        setShowTheme(true);
        break;

      case "Integrações":
        // Implementaremos depois
        break;

      case "Notificações":
        // Implementaremos depois
        break;

      case "Segurança":
        // Implementaremos depois
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {settings.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                group
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/60
                hover:shadow-xl
                hover:shadow-blue-500/10
              "
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div
                    className="
                      rounded-xl
                      bg-blue-600/10
                      p-3
                      text-blue-400
                    "
                  >
                    <Icon size={24} />
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                <ChevronRight
                  size={20}
                  className="
                    text-slate-500
                    transition
                    group-hover:translate-x-1
                    group-hover:text-blue-400
                  "
                />
              </div>

              <button
                onClick={() => handleOpen(item.title)}
                className="
                  mt-6
                  w-full
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-800
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:border-blue-500
                  hover:bg-blue-600
                "
              >
                Abrir configuração
              </button>
            </div>
          );
        })}
      </div>

      {showProfile && (
        <ProfileModal
          onClose={() => setShowProfile(false)}
        />
      )}

      {showCompany && (
        <CompanyModal
          onClose={() => setShowCompany(false)}
        />
      )}

      {showTheme && (
        <ThemeModal
          onClose={() => setShowTheme(false)}
        />
      )}
    </>
  );
}