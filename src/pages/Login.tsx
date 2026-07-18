import { useState } from "react";
import axios from "axios";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      alert("Login realizado!");

      window.location.href = "/dashboard";
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert(
          error.response?.data?.error ||
          error.response?.data?.message ||
          "Erro ao fazer login"
        );
      } else {
        alert("Erro ao fazer login");
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-900 p-8 rounded-xl">
        <h1 className="mb-5 text-3xl font-bold">
          Login
        </h1>

        <input
          className="mb-3 block rounded p-2 text-black"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="mb-3 block rounded p-2 text-black"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="rounded bg-blue-600 px-5 py-2"
          onClick={handleLogin}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}