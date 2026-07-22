import { useEffect, useState } from "react";

import PostTable from "../components/posts/PostTable";
import PostModal from "../components/posts/PostModal";
import api from "../services/api";


type Post = {
  id: number;
  title: string;
  caption?: string;
  type: string;
  status: string;

  platform?: string;
  publishDate?: string;

  clientId?: number | null;

  client?: {
    companyName: string;
  } | null;
};



export default function Posts() {


  const [posts, setPosts] = useState<Post[]>([]);

  const [openModal, setOpenModal] = useState(false);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);


  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("TODOS");





  async function loadPosts() {

    try {

      const response = await api.get("/posts");

      return response.data;


    } catch (error) {

      console.error(
        "Erro ao carregar posts",
        error
      );

      return [];

    }

  }





  useEffect(() => {


    async function fetchPosts() {

      const data = await loadPosts();

      setPosts(data);

    }


    fetchPosts();


  }, []);








  function handleEdit(post: Post) {

    setSelectedPost(post);

    setOpenModal(true);

  }







  async function handleDelete(id:number) {


    const confirmDelete = window.confirm(
      "Deseja realmente excluir este post?"
    );


    if(!confirmDelete) return;



    try {


      await api.delete(`/posts/${id}`);


      const data = await loadPosts();

      setPosts(data);



    } catch(error) {


      console.error(
        "Erro ao excluir post",
        error
      );


    }


  }







  function handleNewPost(){

    setSelectedPost(null);

    setOpenModal(true);

  }








  const filteredPosts = posts.filter((post)=>{


    const matchSearch =
      post.title
      .toLowerCase()
      .includes(
        search.toLowerCase()
      );



    const matchFilter =
      filter === "TODOS"
      ||
      post.status === filter;



    return matchSearch && matchFilter;


  });









  return (

    <>

      <div className="space-y-8 pt-6">



        <div className="flex items-center justify-between">


          <div>


            <h1 className="text-4xl font-bold tracking-tight">

              Posts

            </h1>



            <p className="mt-3 text-slate-400">

              Gerencie seus conteúdos publicados e agendados.

            </p>


          </div>




          <button

            onClick={handleNewPost}

            className="
              rounded-lg
              bg-blue-600
              px-5
              py-3
              transition
              hover:bg-blue-700
            "

          >

            + Novo Post

          </button>


        </div>







        <div className="flex gap-3">


          {[
            "TODOS",
            "RASCUNHO",
            "PUBLICADO"

          ].map((item)=>(


            <button

              key={item}

              onClick={()=>setFilter(item)}

              className={`
                rounded-lg
                px-4
                py-2
                ${
                  filter === item
                  ?
                  "bg-blue-600"
                  :
                  "bg-slate-800"
                }
              `}

            >

              {item}


            </button>


          ))}



        </div>








        <input


          type="text"

          value={search}

          onChange={(e)=>
            setSearch(e.target.value)
          }


          placeholder="Pesquisar post..."


          className="
            w-full
            rounded-lg
            border
            border-slate-800
            bg-slate-900
            px-4
            py-3
            outline-none
          "


        />










        <PostTable

          posts={filteredPosts}

          onEdit={handleEdit}

          onDelete={handleDelete}

        />






      </div>







      <PostModal


        open={openModal}


        post={selectedPost}




        onClose={()=>{


          setOpenModal(false);

          setSelectedPost(null);


        }}




        onSuccess={async()=>{


          const data = await loadPosts();

          setPosts(data);


        }}


      />



    </>

  );

}