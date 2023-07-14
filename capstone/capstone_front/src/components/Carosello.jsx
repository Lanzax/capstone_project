import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipe } from "../Redux/action/action_profile";
import { Button, Container, Modal, Spinner } from "react-bootstrap";

function Carosello({ showModalLogin }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.user.recipe);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const forceLogin = () => {
    window.alert("Devi accedere o registrarti");
  };
  useEffect(() => {
    const getRecipe = async () => {
      await dispatch(getAllRecipe());
      setLoading(false);
    };
    getRecipe();
  }, []);

  const handleClose = () => setSelectedRecipe(null);
  const handleShow = (recipeId) => setSelectedRecipe(recipeId);

  const arrayNum = [];
  const arrayNum2 = [];
  if (!loading && data) {
    for (let index = 0; index < 7; index++) {
      let num = Math.floor(Math.random() * data.length);
      arrayNum.push(num);
    }
  }
  if (!loading && data) {
    for (let index = 0; index < 4; index++) {
      let num = Math.floor(Math.random() * data.length);
      arrayNum2.push(num);
    }
  }

  if (loading) {
    return (
      <div className="text-center my-5 text-warning">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      {!localStorage.getItem("loginKey") ? (
        <Container className="d-flex justify-content-center">
          <div>
            <div>
              <img
                onClick={() => forceLogin()}
                src={data[arrayNum2[0]].immagine}
                alt=""
                className="icon"
              />
            </div>
            <div>
              <img
                onClick={() => forceLogin()}
                src={data[arrayNum2[1]].immagine}
                alt=""
                className="icon"
              />
            </div>
          </div>
          <Carousel className="carosello">
            {arrayNum.map((num) => {
              return (
                <Carousel.Item>
                  <img
                    onClick={() => forceLogin()}
                    className="d-block w-100 icon"
                    src={data[num].immagine}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{data[num].nome}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div>
            <div>
              <img
                onClick={() => forceLogin()}
                src={data[arrayNum2[2]].immagine}
                alt=""
                className="icon"
              />
            </div>
            <div>
              <img
                onClick={() => forceLogin()}
                src={data[arrayNum2[3]].immagine}
                alt=""
                className="icon"
              />
            </div>
          </div>
        </Container>
      ) : (
        <Container className="d-flex justify-content-center">
          <div>
            <div>
              <img
                onClick={() => handleShow(data[arrayNum2[0]])}
                src={data[arrayNum2[0]].immagine}
                alt=""
                className="icon"
              />
            </div>
            <div>
              <img
                onClick={() => handleShow(data[arrayNum2[1]])}
                src={data[arrayNum2[1]].immagine}
                alt=""
                className="icon"
              />
            </div>
          </div>
          <Carousel className="carosello">
            {arrayNum.map((num) => {
              return (
                <Carousel.Item>
                  <img
                    onClick={() => handleShow(data[num])}
                    className="d-block w-100 icon"
                    src={data[num].immagine}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{data[num].nome}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div>
            <div>
              <img
                onClick={() => handleShow(data[arrayNum2[2]])}
                src={data[arrayNum2[2]].immagine}
                alt=""
                className="icon"
              />
            </div>
            <div>
              <img
                onClick={() => handleShow(data[arrayNum2[3]])}
                src={data[arrayNum2[3]].immagine}
                alt=""
                className="icon"
              />
            </div>
          </div>
        </Container>
      )}

      {selectedRecipe && (
        <Modal show={true} onHide={handleClose} className="modalSingleRecipe">
          <Modal.Header closeButton>
            <Modal.Title>{selectedRecipe.nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="">
            <div className="d-flex mb-3">
              <div>
                <div className="mx-3">
                  <img src={selectedRecipe.immagine} alt="" />
                </div>
              </div>
              <div>
                <div className="ingredients mb-1">Ingredienti:</div>
                {selectedRecipe.ingredienti.map((ingredient, index) => (
                  <div className="ms-2 " key={index}>
                    - {ingredient}
                  </div>
                ))}
              </div>
            </div>
            <div className="ms-3">
              <div>{selectedRecipe.descrizione_grande}</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Torna indietro
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default Carosello;
