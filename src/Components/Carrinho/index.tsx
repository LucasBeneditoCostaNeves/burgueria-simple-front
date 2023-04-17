import React, { useContext } from 'react'
import { ContextoCarrinho } from '../../Contexts/Carrinho'
import { iDados } from '../../Contexts/Hamburgueria'
import { Container } from './style'

export function Carrinho () {
    const { itemCarrinho } = useContext(ContextoCarrinho)

    if(itemCarrinho.length > 0){
        itemCarrinho.map((element :iDados) => console.log(element))
    }
  
 return (
    <Container></Container>
  )
}
