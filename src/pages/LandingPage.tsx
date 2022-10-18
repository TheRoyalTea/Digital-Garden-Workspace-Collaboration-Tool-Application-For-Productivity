import GitHubLogo from "../assets/github-logo.png";
import Waves from "../assets/landing-waves.svg";
import Arrows from "../assets/landing-arrows.svg";
import PoweredBy from "../assets/powered-by.svg";
import Preview from "../assets/preview.png";

type Props = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setLoginRequest: (loginRequest: boolean) => void;
  setRegisterRequest: (registerRequest: boolean) => void;
};

const LandingPage = ({
  setIsLoggedIn,
  setLoginRequest,
  setRegisterRequest,
}: Props) => {
  return (
    <div className="bg-dark-jet h-screen w-full">
      <div className="bg-black bg-opacity-40 flex flex-col items-center h-screen w-4/12 xs:h-[180px] xs:w-screen xs:items-start xs-min:after:content-'' xs-min:after:bg-black xs-min:after:h-[94%] xs-min:after:w-[6%] xs-min:after:bottom-0 xs-min:after:left-[33.33%] xs-min:after:absolute xs-min:after:opacity-20">
        <h1 className="text-cream font-bold text-4xl sm:text-base md:text-2xl lg:text-3xl tracking-[0.13em] leading-normal mt-32 xs:mt-8 xs:ml-8">
          <span className="text-blue">d</span>igital&nbsp;
          <span className="text-green">g</span>arden<br></br>
          <span className="text-pink">w</span>orkspace<br></br>
          <span className="text-pink">c</span>ollaboration<br></br>
          <span className="text-pink">t</span>ool<br></br>
          <div className="xs:brightness-[40%] xs:absolute xs:left-32 xs:top-16">
            <span className="text-pink">a</span>pplication<br></br>
          </div>
          <div className="xs:brightness-[65%] xs:absolute xs:left-20 xs:top-[100px]">
            &nbsp;&nbsp;&nbsp;for
          </div>
          <div className=" xs:absolute xs:left-20 xs:top-[120px] xs:underline xs:decoration-dashed xs:decoration-cream">
            <span className="text-red">p</span>
            <span className="text-blue">roductivity</span>
          </div>
        </h1>
      </div>
      <a href="https://github.com/TheRoyalTea/Digital-Garden-Workspace-Collaboration-Tool-Application-For-Productivity">
        <img
          src={GitHubLogo}
          className="absolute h-12 w-12 bottom-6 left-6 md:h-8 md:w-8 xs:top-36 xs:left-8 xs:w-6 xs:h-6"
        ></img>
      </a>
      <button
        className="button-blue absolute right-24 top-6 xs:right-8 xs:top-12"
        onClick={() => setLoginRequest(true)}
      >
        Login
      </button>
      <button
        className="absolute text-cream underline underline-offset-4 top-8 right-5 xs:right-[44px] xs:top-28"
        onClick={() => setRegisterRequest(true)}
      >
        Sign Up
      </button>
      <img
        src={Waves}
        className="absolute top-10 left-[20%] h-[15%] w-[70%] brightness-75"
      ></img>
      <img
        src={Arrows}
        className="absolute top-[20%] left-[30%] h-[70%] brightness-[90%]"
      ></img>
      <div className="absolute bottom-0 left-[80%]">
        <div className="relative flex flex-col mb-5 break-words text-cream text-2xl font-light leading-6">
          <p>
            <span className="text-red">shape</span>&nbsp;your&nbsp;
            <span className="text-pink underline">ideas</span>
          </p>
          <p>
            <span className="text-green">refine</span>&nbsp;them
          </p>
          <p>
            <span className="text-blue">collaborate</span>&nbsp;with others
          </p>
        </div>
        <img
          src={Preview}
          className="relative h-auto w-[%]"
          alt="preview"
        ></img>
        <img
          src={PoweredBy}
          className="relative h-12"
        ></img>
      </div>
    </div>
  );
};

export default LandingPage;
