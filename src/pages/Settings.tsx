import SettingsPanel from "../components/settings/SettingsPanel";

export default function Settings() {
  return (
    <div className="space-y-8 pt-6">

      <div className="mb-2">
        <h1 className="text-3xl font-bold text-white">
          Configurações
        </h1>

        <p className="mt-2 text-slate-400">
          Personalize seu ambiente e suas integrações.
        </p>
      </div>

      <SettingsPanel />

    </div>
  );
}