import {
  useContext,
} from "react";


import {
  SidebarContext,
} from "../context/sidebar-context";



export function useSidebar() {


  const context =
    useContext(SidebarContext);



  if (!context) {

    throw new Error(
      "useSidebar deve estar dentro do SidebarProvider"
    );

  }


  return context;

}