import { useEffect, useState } from "react";

import MediaGrid from "../components/library/MediaGrid";
import UploadModal from "../components/library/UploadModal";
import EditMediaModal from "../components/library/EditMediaModal";

import Toast from "../components/ui/Toast";
import ConfirmModal from "../components/ui/ConfirmModal";

import api from "../services/api";


type Media = {
  id: number;
  name: string;
  filename: string;
  type: string;
  mimeType: string;
  size: number;
  url: string;
};



export default function Library() {


  const [showUpload, setShowUpload] =
    useState(false);


  const [editingMedia, setEditingMedia] =
    useState<Media | null>(null);


  const [deleteId, setDeleteId] =
    useState<number | null>(null);


  const [media, setMedia] =
    useState<Media[]>([]);


  const [loading, setLoading] =
    useState(true);


  const [search, setSearch] =
    useState("");


  const [filter, setFilter] =
    useState("Todos");


  const [toast, setToast] = useState<{
    message:string;
    type:"success" | "error";
  } | null>(null);






  useEffect(() => {


    async function loadMedia() {


      try {


        const response =
          await api.get<Media[]>("/media");


        setMedia(response.data);



      } catch(error) {


        console.error(
          "Erro ao carregar mídias:",
          error
        );


        setToast({
          message:"Erro ao carregar mídias.",
          type:"error",
        });



      } finally {


        setLoading(false);


      }


    }


    loadMedia();


  }, []);







  const filteredMedia =
    media.filter((item)=>{


      const matchesSearch =
        item.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        );



      const matchesFilter =
        filter === "Todos"
          ? true
          : item.type === filter;



      return (
        matchesSearch &&
        matchesFilter
      );


    });









  async function handleUpload(file:File) {


    try {


      const formData =
        new FormData();


      formData.append(
        "file",
        file
      );



      const response =
        await api.post(
          "/media",
          formData,
          {
            headers:{
              "Content-Type":
              "multipart/form-data",
            },
          }
        );



      setMedia((old)=>[
        response.data,
        ...old,
      ]);



      setShowUpload(false);



      setToast({
        message:"Mídia enviada com sucesso.",
        type:"success",
      });



    } catch(error) {


      console.error(
        "Erro no upload:",
        error
      );


      setToast({
        message:"Erro ao enviar arquivo.",
        type:"error",
      });


    }

  }









  async function handleDelete(id:number) {


    try {


      await api.delete(
        `/media/${id}`
      );



      setMedia((old)=>

        old.filter(
          item => item.id !== id
        )

      );



      setToast({
        message:"Mídia excluída com sucesso.",
        type:"success",
      });



    } catch(error) {


      console.error(
        "Erro ao excluir mídia:",
        error
      );


      setToast({
        message:"Erro ao excluir mídia.",
        type:"error",
      });


    }

  }









  async function handleEdit(data:{
    id:number;
    name:string;
    type:string;
  }) {


    try {


      const response =
        await api.put(
          `/media/${data.id}`,
          {
            name:data.name,
            type:data.type,
          }
        );



      setMedia((old)=>

        old.map(item =>

          item.id === data.id
            ? response.data
            : item

        )

      );



      setEditingMedia(null);



      setToast({
        message:"Mídia atualizada com sucesso.",
        type:"success",
      });



    } catch(error) {


      console.error(
        "Erro ao editar mídia:",
        error
      );


      setToast({
        message:"Erro ao editar mídia.",
        type:"error",
      });


    }

  }









  return (

    <div className="pt-6 space-y-8">



      <div className="flex items-center justify-between">


        <div>


          <h1 className="
            text-4xl
            font-bold
            tracking-tight
            text-white
          ">
            Biblioteca
          </h1>



          <p className="
            mt-2
            text-slate-400
          ">
            Gerencie suas imagens, vídeos e arquivos.
          </p>


        </div>




        <button

          onClick={() => setShowUpload(true)}

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

          + Upload

        </button>


      </div>









      <div className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-4
      ">


        <input

          value={search}

          onChange={(e)=>
            setSearch(e.target.value)
          }


          placeholder="Pesquisar mídia..."


          className="
            w-full
            bg-transparent
            text-white
            placeholder:text-slate-500
            outline-none
          "

        />


      </div>








      <div className="
        flex
        flex-wrap
        gap-3
      ">


        {[
          "Todos",
          "Imagem",
          "Vídeo",
          "Documento",
        ].map((item)=>(


          <button

            key={item}

            onClick={()=>
              setFilter(item)
            }


            className={`
              rounded-xl
              px-4
              py-2
              text-sm
              transition

              ${
                filter === item
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }
            `}

          >

            {item}

          </button>


        ))}


      </div>









      {loading ? (

        <div className="
          py-20
          text-center
          text-slate-400
        ">

          Carregando biblioteca...

        </div>


      ) : (


        <MediaGrid

          media={filteredMedia}

          onDelete={(id)=>
            setDeleteId(id)
          }

          onEdit={setEditingMedia}

        />


      )}









      {showUpload && (

        <UploadModal

          onClose={() =>
            setShowUpload(false)
          }

          onSave={handleUpload}

        />

      )}









      {editingMedia && (

        <EditMediaModal

          media={editingMedia}

          onClose={() =>
            setEditingMedia(null)
          }

          onSave={handleEdit}

        />

      )}









      {toast && (

        <Toast

          message={toast.message}

          type={toast.type}

          onClose={() =>
            setToast(null)
          }

        />

      )}









      {deleteId && (

        <ConfirmModal

          title="Excluir mídia"

          message="
            Tem certeza que deseja remover este arquivo?
            Essa ação não pode ser desfeita.
          "

          onCancel={() =>
            setDeleteId(null)
          }

          onConfirm={async()=>{


            await handleDelete(deleteId);


            setDeleteId(null);


          }}

        />

      )}




    </div>

  );

}