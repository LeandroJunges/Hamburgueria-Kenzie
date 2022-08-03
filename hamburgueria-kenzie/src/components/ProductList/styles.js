import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 5px auto;
  width: 600px;
  height: 550px;
  gap: 5px;
  overflow-x: auto;

  @media (min-width: 425px) {
    width: 530px;
    height: 484px;
  }
  @media (min-width: 768px) {
    width: 395px;
    height: 550px;
    flex-wrap: wrap;
  }

  @media (min-width: 1024px) {
    width: 62%;
    height: 100%;
    overflow: hidden;
    margin: 10px 80px;

    flex-direction: column;
    flex-wrap: wrap;
  }
`;
