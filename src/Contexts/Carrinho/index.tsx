import React, { useState } from "react";
import { createContext } from "react";
import { api } from "../../Service";
import { toast } from "react-toastify";

import { iDados } from "../Hamburgueria";

interface iContextoCarrinhoProps {
  children: React.ReactNode;
}
export interface iDados1 {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

interface iCreateContext{
    itemCarrinho: iDados[];
    definirItemCarrinho: React.Dispatch<React.SetStateAction<iDados[]>>;
    adicionarAoCarrinho: (item: iDados) => void;
    removerDoCarrinho: (nome: string) => void;
    removerTodoCarrinho: () => void;
    somarValor: (element: iDados) => void;
    subtrairValor: (element: iDados) => void;
    valorTotal: number;
    definirValorTotal: React.Dispatch<React.SetStateAction<number>>;
    abrirModalCarrinho: boolean;
    definirModalCarrinho: React.Dispatch<React.SetStateAction<boolean>>
}

export const ContextoCarrinho = createContext({} as iCreateContext);

export function FunçoesDeCarrinho({ children }: iContextoCarrinhoProps) {
  const [itemCarrinho, definirItemCarrinho] = useState([]as Array<iDados>);
  const [ valorTotal, definirValorTotal ] = useState(0)
  const [ abrirModalCarrinho, definirModalCarrinho ] = useState(false)
  console.log(valorTotal)

  function adicionarAoCarrinho(item: iDados) {
    definirItemCarrinho([...itemCarrinho, item]);
  }

  function removerDoCarrinho(nome: string) {
    const filtro = itemCarrinho.filter((element) => element.name !== nome);
    definirItemCarrinho(filtro);
  }

  function removerTodoCarrinho() {
    if(itemCarrinho.length){
        definirModalCarrinho(false)
    }
    definirItemCarrinho([]);
    window.location.reload()
  }

  function somarValor(element: iDados){
    definirValorTotal(valorTotal + element.price);
  }

  function subtrairValor(element: iDados){
    definirValorTotal(valorTotal - element.price);
  }

  return (
    <ContextoCarrinho.Provider
      value={{ itemCarrinho, definirItemCarrinho, adicionarAoCarrinho, removerDoCarrinho, removerTodoCarrinho, valorTotal, definirValorTotal, somarValor, subtrairValor, definirModalCarrinho, abrirModalCarrinho }}
    >
      {children}
    </ContextoCarrinho.Provider>
  );
}
