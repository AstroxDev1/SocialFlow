type Post = {
  id: number;
  title: string;
  caption?: string;
  type: string;
  status: string;
  client?: {
    companyName: string;
  } | null;
};


type Props = {
  posts: Post[];
  onEdit?: (post: Post) => void;
  onDelete?: (id: number) => void;
};


export default function PostTable({
  posts,
  onEdit,
  onDelete,
}: Props) {



  return (

    <div
      className="
        overflow-hidden
        rounded-xl
        border
        border-slate-800
        bg-slate-900
      "
    >


      <table className="w-full">


        <thead className="bg-slate-800">

          <tr>

            <th className="p-4 text-left">
              Título
            </th>


            <th className="p-4 text-left">
              Tipo
            </th>


            <th className="p-4 text-left">
              Cliente
            </th>


            <th className="p-4 text-left">
              Status
            </th>


            <th className="p-4 text-left">
              Ações
            </th>


          </tr>

        </thead>




        <tbody>


          {posts.length === 0 ? (

            <tr>

              <td
                colSpan={5}
                className="
                  p-6
                  text-center
                  text-slate-400
                "
              >

                Nenhum post encontrado.

              </td>

            </tr>


          ) : (


            posts.map((post) => (

              <tr
                key={post.id}
                className="border-t border-slate-800"
              >


                <td className="p-4">
                  {post.title}
                </td>



                <td className="p-4">
                  {post.type}
                </td>




                <td className="p-4">

                  {post.client?.companyName ?? "Sem cliente"}

                </td>




                <td className="p-4">

                  <span
                    className="
                      rounded-full
                      bg-slate-800
                      px-3
                      py-1
                      text-sm
                    "
                  >

                    {post.status}

                  </span>

                </td>





                <td className="p-4 space-x-2">


                  <button

                    onClick={() => {

                      if (typeof onEdit === "function") {

                      onEdit(post);

                      }

                    }}
                    className="
                      rounded-lg
                      bg-yellow-600
                      px-3
                      py-1
                      text-sm
                      hover:bg-yellow-700
                    "

                  >

                    Editar

                  </button>




                  <button

                    onClick={() => {

                      if (typeof onDelete === "function") {

                      onDelete(post.id);

                      }

                    }}

                    className="
                      rounded-lg
                      bg-red-600
                      px-3
                      py-1
                      text-sm
                      hover:bg-red-700
                    "

                  >

                    Excluir

                  </button>


                </td>



              </tr>

            ))

          )}


        </tbody>


      </table>


    </div>

  );

}