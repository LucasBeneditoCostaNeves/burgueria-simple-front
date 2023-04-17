import React, { useContext, useEffect, useState } from "react";
import { Carrinho } from "../../Components/Carrinho";
import { Lista } from "../../Components/Lista";
import { Logo } from "../../Components/Logo";
import { ModalCarrinho } from "../../Components/ModalCarrinho";
import { ContextoCarrinho } from "../../Contexts/Carrinho";
import { ContextoHamburgueria } from "../../Contexts/Hamburgueria";
import { Container } from "./style";
import carrinho from "../../imgs/carrinho.png";
import porta from "../../imgs/porta.png";

export function PaginaDaDashboard() {
  const { protejerRotas, dados } = useContext(ContextoHamburgueria);
  const { definirModalCarrinho, abrirModalCarrinho } =
    useContext(ContextoCarrinho);

  useEffect(() => {
    protejerRotas();
  }, []);

  return (
    <Container>
      <div className="divTopLogo">
        <Logo />
        <div className="imgs">
          <img className="carrinho" src={carrinho} onClick={() => definirModalCarrinho(true)}></img>
          <img
            src={porta}
            onClick={() => {
              localStorage.removeItem("@Token");
              protejerRotas();
            }}
          ></img>
        </div>
      </div>

      {dados && <Lista dados={dados} />}
      <Carrinho />
      {abrirModalCarrinho && <ModalCarrinho />}
    </Container>
  );
}
