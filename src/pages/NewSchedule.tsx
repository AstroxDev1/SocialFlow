import { useEffect, useState } from "react";
import api from "../services/api";

type Client = {
  id: number;
  companyName: string;
};

export default function NewSchedule() {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const [clients, setClients] = useState<Client[]>([]);
  const [clientId, setClientId] = useState("");

  useEffect(() => {
    async function loadClients() {
      try {
        const response = await api.get("/clients");
        setClients(response.data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    }

    loadClients();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  try {
    await api.post("/schedules", {
      title,
      description,
      platform,
      clientId: Number(clientId),
      date: `${date}T${time}:00`,
    });

    alert("Agendamento criado com sucesso!");

    window.location.href = "/agendamentos";
  } catch (error) {
    console.error(error);
    alert("Erro ao criar agendamento");
  }
}

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Novo Agendamento
        </h1>

        <p className="text-slate-400">
          Agende uma nova publicação.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900 p-8"
      >
        <div>
          <label className="mb-2 block font-medium">
            Título
          </label>

          <input
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Cliente
          </label>

          <select
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
          >
            <option value="">Selecione um cliente</option>

            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.companyName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Plataforma
          </label>

          <select
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option>Instagram</option>
            <option>Facebook</option>
            <option>LinkedIn</option>
            <option>TikTok</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="mb-2 block font-medium">
              Data
            </label>

            <input
              type="date"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Hora
            </label>

            <input
              type="time"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Descrição
          </label>

          <textarea
            rows={4}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Salvar Agendamento
        </button>
      </form>
    </div>
  );
}