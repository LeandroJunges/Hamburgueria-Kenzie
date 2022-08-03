import CardProduct from "../CardProduct";
import { ContainerCards } from "./styles";

const ProductList = ({ products, userInput, addCart }) => {
  return (
    <ContainerCards>
      {products
        .filter((product) =>
          product.name.toLowerCase().includes(userInput.toLowerCase())
        )
        .map((product, index) => (
          <CardProduct key={index} addCart={addCart} product={product} />
        ))}
    </ContainerCards>
  );
};

export default ProductList;
