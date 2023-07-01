import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Jumbotron from "./components/Jumbotron";
import Recipe from "./components/Recipe";
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <body>
      <MyNav/>
      <Container>
        <Jumbotron />
        <Recipe />
      </Container>
    </body>
  );
}

export default App;
