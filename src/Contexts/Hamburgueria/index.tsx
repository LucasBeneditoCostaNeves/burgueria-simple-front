import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubmitHandler } from "react-hook-form";

interface iContextoHamburgueriaProps {
  children: React.ReactNode;
}

export interface iDados {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

interface iDataCadastro {
  name: string;
  email: string;
  password: string;
  repassword?: string;
}

interface iDataLogin {
  email: string;
  password: string;
}

interface iCreateContext {
  cadastrar: SubmitHandler<iDataCadastro>;
  login: SubmitHandler<iDataLogin>;
  autoLogin: () => void;
  protejerRotas: () => void;
  dados: iDados | null;
}

export const ContextoHamburgueria = createContext({} as iCreateContext);

export function FunçoesDeRequisicoes({ children }: iContextoHamburgueriaProps) {
  const navigate = useNavigate();
  const [dados, definirDados] = useState<iDados | null>(null);

   const cadastrar:SubmitHandler<iDataCadastro> = async (data) => {
    console.log(data);

    if(data.password != data.repassword){
      return toast.error("Senhas diferentes")
    }

    try {
      const resposta = await api.post("/users", data);

      navigate("/login");
      console.log(resposta);
    } catch {
      console.log("erro");
      toast.error("testetester");
    }
  }

   const login:SubmitHandler<iDataLogin> =  async (data) => {
    console.log(data);
    try {
      const resposta = await api.post("/login", data);
      const { accessToken, user } = resposta.data;

      localStorage.setItem("@Token", accessToken);
      toast.success("Usuário Logado! 😎");

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch {
      console.log("erro");
      toast.error("Email ou senha incorreto 🚨");
    }
  }

  async function autoLogin() {
    //Token salvo no LocalStorage
    const token = localStorage.getItem("@Token");

    //Se não existir token não acontece nada
    if (!token) {
      return;
    }

    //Vai ver se o token é válido se for vai redirecionar para a dashboard
    try {
      const response = await api.get("/products", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      //colocando os dados do usuário dentro do meu useState
      definirDados(response.data);
      //redirecionando ele para a dashboard
        navigate("/dashboard");
    } catch {
      //caso o token não for válido não vai ser redirecionado
      console.log("erro");
    }
  }

  async function protejerRotas() {
    //Buscando o token salvo no localStorage
    const token = localStorage.getItem("@Token");

    //Se não existir token vamos enviar o Usuário para o Login
    if (!token) {
      navigate("/login");
    }

    //Vai ver se o token é válido se for vai só capturar os dados
    try {
      const response = await api.get("/products", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      //Salvando os dados do usuário no useState
      console.log(response.data);
      definirDados(response.data);
    } catch {
      navigate("/login");
    }
  }

  return (
    <ContextoHamburgueria.Provider
      value={{ cadastrar, login, autoLogin, protejerRotas, dados }}
    >
      {children}
    </ContextoHamburgueria.Provider>
  );
}
