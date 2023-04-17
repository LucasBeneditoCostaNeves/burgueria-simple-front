import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Info } from "../../Components/Info";
import { Input } from "../../Components/Input";
import { ToastContainer } from 'react-toastify';
import { ContextoHamburgueria } from "../../Contexts/Hamburgueria";
import { Container } from "./style";

interface iDataCadastro {
  name: string;
  email: string;
  password: string;
  repassword?: string;
}

export function PaginaDeCadastro() {

  const { register, handleSubmit } = useForm<iDataCadastro>();
  const { cadastrar } = useContext(ContextoHamburgueria);

  interface iTeste {
    cadastrar: void;
  }

  return (
    <Container>
      <Info />
      <div className="divExterna">
        <div className="formulario">
          <div className="flex">
            <h2 className="login">Cadastro</h2>
            <Link className="link" to="/login">
              Retornar para o Login
            </Link>
          </div>
          <form onSubmit={handleSubmit(cadastrar)}>
            <Input
              placeholder="Digite seu nome aqui"
              label="Nome"
              type="text"
              register={register("name")}
            />
            <Input
              placeholder="Digite seu email aqui"
              label="Email"
              type="text"
              register={register("email")}
            />
            <Input
              placeholder="Digite sua senha aqui"
              label="Senha"
              type="password"
              register={register("password")}
            />
            <Input
              placeholder="Digite novamente sua senha aqui"
              label=""
              type="password"
              register={register("repassword")}
            />
            <button className="button">Cadastrar</button>
            <span className="span">Cadastre-se e mate sua fome!</span>
          </form>
        </div>
      </div>
    </Container>
  );
}
