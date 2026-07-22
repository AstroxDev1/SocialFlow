import { useState } from "react";


type UploadModalProps = {
  onClose: () => void;
  onSave: (file: File) => void;
};



export default function UploadModal({
  onClose,
  onSave,
}: UploadModalProps) {


  const [file, setFile] =
    useState<File | null>(null);


  const [dragActive, setDragActive] =
    useState(false);





  function handleFile(
    selectedFile: File
  ) {

    setFile(selectedFile);

  }







  function handleDrop(
    e: React.DragEvent<HTMLDivElement>
  ) {

    e.preventDefault();


    setDragActive(false);



    const droppedFile =
      e.dataTransfer.files[0];


    if(droppedFile){

      handleFile(droppedFile);

    }

  }








  function handleSubmit(){


    if(!file){

      return;

    }


    onSave(file);


  }









  return (

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
        p-4
      "
    >



      <div
        className="
          w-full
          max-w-lg
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
          Upload de arquivo
        </h2>



        <p className="
          mt-2
          text-sm
          text-slate-400
        ">
          Arraste um arquivo ou clique para selecionar.
        </p>







        <div

          onDragOver={(e)=>{

            e.preventDefault();

            setDragActive(true);

          }}


          onDragLeave={()=>{

            setDragActive(false);

          }}


          onDrop={handleDrop}


          className={`
            mt-6

            flex

            h-48

            cursor-pointer

            flex-col

            items-center

            justify-center

            rounded-2xl

            border-2

            border-dashed

            transition


            ${
              dragActive

              ? "border-blue-500 bg-blue-500/10"

              : "border-slate-700 bg-slate-800"

            }

          `}

        >


          <div className="text-5xl">
            📂
          </div>



          <p className="
            mt-3
            text-slate-300
          ">

            Arraste seu arquivo aqui

          </p>



          <label
            className="
              mt-3
              cursor-pointer
              rounded-lg
              bg-blue-600
              px-4
              py-2
              text-sm
              text-white
              hover:bg-blue-700
            "
          >

            Escolher arquivo


            <input

              type="file"

              className="hidden"

              onChange={(e)=>{

                const selected =
                  e.target.files?.[0];


                if(selected){

                  handleFile(selected);

                }

              }}

            />


          </label>



        </div>









        {file && (

          <div
            className="
              mt-5
              rounded-xl
              bg-slate-800
              p-4
            "
          >

            <p className="
              text-sm
              text-slate-400
            ">
              Arquivo selecionado:
            </p>


            <p className="
              mt-1
              truncate
              font-medium
              text-white
            ">

              {file.name}

            </p>


          </div>

        )}









        <div className="
          mt-8
          flex
          justify-end
          gap-3
        ">



          <button

            onClick={onClose}

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

            onClick={handleSubmit}

            disabled={!file}

            className="
              rounded-xl
              bg-blue-600
              px-5
              py-3
              text-white
              transition
              hover:bg-blue-700
              disabled:cursor-not-allowed
              disabled:opacity-50
            "

          >

            Enviar

          </button>



        </div>



      </div>


    </div>

  );

}