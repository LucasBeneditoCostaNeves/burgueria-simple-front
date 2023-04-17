import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;



  .divExterna {
    border: 2px solid #f5f5f5;
    box-shadow: 0px 0px 21px 0px var(--cinza-100);
    border-radius: 5px;
    margin-bottom: 40px;
    height: 400px;
  }

  .formulario {
    width: 85%;
    margin: 0 auto;
  }

  .login {
    font-size: 20px;
    font-weight: 700;
    margin: 25px 0px 25px 0px;
    color: var(--cinza-600);
  }

  label {
    color: var(--cinza-300);
    font-size: 15px;
    position: absolute;
    top: -7px;
    left: 7px;
    background: white;
  }

  input {
    height: 45px;
    border-radius: 6px;
    border: solid 2px var(--cinza-600);
  }

  .divInput {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 26px 0px;
  }

  .button {
    width: 100%;
    height: 47px;
    border: none;
    border-radius: 6px;
    background-color: var(--verde);
    font-size: 18px;
    color: var(--branco);
  }

  span {
    text-align: center;
    display: flex;
    margin: 15px 0px 15px 0px;
    color: var(--cinza-300);
  }

  .link{
    width: 100%;
    height: 47px;
    border: none;
    border-radius: 6px;
    background-color: var(--cinza-300);
    font-size: 18px;
    color: var(--branco);
    padding: 12px 38%;
    text-decoration: none;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row-reverse;
    width: 92%;
    margin-top: 70px;
    justify-content: center;

    .divExterna {
      width: 60%;
      max-width: 373px
    }

    .div40{
        margin-left: 35px;
        margin-top: 55px;
    }
  }
`;
