import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Image,
  Settings,
} from "lucide-react";


const menu = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: Users,
    label: "Clientes",
    path: "/clientes",
  },
  {
    icon: FileText,
    label: "Posts",
    path: "/posts",
  },
  {
    icon: Calendar,
    label: "Calendário",
    path: "/calendario",
  },
  {
    icon: Image,
    label: "Biblioteca",
    path: "/biblioteca",
  },
  {
    icon: Settings,
    label: "Configurações",
    path: "/configuracao",
  },
];



export default function Sidebar() {


  return (

    <aside
      className="
        flex
        w-72
        flex-col
        border-r
        border-slate-800
        bg-slate-900
      "
    >


      {/* Logo */}

      <div
        className="
          border-b
          border-slate-800
          p-6
        "
      >

        <h1
          className="
            text-3xl
            font-black
            tracking-tight
            text-blue-500
          "
        >
          SocialFlow
        </h1>


        <p
          className="
            mt-1
            text-sm
            text-slate-400
          "
        >
          Gestão de redes sociais
        </p>


      </div>





      {/* Menu */}

      <nav
        className="
          flex-1
          space-y-2
          p-4
        "
      >

        {menu.map((item) => {


          const Icon = item.icon;


          return (

            <NavLink

              key={item.label}

              to={item.path}

              className={({isActive}) => `

                group

                flex
                items-center
                gap-3

                rounded-xl

                px-4
                py-3

                text-sm
                font-medium

                transition-all

                ${
                  isActive

                  ?

                  "bg-blue-600 text-white shadow-lg shadow-blue-600/20"

                  :

                  "text-slate-400 hover:bg-slate-800 hover:text-white"

                }

              `}

            >

              <Icon
                size={21}
                className="
                  transition
                  group-hover:scale-110
                "
              />


              {item.label}


            </NavLink>

          );

        })}


      </nav>





      {/* Rodapé */}

      <div
        className="
          border-t
          border-slate-800
          p-4
          text-xs
          text-slate-500
        "
      >

        SocialFlow v1.0

      </div>


    </aside>

  );

}