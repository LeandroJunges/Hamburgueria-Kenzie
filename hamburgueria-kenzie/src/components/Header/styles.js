import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 139px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: space-between; */
  align-items: center;
  padding: 5px;
  box-shadow: 0 0 13px 0px #0000006b;
  gap: 10px;

  img {
    width: 290px;
    margin-left: 50px;
  }
  div {
    width: 70%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    margin-right: 50px;
    align-items: center;
    border-radius: 8px;
    border: solid rgba(224, 224, 224, 1);
    padding: 0 10px 0 15px;
  }
  input {
    border: none;
    padding: 10px;
  }

  @media (min-width: 425px) {
    height: 111px;

    img {
      width: 250px;
      margin-left: 0;
    }
    div {
      width: 75%;
      height: 45px;
    }
  }

  @media (min-width: 768px) {
    width: 755px;
    height: 70px;
    flex-direction: row;
    justify-content: space-between;

    img {
      width: 230px;
    }
    div {
      width: 50%;
      margin-right: 0;
      height: 40px;
    }
  }

  @media (min-width: 1024px) {
    width: 100%;

    img {
      width: 200px;
    }
    div {
      width: 35%;
    }
  }
`;
export const Button = styled.button`
  background-color: rgba(39, 174, 96, 1);
  color: #fff;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: rgba(39, 174, 96, 0.5);
  }

  @media (min-width: 425px) {
    height: 34px;
  }
  @media (min-width: 768px) {
    height: 30px;
  }
`;
