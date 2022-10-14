type Props = {
  setLoginRequest: (loginRequest: boolean) => void;
  setRegisterRequest: (registerRequest: boolean) => void;
};

const Register = ({ setLoginRequest, setRegisterRequest }: Props) => {
  return (
    <>
      <button
        className="pop-up-exit-bg"
        onClick={() => setRegisterRequest(false)}
      ></button>

      <div>
        <div className="pop-up-box">
          <p className="text-7xl text-cream">Register</p>
          <form>
            <input className="form-field mb-[10%]" placeholder="Email"></input>
            <br />
            <input
              className="form-field mb-[10%]"
              placeholder="Username"
            ></input>
            <br />
            <input className="form-field" placeholder="Password"></input>
          </form>
          <button
            className="button-blue h-12 w-40"
            onClick={() => {
              setRegisterRequest(false);
              setLoginRequest(true);
            }}
          >
            Register
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
    </>
  );
};

export default Register;
