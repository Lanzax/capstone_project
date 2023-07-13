import { useEffect, useState } from "react";
import { Dropdown, Form, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogIn, BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  loginFunction,
  registerFunction,
} from "../Redux/action/action_profile";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import Sidebar from "./Sidebar";

const MyNav = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassowrd] = useState("");
  const [nome, setnome] = useState("");
  const [email, setemail] = useState("");

  const key = useSelector((state) => state.user.login.accessToken);
  const userName = localStorage.getItem("username");
  const auth = localStorage.getItem("loginKey");
  const dispatch = useDispatch();

  const handleSubmitLogin = () => {
    dispatch(loginFunction(username, password));
    localStorage.setItem("username", username);
    handleCloseModalLogin();
  };

  useEffect(() => {
    const saveKey = async () => {
      await localStorage.setItem("loginKey", key);
    };

    if (key) {
      saveKey();
      window.location.reload();
      
    }
  }, [key]);

  function firsLetterUpperCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  const handleSubmitRegister = () => {
    console.log(nome, username, email, password);
    dispatch(registerFunction(nome, username, email, password));
    handleCloseModalRegister()
    handleShowModalLogin()
  };
  const removeAuth = () => {
    localStorage.removeItem("loginKey");
    localStorage.removeItem("username");
    window.location.reload();
  };
  const handleCloseModalLogin = () => {
    setShowModalLogin(false);
  };
  const handleShowModalLogin = () => {
    setShowModalLogin(true);
  };
  const handleCloseModalRegister = () => {
    setShowModalRegister(false);
  };

  const handleShowModalRegister = () => {
    setShowModalRegister(true);
  };
  function changePrimi() {
    localStorage.setItem("category", "primi");
    return localStorage.getItem("category");
  }
  function changeSemplici() {
    localStorage.setItem("category", "secondi_semplici");
    return localStorage.getItem("category");
  }
  function changeCarne() {
    localStorage.setItem("category", "secondi_carne");
    return localStorage.getItem("category");
  }
  function changeContorni() {
    localStorage.setItem("category", "contorni");
    return localStorage.getItem("category");
  }
  return (
    <nav>
      <Container fluid className="">
        <div className="navBar d-flex p-2 d-flex align-items-center justify-content-between">
          <Sidebar/>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
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

              <Dropdown.Menu className="dropMenuHome">
                <div className="d-flex flex-column justify-content-between mx-3 p-2">
                  <div className="px-3 mx-2">
                    {!auth===undefined|!auth ? (
                      <div
                        className="p-1 align-content-center"
                        onClick={() => handleShowModalLogin()}>
                        <BiFoodMenu />
                        <span>Primi</span>
                      </div>
                    ) : (
                      <div
                        className="p-1 align-content-center"
                        onClick={() => changePrimi()}>
                        <BiFoodMenu />
                        <Link
                          to="category"
                          style={{
                            color: "inherit",
                            textDecoration: "inherit",
                          }}>
                          <span>Primi</span>
                        </Link>
                      </div>
                    )}
                    {!auth===undefined|!auth ? (
                      <div
                        className="p-1 align-content-center"
                        onClick={() => handleShowModalLogin()}>
                        <BiFoodMenu />
                        <span>Secondi semplici</span>
                      </div>
                    ) : (
                      <div
                        className="p-1 align-content-center"
                        onClick={() => changeSemplici()}>
                        <BiFoodMenu />
                        <Link
                          to="category"
                          style={{
                            color: "inherit",
                            textDecoration: "inherit",
                          }}>
                          <span>Secondi semplici</span>
                        </Link>
                      </div>
                    )}
                    {!auth===undefined|!auth ? (
                      <div
                        className="p-1 align-content-center"
                        onClick={() => handleShowModalLogin()}>
                        <BiFoodMenu />
                        <span>Secondi carne</span>
                      </div>
                    ) : (
                      <div
                        className="p-1 align-content-center"
                        onClick={() => changeCarne()}>
                        <BiFoodMenu />
                        <Link
                          to="category"
                          style={{
                            color: "inherit",
                            textDecoration: "inherit",
                          }}>
                          <span>Secondi carne</span>
                        </Link>
                      </div>
                    )}
                    {!auth===undefined|!auth ? (
                      <div
                        className="p-1 align-content-center"
                        onClick={() => handleShowModalLogin()}>
                        <BiFoodMenu />
                        <span>Contorni</span>
                      </div>
                    ) : (
                      <div
                        className="p-1 align-content-center"
                        onClick={() => changeContorni()}>
                        <BiFoodMenu />
                        <Link
                          to="category"
                          style={{
                            color: "inherit",
                            textDecoration: "inherit",
                          }}>
                          <span>Contorni</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="form d-flex align-items-center">
            <input type="text" />
            <BiSearchAlt2 className="icon fs-4 searchIcon" />
          </div>

          {auth===undefined|!auth ? (
            <div
              className="login mx-3 px-3 py-2"
              onClick={() => handleShowModalLogin()}>
              Login
              <BiLogIn className="light mx-1 fs-5" />
            </div>
          ) : (
            <Dropdown>
              <Dropdown.Toggle className="login mx-3 px-3 py-2">
                {firsLetterUpperCase(userName)}
                <BsFillPersonCheckFill className="light mx-1 fs-5" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div
                  className="disconnect"
                  style={{ outline: "none" }}
                  onClick={() => removeAuth()}>
                  <div>Disconnettiti</div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          )}
          <Modal show={showModalLogin} onHide={handleCloseModalLogin}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmitLogin}>
                <Form.Group controlId="email">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Inserisci la password"
                    value={password}
                    onChange={(e) => setpassowrd(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="my-2 d-flex justify-content-between">
              <div
                className="register"
                onClick={() =>
                  handleCloseModalLogin() + handleShowModalRegister()
                }>
                Registrati
              </div>
              <button className="login px-3 py-1" onClick={handleSubmitLogin}>
                Accedi
              </button>
            </Modal.Footer>
          </Modal>

          <Modal show={showModalRegister} onHide={handleCloseModalRegister}>
            <Modal.Header closeButton>
              <Modal.Title>Registrazione</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmitRegister}>
                <Form.Group controlId="name">
                  <Form.Label>Nome e Cognome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci nome e cognome"
                    value={nome}
                    onChange={(e) => setnome(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Inserisci email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Inserisci la password"
                    value={password}
                    onChange={(e) => setpassowrd(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="my-2 d-flex justify-content-between">
              <div
                className="register"
                onClick={() =>
                  handleCloseModalRegister() + handleShowModalLogin()
                }>
                Login
              </div>
              <button
                className="login px-3 py-1"
                onClick={handleSubmitRegister}>
                Registrati
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
