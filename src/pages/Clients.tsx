import { useEffect, useState } from "react";

import api from "../services/api";

import ClientTable from "../components/clients/ClientTable";
import ClientStats from "../components/clients/ClientStats";
import ClientSearch from "../components/clients/ClientSearch";

import Button from "../components/ui/Button";


import type { Client } from "../components/clients/types";



export default function Clients() {


  const [clients, setClients] = useState<Client[]>([]);

  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] =
    useState(false);


  const [editingClient, setEditingClient] =
    useState<Client | null>(null);



  const [companyName, setCompanyName] =
    useState("");

  const [instagram, setInstagram] =
    useState("");

  const [niche, setNiche] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [notes, setNotes] =
    useState("");




  async function loadClients() {

    try {

      const response = await api.get("/clients");


      return response.data.map((client: Partial<Client>) => ({
        id: client.id,
        companyName: client.companyName || "",
        instagram: client.instagram || "",
        niche: client.niche || "",
        phone: client.phone || "",
        notes: client.notes || "",
        status: client.status || "inactive",
      }));


    } catch(error) {

      console.error(
        "Erro ao carregar clientes:",
        error
      );

      return [];

    }

  }





  async function refreshClients(){

    const data = await loadClients();

    setClients(data);

  }





  useEffect(() => {

  async function load(){

    const data = await loadClients();

    setClients(data);

  }


  load();

}, []);






  async function createClient(){

    try{


      await api.post("/clients",{

        companyName,
        instagram,
        niche,
        phone,
        notes,

      });


      await refreshClients();


      closeModal();



    }catch(error){

      console.error(
        "Erro ao criar cliente:",
        error
      );

    }

  }





  async function updateClient(){


    if(!editingClient) return;



    try{


      await api.put(
        `/clients/${editingClient.id}`,
        {

          companyName,
          instagram,
          niche,
          phone,
          notes,
          status: editingClient.status,

        }
      );



      await refreshClients();


      closeModal();



    }catch(error){

      console.error(
        "Erro ao atualizar cliente:",
        error
      );

    }


  }





  async function deleteClient(id:number){


    try{


      await api.delete(`/clients/${id}`);


      await refreshClients();



    }catch(error){

      console.error(
        "Erro ao excluir cliente:",
        error
      );

    }


  }





  function openCreateModal(){


    setEditingClient(null);

    setCompanyName("");
    setInstagram("");
    setNiche("");
    setPhone("");
    setNotes("");

    setIsModalOpen(true);


  }







  function openEditModal(client:Client){


    setEditingClient(client);


    setCompanyName(
      client.companyName
    );


    setInstagram(
      client.instagram || ""
    );


    setNiche(
      client.niche || ""
    );


    setPhone(
      client.phone || ""
    );


    setNotes(
      client.notes || ""
    );



    setIsModalOpen(true);


  }






  function closeModal(){


    setIsModalOpen(false);

    setEditingClient(null);


    setCompanyName("");

    setInstagram("");

    setNiche("");

    setPhone("");

    setNotes("");

  }







  const filteredClients =
    clients.filter((client)=>{


      const term =
        search.toLowerCase();



      return (

        client.companyName
        .toLowerCase()
        .includes(term)


        ||

        client.instagram
        .toLowerCase()
        .includes(term)


        ||

        client.niche
        .toLowerCase()
        .includes(term)

      );


    });






  const totalClients =
    clients.length;



  const activeClients =
    clients.filter(
      client =>
        client.status.toLowerCase() === "active"
        ||
        client.status.toLowerCase() === "ativo"
    ).length;



  const inactiveClients =
    totalClients - activeClients;



  const niches =
    new Set(
      clients.map(
        client=>client.niche
      )
    ).size;







return (

<div className="space-y-8 pt-8">



<div className="
flex
flex-col
gap-4
md:flex-row
md:items-center
md:justify-between
mb-2
">


<div>

<h1 className="text-4xl font-bold tracking-tight">
Clientes
</h1>


<p className="mt-3 text-slate-400">
Gerencie todos os seus clientes.
</p>


</div>


<Button
onClick={openCreateModal}
>
+ Novo Cliente
</Button>


</div>





<ClientStats

total={totalClients}

active={activeClients}

inactive={inactiveClients}

niches={niches}

/>





<ClientSearch

value={search}

onChange={setSearch}

/>





<ClientTable

clients={filteredClients}

onEdit={openEditModal}

onDelete={deleteClient}

/>





{isModalOpen && (

<div className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/70
px-4
">


<div className="
w-full
max-w-xl
rounded-2xl
bg-[#121722]
p-8
">


<h2 className="text-2xl font-bold mb-6">

{editingClient
?
"Editar Cliente"
:
"Novo Cliente"}

</h2>



<input
className="input"
placeholder="Empresa"
value={companyName}
onChange={
e=>setCompanyName(e.target.value)
}
/>


<input
className="input"
placeholder="Instagram"
value={instagram}
onChange={
e=>setInstagram(e.target.value)
}
/>


<input
className="input"
placeholder="Nicho"
value={niche}
onChange={
e=>setNiche(e.target.value)
}
/>


<textarea
className="input"
placeholder="Observações"
value={notes}
onChange={
e=>setNotes(e.target.value)
}
/>



<div className="
flex
justify-end
gap-3
mt-5
">


<Button
variant="secondary"
onClick={closeModal}
>
Cancelar
</Button>


<Button
onClick={
editingClient
?
updateClient
:
createClient
}
>

Salvar

</Button>



</div>


</div>


</div>

)}



</div>

);


}