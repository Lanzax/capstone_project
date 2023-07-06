import { useEffect, useState } from "react";
import { Dropdown, Form, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogIn, BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { loginFunction } from "../Redux/action/action_profile";
import { useDispatch, useSelector } from "react-redux";

const MyNav = () => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
      e.preventDefault();
     console.log(email,password)
        dispatch(loginFunction(email,password));
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleShowModal = () => {
      setShowModal(true);
    };
  
  return (
    <nav>
      <Container fluid className="">
        <div className="navBar d-flex p-2 d-flex align-items-center justify-content-between">
          <Link
            to="category"
            style={{ color: "inherit", textDecoration: "inherit" }}>
            <div>
              <AiOutlineMenu className="navIcon icon" />
            </div>
          </Link>

          <Link
            to="home"
            style={{ color: "inherit", textDecoration: "inherit" }}>
            <div className="logo">
              <span>Gusto</span>Si{" "}
              <img
                className=""
                src="https://img.icons8.com/?size=512&id=WRfXwryHkOg0&format=png"
                alt=""
              />
            </div>
          </Link>
          <div className="">
            <Dropdown>
              <Dropdown.Toggle className="dropButton">Ricette</Dropdown.Toggle>

              <Dropdown.Menu>
                <h1>ciao</h1>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="form d-flex align-items-center">
            <input type="text" />
            <BiSearchAlt2 className="icon fs-4 searchIcon" />
          </div>
          <div className="login mx-3 px-3 py-2" onClick={handleShowModal}>
            Login <BiLogIn className="light mx-1 fs-5" />
          </div>
          <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci l'email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Inserisci la password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="my-2 d-flex justify-content-between">
          <div className="register">
            Registrati
          </div>
          <button className="login px-2 py-1" onClick={handleSubmit}>
            Accedi
          </button>
        </Modal.Footer>
      </Modal>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
