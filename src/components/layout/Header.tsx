import {
  Bell,
  Search,
  UserCircle2,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";



export default function Header() {


  const navigate = useNavigate();



  function handleLogout() {

    localStorage.removeItem("token");

    navigate("/login");

  }



  return (

    <header
      className="
        flex
        h-20
        items-center
        justify-between

        border-b
        border-slate-800

        bg-slate-900/80

        px-8

        backdrop-blur
      "
    >



      {/* Pesquisa */}

      <div
        className="
          flex
          items-center
          gap-3

          rounded-xl

          border
          border-slate-800

          bg-slate-950

          px-4
        "
      >

        <Search
          size={18}
          className="text-slate-500"
        />


        <input

          type="text"

          placeholder="Pesquisar..."

          className="
            w-96

            bg-transparent

            py-3

            text-sm

            outline-none

          "

        />


      </div>





      <div
        className="
          flex
          items-center
          gap-6
        "
      >


        <button>

          <Bell
            size={21}
            className="
              text-slate-400
              transition
              hover:text-white
            "
          />

        </button>





        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <UserCircle2
            size={38}
            className="text-blue-500"
          />


          <div>

            <p className="font-semibold">
              Astrox
            </p>


            <p className="text-xs text-slate-400">
              Administrador
            </p>


          </div>


        </div>





        <button

          onClick={handleLogout}

          className="
            flex
            items-center
            gap-2

            rounded-xl

            bg-red-600

            px-4
            py-2

            text-sm
            font-medium

            transition

            hover:bg-red-700

          "

        >

          <LogOut size={17}/>

          Sair


        </button>



      </div>


    </header>

  );

}