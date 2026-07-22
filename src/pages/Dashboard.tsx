import MainLayout from "../layouts/MainLayout";

import StatCard from "../components/dashboard/StatCard";
import GrowthChart from "../components/dashboard/GrowthChart";
import UpcomingSchedules from "../components/dashboard/UpcomingSchedules";
import RecentClients from "../components/dashboard/RecentClients";
import PeriodFilter from "../components/dashboard/PeriodFilter";
import PostsChart from "../components/dashboard/PostsChart";
import PlatformChart from "../components/dashboard/PlatformChart";

import { getDashboardStats } from "../components/dashboard/dashboardStats";

import { useDashboardStats } from "../hooks/useDashboardStats";
import { useDashboardCharts } from "../hooks/useDashboardCharts";

export default function Dashboard() {
  const { stats } = useDashboardStats();

  const {
    monthlyPosts,
    platforms,
  } = useDashboardCharts();

  const dashboardStats = getDashboardStats(stats);

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Cabeçalho */}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>

            <h1 className="text-4xl font-bold tracking-tight">
              Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              Visão geral do seu SocialFlow
            </p>

          </div>

          <PeriodFilter />

        </div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {dashboardStats.map((stat) => (

            <StatCard
              key={stat.title}
              {...stat}
            />

          ))}

        </div>

        {/* Crescimento */}

        <GrowthChart />

        {/* Analytics */}

        <section>

          <div className="mb-6">

            <h2 className="text-2xl font-bold">
              Analytics
            </h2>

            <p className="text-slate-400">
              Desempenho dos conteúdos publicados
            </p>

          </div>

          <div className="grid gap-6 xl:grid-cols-2">

            <PostsChart
              data={monthlyPosts}
            />

            <PlatformChart
              data={platforms}
            />

          </div>

        </section>

        {/* Área inferior */}

        <div className="grid gap-6 xl:grid-cols-2">

          <UpcomingSchedules />

          <RecentClients />

        </div>

      </div>
    </MainLayout>
  );
}