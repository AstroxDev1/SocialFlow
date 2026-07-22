import {
  Users,
} from "lucide-react";


import {
  useEffect,
  useState,
} from "react";


import api from "../../services/api";



export type Client = {
  id: number;
  companyName: string;
  instagram: string;
  niche: string;
  phone?: string;
  notes?: string;
  status: string;
};




export default function RecentClients(){


const [clients,setClients] =
useState<Client[]>([]);




useEffect(()=>{


async function loadClients(){


try{


const response =
await api.get("/clients");


setClients(
response.data.slice(0,3)
);


}catch(error){

console.error(
"Erro ao carregar clientes",
error
);

}


}



loadClients();


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

Clientes recentes

</h2>


<p className="
text-sm
text-slate-500
">

Últimos clientes cadastrados

</p>


</div>


<Users
className="text-blue-400"
/>


</div>





<div className="
space-y-3
">


{
clients.length === 0 && (

<p className="
text-sm
text-slate-500
">

Nenhum cliente encontrado

</p>

)

}



{
clients.map(client=>(


<div

key={client.id}

className="
flex
items-center
gap-4
rounded-xl
bg-slate-900
p-4
"

>


<div

className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-blue-500/10
text-blue-400
"

>

{
client.companyName.charAt(0)
}


</div>




<div>


<p className="
font-medium
">

{client.companyName}

</p>



<p className="
text-sm
text-slate-500
">

{client.niche}

</p>


</div>



</div>


))

}



</div>


</div>

)

}