import DashboardStats from "../components/dashboard/DashboardStats";
import PerformanceChart from "../components/charts/PerformanceChart";
import TodayTasks from "../components/dashboard/TodayTasks";

import Card from "../components/ui/Card";


export default function Dashboard() {

  return (

    <div className="space-y-8">


      {/* Cabeçalho */}

      <div>

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>


        <p className="mt-2 text-slate-400">
          Bem-vindo ao SocialFlow.
        </p>


      </div>





      {/* Estatísticas */}

      <DashboardStats />





      {/* Área principal */}

      <div
        className="
          grid
          grid-cols-1
          gap-6

          xl:grid-cols-3
        "
      >


        <div className="xl:col-span-2">


          <Card>

            <div className="mb-5">

              <h2 className="text-xl font-semibold">
                Desempenho
              </h2>


              <p className="text-sm text-slate-400">
                Acompanhe seus resultados.
              </p>


            </div>


            <PerformanceChart />


          </Card>


        </div>





        <Card>

          <TodayTasks />

        </Card>


      </div>


    </div>

  );

}