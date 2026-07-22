import {
  createContext,
} from "react";


export interface SidebarContextType {

  collapsed: boolean;

  mobileOpen: boolean;

  toggleSidebar: () => void;

  toggleMobile: () => void;

}



export const SidebarContext =
createContext<SidebarContextType | null>(null);