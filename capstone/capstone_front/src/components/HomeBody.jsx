import { useDispatch, useSelector } from "react-redux";
import Carosello from "./Carosello";
import Jumbotron from "./Jumbotron";
import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getAllRecipe } from "../Redux/action/action_profile";
import { AiFillHeart } from "react-icons/ai";
const HomeBody = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.recipe);
  const length = data.length;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getRecipe = async () => {
      await dispatch(getAllRecipe());
      setLoading(false);
    };
    getRecipe();
  }, []);
  const num = Math.floor(Math.random() * data.length) + 4;
  const num3 = Math.floor(Math.random() * data.length) + 4;
  return (
    <>
      <Jumbotron />
      <Carosello />
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
              console.log(recipe);
              return (
                <div
                  key={recipe.id}
                  className="d-flex flex-column mx-4 card justify-content-between ">
                  <div>
                    <img src={recipe.immagine} alt="" />
                    <AiFillHeart className="fs-2 heart-icon" />
                  </div>
                  <div className="py-1 px-2 fs-5 ">{recipe.nome}</div>
                  <div className="scopriButton  m-2 text-end">
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
              console.log(recipe);
              return (
                <div
                  key={recipe.id}
                  className="d-flex flex-column mx-4 card justify-content-between ">
                  <div>
                    <img src={recipe.immagine} alt="" />
                    <AiFillHeart className="fs-2 heart-icon" />
                  </div>
                  <div className="py-1 px-2 fs-5 ">{recipe.nome}</div>
                  <div className="scopriButton  m-2 text-end">
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
            data.slice(num3 - 4, num3).map((recipe) => {
              console.log(recipe);
              return (
                <div
                  key={recipe.id}
                  className="d-flex flex-column mx-4 card justify-content-between ">
                  <div>
                    <img src={recipe.immagine} alt="" />
                    <AiFillHeart className="fs-2 heart-icon" />
                  </div>
                  <div className="py-1 px-2 fs-5 ">{recipe.nome}</div>
                  <div className="scopriButton  m-2 text-end">
                    Scopri di piu'
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Container>
    </>
  );
};
export default HomeBody;
