import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ContextoCarrinho } from "../../Contexts/Carrinho";
import { iDados } from "../../Contexts/Hamburgueria";
import { Li } from "./style";

interface iItens {
  category: string;
  id: any;
  img: string;
  name: string;
  price: number;
}

export function Itens(element: iItens) {
  const { itemCarrinho, adicionarAoCarrinho, removerDoCarrinho, valorTotal, definirValorTotal, somarValor, subtrairValor } =
    useContext(ContextoCarrinho);
  const [ teste, definirTeste ] = useState(true)

  //Função para não haver repetição de renrização de produto já existente no carrinho
  function filtrandoUmItemDeCadaProduto(element: iDados) {
    //Fazendo um .map() para selecionar apenas os ids de todos os produtos já existentes no carrinho
    const ids = itemCarrinho.map((elemento: iDados) => elemento.id);
    const indexOf = ids.indexOf(element.id);

    if (indexOf == -1) {
      adicionarAoCarrinho(element);
      somarValor(element)
      toast("Item adicionado no seu Carrinho! 🛒");
    } else if (indexOf !== -1) {
      toast.error("Item removido do carrinho");
    }
  }

  useEffect(() => {
    //Vou verificar se esse item foi deletado pelo modal, se for, irei trocar o innerText dele e suas funcionalidades
    function verificarExistencia(){
      const ids = itemCarrinho.map((elemento: iDados) => elemento.id);
      const indexOf = ids.indexOf(element.id);
  
      if(indexOf == -1){
        definirTeste(true)
      }
    }
    verificarExistencia() 
  },[itemCarrinho])


  function innerTextBotao(element :iDados){
    if(teste){
      definirTeste(false)
    }else{
      definirTeste(true)
      removerDoCarrinho(element.name)
      subtrairValor(element);
    }
  }

  return (
    <Li>
      <img className="img" src={element.img} alt="" />
      <div className="div">
        <h2 className="h2">{element.name}</h2>
        <span className="span">{element.category}</span>
        <p className="p">R$ {Math.floor(element.price)},00</p>
        <button
          className="button"
          id={element.id}
          onClick={() => {filtrandoUmItemDeCadaProduto(element)
            innerTextBotao(element)
          }}
        >
          {teste && 'Cadastar'}
          {!teste && 'Remover'}
        </button>
      </div>
    </Li>
  );
}
