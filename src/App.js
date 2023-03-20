import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Login from "./views/components/login/Login";
import HomePage from "./views/homePage/HomePage";

function App() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("token")));
  return <>{loggedIn ? <HomePage setLoggedIn={setLoggedIn} /> : <Login setLoggedIn={setLoggedIn} />}</>;
}

export default App;
