import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Board from "./pages/Board";
import LandingPage from "./pages/LandingPage";

import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
//@ts-ignore
const App = ({ signOut, user}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginRequest, setLoginRequest] = useState(false);
  const [registerRequest, setRegisterRequest] = useState(false);
  
  return (
    <>
          <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
      {isLoggedIn ? <Board /> : <LandingPage setIsLoggedIn={setIsLoggedIn} setLoginRequest={setLoginRequest} setRegisterRequest={setRegisterRequest}/>}
      {loginRequest && <Login setIsLoggedIn={setIsLoggedIn} setLoginRequest={setLoginRequest} setRegisterRequest={setRegisterRequest}/>}
      {registerRequest && <Register setLoginRequest={setLoginRequest} setRegisterRequest={setRegisterRequest}/>}
    </>
  );
};

export default withAuthenticator(App);
