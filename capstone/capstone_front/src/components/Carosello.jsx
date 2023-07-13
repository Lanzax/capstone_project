import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipe } from "../Redux/action/action_profile";
import { Container, Spinner } from "react-bootstrap";

function Carosello() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.user.recipe);

  useEffect(() => {
    const getRecipe = async () => {
      await dispatch(getAllRecipe());
      setLoading(false);
    };
    getRecipe();
  }, []);

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
      <Container className="d-flex justify-content-center">
        <div>
          <div>
            <img src={data[arrayNum2[0]].immagine} alt="" />
          </div>
          <div>
            <img src={data[arrayNum2[1]].immagine} alt="" />
          </div>
        </div>
        <Carousel className="carosello">
          {arrayNum.map((num) => {
            return (
              <Carousel.Item >
                <img
                  className="d-block w-100"
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
            <img src={data[arrayNum2[2]].immagine} alt="" />
          </div>
          <div>
            <img src={data[arrayNum2[3]].immagine} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Carosello;
