import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Seg", alcance: 1200 },
  { name: "Ter", alcance: 1800 },
  { name: "Qua", alcance: 1400 },
  { name: "Qui", alcance: 2600 },
  { name: "Sex", alcance: 3100 },
  { name: "Sáb", alcance: 2800 },
  { name: "Dom", alcance: 3600 },
];

export default function PerformanceChart() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-[420px]">
      <h2 className="text-xl font-semibold mb-6">
        Desempenho da Semana
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" strokeDasharray="4 4" />

          <XAxis dataKey="name" stroke="#94a3b8" />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="alcance"
            stroke="#3b82f6"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}