type Props = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setLoginRequest: (loginRequest: boolean) => void;
  setRegisterRequest: (registerRequest: boolean) => void;
};

const Login = ({
  setIsLoggedIn,
  setLoginRequest,
  setRegisterRequest,
}: Props) => {
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
            ></input>
            <br />
            <input className="form-field" placeholder="Password"></input>
          </form>
          <button
            className="button-blue h-12 w-40"
            onClick={() => {
              setLoginRequest(false);
              setIsLoggedIn(true);
            }}
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
