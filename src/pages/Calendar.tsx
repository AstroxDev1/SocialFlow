import { useState } from "react";

import CalendarGrid from "../components/calendar/CalendarGrid";
import ScheduleForm from "../components/schedules/ScheduleForm";


type Schedule = {
  id: number;
  title: string;
  description: string;
  date: string;
  platform: string;
  status: string;
  client: {
    companyName: string;
  } | null;
};



export default function Calendar() {


  const [showForm, setShowForm] = useState(false);



  const [newSchedule, setNewSchedule] = useState<Schedule>({

    id: 0,

    title: "",

    description: "",

    date: new Date().toISOString().slice(0, 16),

    platform: "",

    status: "PENDENTE",

    client: null,

  });





  function handleSave() {

    console.log(
      "Salvar novo agendamento:",
      newSchedule
    );

    setShowForm(false);

  }







  return (

    <div className="pt-6 space-y-8">


      {/* Cabeçalho */}

      <div className="
        flex
        items-center
        justify-between
      ">


        <div>


          <h1 className="
            text-4xl
            font-bold
            text-white
            tracking-tight
          ">
            Calendário
          </h1>



          <p className="
            mt-2
            text-slate-400
          ">
            Visualize seus posts agendados.
          </p>


        </div>





        <button

          onClick={() => setShowForm(true)}

          className="
            rounded-xl
            bg-blue-600
            px-5
            py-3
            font-medium
            text-white
            transition
            hover:bg-blue-700
          "

        >

          + Novo Agendamento

        </button>



      </div>






      {/* Calendário */}

      <CalendarGrid />








      {/* Modal */}

      {showForm && (

        <div

          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/70
            backdrop-blur-sm
            p-4
          "

        >


          <div

            className="
              w-full
              max-w-lg
              rounded-2xl
              border
              border-slate-700
              bg-slate-900
              p-6
              shadow-2xl
            "

          >


            <ScheduleForm

              schedule={newSchedule}

              onChange={setNewSchedule}

              onSave={handleSave}

              onCancel={() => setShowForm(false)}

            />


          </div>


        </div>

      )}


    </div>

  );

}