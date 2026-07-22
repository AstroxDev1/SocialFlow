import { useState } from "react";
import axios from "axios";
import api from "../services/api";
import { Mail, Lock, ArrowRight,} from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center bg-[#0B1020] relative overflow-hidden">

      {/* efeitos de fundo */}
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20" />

      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bottom-0 right-0" />


      <div className="relative w-full max-w-md">

        {/* Logo */}



        {/* Card */}
        <div className="
          bg-[#141B2D]/80
          backdrop-blur-xl
          border border-[#26324B]
          rounded-2xl
          p-8
          shadow-2xl
        ">


          <h2 className="text-2xl font-bold text-white mb-6">
            Bem-vindo de volta
          </h2>


          {/* Email */}
          <div className="mb-4">

            <label className="text-sm text-slate-400">
              Email
            </label>

            <div className="
              flex items-center
              bg-[#0B1020]
              border border-[#26324B]
              rounded-lg
              mt-2
              px-3
            ">

              <Mail size={18} className="text-slate-400"/>

              <input
                className="
                  w-full
                  bg-transparent
                  p-3
                  text-white
                  outline-none
                "
                placeholder="seu@email.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />

            </div>

          </div>



          {/* Senha */}
          <div className="mb-6">

            <label className="text-sm text-slate-400">
              Senha
            </label>


            <div className="
              flex items-center
              bg-[#0B1020]
              border border-[#26324B]
              rounded-lg
              mt-2
              px-3
            ">

              <Lock size={18} className="text-slate-400"/>


              <input
                className="
                  w-full
                  bg-transparent
                  p-3
                  text-white
                  outline-none
                "
                placeholder="********"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

            </div>

          </div>



          <button
            onClick={handleLogin}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              bg-blue-600
              hover:bg-blue-500
              text-white
              font-medium
              py-3
              rounded-lg
              transition
              shadow-lg
              shadow-blue-600/20
            "
          >

            Entrar

            <ArrowRight size={18}/>

          </button>


        </div>


        <p className="text-center text-slate-500 text-sm mt-6">
          © 2026 SocialFlow
        </p>


      </div>

    </div>
  );
}