import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByCategory } from "../Redux/action/action_profile";
import { FaUtensils } from "react-icons/fa";
import { BiFoodMenu, } from "react-icons/bi";
import { HiOutlineFilter } from "react-icons/hi";
import { Dropdown, Spinner } from "react-bootstrap";

const Recipe = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.category);
  const getKey = useSelector((state) => state.user.login.accessToken);
  const [loading, setLoading] = useState(true);
  const [iStart, setiStart] = useState(1);
  const [iFinish, setIFinish] = useState(10);
  const [here, sethere] = useState(1)
  useEffect(() => {
    const getLocal =async () => {
       await dispatch(getByCategory(getKey, localStorage.getItem("category")));
       setLoading(false);
    };
    getLocal();
  }, [])
  if (loading) {
    return (
      <div className="text-center my-5 text-warning">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  console.log(data)



  console.log(here, iStart, iFinish)

  function replace(str) {
    return str.replace(/_/g, ' ');
  }

  function firsLetterUpperCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function separeObject(x) {
    if (!Array.isArray(x)) {
      throw new Error('Input is not an array');
    }

    if (x.length === 0) {
      return '';
    }

    let y = '';
    for (let i = 0; i < x.length; i++) {
      y += x[i];

      if (i !== x.length - 1) {
        y += ', ';
      }
    }

    return y;
  }

  function nextFunction() {
    if (here === data.length / 10) {
    } else {
      setiStart(iStart + 10);
      setIFinish((iFinish + 10));
      sethere(here + 1)
    }
  }

  function beforeFunction() {
    if (here === 1) {
    } else {
      setiStart(iStart - 10);
      setIFinish((iFinish - 10));
      sethere(here - 1)
    }
  }

  function changePrimi() {
    if (here === 1) {
      localStorage.setItem("category", "primi")
      return localStorage.getItem("category")
    } else {
      sethere(1)
      setiStart(1)
      setIFinish(10)
      localStorage.setItem("category", "primi")
      return localStorage.getItem("category")
    }

  }

  function changeCarne() {
    if (here === 1) {

      localStorage.setItem("category", "secondi_carne")
      return localStorage.getItem("category")
    } else {
      sethere(1)
      setiStart(1)
      setIFinish(10)

      localStorage.setItem("category", "secondi_carne")
      return localStorage.getItem("category")
    }

  }

  function changeSemplici() {
    if (here === 1) {
      localStorage.removeItem("category", "secondi_semplici")
      return localStorage.getItem("category")
    } else {
      sethere(1)
      setiStart(1)
      setIFinish(10)
      localStorage.removeItem("category", "secondi_semplici")
      return localStorage.getItem("category")
    }


  }
  
  function changeContorni() {
    if (here === 1) {
      localStorage.setItem("category", "contorni")
      return localStorage.getItem("category")
    } else {
      sethere(1)
      setiStart(1)
      setIFinish(10)
      localStorage.setItem("category", "contorni")
      return localStorage.getItem("category")
    }
  }
  return (
    <>
      <div className="mx-5 my-4 pRecipe">
        <p>{firsLetterUpperCase(replace(localStorage.getItem("category")))}</p>
        <div className="d-flex ">
          <Dropdown>
            <Dropdown.Toggle className="dropFilter text-dark">
              <FaUtensils className="mx-1 ic" />
              Tipo
            </Dropdown.Toggle>

            <Dropdown.Menu className="filter">
              <div className="d-flex flex-column justify-content-between p-2">
                <div className="px-3">
                  <div className="p-1 align-content-center" onClick={() => dispatch(getByCategory(localStorage.getItem("loginKey"), changePrimi()))}><BiFoodMenu /><span>Primi</span></div>
                  <div className="p-1 align-content-center" onClick={() => dispatch(getByCategory(localStorage.getItem("loginKey"), changeSemplici()))}><BiFoodMenu /><span>Secondi semplici</span></div>
                  <div className="p-1 align-content-center" onClick={() => dispatch(getByCategory(localStorage.getItem("loginKey"), changeCarne()))}><BiFoodMenu /><span>Secondi carne</span></div>
                  <div className="p-1 align-content-center" onClick={() => dispatch(getByCategory(localStorage.getItem("loginKey"), changeContorni()))}><BiFoodMenu /><span>Contorni</span></div>
                </div>
              </div>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mx-4" >
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
        {
        here === 1  
        ?
          <div className=" mx-3 px-2 py-1 rounded-circle" ><AiOutlineArrowLeft /></div>
          :
          <div className="numberPage mx-3 px-2 py-1 rounded-circle" onClick={beforeFunction}><AiOutlineArrowLeft /></div>
        }
        <div>Pagina {here}</div>

        {here === data.length / 10?
          <div className="mx-3 px-2 py-1 rounded-circle"><AiOutlineArrowRight /></div>
          :
          <div className="numberPage mx-3 px-2 py-1 rounded-circle" onClick={nextFunction}><AiOutlineArrowRight /></div>
        }
        
      </div>

    </>
  );
};

export default Recipe;
