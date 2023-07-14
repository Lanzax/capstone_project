import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";
import MyNav from "./components/MyNav";
import Container from "react-bootstrap/esm/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeBody from "./components/HomeBody";
import Recipe from "./components/Recipe";
import MyFooter from "./components/MyFooter";
import MyMenu from "./components/Menu";
import LocalRecipe from "./components/LocalRecipe";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <body>
          <MyNav/>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomeBody />
                </>
              }
            />
            <Route
              path="/menu"
              element={
                <>
                  <MyMenu />
                </>
              }
            />
            <Route
              path="/myrecipe"
              element={
                <>
                  <LocalRecipe />
                </>
              }
            />
            <Route
              path="/category"
              element={
                <>
                  <Container>
                    <Recipe />
                  </Container>
                </>
              }
            />
          </Routes>
          <MyFooter id="footer" />
        </body>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
