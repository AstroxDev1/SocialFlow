import type { ReactNode } from "react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

import {
  useSidebar
} from "../hooks/useSidebar";


interface Props {

  children: ReactNode;

}



export default function MainLayout({
  children
}: Props) {


  const {
    collapsed
  } = useSidebar();



  return (

    <div

      className="
      min-h-screen
      bg-[#070b18]
      text-white
      "

    >


      <Sidebar />




      <div

        className={`

        transition-all
        duration-300


        ${
          collapsed
          ?
          "lg:ml-[80px]"
          :
          "lg:ml-[260px]"
        }

        `}

      >



        <Header />




        <main

          className="
          pt-[72px]
          min-h-screen
          p-8
          "

        >

          {children}

        </main>



      </div>



    </div>

  );

}