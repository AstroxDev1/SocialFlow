import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Clients from "../pages/Clients";
import Posts from "../pages/Posts.tsx";
import Calendar from "../pages/Calendar";
import Library from "../pages/Library";
import Setting from "../pages/Settings";
import NewSchedule from "../pages/NewSchedule";
import Schedules from "../pages/Schedules";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </PrivateRoute>
        }
      />

      {/* Clientes */}
      <Route
        path="/clientes"
        element={
          <PrivateRoute>
            <MainLayout>
              <Clients />
            </MainLayout>
          </PrivateRoute>
        }
      />

      {/* Posts */}
      <Route
        path="/posts"
        element={
          <PrivateRoute>
            <MainLayout>
              <Posts />
            </MainLayout>
          </PrivateRoute>
        }
      />

{/* Agendamentos */}
<Route
  path="/agendamentos"
  element={
    <PrivateRoute>
      <MainLayout>
        <Schedules />
      </MainLayout>
    </PrivateRoute>
  }
/>

{/* Novo Agendamento */}
<Route
  path="/agendamentos/novo"
  element={
    <PrivateRoute>
      <MainLayout>
        <NewSchedule />
      </MainLayout>
    </PrivateRoute>
  }
/>

      {/* Calendário */}
      <Route
        path="/calendario"
        element={
          <PrivateRoute>
            <MainLayout>
              <Calendar />
            </MainLayout>
          </PrivateRoute>
        }
      />

      {/* Biblioteca */}
      <Route
        path="/biblioteca"
        element={
          <PrivateRoute>
            <MainLayout>
              <Library />
            </MainLayout>
          </PrivateRoute>
        }
      />

      {/* Configuração */}
      <Route
        path="/configuracao"
        element={
          <PrivateRoute>
            <MainLayout>
              <Setting />
            </MainLayout>
          </PrivateRoute>
        }
      />

      {/* Página inicial */}
      <Route path="/" element={<Login />} />

      {/* Qualquer rota desconhecida */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}