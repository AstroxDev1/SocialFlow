import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import type { EventInput, EventClickArg } from "@fullcalendar/core";

import api from "../../services/api";
import EventModal from "./EventModal";
import ScheduleForm from "../schedules/ScheduleForm";


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



// 🎨 Cores por plataforma
function getPlatformColor(platform?: string) {

  switch(platform?.toLowerCase()) {

    case "instagram":
      return {
        backgroundColor:"#833AB4",
        borderColor:"#833AB4",
      };

    case "tiktok":
      return {
        backgroundColor:"#111111",
        borderColor:"#111111",
      };

    case "youtube":
      return {
        backgroundColor:"#FF0000",
        borderColor:"#FF0000",
      };

    case "facebook":
      return {
        backgroundColor:"#1877F2",
        borderColor:"#1877F2",
      };

    case "linkedin":
      return {
        backgroundColor:"#0A66C2",
        borderColor:"#0A66C2",
      };


    default:
      return {
        backgroundColor:"#6366F1",
        borderColor:"#6366F1",
      };

  }

}



// 🟡 Status do post
function getStatusIcon(status?: string) {

  switch(status?.toUpperCase()) {

    case "PENDENTE":
      return "🟡";

    case "EM PRODUÇÃO":
      return "🔵";

    case "PUBLICADO":
      return "🟢";

    case "CANCELADO":
      return "🔴";

    default:
      return "⚪";

  }

}





export default function CalendarGrid() {


  const [events,setEvents] = useState<EventInput[]>([]);


  const [selectedSchedule,setSelectedSchedule] =
    useState<Schedule | null>(null);



  const [creating,setCreating] = useState(false);




  const [newSchedule,setNewSchedule] = useState<Schedule>({

    id:0,

    title:"",

    description:"",

    date:new Date().toISOString().slice(0,16),

    platform:"",

    status:"PENDENTE",

    client:null,

  });








  useEffect(()=>{


    async function loadSchedules(){


      try{


        const response = await api.get<Schedule[]>("/schedules");



        const calendarEvents = response.data.map((schedule)=>({


          id:String(schedule.id),


          title:
          `${getStatusIcon(schedule.status)} ${schedule.platform || ""} • ${schedule.title}`,



          start:schedule.date,


          className:"calendar-event",


          ...getPlatformColor(schedule.platform),



          extendedProps:{
            schedule
          }


        }));



        setEvents(calendarEvents);



      }catch(error){

        console.error(error);

      }


    }


    loadSchedules();


  },[]);









  async function handleCreate(){


    try{


      const response = await api.post("/schedules",{

        title:newSchedule.title,

        description:newSchedule.description,

        date:newSchedule.date,

        platform:newSchedule.platform,

        clientId:null,

      });



      const created=response.data;




      setEvents(old=>[

        ...old,


        {

          id:String(created.id),


          title:
          `${getStatusIcon(created.status)} ${created.platform || ""} • ${created.title}`,



          start:created.date,


          className:"calendar-event",


          ...getPlatformColor(created.platform),



          extendedProps:{
            schedule:created
          }

        }


      ]);



      setCreating(false);



    }catch(error){

      console.error(error);

    }


  }








  function handleEventClick(info:EventClickArg){


    setSelectedSchedule(
      info.event.extendedProps.schedule as Schedule
    );


  }









  async function handleDelete(id:number){


    if(!confirm("Excluir este agendamento?"))
      return;



    await api.delete(`/schedules/${id}`);



    setEvents(old=>
      old.filter(event=>event.id !== String(id))
    );



    setSelectedSchedule(null);


  }









  async function handleUpdate(schedule:Schedule){


    const response = await api.put(

      `/schedules/${schedule.id}`,

      {

        title:schedule.title,

        description:schedule.description,

        date:schedule.date,

        platform:schedule.platform,

        status:schedule.status

      }

    );




    setEvents(old=>


      old.map(event=>


        event.id === String(schedule.id)

        ?

        {

          ...event,


          title:
          `${getStatusIcon(response.data.status)} ${response.data.platform || ""} • ${response.data.title}`,



          start:response.data.date,


          ...getPlatformColor(response.data.platform),



          extendedProps:{
            schedule:response.data
          }


        }


        :

        event


      )


    );



    setSelectedSchedule(null);


  }









  return (

    <>


      <div className="
        rounded-3xl
        border
        border-slate-800
        bg-[#111827]
        p-6
        shadow-xl
      ">



        <FullCalendar


          plugins={[
            dayGridPlugin,
            interactionPlugin
          ]}



          initialView="dayGridMonth"



          locale={ptBrLocale}



          height={650}



          events={events}



          eventClick={handleEventClick}



          dayMaxEvents={3}



          headerToolbar={{

            left:"title",

            center:"",

            right:"today prev next"

          }}



          buttonText={{

            today:"Hoje"

          }}



        />





        {/* Legenda */}

        <div className="
          mt-6
          flex
          flex-wrap
          gap-5
          text-sm
          text-slate-300
        ">


          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-purple-600"/>
            Instagram
          </div>


          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-black border border-slate-500"/>
            TikTok
          </div>


          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-600"/>
            YouTube
          </div>


          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-blue-600"/>
            Facebook
          </div>


          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-sky-700"/>
            LinkedIn
          </div>


        </div>



      </div>









      <EventModal

        schedule={selectedSchedule}

        onClose={()=>setSelectedSchedule(null)}

        onDelete={handleDelete}

        onUpdate={handleUpdate}

      />









      {creating && (

        <div className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-black/70
        ">


          <div className="
            w-full
            max-w-lg
            rounded-3xl
            bg-slate-900
            border
            border-slate-700
            p-6
          ">


            <ScheduleForm

              schedule={newSchedule}

              onChange={setNewSchedule}

              onSave={handleCreate}

              onCancel={()=>setCreating(false)}

            />


          </div>


        </div>

      )}



    </>

  );

}