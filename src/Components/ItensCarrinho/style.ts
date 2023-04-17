import styled from "styled-components";

export const Container = styled.li`
    border-radius: 8px;

  img {
    width: 100px;
    height: 100px;
    background-color: var(--cinza-100);
    margin: 14px 20px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .info {
    display: flex;
    align-items: center;
  }

  .coluna {
  }

  .divBotoes {
    display: flex;
    align-items: center;
  }

  .botao{
    border: none;
    color: var(--erro);
    font-size: 18px;
  }

  .nome{
    margin-bottom: 14px;
  }

  .lixeira{
    width: 14px;
    height: 16px;
  }
`;
