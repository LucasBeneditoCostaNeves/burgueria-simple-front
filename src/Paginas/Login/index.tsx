import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Info } from "../../Components/Info";
import { Input } from "../../Components/Input";
import { ContextoHamburgueria } from "../../Contexts/Hamburgueria";
import { ToastContainer } from 'react-toastify';
import { api } from "../../Service";
import { Container } from "./style";

interface iDataLogin {
  email: string;
  password: string;
}

export function PaginaDeLogin() {
  const { register, handleSubmit } = useForm<iDataLogin>();
  const { login, autoLogin } = useContext(ContextoHamburgueria);

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <Container>
        <Info/>
      <div className="divExterna">
        <div className="formulario">
          <h2 className="login">Login</h2>
          <form onSubmit={handleSubmit(login)}>
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
            <button className="button">Entrar</button>
            <span>
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </span>
            <div className="divLink">
            <Link to='/cadastro' className='link'>Cadastrar</Link>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
