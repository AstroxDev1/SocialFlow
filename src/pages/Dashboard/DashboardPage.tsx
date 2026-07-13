import MainLayout from "../../layouts/MainLayout";
import StatCard from "../../components/ui/StatCard";

import {
  Users,
  CalendarDays,
  BarChart3,
  DollarSign,
} from "lucide-react";

export default function DashboardPage() {
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

        <div className="grid grid-cols-4 gap-6">
          <StatCard
            title="Clientes"
            value="24"
            icon={<Users size={24} />}
            color="bg-blue-500"
          />

          <StatCard
            title="Posts Agendados"
            value="86"
            icon={<CalendarDays size={24} />}
            color="bg-purple-500"
          />

          <StatCard
            title="Alcance"
            value="42.8K"
            icon={<BarChart3 size={24} />}
            color="bg-green-500"
          />

          <StatCard
            title="Receita"
            value="R$ 4.320"
            icon={<DollarSign size={24} />}
            color="bg-orange-500"
          />
        </div>
      </div>
    </MainLayout>
  );
}