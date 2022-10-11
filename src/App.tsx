import { useState } from "react";
import Board from "./pages/Board";
import LandingPage from "./pages/LandingPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <>
      {isLoggedIn ? <Board /> : <LandingPage setIsLoggedIn={setIsLoggedIn}/>}
    </>
  );
};

export default App;
