import { useEffect, useState } from "react";
import api from "../services/api";

type DashboardStats = {
  clients: number;
  scheduledPosts: number;
  pending: number;
  published: number;
};

export function useDashboardStats() {
  const [stats, setStats] = useState<DashboardStats>({
    clients: 0,
    scheduledPosts: 0,
    pending: 0,
    published: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const response = await api.get("/dashboard/stats");

        setStats(response.data);
      } catch (error) {
        console.error("Erro ao carregar dashboard:", error);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  return {
    stats,
    loading,
  };
}