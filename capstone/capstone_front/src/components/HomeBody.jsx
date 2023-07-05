import { useDispatch, useSelector } from "react-redux";
import { getAllRecipe } from "../Redux/action/action_profile";
import { useEffect } from "react";

const HomeBody = ()=>{
    const dispatch = useDispatch();
    const key =
      "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJtLnJvc3NpQGV4YW1wbGUuY29tIiwiaWF0IjoxNjg4Mzc5NDc3LCJleHAiOjE2ODkyNDM0Nzd9.IHSFkto0t0YKu0ESRs_hKZGolDnsAIR7T9QtkY7NFXhHgO4PMQDkUQIDVnGUoRsA";

      const data = useSelector((state) => state.state.recipe);
    useEffect(() => {
      dispatch(getAllRecipe(key));
    }, []);
return(
    <>
    
    </>
)
}
export default HomeBody