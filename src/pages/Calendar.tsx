import { useState } from "react";
import CalendarGrid from "../components/calendar/CalendarGrid";
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

export default function Calendar() {
  const [showForm, setShowForm] = useState(false);

  const [newSchedule, setNewSchedule] = useState<Schedule>({
    id: 0,
    title: "",
    description: "",
    date: "",
    platform: "",
    status: "PENDENTE",
    client: null,
  });

  function handleSave() {
    console.log("Salvar novo agendamento:", newSchedule);

    // Depois vamos trocar isso pelo POST para a API
    setShowForm(false);
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">
            Calendário
          </h1>

          <p className="mt-2 text-slate-400">
            Visualize seus posts agendados.
          </p>
        </div>

       
      </div>

      <CalendarGrid />

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <ScheduleForm
              schedule={newSchedule}
              onChange={setNewSchedule}
              onSave={handleSave}
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}