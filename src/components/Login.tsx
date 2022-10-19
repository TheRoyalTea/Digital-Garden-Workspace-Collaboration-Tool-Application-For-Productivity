import { Auth } from "aws-amplify";
import { useState } from "react";

type Props = {
  setLoginRequest: (loginRequest: boolean) => void;
  setRegisterRequest: (registerRequest: boolean) => void;
  onSignIn: () => void;
};

const Login = ({
  setLoginRequest,
  setRegisterRequest,
  onSignIn,
}: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await Auth.signIn(username, password);
      onSignIn();
      setLoginRequest(false);
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  return (
    <>
      <button
        className="pop-up-exit-bg"
        onClick={() => setLoginRequest(false)}
      ></button>

      <div>
        <div className="pop-up-box">
          <p className="text-7xl text-cream">Login</p>
          <form>
            <input
              className="form-field mb-[20%]"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br />
            <input
              className="form-field"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </form>
          <button
            className="button-blue h-12 w-40"
            onClick={signIn}
          >
            Login
          </button>
          <p>
            Don't have an account?
            <button
              className="text-red"
              onClick={() => {
                setLoginRequest(false);
                setRegisterRequest(true);
              }}
            >
              &nbsp;Register
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
