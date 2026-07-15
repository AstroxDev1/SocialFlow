import CalendarGrid from "../components/calendar/CalendarGrid";

export default function Calendar() {
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

        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition">
          + Novo Agendamento
        </button>
      </div>

      <CalendarGrid />
    </div>
  );
}