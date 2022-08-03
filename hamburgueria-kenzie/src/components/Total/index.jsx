import { ContainerTotal, ButtonRemoveAll } from "./style";

const Total = ({ children, setCurrentSale }) => {
  const removeAll = () => {
    return setCurrentSale([]);
  };
  return (
    <>
      <ContainerTotal>
        <p>Total</p>
        <p>{children}</p>
      </ContainerTotal>
      <ButtonRemoveAll>
        <button onClick={() => removeAll()}>Remover Todos</button>
      </ButtonRemoveAll>
    </>
  );
};
export default Total;
