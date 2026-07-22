import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import AnalyticsSection from "./AnalyticsSection";

type PlatformData = {
  name: string;
  value: number;
};

type PlatformChartProps = {
  data: PlatformData[];
};

const COLORS = [
  "#E1306C", // Instagram
  "#1877F2", // Facebook
  "#25F4EE", // TikTok
  "#F59E0B", // Outros
  "#8B5CF6",
  "#10B981",
];

export default function PlatformChart({
  data,
}: PlatformChartProps) {
  const total = data.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <AnalyticsSection
      title="🥧 Plataformas"
      subtitle="Distribuição dos conteúdos publicados"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="h-[280px] flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={4}
                animationDuration={900}
              >
                {data.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 space-y-4">
          {data.map((item, index) => {
            const percentage =
              total > 0
                ? Math.round((item.value / total) * 100)
                : 0;

            return (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor:
                        COLORS[index % COLORS.length],
                    }}
                  />

                  <span className="font-medium">
                    {item.name}
                  </span>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    {percentage}%
                  </p>

                  <p className="text-xs text-slate-500">
                    {item.value} posts
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnalyticsSection>
  );
}