import { useEffect, useState } from "react";
import api from "../services/api";

type MonthlyPost = {
  month: string;
  posts: number;
};

type Platform = {
  name: string;
  value: number;
};

export function useDashboardCharts() {
  const [monthlyPosts, setMonthlyPosts] = useState<MonthlyPost[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharts() {
      try {
        const response = await api.get("/dashboard/charts");

        setMonthlyPosts(response.data.monthlyPosts);
        setPlatforms(response.data.platforms);
      } catch (error) {
        console.error("Erro ao carregar gráficos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCharts();
  }, []);

  return {
    monthlyPosts,
    platforms,
    loading,
  };
}