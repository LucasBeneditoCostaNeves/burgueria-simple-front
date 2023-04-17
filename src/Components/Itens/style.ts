import styled from "styled-components";

export const Li = styled.li`
    border-radius: 4px;
    border: 3px solid var(--cinza-100);
    margin-right: 20px;
    margin-bottom: 20px;

    
    .img{
        background-color: #F5F5E9;
        width: 180px;
    }

    .div{
        margin-left: 10px;
        margin-top: 10px;

        display: flex;
        flex-flow: column;
        text-align: center;
    }

    .h2{
        margin-top: 3px;
        font-size: 16px;
        font-weight: 600;
    }

    .span{
        color: var(--cinza-100);
        font-size: 14px;
    }

    .p{
        color: var(--verde);

        font-weight: 700;

        margin: 12px 0px;
    }

    .button{
        padding: 10px;
        color: var(--branco);
        background-color: var(--verde);
        border-radius: 4px;
        width: 80px;
        margin: 0 auto;
    }

    @media(min-width:800px){
    display: flex;
    flex-direction: column;
    align-items: center;

    .button{
        margin: 10px auto
    }

    .img{
        background-color: var(--branco);
    }
    }
`