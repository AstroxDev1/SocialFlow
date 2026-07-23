import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type GrowthChartProps = {
  data: {
    month: string;
    posts: number;
  }[];
};

export default function GrowthChart({
  data,
}: GrowthChartProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-[#121722]
        p-6
      "
    >
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Crescimento
        </h2>

        <p className="text-sm text-slate-500">
          Clientes cadastrados por mês
        </p>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis allowDecimals={false} />

            <Tooltip
              contentStyle={{
                background: "#121722",
                border: "1px solid #1e293b",
                borderRadius: "12px",
              }}
            />

            <Line
              type="monotone"
              dataKey="posts"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}