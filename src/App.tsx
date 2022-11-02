import { useState } from "react";
import Board from "./pages/Board";
import LandingPage from "./pages/LandingPage";
import Menu from "./pages/Menu";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";

const App = () => {
  const [user, setUser] = useState(null);
  const [activeCanvas, setActiveCanvas] = useState(null);

  const onSignIn = () => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {activeCanvas !== null ? (
        <Board user={user} activeCanvas={activeCanvas} setActiveCanvas={setActiveCanvas}/>
      ) : user ? (
        <Menu user={user} setActiveCanvas={setActiveCanvas}/>
      ) : (
        <LandingPage onSignIn={onSignIn} />
      )}
    </>
  );
};

export default App;
