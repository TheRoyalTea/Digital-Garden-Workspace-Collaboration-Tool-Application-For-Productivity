type Props = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const LandingPage = ({setIsLoggedIn}: Props) => {
  return (
    <>
        <button className="border" onClick={() => setIsLoggedIn(true)}>Login</button>
    </>
  )
}

export default LandingPage;