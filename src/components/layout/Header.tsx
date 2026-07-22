import {
  Search,
  Menu,
} from "lucide-react";


import {
  useSidebar,
} from "../../hooks/useSidebar";


import NotificationMenu from "./NotificationMenu";
import UserMenu from "./UserMenu";



export default function Header(){


  const {
    collapsed,
    toggleMobile,
  } = useSidebar();




  return (

    <header

      className={`

      fixed

      top-0

      right-0


      left-0


      ${
        collapsed
        ?
        "lg:left-[80px]"
        :
        "lg:left-[260px]"
      }


      h-[72px]


      z-40


      flex

      items-center

      justify-between


      border-b

      border-slate-800


      bg-[#121722]/90


      backdrop-blur-xl


      px-8


      transition-all

      duration-300

      `}

    >




      {/* Menu Mobile */}

      <button

        onClick={toggleMobile}

        className="
        flex
        text-slate-400

        lg:hidden
        "

      >

        <Menu size={22}/>

      </button>






      {/* Pesquisa */}

      <div

        className="

        hidden

        md:flex

        w-[360px]

        items-center

        gap-3


        rounded-xl


        border

        border-slate-800


        bg-slate-900


        px-4

        py-3


        transition


        focus-within:border-blue-500/50

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

          w-full

          bg-transparent

          text-sm

          outline-none

          placeholder:text-slate-500

          "

        />


      </div>







      {/* Área direita */}

      <div

        className="

        flex

        items-center

        gap-4

        "

      >


        <NotificationMenu />


        <UserMenu />


      </div>





    </header>


  );

}