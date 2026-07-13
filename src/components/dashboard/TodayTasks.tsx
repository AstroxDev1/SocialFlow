import { Clock } from "lucide-react";

const tasks = [
  {
    hour: "09:00",
    title: "Post Instagram - Loja Alpha",
  },
  {
    hour: "11:30",
    title: "Aprovar arte - Clínica Vida",
  },
  {
    hour: "14:00",
    title: "Agendar Reels",
  },
  {
    hour: "16:30",
    title: "Responder cliente",
  },
];

export default function TodayTasks() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h2 className="text-xl font-semibold mb-6">
        Agenda de Hoje
      </h2>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.hour}
            className="flex items-center gap-4 border-b border-slate-800 pb-4"
          >
            <div className="bg-blue-500 p-2 rounded-lg">
              <Clock size={18} />
            </div>

            <div>
              <p className="font-medium">
                {task.title}
              </p>

              <p className="text-sm text-slate-400">
                {task.hour}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}