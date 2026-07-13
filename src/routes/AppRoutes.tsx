import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Clients from "../pages/Clients";
import Posts from "../pages/Posts";
import Calendar from "../pages/Calendar";
import Library from "../pages/Library";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clientes" element={<Clients />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/calendario" element={<Calendar />} />
        <Route path="/biblioteca" element={<Library />} />
        <Route path="/configuracoes" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}