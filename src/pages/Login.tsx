import { useState } from "react";
import axios from "axios";


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function handleLogin() {

    try {

      const response = await axios.post(
        "http://localhost:3333/login",
        {
          email,
          password
        }
      );


      localStorage.setItem(
        "token",
        response.data.token
      );


      alert("Login realizado!");

      window.location.href = "/dashboard";


    } catch (error:any) {

      alert(
        error.response?.data?.error ||
        "Erro ao fazer login"
      );

    }

  }


  return (

    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-slate-900 p-8 rounded-xl">

        <h1 className="text-3xl font-bold mb-5">
          Login
        </h1>


        <input
          className="block mb-3 p-2 rounded text-black"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />


        <input
          className="block mb-3 p-2 rounded text-black"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />


        <button
          className="bg-blue-600 px-5 py-2 rounded"
          onClick={handleLogin}
        >
          Entrar
        </button>


      </div>

    </div>

  );
}