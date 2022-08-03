import { Card } from "./styles";

const CardProduct = ({ product, addCart }) => {
  return (
    <Card>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <p>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button onClick={() => addCart(product.id)}>adicionar</button>
      </div>
    </Card>
  );
};
export default CardProduct;
