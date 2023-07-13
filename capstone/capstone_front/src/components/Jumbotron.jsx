import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <>
      <Container>
        <div className="jumboNav d-flex p-2 m-3 justify-content-center ">
          <Link
            to="myrecipe"
            style={{ color: "inherit", textDecoration: "inherit" }}>
            <div className="mx-5">Le mie ricette</div>
          </Link>
          <Link
            to="menu"
            style={{ color: "inherit", textDecoration: "inherit" }}>
            <div className="mx-5">Menu'</div>
          </Link>
          <div className="mx-5">Profilo</div>
          <div className="mx-5">Contatti</div>
        </div>
      </Container>
    </>
  );
};
export default Jumbotron;
