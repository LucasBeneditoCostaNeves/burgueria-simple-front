import styled from "styled-components";

export const Container = styled.div`

  .info {
    display: flex;
    align-items: center;
    padding: 10px 0px;
    border: 2px solid var(--cinza-100);
    width: 87%;
    padding: 19px 6%;
    margin: 25px 0px;
  }

  img {
    width: 42px;
    height: 41px;
  }

  p {
    font-size: 15px;
    margin-left: 15px;
  }

  @media(min-width: 700px){
    .info{
        max-width: 364px;
    }
  }
`;
