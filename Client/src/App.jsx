import Cards from "./components/Cards/Cards.jsx";
import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./components/Form/form.jsx";
import Details from "./components/Details/detail.jsx";
import About from "./components/About/about.jsx";
import PATHROUTES from "./components/Helpers/pathRouters.js";
import Favorites from "./components/Favorites/favorites.jsx";

function App() {
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //ASYNC AWAIT
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error);
    }

  }

  const { pathname } = useLocation();

  const [characters, setCharacters] = useState([]);

  const handleSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters([...characters, data]);
      } else {
        window.alert("No hay personajes con este ID");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hndleOnClose = (id) => {
    const filtro = characters.filter((ch) => ch.id !== id);
    setCharacters(filtro);
  };

  return (
    <div>
      <div>
        {pathname !== "/" && <Nav onSearch={handleSearch} />}
        <Routes>
          <Route path={PATHROUTES.LOGIN} element={<Form login={login} />} />
          <Route
            path={PATHROUTES.HOME}
            element={<Cards characters={characters} onClose={hndleOnClose} />}
          />
          <Route path={PATHROUTES.ABOUT} element={<About />} />
          <Route path={PATHROUTES.DETAIL} element={<Details />} />
          <Route path={PATHROUTES.FAVORITES} element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

