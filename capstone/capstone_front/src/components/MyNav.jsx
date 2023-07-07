import { useState } from "react";
import { Dropdown, Form, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogIn, BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { loginFunction } from "../Redux/action/action_profile";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPersonCheckFill } from "react-icons/bs";
const MyNav = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassowrd] = useState("");

  const key = useSelector((state) => state.user.login.accessToken);
  const userName = useSelector((state) => state.user.login.username)
  const dispatch = useDispatch();


  const handleSubmitLogin = () => {
    dispatch(loginFunction(username, password));
    if (key) {
      handleCloseModalLogin()
      localStorage.setItem("loginKey", key)
    } else {
      alert("Credenziali errati")
    }
  };

  const handleSubmitRegister = () => {

    dispatch(loginFunction());

  };
  const removeAuth = () => {
    localStorage.removeItem("loginKey")
  }
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

          {!localStorage.getItem("loginKey") ?
            <div className="login mx-3 px-3 py-2" onClick={handleShowModalLogin}>
              Login
              <BiLogIn className="light mx-1 fs-5" />
            </div>
            :
            <Dropdown>
              <Dropdown.Toggle className="login mx-3 px-3 py-2">
              
                <BsFillPersonCheckFill className="light mx-1 fs-5" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="disconnect" style={{ outline: 'none' }} onClick={() => removeAuth()}>
                  <div>Disconnettiti</div>
                </div>
              </Dropdown.Menu>
            </Dropdown>

          }
          <Modal show={showModalLogin} onHide={handleCloseModalLogin}>
            <Modal.Header closeButton>
              <Modal.Title>
                Login
              </Modal.Title>
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
              <div className="register" onClick={() => handleCloseModalLogin()+handleShowModalRegister()}>
                Registrati
              </div>
              <button className="login px-2 py-1" onClick={handleSubmitLogin}>
                Accedi
              </button>
            </Modal.Footer>
          </Modal>


          <Modal show={showModalRegister} onHide={handleCloseModalRegister}>
            <Modal.Header closeButton>
              <Modal.Title>
                Register
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmitRegister}>
              <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Inserisci la password"
                    value={password}
                    onChange={(e) => setpassowrd(e.target.value)}
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
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Inserisci la password"
                    value={password}
                    onChange={(e) => setpassowrd(e.target.value)}
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
              <div>Bella</div>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
