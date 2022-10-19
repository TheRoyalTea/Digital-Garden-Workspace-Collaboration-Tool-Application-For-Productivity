import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Board from "./pages/Board";
import LandingPage from "./pages/LandingPage";

import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";
//@ts-ignore
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginRequest, setLoginRequest] = useState(false);
  const [registerRequest, setRegisterRequest] = useState(false);
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

      {isLoggedIn ? (
        <Board user={user}/>
      ) : (
        <LandingPage
          setIsLoggedIn={setIsLoggedIn}
          setLoginRequest={setLoginRequest}
          setRegisterRequest={setRegisterRequest}
        />
      )}
      {loginRequest && (
        <Login
          onSignIn={onSignIn}
          setLoginRequest={setLoginRequest}
          setRegisterRequest={setRegisterRequest}
        />
      )}
      {registerRequest && (
        <Register
          setLoginRequest={setLoginRequest}
          setRegisterRequest={setRegisterRequest}
        />
      )}
    </>
  );
};

export default App;
