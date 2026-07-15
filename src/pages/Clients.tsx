import { useEffect, useState } from "react";
import api from "../lib/api";
import ClientTable from "../components/clients/ClientTable";

type Client = {
  id: number;
  companyName: string;
  instagram: string;
  niche: string;
  phone?: string;
  notes?: string;
  status: string;
};

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);

  const [companyName, setCompanyName] = useState("");
  const [instagram, setInstagram] = useState("");
  const [niche, setNiche] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  async function loadClients() {
    try {
      const response = await api.get("/clients");
      setClients(response.data);
    } catch (error) {
      console.error("Erro ao carregar clientes:", error);
    }
  }

  async function createClient() {
    try {
      await api.post("/clients", {
        companyName,
        instagram,
        niche,
        phone,
        notes,
      });

      setCompanyName("");
      setInstagram("");
      setNiche("");
      setPhone("");
      setNotes("");

      await loadClients();

      setIsModalOpen(false);
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
    }
  }

  async function updateClient() {
  if (!editingClient) return;

  try {
    await api.put(`/clients/${editingClient.id}`, {
      companyName,
      instagram,
      niche,
      phone,
      notes,
      status: editingClient.status,
    });

    await loadClients();

    setIsModalOpen(false);
    setEditingClient(null);

    setCompanyName("");
    setInstagram("");
    setNiche("");
    setPhone("");
    setNotes("");

  } catch (error) {
    console.error("Erro ao atualizar cliente:", error);
  }
}

  async function deleteClient(id: number) {
  try {
    await api.delete(`/clients/${id}`);
    await loadClients();
  } catch (error) {
    console.error("Erro ao excluir cliente:", error);
  }
}

function openCreateModal() {
  setEditingClient(null);

  setCompanyName("");
  setInstagram("");
  setNiche("");
  setPhone("");
  setNotes("");

  setIsModalOpen(true);
}

function openEditModal(client: Client) {
  setEditingClient(client);

  setCompanyName(client.companyName);
  setInstagram(client.instagram);
  setNiche(client.niche);
  setPhone(client.phone || "");
  setNotes(client.notes || "");

  setIsModalOpen(true);
}

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Clientes
          </h1>

          <p className="mt-2 text-slate-400">
            Gerencie todos os seus clientes.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium hover:bg-blue-700 transition"
        >
          + Novo Cliente
        </button>

      </div>

      <ClientTable
        clients={clients}
        onEdit={openEditModal}
        onDelete={deleteClient}
      />

      {isModalOpen && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

          <div className="w-full max-w-xl rounded-2xl bg-slate-900 p-8 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold">
                {editingClient ? "Editar Cliente" : "Novo Cliente"}
              </h2>

              <button
                onClick={() => setIsModalOpen(false)}
                className="text-3xl text-slate-400 hover:text-white"
              >
                ×
              </button>

            </div>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Empresa"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full rounded-lg bg-slate-800 p-3 outline-none"
              />

              <input
                type="text"
                placeholder="@instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="w-full rounded-lg bg-slate-800 p-3 outline-none"
              />

              <input
                type="text"
                placeholder="Nicho"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full rounded-lg bg-slate-800 p-3 outline-none"
              />

              <input
                type="text"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg bg-slate-800 p-3 outline-none"
              />

              <textarea
                rows={4}
                placeholder="Observações"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full rounded-lg bg-slate-800 p-3 outline-none"
              />

            <div className="flex justify-end gap-3 pt-4">

              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setEditingClient(null);

                  setCompanyName("");
                  setInstagram("");
                  setNiche("");
                  setPhone("");
                  setNotes("");
                }}
                className="rounded-lg bg-slate-700 px-5 py-3 hover:bg-slate-600 transition"
              >
                Cancelar
              </button>

              <button
                onClick={editingClient ? updateClient : createClient}
                className="rounded-lg bg-blue-600 px-5 py-3 hover:bg-blue-700 transition"
              >
                {editingClient ? "Atualizar Cliente" : "Salvar Cliente"}
              </button>

            </div>  

            </div>

          </div>

        </div>

      )}

    </div>
  );
}