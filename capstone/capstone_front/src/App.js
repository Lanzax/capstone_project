import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import MyNav from "./components/MyNav";
import Jumbotron from "./components/Jumbotron";
import Recipe from "./components/Recipe";
import Container from "react-bootstrap/esm/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeBody from "./components/HomeBody";


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <body>
          <MyNav />
          <Routes>

            <Route path='/home' element={
              <>
                <Jumbotron />
                <HomeBody />
              </>
            }
            />

            <Route path='/recipe' element={
              <>
                <Container>
                  <Recipe />
                </Container>
              </>
            }
            />

          </Routes>

        </body>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
