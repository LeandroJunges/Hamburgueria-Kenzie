import styled from "styled-components";
export const ContainerGeneralCart = styled.div`
  @media (min-width: 768px) {
    width: 330px;
    margin: 0 auto;
  }
`;

export const ContainerCart = styled.div`
  width: 615px;
  height: 350px;
  overflow: auto;

  @media (min-width: 425px) {
    width: 574px;
    height: 170px;
  }
  @media (min-width: 768px) {
    width: 330px;
    height: 220px;
  }

  @media (min-width: 1024px) {
    height: 50%;
  }
`;

export const HeaderCart = styled.div`
  width: 550px;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: rgba(39, 174, 96, 1);
  border-radius: 8px;
  margin: 0px auto;

  h3 {
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    margin: 0 auto;
  }
  @media (min-width: 425px) {
    height: 60px;

    h3 {
      font-size: 26px;
    }
  }
  @media (min-width: 768px) {
    width: 330px;
    margin: 42px auto;

    h3 {
      font-size: 24px;
    }
  }
  @media (min-width: 1024px) {
    height: 50px;
    margin: 10px auto;

    h3 {
      font-size: 20px;
    }
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 5px #c0c0c0;
  figure {
    width: 120px;
  }
  img {
    width: 120px;
  }
  h3 {
    font-size: 25px;
  }
  span {
    font-size: 19px;
  }
  button {
    color: #f10;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 22px;
  }
  @media (min-width: 768px) {
    width: 315px;
    margin: 0 auto;
    figure {
      width: 70px;
      margin-block: 0;
      margin-inline: 10px;
    }
    img {
      width: 70px;
    }
    h3 {
      font-size: 17px;
    }
    span {
      font-size: 13px;
    }
    button {
      font-size: 13px;
    }
  }

  @media (min-width: 1024px) {
    figure {
      width: 60px;
    }
    img {
      width: 60px;
    }
  }
`;
export const ContainerCartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 30px;
    color: #333333;
    font-weight: 700;
  }
  span {
    font-size: 25px;
    font-weight: 400;
    color: #828282;
  }

  @media (min-width: 768px) {
    h4 {
      font-size: 22px;
    }
    span {
      font-size: 17px;
    }
  }
  @media (min-width: 1024px) {
    h4 {
      font-size: 19px;
    }
  }
`;
