import React from 'react';

type Props = {
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    setLoginRequest: (loginRequest: boolean) => void;
    setRegisterRequest: (registerRequest: boolean) => void;
  };

const Login = ({setIsLoggedIn, setLoginRequest, setRegisterRequest }: Props) => {
    return (
    <>
        <button className = "fixed bg-black bg-opacity-50 inset-0" onClick={() => setLoginRequest(false)}> </button>

        <div>
            <div className = "absolute inset-[50%] translate-x-[-50%] translate-y-[-50%] bg-jet h-2/4 w-1/4 grid place-items-center text-cream border rounded-xl">
                <p className= "text-7xl text-cream">Login</p>
                <form>
                    <input className= "bg-dark-jet rounded-xl border h-12 w-80 mb-[20%] text-center" placeholder="Username"></input><br/>
                    <input className= "bg-dark-jet rounded-xl border h-12 w-80 text-center" placeholder="Password"></input>
                </form>
                <button className="button-blue h-12 w-40" onClick={() => {setLoginRequest(false); setIsLoggedIn(true);}}> Login </button>
                <p>Don't have an accout? <button className="text-red" onClick={() => {setLoginRequest(false); setRegisterRequest(true);}}>Register</button></p>
            </div>
        </div>
    </>
    )
}

export default Login;