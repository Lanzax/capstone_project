import React, { useState, useEffect } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import {
  AiFillHeart,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { CgDanger } from "react-icons/cg";

const LocalRecipe = () => {
  const [localData, setLocalData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [iStart, setiStart] = useState(1);
  const [iFinish, setIFinish] = useState(5);
  const [here, sethere] = useState(1);

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setLocalData(JSON.parse(storedRecipes));
    }
  }, []);

  const handleClose = () => setSelectedRecipe(null);
  const handleShow = (recipeId) => setSelectedRecipe(recipeId);

  const removeLocalRecipe = (id) => {
    const updatedRecipes = localData.filter((recipe) => recipe.id !== id);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    setLocalData(updatedRecipes);
  };
  const deleteLocalRecipes = () => {
    localStorage.removeItem("recipes");
    window.location.reload();
  };

  const closeDanger = () => setShow(false);
  const showDanger = () => setShow(true);

  function nextFunction() {
    if (here === localData.length / 5) {
    } else {
      setiStart(iStart + 5);
      setIFinish(iFinish + 5);
      sethere(here + 1);
    }
  }

  function beforeFunction() {
    if (here === 1) {
    } else {
      setiStart(iStart - 5);
      setIFinish(iFinish - 5);
      sethere(here - 1);
    }
  }
  return (
    <Container className="w-75 my-5">
      <div>
        <div className="d-flex justify-content-between w-75 my-2">
          <div>
            <h2>Le mie ricette</h2>
          </div>
          <div>
            <MdDelete className="fs-4 icon" onClick={showDanger} />
          </div>

          <Modal show={show} onHide={closeDanger}>
            <Modal.Header closeButton>
              <Modal.Title>
                <CgDanger />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Sei sicuro di voler eliminare tutte le ricette?
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => handleClose() + deleteLocalRecipes()}>
                Elimina
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="flex-wrap d-flex justify-content-between w-75 ">
          {here === 1 ? (
            <div className=" mx-3 px-2 py-1 rounded-circle">
              <AiOutlineArrowLeft />
            </div>
          ) : (
            <div
              className="numberPage mx-3 px-2 py-1 rounded-circle"
              onClick={beforeFunction}>
              <AiOutlineArrowLeft />
            </div>
          )}
          <div>Pagina {here}</div>

          {localData.length<iFinish ? (
            <div className="mx-3 px-2 py-1 rounded-circle">
              <AiOutlineArrowRight />
            </div>
          ) : (
            <div
              className="numberPage mx-3 px-2 py-1 rounded-circle"
              onClick={nextFunction}>
              <AiOutlineArrowRight />
            </div>
          )}
        </div>
        {localData.length === 0 ? (
          <div className="my-5 text-center w-75">Non ci sono ricette salvate</div>
        ) : (
          localData.slice(iStart,iFinish).map((recipe) => (
            <div key={recipe.id} className="recipeList p-3">
              <div className="recipeCard d-flex align-content-center w-75 ">
                <div className="recipeImg">
                  <img src={recipe.immagine} className="" alt="" />
                  <AiFillHeart
                    onClick={() => removeLocalRecipe(recipe.id)}
                    className="fs-2 like icon text-danger"
                  />
                </div>
                <div className="recipeDescription mx-4 my-3 d-flex flex-column justify-content-between w-100">
                  <div>
                    <h3>{recipe.nome}</h3>
                    <p>{recipe.ingredienti.join()}</p>
                  </div>
                  <div>
                    <div className="d-flex justify-content-end">
                      <span
                        className="buttonRecipe"
                        onClick={() => handleShow(recipe)}>
                        Scopri di più
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
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
      </div>
    </Container>
  );
};

export default LocalRecipe;
