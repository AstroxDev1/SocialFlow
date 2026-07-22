import {
  Bell,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";


const notifications = [
  {
    id:1,
    title:"Novo cliente cadastrado",
    time:"há 5 minutos",
  },

  {
    id:2,
    title:"Post agendado para amanhã",
    time:"há 1 hora",
  },

  {
    id:3,
    title:"Calendário atualizado",
    time:"há 3 horas",
  },
];



export default function NotificationMenu(){


const [open,setOpen] =
useState(false);



const ref =
useRef<HTMLDivElement>(null);




useEffect(()=>{


function handleClickOutside(event:MouseEvent){


if(
ref.current &&
!ref.current.contains(
event.target as Node
)
){

setOpen(false);

}


}



document.addEventListener(
"mousedown",
handleClickOutside
);



return()=>{

document.removeEventListener(
"mousedown",
handleClickOutside
);

};


},[]);





return(

<div
ref={ref}
className="
relative
"
>


<button

onClick={()=>setOpen(!open)}

className="
relative

rounded-xl

border

border-slate-800

bg-slate-900

p-3

transition

hover:bg-slate-800

"

>


<Bell size={18}/>



<span

className="
absolute

right-2

top-2

h-2

w-2

rounded-full

bg-blue-500

"

/>


</button>





{
open && (

<div

className="
absolute

right-0

mt-3

w-80

rounded-xl

border

border-slate-800

bg-[#121722]

p-4

shadow-xl

animate-in

fade-in

slide-in-from-top-2

duration-200

"

>


<h3

className="
mb-3

font-semibold

"

>

Notificações

</h3>




<div
className="
space-y-3
"
>


{
notifications.map(item=>(


<div

key={item.id}

className="
rounded-lg

bg-slate-900

p-3

hover:bg-slate-800

transition

cursor-pointer

"

>


<p

className="
text-sm

font-medium

"

>

{item.title}

</p>



<p

className="
mt-1

text-xs

text-slate-500

"

>

{item.time}

</p>



</div>


))

}



</div>


</div>

)

}



</div>

)

}