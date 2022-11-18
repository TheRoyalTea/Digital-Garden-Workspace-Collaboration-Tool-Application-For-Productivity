import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Board from "./pages/Board";
import LandingPage from "./pages/LandingPage";
import Menu from "./pages/Menu";
import PrivateRoutes from "./components/PrivateRoutes";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";

const App = () => {
  const [user, setUser] = useState(null);
  const [activeCanvas, setActiveCanvas] = useState(null);

  const navigate = useNavigate();

  const onSignIn = () => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
        navigate("/menu");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage onSignIn={onSignIn} />} />
        <Route element={<PrivateRoutes user={user} />}>
          <Route
            path="/canvas/:id"
            element={
              <Board
                user={user}
                setUser={setUser}
                activeCanvas={activeCanvas}
                setActiveCanvas={setActiveCanvas}
              />
            }
          />
          <Route
            path="/menu"
            element={
              <Menu
                user={user}
                setUser={setUser}
                activeCanvas={activeCanvas}
                setActiveCanvas={setActiveCanvas}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
