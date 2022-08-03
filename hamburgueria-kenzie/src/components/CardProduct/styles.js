import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  min-width: 430px;
  min-height: 382px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  padding: 30px;
  gap: 20px;
  margin: 32px 50px;
  flex-direction: column;
  justify-content: space-evenly;

  figure {
    width: 210px;
    margin: 0 auto;
  }
  img {
    width: 200px;
  }
  div {
    margin-left: 15px;
  }
  h3 {
    font-size: 30px;
    font-weight: 800;
    margin: 0;
  }

  span {
    font-size: 22px;
    color: #828282;
  }
  p {
    font-size: 24px;
    font-weight: 600;
    color: rgba(39, 174, 96, 1);
  }

  button {
    background-color: rgba(39, 174, 96, 1);
    color: #fff;
    width: 300px;
    height: 58px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 26px;
    &:hover {
      background-color: rgba(39, 174, 96, 0.5);
    }
  }

  @media (min-width: 425px) {
    min-width: 330px;
    min-height: 1px;

    figure {
      width: 170px;
    }
    img {
      width: 170px;
    }
    div {
      margin-left: 0;
    }
    h3 {
      font-size: 25px;
    }
    span {
      font-size: 18px;
    }
    p {
      font-size: 20px;
    }
    button {
      width: 330px;
      height: 50px;
      font-size: 24px;
    }
  }
  @media (min-width: 768px) {
    min-width: 270px;
    min-height: 1px;
    padding: 30px;
    margin: 30px auto;
  }

  @media (min-width: 1024px) {
    width: 100px;
    height: 320px;
    margin: 0px auto;
    padding: 0;
    gap: 0;

    img {
      width: 90px;
    }
    div {
      width: 90%;
      height: 30%;
      margin-left: 10px;
    }
    h3 {
      font-size: 20px;
    }
    span {
      font-size: 14px;
    }
    p {
      font-size: 17px;
    }
    button {
      width: 60%;
      height: 30px;
      margin-bottom: 10px;
    }
  }
`;
