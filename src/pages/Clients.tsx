import MainLayout from "../layouts/MainLayout";
import ClientTable from "../components/clients/ClientTable";

export default function Clients() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Clientes</h1>

            <p className="mt-2 text-slate-400">
              Gerencie seus clientes.
            </p>
          </div>

          <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700">
            + Novo Cliente
          </button>
        </div>

        <ClientTable />
      </div>
    </MainLayout>
  );
}