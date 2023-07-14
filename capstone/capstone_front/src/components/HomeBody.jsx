import { useDispatch, useSelector } from "react-redux";
import Carosello from "./Carosello";
import Jumbotron from "./Jumbotron";
import { Button, Container, Modal, Spinner } from "react-bootstrap";
import { useEffect, useMemo, useState } from "react";
import { getAllRecipe } from "../Redux/action/action_profile";
import { AiFillHeart } from "react-icons/ai";

const HomeBody = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.recipe);
  const length = data.length;
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [click, setClick] = useState({});
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      await dispatch(getAllRecipe());
      setLoading(false);
    };
    getRecipe();
  }, []);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes"));
    if (savedRecipes) {
      setRecipes(savedRecipes);
    }
  }, []);

  const handleClose = () => setSelectedRecipe(null);
  const handleShow = (recipeId) => setSelectedRecipe(recipeId);

  const forceLogin = () => {
    window.alert("Devi accedere o registrarti");
  };

  const addLocalRecipe = (id) => {
    const recipe = data && data.find((recipe) => recipe.id === id);
    if (recipe) {
      const isRecipeSaved = recipes.some(
        (savedRecipe) => savedRecipe.id === id
      );
      if (!isRecipeSaved) {
        const newRecipe = {
          id: recipe.id,
          categoria: recipe.categoria,
          nome: recipe.nome,
          ingredienti: [recipe.ingredienti],
          immagine: recipe.immagine,
          descrizione_piccola: recipe.descrizione_piccola,
          descrizione_grande: recipe.descrizione_grande,
        };
        const updatedRecipes = [...recipes, newRecipe];
        setRecipes(updatedRecipes);
        setClick((prevState) => ({ ...prevState, [id]: true }));
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      }
    }
  };

  const removeLocalRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    setClick((prevState) => ({ ...prevState, [id]: false }));
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  const num = useMemo(
    () => Math.floor(Math.random() * data.length) + 4,
    [data.length]
  );
  const num2 = useMemo(
    () => Math.floor(Math.random() * data.length) + 4,
    [data.length]
  );
  return (
    <>
      <Jumbotron />
      <Carosello />
      {localStorage.getItem("loginKey") ? (
        <Container className="my-5">
          <div className="my-3">
            <h2>RECENTI</h2>
          </div>
          <div className="d-flex">
            {loading != false ? (
              <div className="d-none">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              data.slice(length - 4, length).map((recipe) => {
                return (
                  <div
                    key={recipe.id}
                    className="d-flex flex-column mx-4 card justify-content-between ">
                    <div>
                      <img src={recipe.immagine} alt="" />
                      {click[recipe.id] ? (
                        <AiFillHeart
                          onClick={() => removeLocalRecipe(recipe.id)}
                          className="fs-2 like icon text-danger"
                        />
                      ) : (
                        <AiFillHeart
                          onClick={() => addLocalRecipe(recipe.id)}
                          className="fs-2 like icon"
                        />
                      )}
                    </div>
                    <div className="py-1 px-2 fs-5 ">{recipe.nome}</div>
                    <div
                      className="scopriButton  m-2 text-end"
                      onClick={() => handleShow(recipe)}>
                      Scopri di piu'
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="my-3">
            <h2>CONSIGLIATI</h2>
          </div>
          <div className="d-flex">
            {loading != false ? (
              <div className="d-none">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              data.slice(num - 4, num).map((recipe) => {
                return (
                  <div
                    key={recipe.id}
                    className="d-flex flex-column mx-4 card justify-content-between ">
                    <div>
                      <img src={recipe.immagine} alt="" />
                      {click[recipe.id] ? (
                        <AiFillHeart
                          onClick={() => removeLocalRecipe(recipe.id)}
                          className="fs-2 like icon text-danger"
                        />
                      ) : (
                        <AiFillHeart
                          onClick={() => addLocalRecipe(recipe.id)}
                          className="fs-2 like icon"
                        />
                      )}
                    </div>
                    <div className="py-1 px-2 fs-5 ">{recipe.nome}</div>
                    <div
                      className="scopriButton  m-2 text-end"
                      onClick={() => handleShow(recipe)}>
                      Scopri di piu'
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="my-3">
            <h2>SPECIALI</h2>
          </div>
          <div className="d-flex">
            {loading != false ? (
              <div className="d-none">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              data.slice(num2 - 4, num2).map((recipe) => {
                return (
                  <div
                    key={recipe.id}
                    className="d-flex flex-column mx-4 card justify-content-between ">
                    <div>
                      <img src={recipe.immagine} alt="" />
                      {click[recipe.id] ? (
                        <AiFillHeart
                          onClick={() => removeLocalRecipe(recipe.id)}
                          className="fs-2 like icon text-danger"
                        />
                      ) : (
                        <AiFillHeart
                          onClick={() => addLocalRecipe(recipe.id)}
                          className="fs-2 like icon"
                        />
                      )}
                    </div>
                    <div className="py-1 px-2 fs-5 ">{recipe.nome}</div>
                    <div
                      className="scopriButton  m-2 text-end"
                      onClick={() => handleShow(recipe)}>
                      Scopri di piu'
                    </div>
                  </div>
                );
              })
            )}
            {selectedRecipe && (
              <Modal
                show={true}
                onHide={handleClose}
                className="modalSingleRecipe">
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
      ) : (
        <Container className="my-5">
          <div className="my-3">
            <h2>RECENTI</h2>
          </div>
          <div className="d-flex">
            {loading != false ? (
              <div className="d-none">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              data.slice(length - 4, length).map((recipe) => {
                return (
                  <div
                    key={recipe.id}
                    className="d-flex flex-column mx-4 card justify-content-between ">
                    <div>
                      <img src={recipe.immagine} alt="" />
                      {click[recipe.id] ? (
                        <AiFillHeart
                          onClick={forceLogin}
                          className="fs-2 like icon text-danger"
                        />
                      ) : (
                        <AiFillHeart
                          onClick={forceLogin}
                          className="fs-2 like icon"
                        />
                      )}
                    </div>
                    <div className="py-1 px-2 fs-5 ">{recipe.nome}</div>
                    <div
                      className="scopriButton  m-2 text-end"
                      onClick={forceLogin}>
                      Scopri di piu'
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="my-3">
            <h2>CONSIGLIATI</h2>
          </div>
          <div className="d-flex">
            {loading != false ? (
              <div className="d-none">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              data.slice(num - 4, num).map((recipe) => {
                return (
                  <div
                    key={recipe.id}
                    className="d-flex flex-column mx-4 card justify-content-between ">
                    <div>
                      <img src={recipe.immagine} alt="" />
                      {click[recipe.id] ? (
                        <AiFillHeart
                          onClick={forceLogin}
                          className="fs-2 like icon text-danger"
                        />
                      ) : (
                        <AiFillHeart
                          onClick={forceLogin}
                          className="fs-2 like icon"
                        />
                      )}
                    </div>
                    <div className="py-1 px-2 fs-5 ">{recipe.nome}</div>
                    <div
                      className="scopriButton  m-2 text-end"
                      onClick={forceLogin}>
                      Scopri di piu'
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="my-3">
            <h2>SPECIALI</h2>
          </div>
          <div className="d-flex">
            {loading != false ? (
              <div className="d-none">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              data.slice(num2 - 4, num2).map((recipe) => {
                return (
                  <div
                    key={recipe.id}
                    className="d-flex flex-column mx-4 card justify-content-between ">
                    <div>
                      <img src={recipe.immagine} alt="" />
                      {click[recipe.id] ? (
                        <AiFillHeart
                          onClick={forceLogin}
                          className="fs-2 like icon text-danger"
                        />
                      ) : (
                        <AiFillHeart
                          onClick={forceLogin}
                          className="fs-2 like icon"
                        />
                      )}
                    </div>
                    <div className="py-1 px-2 fs-5 ">{recipe.nome}</div>
                    <div
                      className="scopriButton  m-2 text-end"
                      onClick={forceLogin}>
                      Scopri di piu'
                    </div>
                  </div>
                );
              })
            )}
            {selectedRecipe && (
              <Modal
                show={true}
                onHide={handleClose}
                className="modalSingleRecipe">
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
      )}
    </>
  );
};
export default HomeBody;
