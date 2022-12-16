import { Auth } from "aws-amplify";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  setLoginRequest: (loginRequest: boolean) => void;
  setRegisterRequest: (registerRequest: boolean) => void;
};

const Register = ({ setLoginRequest, setRegisterRequest }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [proceed, setProceed] = useState(false);
  const [code, setCode] = useState("");

  const signUp = async () => {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      setProceed(true);
    } catch (error) {
      toast.error(`Error signing up: ${(error as any).message}}`);
      console.log("error signing up:", error);
    }
  };

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(username, code);
      setProceed(false);
      setRegisterRequest(false);
    } catch (error) {
      toast.error(`Invalid code`);
      console.log("error confirming sign up", error);
    }
  };

  return (
    <>
      <button
        className="pop-up-exit-bg"
        onClick={() => setRegisterRequest(false)}
      ></button>

      <div>
        <div className="pop-up-box">
          <p className="text-7xl text-cream">Register</p>
          {!proceed && (
            <form>
              <input
                className="form-field mb-[10%]"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <br />
              <input
                className="form-field mb-[10%]"
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
          )}
          {proceed && (
            <input
              className="form-field mb-[10%]"
              placeholder="Email code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            ></input>
          )}
          <button
            className="button-blue h-12 w-40"
            onClick={proceed ? confirmSignUp : signUp}
          >
            {proceed ? "Verify" : "Register"}
          </button>
          <p>
            Already have an account?
            <button
              className="text-red"
              onClick={() => {
                setLoginRequest(true);
                setRegisterRequest(false);
              }}
            >
              &nbsp;Login
            </button>
          </p>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Register;
