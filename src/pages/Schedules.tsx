import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import ScheduleForm from "../components/schedules/ScheduleForm";

type Schedule = {
  id: number;
  title: string;
  description: string;
  date: string;
  platform: string;
  status: string;
  client: {
    companyName: string;
  } | null;
};

export default function Schedules() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [editingSchedule, setEditingSchedule] = useState<Schedule | null>(null);

  useEffect(() => {
    async function loadSchedules() {
      try {
        const response = await api.get("/schedules");
        setSchedules(response.data);
      } catch (error) {
        console.error("Erro ao carregar agendamentos:", error);
      }
    }

    loadSchedules();
  }, []);


  async function handleDelete(id: number) {
    const confirmDelete = window.confirm(
      "Deseja realmente excluir este agendamento?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/schedules/${id}`);

      setSchedules((old) =>
        old.filter((schedule) => schedule.id !== id)
      );

      alert("Agendamento excluído!");

    } catch (error) {
      console.error(error);
      alert("Erro ao excluir.");
    }
  }


  function handleEdit(schedule: Schedule) {
    setEditingSchedule(schedule);
  }


  async function handleUpdate() {
    if (!editingSchedule) return;

    try {
      const response = await api.put(
        `/schedules/${editingSchedule.id}`,
        {
          title: editingSchedule.title,
          description: editingSchedule.description,
          date: editingSchedule.date,
          platform: editingSchedule.platform,
        }
      );


      setSchedules((old) =>
        old.map((schedule) =>
          schedule.id === editingSchedule.id
            ? response.data
            : schedule
        )
      );


      setEditingSchedule(null);

      alert("Agendamento atualizado!");

    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar agendamento.");
    }
  }


  return (
    <div className="space-y-6">


      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Agendamentos
          </h1>

          <p className="text-slate-400">
            Gerencie todas as publicações.
          </p>
        </div>


        <Link
          to="/agendamentos/novo"
          className="rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
        >
          Novo Agendamento
        </Link>
      </div>



      {editingSchedule && (
  <ScheduleForm
    schedule={editingSchedule}
    onChange={setEditingSchedule}
    onSave={handleUpdate}
    onCancel={() => setEditingSchedule(null)}
  />
)}



      <div className="space-y-4">

        {schedules.length === 0 ? (

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center text-slate-400">
            Nenhum agendamento encontrado.
          </div>

        ) : (

          schedules.map((schedule) => (

            <div
              key={schedule.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-indigo-500"
            >


              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-xl font-semibold text-white">
                    {schedule.title}
                  </h2>

                  <p className="mt-1 text-slate-400">
                    {schedule.client?.companyName ?? "Sem cliente"}
                  </p>

                </div>


                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
                  {schedule.status}
                </span>

              </div>



              <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-400">

                <span>
                  📱 {schedule.platform}
                </span>

                <span>
                  📅 {new Date(schedule.date).toLocaleDateString("pt-BR")}
                </span>

                <span>
                  🕒 {new Date(schedule.date).toLocaleTimeString("pt-BR")}
                </span>

              </div>



              {schedule.description && (
                <p className="mt-5 border-t border-slate-800 pt-4 text-slate-300">
                  {schedule.description}
                </p>
              )}



              <div className="mt-5 flex gap-3">

                <button
                  onClick={() => handleEdit(schedule)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  ✏️ Editar
                </button>


                <button
                  onClick={() => handleDelete(schedule.id)}
                  className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                >
                  🗑️ Excluir
                </button>

              </div>


            </div>

          ))

        )}

      </div>

    </div>
  );
}