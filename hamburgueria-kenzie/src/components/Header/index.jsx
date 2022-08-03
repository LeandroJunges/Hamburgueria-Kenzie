import { Container, Button } from "./styles";

const Header = ({ userInput, setUserInput }) => {
  return (
    <Container>
      <img src={require("./img/Mask Group.png")} alt="logo" />
      <div>
        <input
          type="text"
          placeholder="digitar pesquisa"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <Button onClick={() => setUserInput(userInput)}> pesquisar</Button>
      </div>
    </Container>
  );
};
export default Header;
