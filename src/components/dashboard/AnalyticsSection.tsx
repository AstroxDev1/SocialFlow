import type { ReactNode } from "react";

type AnalyticsSectionProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AnalyticsSection({
  title,
  subtitle,
  children,
}: AnalyticsSectionProps) {
  return (
    <section
      className="
        rounded-2xl
        border
        border-slate-800
        bg-[#121722]
        p-6
        shadow-lg
      "
    >
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            {title}
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            {subtitle}
          </p>
        </div>

        <div
          className="
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            px-3
            py-1
            text-xs
            font-medium
            text-blue-400
          "
        >
          Últimos 30 dias
        </div>
      </div>

      {children}
    </section>
  );
}