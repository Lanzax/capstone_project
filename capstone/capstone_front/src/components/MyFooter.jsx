import { Col, Container, Row } from "react-bootstrap";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const MyFooter = () => {
  return (
    <Container>
      <div className="footer d-flex mt-5 mx-5 pt-3">
        <div className="mx-5">
          <img
            className=""
        width={150}
            src="https://img.icons8.com/?size=512&id=WRfXwryHkOg0&format=png"
            alt=""
          />
        </div>
        <div className="w-75">
        <Row>
        <Col className="mb-2">
            <b>Seguici</b>
          </Col>
        <Col className="mb-2">
            <b>Info</b>
          </Col>
        <Col className="mb-2">
            <b>Scopri</b>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex align-items-center">
            <BsFacebook className="me-2" />
            <div className="textFooter">Facebook</div>
          </Col>
          <Col className="textFooter">Chi siamo</Col>
          <Col className="textFooter">Crea una ricetta</Col>
        </Row>

        <Row>
        <Col className="d-flex align-items-center">
            <FaTiktok className="me-2" />
            <div className="textFooter">Tiktok</div>
          </Col>
          <Col className="textFooter">Login</Col>
          <Col className="textFooter">Recensione</Col>
        </Row>

        <Row>
        <Col className="d-flex align-items-center">
            <BsInstagram className="me-2" />
            <div className="textFooter">Instagram</div>
          </Col>
          <Col className="textFooter">Registrati</Col>
          <Col></Col>
        </Row>

        <Row>
        <Col className="d-flex align-items-center">
            <AiFillYoutube className="me-2" />
            <div className="textFooter">Youtube</div>
          </Col>
          <Col className="textFooter">Blog</Col>
          <Col></Col>
        </Row>
        </div>

      </div>
    </Container>
  );
};
export default MyFooter;
