import { useEffect, useState } from "react";

import api from "../lib/api";

import ClientTable from "../components/clients/ClientTable";
import Button from "../components/ui/Button";


type Client = {
  id: number;
  companyName: string;
  instagram: string;
  niche: string;
  phone?: string;
  notes?: string;
  status: string;
};



export default function Clients() {


  const [clients, setClients] = useState<Client[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingClient, setEditingClient] =
    useState<Client | null>(null);



  const [companyName, setCompanyName] = useState("");
  const [instagram, setInstagram] = useState("");
  const [niche, setNiche] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");





  async function loadClients() {

    try {

      const response = await api.get("/clients");

      return response.data;


    } catch (error) {

      console.error(
        "Erro ao carregar clientes:",
        error
      );

      return [];

    }

  }





  useEffect(() => {


    async function fetchClients() {

      const data = await loadClients();

      setClients(data);

    }


    fetchClients();


  }, []);







  async function createClient() {

    try {


      await api.post("/clients", {

        companyName,

        instagram,

        niche,

        phone,

        notes,

      });



      const data = await loadClients();

      setClients(data);



      closeModal();



    } catch(error) {


      console.error(
        "Erro ao criar cliente:",
        error
      );


    }

  }







  async function updateClient() {


    if (!editingClient) return;



    try {


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



      const data = await loadClients();

      setClients(data);



      closeModal();



    } catch(error) {


      console.error(
        "Erro ao atualizar cliente:",
        error
      );


    }


  }







  async function deleteClient(id:number) {


    try {


      await api.delete(`/clients/${id}`);



      const data = await loadClients();

      setClients(data);



    } catch(error) {


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


    setCompanyName(client.companyName);

    setInstagram(client.instagram);

    setNiche(client.niche);

    setPhone(client.phone || "");

    setNotes(client.notes || "");



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








  return (

    <div className="space-y-8">


      <div className="flex items-center justify-between">


        <div>


          <h1 className="text-4xl font-bold">
            Clientes
          </h1>


          <p className="mt-2 text-slate-400">
            Gerencie todos os seus clientes.
          </p>


        </div>





        <Button
          onClick={openCreateModal}
        >
          + Novo Cliente
        </Button>



      </div>







      <ClientTable

        clients={clients}

        onEdit={openEditModal}

        onDelete={deleteClient}

      />







      {isModalOpen && (

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
          "
        >



          <div
            className="
              w-full
              max-w-xl
              rounded-2xl
              border
              border-slate-800
              bg-slate-900
              p-8
              shadow-2xl
            "
          >



            <div
              className="
                mb-6
                flex
                items-center
                justify-between
              "
            >


              <h2 className="text-2xl font-bold">

                {editingClient
                  ? "Editar Cliente"
                  : "Novo Cliente"}

              </h2>




              <button

                onClick={closeModal}

                className="
                  text-3xl
                  text-slate-400
                  hover:text-white
                "

              >

                ×

              </button>


            </div>







            <div className="space-y-4">



              {[
                {
                  placeholder:"Empresa",
                  value:companyName,
                  set:setCompanyName
                },
                {
                  placeholder:"Instagram",
                  value:instagram,
                  set:setInstagram
                },
                {
                  placeholder:"Nicho",
                  value:niche,
                  set:setNiche
                },
                {
                  placeholder:"Telefone",
                  value:phone,
                  set:setPhone
                },
              ].map((item)=>(
                
                <input

                  key={item.placeholder}

                  placeholder={item.placeholder}

                  value={item.value}

                  onChange={(e)=>item.set(e.target.value)}

                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-950
                    p-3
                    outline-none
                    focus:border-blue-500
                  "

                />

              ))}





              <textarea

                rows={4}

                placeholder="Observações"

                value={notes}

                onChange={(e)=>setNotes(e.target.value)}

                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-950
                  p-3
                  outline-none
                  focus:border-blue-500
                "

              />






              <div className="flex justify-end gap-3 pt-4">


                <Button

                  variant="secondary"

                  onClick={closeModal}

                >

                  Cancelar

                </Button>





                <Button

                  onClick={
                    editingClient
                      ? updateClient
                      : createClient
                  }

                >

                  {editingClient
                    ? "Atualizar Cliente"
                    : "Salvar Cliente"}

                </Button>



              </div>




            </div>



          </div>



        </div>

      )}



    </div>

  );

}