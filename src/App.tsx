import { useState } from "react";
import CreateCanvas from "./components/CreateCanvas";
import Login from "./components/Login";
import Register from "./components/Register";
import SharedCanvas from "./components/SharedCanvas";
import Board from "./pages/Board";
import LandingPage from "./pages/LandingPage";
import Menu from "./pages/Menu";

import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";
//@ts-ignore
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginRequest, setLoginRequest] = useState(false);
  const [registerRequest, setRegisterRequest] = useState(false);
  const [isValidCanvas, setIsValidCanvas] = useState(false);
  const [isNewCanvas, setIsNewCanvas] = useState(false);
  const [isSharedCanvas, setIsSharedCanvas] = useState(false);
  const [user, setUser] = useState(null);
  
  const onSignIn = () => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
        setIsLoggedIn(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {(!isLoggedIn && !isValidCanvas) && <LandingPage setIsLoggedIn={setIsLoggedIn} setLoginRequest={setLoginRequest} setRegisterRequest={setRegisterRequest}/>}
      {(isLoggedIn && !isValidCanvas) && <Menu setIsValidCanvas={setIsValidCanvas} setIsNewCanvas={setIsNewCanvas} setIsSharedCanvas={setIsSharedCanvas}/>}
      {(isLoggedIn && isValidCanvas) && <Board user={user}/>}
      {loginRequest && <Login setIsLoggedIn={setIsLoggedIn} setLoginRequest={setLoginRequest} setRegisterRequest={setRegisterRequest}/>}
      {registerRequest && <Register setLoginRequest={setLoginRequest} setRegisterRequest={setRegisterRequest}/>}
      {isNewCanvas && <CreateCanvas setIsNewCanvas={setIsNewCanvas} setIsValidCanvas={setIsValidCanvas}/>}
      {isSharedCanvas && <SharedCanvas setIsSharedCanvas={setIsSharedCanvas} setIsValidCanvas={setIsValidCanvas}/>}
    </>
  );
};

export default App;
