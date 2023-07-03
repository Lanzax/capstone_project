import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogIn, BiSearchAlt2 } from "react-icons/bi";

const MyNav = () => {
  return (
    <nav>
      <Container fluid className="">
        <div className="navBar d-flex p-2 d-flex align-items-center justify-content-between">
          <div>
            <AiOutlineMenu className="navIcon icon" />
          </div>
          <div className="logo"><span>Gusto</span>Si <img className="" src="https://img.icons8.com/?size=512&id=WRfXwryHkOg0&format=png" alt="" /></div>
          <div className="">
            {" "}
            <Dropdown>
              <Dropdown.Toggle className="dropButton" >
                Ricette
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <h1>ciao</h1>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="form d-flex align-items-center">
            <input type="text" />
            <BiSearchAlt2 className="icon fs-4 searchIcon" />
          </div>
          <div className="login mx-3 px-3 py-2">
            Login <BiLogIn className="light mx-1 fs-5" />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
