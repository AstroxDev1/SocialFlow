import {
  useEffect,
  useState
} from "react";

import api from "../../services/api";


type Props = {
  onClose: () => void;
};



export default function ThemeModal({
  onClose
}:Props) {


  const [theme,setTheme] =
    useState("dark");



  useEffect(()=>{

    async function loadTheme(){

      try{

        const response =
          await api.get("/theme");


        if(response.data?.theme){

          setTheme(
            response.data.theme
          );

        }


      }catch(error){

        console.error(error);

      }

    }


    loadTheme();

  },[]);






  async function saveTheme(){


    try{


      await api.put(
        "/theme",
        {
          theme,
        }
      );


      alert(
        "Tema atualizado!"
      );


      onClose();



    }catch(error){

      console.error(error);


      alert(
        "Erro ao salvar tema."
      );

    }

  }





  return (

    <div className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/70
    ">


      <div className="
        w-full
        max-w-md
        rounded-2xl
        bg-slate-900
        border
        border-slate-800
        p-6
      ">


        <h2 className="
          text-2xl
          font-bold
          text-white
        ">
          Tema
        </h2>



        <div className="
          mt-6
          space-y-3
        ">


          <button

            onClick={()=>
              setTheme("dark")
            }

            className={`
              w-full
              rounded-lg
              px-4
              py-3
              text-left
              ${
                theme === "dark"
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-300"
              }
            `}

          >
            🌙 Tema Escuro

          </button>




          <button

            onClick={()=>
              setTheme("light")
            }

            className={`
              w-full
              rounded-lg
              px-4
              py-3
              text-left
              ${
                theme === "light"
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-300"
              }
            `}

          >
            ☀️ Tema Claro

          </button>



        </div>





        <div className="
          mt-6
          flex
          justify-end
          gap-3
        ">


          <button

            onClick={onClose}

            className="
              rounded-lg
              bg-slate-700
              px-4
              py-2
              text-white
            "

          >
            Cancelar

          </button>



          <button

            onClick={saveTheme}

            className="
              rounded-lg
              bg-blue-600
              px-4
              py-2
              text-white
            "

          >
            Salvar

          </button>



        </div>



      </div>


    </div>

  );

}