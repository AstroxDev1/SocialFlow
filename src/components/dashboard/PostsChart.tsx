import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  data: {
    month: string;
    posts: number;
  }[];
};

export default function PostsChart({ data }: Props) {
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
      <h2 className="text-lg font-semibold">
        Posts publicados
      </h2>

      <p className="mb-6 text-sm text-slate-500">
        Quantidade de posts por mês
      </p>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              tick={{ fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#121722",
                border: "1px solid #1e293b",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="posts"
              fill="#3b82f6"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}