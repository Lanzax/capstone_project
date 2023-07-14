import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const forceLogin = () => {
  window.alert("Devi accedere o registrarti");
};
const Jumbotron = () => {
  return (
    <>
      <Container>
        {localStorage.getItem("loginKey") ? (
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
        ) : (
          <div className="jumboNav d-flex p-2 m-3 justify-content-center ">
            <div className="mx-5" onClick={forceLogin}>Le mie ricette</div>
            <div className="mx-5" onClick={forceLogin}>Menu'</div>
            <div className="mx-5" onClick={forceLogin}>Profilo</div>
            <div className="mx-5">Contatti</div>
          </div>
        )}
      </Container>
    </>
  );
};
export default Jumbotron;
