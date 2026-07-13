import MainLayout from "../layouts/MainLayout";
import SettingsPanel from "../components/settings/SettingsPanel";

export default function Settings() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Configurações
          </h1>

          <p className="mt-2 text-slate-400">
            Personalize seu ambiente e suas integrações.
          </p>
        </div>

        <SettingsPanel />
      </div>
    </MainLayout>
  );
}