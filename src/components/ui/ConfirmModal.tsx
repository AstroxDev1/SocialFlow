type ConfirmModalProps = {
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
};


export default function ConfirmModal({
  title,
  message,
  onCancel,
  onConfirm,
}: ConfirmModalProps) {


  return (

    <div
      className="
        fixed
        inset-0
        z-[90]
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-sm
        p-4
      "
    >


      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-slate-700
          bg-slate-900
          p-6
          shadow-2xl
        "
      >


        <h2 className="
          text-2xl
          font-bold
          text-white
        ">
          {title}
        </h2>



        <p className="
          mt-3
          text-slate-400
        ">
          {message}
        </p>




        <div className="
          mt-8
          flex
          justify-end
          gap-3
        ">


          <button

            onClick={onCancel}

            className="
              rounded-xl
              bg-slate-800
              px-5
              py-3
              text-slate-300
              hover:bg-slate-700
            "

          >

            Cancelar

          </button>




          <button

            onClick={onConfirm}

            className="
              rounded-xl
              bg-red-600
              px-5
              py-3
              text-white
              hover:bg-red-700
            "

          >

            Excluir

          </button>



        </div>


      </div>


    </div>

  );

}