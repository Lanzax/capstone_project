import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillHeart,
} from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByCategory } from "../Redux/action/action_profile";
import { FaUtensils } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { HiOutlineFilter } from "react-icons/hi";
import { Button, Dropdown, Modal, Spinner } from "react-bootstrap";

const Recipe = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.categoria);
  const auth = localStorage.getItem("loginKey");
  const [loading, setLoading] = useState(true);
  const [iStart, setiStart] = useState(1);
  const [iFinish, setIFinish] = useState(10);
  const [here, sethere] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [click, setClick] = useState({});
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const getLocal = async () => {
      await dispatch(getByCategory(auth, localStorage.getItem("category")));
      setLoading(false);
    };
    getLocal();
  }, []);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes"));
    if (savedRecipes) {
      setRecipes(savedRecipes);
    }
  }, []);

  if (loading) {
    return (
      <div className="text-center my-5 text-warning">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const handleClose = () => setSelectedRecipe(null);
  const handleShow = (recipeId) => setSelectedRecipe(recipeId);

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

  function replace(str) {
    return str.replace(/_/g, " ");
  }

  function firsLetterUpperCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function separeObject(x) {
    if (!Array.isArray(x)) {
      throw new Error("Input is not an array");
    }

    if (x.length === 0) {
      return "";
    }

    let y = "";
    for (let i = 0; i < x.length; i++) {
      y += x[i];

      if (i !== x.length - 1) {
        y += ", ";
      }
    }

    return y;
  }


  function nextFunction() {
    if (here === data.length / 10) {
    } else {
      setiStart(iStart + 10);
      setIFinish(iFinish + 10);
      sethere(here + 1);
    }
  }

  function beforeFunction() {
    if (here === 1) {
    } else {
      setiStart(iStart - 10);
      setIFinish(iFinish - 10);
      sethere(here - 1);
    }
  }

  function changePrimi() {
    if (here === 1) {
      localStorage.setItem("category", "primi");
      return localStorage.getItem("category");
    } else {
      sethere(1);
      setiStart(1);
      setIFinish(10);
      localStorage.setItem("category", "primi");
      return localStorage.getItem("category");
    }
  }

  function changeCarne() {
    if (here === 1) {
      localStorage.setItem("category", "secondi_carne");
      return localStorage.getItem("category");
    } else {
      sethere(1);
      setiStart(1);
      setIFinish(10);

      localStorage.setItem("category", "secondi_carne");
      return localStorage.getItem("category");
    }
  }

  function changeSemplici() {
    if (here === 1) {
      localStorage.setItem("category", "secondi_semplici");
      return localStorage.getItem("category");
    } else {
      sethere(1);
      setiStart(1);
      setIFinish(10);
      localStorage.setItem("category", "secondi_semplici");
      return localStorage.getItem("category");
    }
  }

  function changeContorni() {
    if (here === 1) {
      localStorage.setItem("category", "contorni");
      return localStorage.getItem("category");
    } else {
      sethere(1);
      setiStart(1);
      setIFinish(10);
      localStorage.setItem("category", "contorni");
      return localStorage.getItem("category");
    }
  }

  return (
    <>
      <div className="mx-5 my-4 pRecipe">
        <p>
          {firsLetterUpperCase(replace(localStorage.getItem("category") || ""))}
        </p>
        <div className="d-flex ">
          <Dropdown>
            <Dropdown.Toggle className="dropFilter text-dark">
              <FaUtensils className="mx-1 ic" />
              Tipo
            </Dropdown.Toggle>

            <Dropdown.Menu className="filter">
              <div className="d-flex flex-column justify-content-between p-2">
                <div className=" mx-4 px-3">
                  <div
                    className="p-1 align-content-center"
                    onClick={() =>
                      dispatch(
                        getByCategory(
                          localStorage.getItem("loginKey"),
                          changePrimi()
                        )
                      )
                    }>
                    <BiFoodMenu />
                    <span>Primi</span>
                  </div>
                  <div
                    className="p-1 align-content-center"
                    onClick={() =>
                      dispatch(
                        getByCategory(
                          localStorage.getItem("loginKey"),
                          changeSemplici()
                        )
                      )
                    }>
                    <BiFoodMenu />
                    <span>Secondi semplici</span>
                  </div>
                  <div
                    className="p-1 align-content-center"
                    onClick={() =>
                      dispatch(
                        getByCategory(
                          localStorage.getItem("loginKey"),
                          changeCarne()
                        )
                      )
                    }>
                    <BiFoodMenu />
                    <span>Secondi carne</span>
                  </div>
                  <div
                    className="p-1 align-content-center"
                    onClick={() =>
                      dispatch(
                        getByCategory(
                          localStorage.getItem("loginKey"),
                          changeContorni()
                        )
                      )
                    }>
                    <BiFoodMenu />
                    <span>Contorni</span>
                  </div>
                </div>
              </div>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mx-4">
            <Dropdown.Toggle className="dropFilter text-dark">
              <HiOutlineFilter className="mx-1 ic" />
              Filtri
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <h1>ciao</h1>
            </Dropdown.Menu>
          </Dropdown>
        </div>
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

        {here === data.length / 10 ? (
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

      {data.slice(iStart, iFinish).map((recipe) => {
        return (
          <div key={recipe.id} className="recipeList p-3">
            <div className="recipeCard d-flex align-content-center w-75 ">
              <div className="recipeImg">
                <img src={recipe.immagine} className="" alt="" />
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
              <div className="recipeDescription mx-4 my-3 d-flex flex-column justify-content-between w-100">
                <div>
                  <h3>{recipe.nome}</h3>
                  <p>{recipe.descrizione_piccola}</p>
                </div>
                <div>
                  <div className="d-flex justify-content-end">
                    <span
                      className="buttonRecipe"
                      onClick={() => handleShow(recipe)}>
                      Scopri di piu'
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

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
                 <div className="ms-2 " key={index}>- {ingredient}</div>
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
};

export default Recipe;
