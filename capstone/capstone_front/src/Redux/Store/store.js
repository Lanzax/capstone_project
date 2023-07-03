import { configureStore } from "@reduxjs/toolkit";
import mainProfile from "../reducer/profilo";


const store = configureStore ({
    reducer: mainProfile
})

export default store