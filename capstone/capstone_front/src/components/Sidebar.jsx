import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { BiLogOut, BiSolidFoodMenu } from "react-icons/bi";
import { BsFillMenuButtonWideFill, BsReceipt } from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

function disconnect(){
  localStorage.removeItem("loginKey")
  localStorage.removeItem("username")
window.location.reload()
}

  return (
    <>
    {localStorage.getItem("loginKey")?
      <div className="threebar" variant="primary" onClick={handleShow}>
      <AiOutlineMenu className="navIcon icon" />
    </div>
    :
    <div className="d-none" variant="primary" onClick={handleShow}>
    <AiOutlineMenu className="navIcon icon" />
  </div>
    }


      <Offcanvas show={show} onHide={handleClose} className="sidebarBack">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column fs-5 justify-content-between sidebarContent ps-5 py-5 w-75">
            <div>
            <Link
            to="/"
            style={{ color: "inherit", textDecoration: "inherit" }}>
              <div className="align-items-center d-flex"><AiFillHome className="me-2 text-white fs-2"/> Home</div>
          </Link>
            </div>
            <div>
              <div className="align-items-center d-flex mb-1"><BsReceipt className="me-2 text-white fs-2"/> Primi</div>
              <div className="align-items-center d-flex mb-1"><BsReceipt className="me-2 text-white fs-2"/> Secondi carne</div>
              <div className="align-items-center d-flex mb-1"><BsReceipt className="me-2 text-white fs-2"/> Secondi semplici</div>
              <div className="align-items-center d-flex"><BsReceipt className="me-2 text-white fs-2"/> Contorni</div>
            </div>
            <div>
              <div className="align-items-center d-flex"><BiSolidFoodMenu className="me-2 text-white fs-2"/> Menu'</div>
            </div>
            <div>
              <div className="align-items-center d-flex"><BsFillMenuButtonWideFill className="me-2 text-white fs-2"/> Le mie ricette</div>
            </div>
            <div>
              <div className="align-items-center d-flex"><BiLogOut className="me-2 text-white fs-2" /> <span onClick={()=>disconnect()}>Disconnettiti</span></div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
