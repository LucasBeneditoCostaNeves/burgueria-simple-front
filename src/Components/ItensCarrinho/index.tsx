import React, { useContext, useState } from "react";
import { ContextoCarrinho } from "../../Contexts/Carrinho";
import img from "../../imgs/lixeira.png";
import { Container } from "./style";

export function ItensCarrinho(element: any) {
  const {
    removerDoCarrinho,
    somarValor,
    subtrairValor,
    itemCarrinho,
  } = useContext(ContextoCarrinho);

  function adicionarQuantidade(element: any) {
    somarValor(element);
  }

  function diminuirQuantidade(element: any) {
    subtrairValor(element);
  }

  return (
    <Container>
      <div className="flex">
        <div className="info">
          <img className="img" src={element.img} alt="" />
          <div className="coluna">
            <p className="nome">{element.name}</p>
          </div>
        </div>
        <img
          src={img}
          className="lixeira"
          onClick={() => {removerDoCarrinho(element.name) 
            diminuirQuantidade(element)
          }}
        ></img>
      </div>
    </Container>
  );
}
