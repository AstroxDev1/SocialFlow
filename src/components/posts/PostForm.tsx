import { useEffect, useState } from "react";
import api from "../../services/api";


type Client = {
  id: number;
  companyName: string;
};


type Post = {
  id?: number;
  title: string;
  caption?: string;
  type: string;
  status: string;
  clientId?: number | null;
};


type PostFormData = {
  title: string;
  caption: string;
  type: string;
  status: string;
  clientId: number | null;
};


type Props = {
  post?: Post | null;
  onSuccess: () => void;
};


export default function PostForm({
  post,
  onSuccess,
}: Props) {


  const [clients, setClients] = useState<Client[]>([]);


  const [form, setForm] = useState<PostFormData>({
    title: "",
    caption: "",
    type: "Instagram",
    status: "RASCUNHO",
    clientId: null,
  });



  async function loadClients() {

    try {

      const response = await api.get("/clients");

      setClients(response.data);

    } catch (error) {

      console.error(
        "Erro ao carregar clientes",
        error
      );

    }

  }



  useEffect(() => {

  async function fetchData() {

    await loadClients();


    if (post) {

      setForm({

        title: post.title,

        caption: post.caption ?? "",

        type: post.type,

        status: post.status,

        clientId: post.clientId ?? null,

      });

    }

  }


  fetchData();


}, [post]);




  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {


    const {
      name,
      value
    } = e.target;



    setForm({

      ...form,

      [name]:
        name === "clientId"
          ? value === ""
            ? null
            : Number(value)
          : value,

    });


  }




  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();


    try {


      if (post?.id) {


        await api.put(
          `/posts/${post.id}`,
          form
        );


      } else {


        await api.post(
          "/posts",
          form
        );


      }



      onSuccess();



    } catch (error) {


      console.error(
        "Erro ao salvar post",
        error
      );


    }

  }





  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >


      <div>

        <label className="text-sm text-slate-300">
          Título
        </label>


        <input

          name="title"

          value={form.title}

          onChange={handleChange}

          required

          placeholder="Nome do post"

          className="
            mt-1
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-800
            p-3
            outline-none
          "

        />

      </div>





      <div>

        <label className="text-sm text-slate-300">
          Legenda
        </label>


        <textarea

          name="caption"

          value={form.caption}

          onChange={handleChange}

          rows={4}

          placeholder="Digite a legenda..."

          className="
            mt-1
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-800
            p-3
            outline-none
          "

        />

      </div>





      <div>

        <label className="text-sm text-slate-300">
          Tipo
        </label>


        <select

          name="type"

          value={form.type}

          onChange={handleChange}

          className="
            mt-1
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-800
            p-3
          "

        >

          <option value="Instagram">
            Instagram
          </option>

          <option value="Reels">
            Reels
          </option>

          <option value="Story">
            Story
          </option>

          <option value="Carrossel">
            Carrossel
          </option>


        </select>


      </div>






      <div>

        <label className="text-sm text-slate-300">
          Cliente
        </label>


        <select

          name="clientId"

          value={form.clientId ?? ""}

          onChange={handleChange}

          className="
            mt-1
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-800
            p-3
          "

        >

          <option value="">
            Sem cliente
          </option>


          {clients.map((client)=>(

            <option
              key={client.id}
              value={client.id}
            >

              {client.companyName}

            </option>

          ))}


        </select>


      </div>





      <div>

        <label className="text-sm text-slate-300">
          Status
        </label>


        <select

          name="status"

          value={form.status}

          onChange={handleChange}

          className="
            mt-1
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-800
            p-3
          "

        >

          <option value="RASCUNHO">
            Rascunho
          </option>


          <option value="PUBLICADO">
            Publicado
          </option>


        </select>


      </div>





      <button

        type="submit"

        className="
          w-full
          rounded-lg
          bg-blue-600
          p-3
          font-semibold
          hover:bg-blue-700
        "

      >

        {post
          ? "Salvar alterações"
          : "Criar Post"
        }


      </button>



    </form>

  );

}