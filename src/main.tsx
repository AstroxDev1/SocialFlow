import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { SidebarProvider } from "./context/SidebarProvider";

import {
  ThemeProvider,
} from "./context/ThemeContext";


import App from "./App";

import "./index.css";


createRoot(
  document.getElementById("root")!
).render(

<ThemeProvider> 

  <StrictMode>

    <BrowserRouter>

      <SidebarProvider>

        <App />

      </SidebarProvider>

    </BrowserRouter>

  </StrictMode>

</ThemeProvider>

);