import { useState } from "react";
import ScheduleForm from "../schedules/ScheduleForm";

console.log("NOVO EVENT MODAL CARREGADO");

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

type EventModalProps = {
  schedule: Schedule | null;
  onClose: () => void;
  onDelete: (id: number) => void;
  onUpdate: (schedule: Schedule) => void;
};

export default function EventModal({
  schedule,
  onClose,
  onDelete,
  onUpdate,
}: EventModalProps) {
  const [editing, setEditing] = useState(false);

  const [editedSchedule, setEditedSchedule] =
    useState<Schedule | null>(null);


  if (!schedule) return null;


  function handleEdit() {
    setEditedSchedule(schedule);
    setEditing(true);
  }


  function handleSave() {
    if (!editedSchedule) return;

    onUpdate(editedSchedule);
    setEditing(false);
  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

      <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">

        {!editing ? (
          <>

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-bold text-white">
                📅 Agendamento
              </h2>

              <button
                onClick={onClose}
                className="rounded-lg bg-slate-700 px-3 py-2 text-white hover:bg-slate-600"
              >
                ✕
              </button>

            </div>


            <div className="mt-6 space-y-4">

              <div>
                <p className="text-slate-400">
                  Título
                </p>

                <h3 className="text-xl font-semibold text-white">
                  {schedule.title}
                </h3>
              </div>


              <div>
                <p className="text-slate-400">
                  Cliente
                </p>

                <p className="text-white">
                  {schedule.client?.companyName ?? "Sem cliente"}
                </p>
              </div>


              <div>
                <p className="text-slate-400">
                  Plataforma
                </p>

                <p className="text-white">
                  {schedule.platform}
                </p>
              </div>


              <div>
                <p className="text-slate-400">
                  Status
                </p>

                <p className="text-white">
                  {schedule.status}
                </p>
              </div>

            </div>


            <div className="mt-8 flex justify-end gap-3">

              <button
                onClick={handleEdit}
                className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
              >
                ✏️ Editar
              </button>


              <button
                onClick={() => onDelete(schedule.id)}
                className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
              >
                🗑️ Excluir
              </button>

            </div>

          </>
        ) : (
          editedSchedule && (
            <ScheduleForm
              schedule={editedSchedule}
              onChange={setEditedSchedule}
              onSave={handleSave}
              onCancel={() => setEditing(false)}
            />
          )
        )}

      </div>

    </div>
  );
}