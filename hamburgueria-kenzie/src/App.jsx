import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products").then(
      (response) => response.json().then((json) => setProducts(json))
    );
  }, []);

  const addCart = (productId) => {
    const result = products.find((product) => product.id === productId);

    const itenIncluso = currentSale.find((product) => product.id === productId);

    itenIncluso === result
      ? alert("item ja existe no caminho ")
      : setCurrentSale([...currentSale, result]);
  };

  return (
    <div className="App">
      <Header userInput={userInput} setUserInput={setUserInput} />

      <div className="Content-home">
        <ProductList
          products={products}
          userInput={userInput}
          addCart={addCart}
        />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </div>
    </div>
  );
}

export default App;
