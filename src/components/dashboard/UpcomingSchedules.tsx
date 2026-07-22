import {
  CalendarDays,
  Clock,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import api from "../../services/api";


type Schedule = {

id:number;

title:string;

date:string;

status:string;

client?:{
  companyName:string;
} | null;

};



export default function UpcomingSchedules(){


const [schedules,setSchedules] =
useState<Schedule[]>([]);



useEffect(()=>{


async function loadSchedules(){


try{


const response =
await api.get("/schedules");


setSchedules(
response.data.slice(0,3)
);


}catch(error){

console.error(
"Erro ao carregar agendamentos",
error
);

}


}



loadSchedules();



},[]);





return (

<div

className="
rounded-2xl
border
border-slate-800
bg-[#121722]
p-6
"

>


<div className="
mb-6
flex
items-center
justify-between
">


<div>

<h2 className="
text-lg
font-semibold
">

Próximos agendamentos

</h2>


<p className="
text-sm
text-slate-500
">

Publicações futuras

</p>


</div>



<CalendarDays
className="text-blue-400"
/>


</div>





<div className="
space-y-4
">


{
schedules.length === 0 && (

<p className="
text-sm
text-slate-500
">

Nenhum agendamento encontrado

</p>

)

}





{
schedules.map(item=>(


<div

key={item.id}

className="
flex
items-center
justify-between
rounded-xl
bg-slate-900
p-4
"

>


<div>


<p className="
font-medium
">

{item.title}

</p>



<p className="
text-sm
text-slate-500
">

{
item.client?.companyName
??
"Sem cliente"

}

</p>




<div className="
mt-2
flex
items-center
gap-2
text-xs
text-slate-400
">

<Clock size={14}/>


{
new Date(item.date)
.toLocaleString(
"pt-BR"
)

}


</div>



</div>




<span

className="
rounded-full
bg-blue-500/10
px-3
py-1
text-xs
text-blue-400
"

>

{item.status}

</span>



</div>


))

}



</div>


</div>

)

}