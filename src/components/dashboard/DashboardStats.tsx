import { useEffect, useState } from "react";

import {
  Users,
  CalendarDays,
  Clock3,
  CheckCircle,
} from "lucide-react";

import api from "../../services/api";
import StatCard from "../ui/StatCard";


type DashboardStatsData = {
  clients: number;
  scheduledPosts: number;
  pending: number;
  published: number;
};



export default function DashboardStats() {


  const [stats, setStats] = useState<DashboardStatsData>({
    clients: 0,
    scheduledPosts: 0,
    pending: 0,
    published: 0,
  });





  useEffect(() => {

    async function loadStats() {

      try {

        const response = await api.get(
          "/dashboard/stats"
        );


        setStats(response.data);


      } catch (error) {

        console.error(
          "Erro ao carregar dashboard:",
          error
        );

      }

    }


    loadStats();


  }, []);







  return (

    <div
      className="
        grid
        grid-cols-1
        gap-6

        md:grid-cols-2

        xl:grid-cols-4
      "
    >


      <StatCard

        title="Clientes"

        value={String(stats.clients)}

        icon={
          <Users size={24}/>
        }

        color="bg-blue-500"

      />



      <StatCard

        title="Agendamentos"

        value={String(stats.scheduledPosts)}

        icon={
          <CalendarDays size={24}/>
        }

        color="bg-purple-500"

      />



      <StatCard

        title="Pendentes"

        value={String(stats.pending)}

        icon={
          <Clock3 size={24}/>
        }

        color="bg-yellow-500"

      />



      <StatCard

        title="Publicados"

        value={String(stats.published)}

        icon={
          <CheckCircle size={24}/>
        }

        color="bg-green-500"

      />


    </div>

  );

}