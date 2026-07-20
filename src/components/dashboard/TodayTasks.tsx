import { Clock } from "lucide-react";

import Card from "../ui/Card";


const tasks = [

  {
    hour: "09:00",
    title: "Post Instagram - Loja Alpha",
  },

  {
    hour: "11:30",
    title: "Aprovar arte - Clínica Vida",
  },

  {
    hour: "14:00",
    title: "Agendar Reels",
  },

  {
    hour: "16:30",
    title: "Responder cliente",
  },

];



export default function TodayTasks() {


  return (

    <Card>


      <div className="mb-6">

        <h2 className="text-xl font-semibold">
          Agenda de Hoje
        </h2>


        <p className="mt-1 text-sm text-slate-400">
          Próximas atividades.
        </p>


      </div>





      <div className="space-y-4">


        {tasks.map((task) => (

          <div

            key={task.hour}

            className="
              flex
              items-center
              gap-4

              border-b
              border-slate-800

              pb-4

              last:border-none
            "

          >


            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-xl

                bg-blue-500/20

                text-blue-400
              "
            >

              <Clock size={18}/>

            </div>





            <div>

              <p className="font-medium">
                {task.title}
              </p>


              <p className="text-sm text-slate-400">
                {task.hour}
              </p>


            </div>


          </div>

        ))}


      </div>


    </Card>

  );

}