import styled from "styled-components";

export const ContainerTotal = styled.div`
  width: 320px;
  border-top: solid 1px #e0e0e0;
  display: flex;
  justify-content: space-between;
  gap: 70px;
  margin: 0 auto;

  p {
    font-size: 26px;
    font-weight: 600;
  }
  @media (min-width: 1024px) {
    p {
      font-size: 20px;
    }
  }
`;
export const ButtonRemoveAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 0px 20px;

  button {
    width: 500px;
    height: 70px;
    cursor: pointer;
    background: #e0e0e0;

    border: 2px solid #e0e0e0;
    border-radius: 8px;

    &:hover {
      background-color: rgba(222, 222, 222, 1);
    }

    font-size: 26px;
    @media (min-width: 425px) {
      height: 60px;
    }
    @media (min-width: 1024px) {
      font-size: 20px;
      width: 450px;
      height: 40px;
    }
  }
`;
