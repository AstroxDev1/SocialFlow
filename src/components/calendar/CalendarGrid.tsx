const days = [
  "", "", "1", "2", "3", "4", "5",
  "6", "7", "8", "9", "10", "11", "12",
  "13", "14", "15", "16", "17", "18", "19",
  "20", "21", "22", "23", "24", "25", "26",
  "27", "28", "29", "30", "31"
];

const events: Record<string, string> = {
  "2": "📸 Promoção",
  "10": "🎥 Reels",
  "20": "📷 Carrossel",
  "28": "🎯 Campanha",
};

export default function CalendarGrid() {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">

      <div className="grid grid-cols-7 bg-slate-800 text-center font-semibold">
        {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day) => (
          <div key={day} className="p-4 border-r border-slate-700 last:border-r-0">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {days.map((day, index) => (
          <div
            key={index}
            className="h-28 border border-slate-800 p-2 hover:bg-slate-800 transition"
          >
            <div className="font-semibold">{day}</div>

            {events[day] && (
              <div className="mt-2 text-xs bg-blue-600 rounded p-1">
                {events[day]}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}