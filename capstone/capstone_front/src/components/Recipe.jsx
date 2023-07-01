import { AiOutlineHeart } from "react-icons/ai";

const Recipe = () => {
  return (
    <div className="recipeList p-3">
      <div className="recipeCard rounded d-flex align-content-center w-50 ">
        <div className="recipeImg">
          <img src="https://placekitten.com/200" className="" alt="" />
        </div>
        <div className="recipeDescription mx-4 my-3 ">
          <div>
            <h2>Pasta alla carbonara</h2>
            <p>panna,olio,sale,pane,aglio</p>
          </div>
          <div>
            <div className="d-flex justify-content-end">
              <div className="">
                <AiOutlineHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
