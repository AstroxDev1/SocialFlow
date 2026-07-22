import {
  Users,
  FileText,
  Calendar,
  CheckCircle2,
} from "lucide-react";

type DashboardStats = {
  clients: number;
  scheduledPosts: number;
  pending: number;
  published: number;
};

export function getDashboardStats(stats: DashboardStats) {
  return [
    {
      title: "Clientes",
      value: stats.clients,
      description: "Clientes cadastrados",
      icon: Users,
      trend: "+12%",
    },

    {
      title: "Posts",
      value: stats.published,
      description: "Posts publicados",
      icon: FileText,
      trend: "+24%",
    },

    {
      title: "Agendamentos",
      value: stats.scheduledPosts,
      description: "Publicações futuras",
      icon: Calendar,
      trend: "+8%",
    },

    {
      title: "Pendentes",
      value: stats.pending,
      description: "Aguardando publicação",
      icon: CheckCircle2,
      trend: "+3%",
    },
  ];
}