import Total from "../Total";
import {
  ContainerCart,
  HeaderCart,
  ContainerContent,
  ContainerCartEmpty,
  ContainerGeneralCart,
} from "./styles";

const Cart = ({ currentSale, setCurrentSale }) => {
  const removeCard = (id) => {
    const erase = currentSale.filter((product) => id !== product.id);
    return setCurrentSale(erase);
  };

  return (
    <ContainerGeneralCart>
      <HeaderCart>
        <h3>Carrinho de compras</h3>
      </HeaderCart>
      {currentSale.length !== 0 ? (
        <>
          <ContainerCart>
            {currentSale.map((product, index) => (
              <ContainerContent key={index}>
                <figure>
                  <img src={product.img} alt={product.name} />
                </figure>

                <div>
                  <h3>{product.name}</h3>
                  <span>{product.category}</span>
                </div>
                <div>
                  <button onClick={() => removeCard(product.id)}>
                    remover
                  </button>
                </div>
              </ContainerContent>
            ))}
          </ContainerCart>
          <Total setCurrentSale={setCurrentSale}>
            {currentSale
              .reduce((acc, current) => {
                return acc + current.price;
              }, 0)
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
          </Total>
        </>
      ) : (
        <ContainerCartEmpty>
          <h4>Sua sacola está vazia</h4>
          <span>Adicione itens</span>
        </ContainerCartEmpty>
      )}
    </ContainerGeneralCart>
  );
};

export default Cart;
