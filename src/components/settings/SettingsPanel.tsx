const settings = [
  {
    title: "Perfil",
    description: "Altere seus dados pessoais.",
  },
  {
    title: "Empresa",
    description: "Configure as informações da empresa.",
  },
  {
    title: "Tema",
    description: "Escolha entre tema claro ou escuro.",
  },
  {
    title: "Integrações",
    description: "Instagram, Facebook, LinkedIn e TikTok.",
  },
  {
    title: "Notificações",
    description: "Configure avisos e lembretes.",
  },
  {
    title: "Segurança",
    description: "Senha e autenticação.",
  },
];

export default function SettingsPanel() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {settings.map((item) => (
        <div
          key={item.title}
          className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
        >
          <h2 className="text-xl font-semibold">
            {item.title}
          </h2>

          <p className="text-slate-400 mt-2">
            {item.description}
          </p>

          <button className="mt-5 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
            Abrir
          </button>
        </div>
      ))}
    </div>
  );
}