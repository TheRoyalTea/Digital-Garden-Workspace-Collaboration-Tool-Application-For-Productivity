import GitHubLogo from "../assets/github-logo.png";

type Props = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setLoginRequest: (loginRequest: boolean) => void;
  setRegisterRequest: (registerRequest: boolean) => void;
};

const LandingPage = ({ setIsLoggedIn, setLoginRequest, setRegisterRequest }: Props) => {
  return (
    <div className="bg-dark-jet h-screen w-full">
      <button className="button-blue absolute right-24 top-6" onClick={() => setLoginRequest(true)}>Login</button>
      <button className="absolute text-cream underline underline-offset-4 top-8 right-5" onClick={() => setRegisterRequest(true)}>Sign Up</button>
      <button className="xs-min:hidden bg-cream">hide/show</button>
      <div className="bg-[#171313] flex flex-col items-center h-screen w-4/12 xs:hidden">
        <h1 className="text-cream font-bold text-4xl sm:text-base md:text-2xl lg:text-3xl tracking-[0.13em] leading-normal mt-32">
          <span className="text-blue">d</span>igital&nbsp;
          <span className="text-green">g</span>arden<br></br>
          <span className="text-pink">w</span>orkspace<br></br>
          <span className="text-pink">c</span>ollaboration<br></br>
          <span className="text-pink">t</span>ool<br></br>
          <span className="text-pink">a</span>pplication<br></br>
          &nbsp;&nbsp;&nbsp;for<br></br>
          <span className="text-red">p</span>
          <span className="text-blue">roductivity</span>
        </h1>
      </div>
      <a href="https://github.com/TheRoyalTea/Digital-Garden-Workspace-Collaboration-Tool-Application-For-Productivity">
        <img
          src={GitHubLogo}
          className="absolute h-12 w-12 bottom-6 left-6 md:h-8 md:w-8 xs-min:hidden"
        ></img>
      </a>
    </div>
  );
};

export default LandingPage;
