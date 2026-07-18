import PostForm from "./PostForm";


type Post = {
  id?: number;
  title: string;
  caption?: string;
  type: string;
  status: string;
  clientId?: number | null;
};


type Props = {
  open: boolean;
  onClose: () => void;
  post?: Post | null;
  onSuccess: () => void;
};


export default function PostModal({
  open,
  onClose,
  post,
  onSuccess,
}: Props) {


  if (!open) return null;


  return (

    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
        p-4
      "
    >

      <div
        className="
          w-full
          max-w-xl
          max-h-[90vh]
          overflow-y-auto
          rounded-2xl
          bg-slate-900
          p-6
          shadow-xl
        "
      >


        <div className="flex items-center justify-between mb-6">

          <h2 className="text-xl font-bold">
            {post ? "Editar Post" : "Novo Post"}
          </h2>


          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xl"
          >
            ✕
          </button>

        </div>



        <PostForm
          post={post}
          onSuccess={() => {

            onSuccess();

            onClose();

          }}
        />


      </div>


    </div>

  );
}