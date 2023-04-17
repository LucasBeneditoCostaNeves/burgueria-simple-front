import React, { ReactNode } from "react";
import { Itens } from "../Itens";
import { Ul } from "./stye";

interface iElement {
  dados: {
    category: string;
    id: number;
    img: string;
    name: string;
    price: number;
  };
}


export function Lista({ dados }: any) {
  return <Ul>{dados && dados.map((element: any) => Itens(element))}</Ul>;
}
