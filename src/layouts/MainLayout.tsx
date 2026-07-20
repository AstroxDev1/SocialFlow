import type { ReactNode } from "react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";


type MainLayoutProps = {
  children: ReactNode;
};


export default function MainLayout({
  children,
}: MainLayoutProps) {

  return (

    <div
      className="
        flex
        min-h-screen
        bg-slate-950
        text-white
      "
    >

      <Sidebar />


      <div
        className="
          flex
          flex-1
          flex-col
        "
      >

        <Header />


        <main
          className="
            flex-1
            overflow-y-auto
            p-8
          "
        >

          {children}

        </main>


      </div>


    </div>

  );

}