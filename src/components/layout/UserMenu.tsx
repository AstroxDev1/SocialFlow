import {
  UserCircle2,
  ChevronDown,
  LogOut,
  Settings,
  User,
} from "lucide-react";


import {
  useEffect,
  useRef,
  useState,
} from "react";


import {
  useNavigate,
} from "react-router-dom";



export default function UserMenu(){


const navigate =
useNavigate();


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





function logout(){

localStorage.removeItem("token");

navigate("/login");

}





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
flex

items-center

gap-3

"

>


<UserCircle2

size={38}

className="
text-slate-300
"

/>



<div

className="
hidden

md:block

text-left

"

>

<p className="font-medium">

Astrox

</p>


<p className="
text-xs
text-slate-500
">

Administrador

</p>


</div>



<ChevronDown

size={16}

className="text-slate-500"

/>


</button>







{
open && (

<div

className="
absolute

right-0

mt-3

w-56

rounded-xl

border

border-slate-800

bg-[#121722]

p-2

shadow-xl

animate-in

fade-in

slide-in-from-top-2

duration-200

"

>



<button

className="
flex

w-full

items-center

gap-3

rounded-lg

px-3

py-2

text-sm

hover:bg-slate-800

"

>

<User size={16}/>

Perfil

</button>





<button

className="
flex

w-full

items-center

gap-3

rounded-lg

px-3

py-2

text-sm

hover:bg-slate-800

"

>

<Settings size={16}/>

Configurações

</button>





<button

onClick={logout}

className="
flex

w-full

items-center

gap-3

rounded-lg

px-3

py-2

text-sm

text-red-400

hover:bg-red-500/10

"

>

<LogOut size={16}/>

Sair

</button>




</div>

)

}



</div>

)

}