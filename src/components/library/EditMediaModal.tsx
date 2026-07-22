import { useState } from "react";

type Media = {
  id: number;
  name: string;
  type: string;
};

type EditMediaModalProps = {
  media: Media;
  onClose: () => void;
  onSave: (data: {
    id: number;
    name: string;
    type: string;
  }) => void;
};


export default function EditMediaModal({
  media,
  onClose,
  onSave,
}: EditMediaModalProps) {

  const [name, setName] = useState(media.name);

  const [type, setType] = useState(media.type);



  function handleSubmit() {

    onSave({
      id: media.id,
      name,
      type,
    });

    onClose();

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


        <h2 className="text-2xl font-bold text-white">
          Editar mídia
        </h2>


        <p className="mt-2 text-sm text-slate-400">
          Altere as informações do arquivo.
        </p>



        <div className="mt-6 space-y-4">


          <input

            value={name}

            onChange={(e)=>setName(e.target.value)}

            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              px-4
              py-3
              text-white
              outline-none
              focus:border-blue-500
            "

          />



          <select

            value={type}

            onChange={(e)=>setType(e.target.value)}

            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              px-4
              py-3
              text-white
            "

          >

            <option>
              Imagem
            </option>

            <option>
              Vídeo
            </option>

            <option>
              Documento
            </option>

            <option>
              Arte
            </option>


          </select>


        </div>



        <div
          className="
            mt-8
            flex
            justify-end
            gap-3
          "
        >


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

            className="
              rounded-xl
              bg-blue-600
              px-5
              py-3
              text-white
              hover:bg-blue-700
            "

          >

            Salvar

          </button>


        </div>


      </div>


    </div>

  );
}