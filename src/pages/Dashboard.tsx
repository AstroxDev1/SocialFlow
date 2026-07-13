import MainLayout from "../layouts/MainLayout";
import DashboardStats from "../components/dashboard/DashboardStats";
import PerformanceChart from "../components/charts/PerformanceChart";
import TodayTasks from "../components/dashboard/TodayTasks";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            Bem-vindo ao SocialFlow.
          </p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <PerformanceChart />
          </div>

          <TodayTasks />
        </div>
      </div>
    </MainLayout>
  );
}