import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Board from "./pages/Board";
import LandingPage from "./pages/LandingPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginRequest, setLoginRequest] = useState(false);
  const [registerRequest, setRegisterRequest] = useState(false);
  
  return (
    <>
      {isLoggedIn ? <Board /> : <LandingPage setIsLoggedIn={setIsLoggedIn} setLoginRequest={setLoginRequest} setRegisterRequest={setRegisterRequest}/>}
      {loginRequest && <Login setIsLoggedIn={setIsLoggedIn} setLoginRequest={setLoginRequest} setRegisterRequest={setRegisterRequest}/>}
      {registerRequest && <Register setLoginRequest={setLoginRequest} setRegisterRequest={setRegisterRequest}/>}
    </>
  );
};

export default App;
