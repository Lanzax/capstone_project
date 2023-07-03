
import { AiOutlineHeart } from 'react-icons/ai';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipe } from '../Redux/Actions/action_profile';
import {FaUtensils} from "react-icons/fa";
import {HiOutlineFilter} from "react-icons/hi";

const Recipe = () => {
  const dispatch = useDispatch();
  const key = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJtLnJvc3NpQGV4YW1wbGUuY29tIiwiaWF0IjoxNjg4Mzc5NDc3LCJleHAiOjE2ODkyNDM0Nzd9.IHSFkto0t0YKu0ESRs_hKZGolDnsAIR7T9QtkY7NFXhHgO4PMQDkUQIDVnGUoRsA"
  const data = useSelector((state) => state.state.recipe)
  useEffect(() => {
    dispatch(getAllRecipe(key))
  }, []);
  console.log(data)
  return (
    <>
    <div className='mx-5 my-4 pRecipe'>
      <p>Primi</p>
      <div className='d-flex '>
        <span className=''><FaUtensils className='mx-2 ic'/>Tipo</span>
        <span className='mx-5 '><HiOutlineFilter  className='mx-2 ic' />Filtri</span>
      </div>
    </div>

{
  data.slice(0,10).map((recipe)=>(
<div key={recipe.id} className="recipeList p-3">
  <div className="recipeCard d-flex align-content-center w-75 ">
    <div className="recipeImg">
      <img src={recipe.immagine} className="" alt="" />
      <AiOutlineHeart className="fs-2 like icon" />
    </div>
    <div className="recipeDescription mx-4 my-3 d-flex flex-column justify-content-between w-100">
      <div>
        <h3>{recipe.nome}</h3>
        <p>{recipe.ingredienti}</p>
      </div>
      <div>
        <div className="d-flex justify-content-end">
          <span className='buttonRecipe'>Scopri di più</span>
        </div>
      </div>
    </div>
  </div>
</div>
  ))
}
    </>
  );
};

export default Recipe;

