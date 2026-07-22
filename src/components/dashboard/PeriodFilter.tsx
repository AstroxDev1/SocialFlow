import {
  useState,
} from "react";


const periods = [
  "Hoje",
  "7 dias",
  "30 dias",
  "Ano",
];


export default function PeriodFilter(){


const [active,setActive] =
useState("30 dias");



return (

<div

className="
flex

items-center

gap-2

rounded-xl

border

border-slate-800

bg-[#121722]

p-1

"

>


{
periods.map(period=>(


<button

key={period}

onClick={()=>setActive(period)}

className={`

rounded-lg

px-4

py-2

text-sm

transition


${
active === period

?

"bg-blue-600 text-white"

:

"text-slate-400 hover:bg-slate-800 hover:text-white"

}

`}

>

{period}

</button>


))

}



</div>

)

}