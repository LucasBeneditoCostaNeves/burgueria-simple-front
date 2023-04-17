import React, { useContext, useState } from "react";
import { ContextoCarrinho } from "../../Contexts/Carrinho";
import { ItensCarrinho } from "../ItensCarrinho";
import { Container } from "./style";

export function ModalCarrinho() {
  const {
    itemCarrinho,
    valorTotal,
    removerTodoCarrinho,
    abrirModalCarrinho,
    definirModalCarrinho,
  } = useContext(ContextoCarrinho);

  // if (!abrirModalCarrinho) {
  //   return;
  // }

  if (itemCarrinho.length > 0) {
    return (
      <Container>
        <div className="divP">
          <p className="pCarrinho">Carrinho de Compras</p>
          <span className="x" onClick={() => definirModalCarrinho(false)}>
            X
          </span>
        </div>
        <ul className="essa">
          {itemCarrinho.map((element) => ItensCarrinho(element))}
        </ul>
        <div className="divValor">
          <span className="spanTotal">Total:</span>
          <span className="valor">{valorTotal}</span>
        </div>
        <button className="botaoRemover" onClick={() => removerTodoCarrinho()}>
          Remover Todos os Itens
        </button>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className="divP">
          <p className="pCarrinho">Carrinho de Compras</p>
          <span className="x" onClick={() => definirModalCarrinho(false)}>
            X
          </span>
        </div>
        <div className="divVazio">
          <h2 className="h2Vazio">Sua Sacola está vazia</h2>
          <span className="spanVazio">Adicone itens</span>
        </div>
      </Container>
    );
  }
}
