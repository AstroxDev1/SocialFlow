import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Image,
  Settings,
  Menu,
} from "lucide-react";

import { useSidebar } from "../../hooks/useSidebar";


const sections = [
  {
    title: "Geral",

    items: [
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
    ],
  },

  {
    title: "Sistema",

    items: [
      {
        icon: Settings,
        label: "Configurações",
        path: "/configuracao",
      },
    ],
  },
];



export default function Sidebar() {


  const {
    collapsed,
    mobileOpen,
    toggleSidebar,
    toggleMobile,
  } = useSidebar();



  function handleToggle(){

    if(window.innerWidth < 1024){

      toggleMobile();

    }else{

      toggleSidebar();

    }

  }



  return (

    <>


      {
        mobileOpen && (

          <div

            onClick={toggleMobile}

            className="
            fixed
            inset-0
            bg-black/60
            z-40
            lg:hidden
            "

          />

        )

      }



      <aside

        className={`
        fixed
        top-0
        left-0

        z-50

        h-screen

        flex
        flex-col

        bg-[#121722]

        border-r
        border-slate-800

        transition-all
        duration-300


        ${
          collapsed
          ?
          "w-[80px]"
          :
          "w-[260px]"
        }


        ${
          mobileOpen
          ?
          "translate-x-0"
          :
          "-translate-x-full lg:translate-x-0"
        }

        `}

      >


        {/* Botão */}

        <button

          onClick={handleToggle}

          className="
          absolute
          right-[-12px]
          top-6

          hidden
          lg:flex

          h-6
          w-6

          items-center
          justify-center

          rounded-full

          bg-blue-600

          text-white

          shadow-lg

          "

        >

          <Menu size={14}/>

        </button>




        {/* Logo */}

        <div

          className={`
          border-b
          border-slate-800

          py-7

          transition-all

          ${
            collapsed
            ?
            "px-4"
            :
            "px-7"
          }

          `}

        >

          <div
            className={`
            flex
            items-center

            ${
              collapsed
              ?
              "justify-center"
              :
              "gap-3"
            }
            `}
          >

            <div
              className="
              h-3
              w-3
              rounded-full
              bg-blue-500
              "
            />


            {
              !collapsed && (

                <div>

                  <h1 className="
                  text-lg
                  font-semibold
                  ">
                    SocialFlow
                  </h1>


                  <p className="
                  text-xs
                  text-slate-500
                  ">
                    Social Media Manager
                  </p>

                </div>

              )
            }


          </div>


        </div>





        {/* Menu */}

        <div
          className="
          flex-1
          overflow-y-auto
          px-4
          py-6
          "
        >


          {
            sections.map(section => (

              <div

                key={section.title}

                className="mb-10"

              >


                {
                  !collapsed && (

                    <p
                      className="
                      mb-3
                      px-3

                      text-xs
                      font-semibold
                      uppercase
                      tracking-widest
                      text-slate-500
                      "
                    >
                      {section.title}
                    </p>

                  )

                }



                <nav className="space-y-1">


                {
                  section.items.map(item => {


                    const Icon = item.icon;


                    return (

                      <NavLink

                        key={item.path}

                        to={item.path}


                        className={({isActive}) => `

                        group

                        relative

                        flex

                        items-center

                        rounded-xl

                        px-4
                        py-3


                        transition-all


                        ${
                          collapsed
                          ?
                          "justify-center"
                          :
                          "gap-3"
                        }


                        ${
                          isActive
                          ?
                          "bg-slate-800 text-white"
                          :
                          "text-slate-400 hover:bg-slate-800/60 hover:text-white"
                        }

                        `}

                      >


                        <Icon size={19}/>



                        {
                          !collapsed && (

                            <span className="font-medium">

                              {item.label}

                            </span>

                          )
                        }



                        {
                          collapsed && (

                            <span

                              className="
                              absolute
                              left-14

                              hidden
                              group-hover:block

                              whitespace-nowrap

                              rounded-lg

                              bg-slate-900

                              border
                              border-slate-800

                              px-3
                              py-2

                              text-xs

                              text-white

                              shadow-xl
                              "

                            >

                              {item.label}

                            </span>

                          )
                        }


                      </NavLink>

                    )

                  })
                }


                </nav>


              </div>

            ))
          }


        </div>





        {/* Usuário */}

        <div

          className="
          border-t
          border-slate-800
          p-5
          "

        >


          {
            collapsed ?

            (

              <div

                className="
                flex
                justify-center
                "

              >

                <div

                  className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-full

                  bg-blue-600

                  font-bold
                  "

                >

                  A

                </div>

              </div>

            )


            :

            (

              <div

                className="
                rounded-xl
                bg-slate-900
                p-4
                "

              >

                <p className="font-medium">
                  Astrox
                </p>


                <p className="
                text-sm
                text-slate-500
                ">
                  Administrador
                </p>


                <div className="
                mt-4
                border-t
                border-slate-800
                pt-3
                ">

                  <p className="
                  text-xs
                  text-slate-500
                  ">
                    SocialFlow v1.0.0
                  </p>

                </div>


              </div>

            )

          }


        </div>



      </aside>


    </>

  );

}