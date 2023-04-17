import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  width: 98%;
  overflow-x: auto;
  margin-left: 20px;
  margin-top: 35px;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 97%;
  }
`;
