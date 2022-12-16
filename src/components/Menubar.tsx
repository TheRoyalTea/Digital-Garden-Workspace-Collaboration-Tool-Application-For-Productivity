import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import ShareButton from "./ShareButton";

// TODO: merge Menubar and Topbar into one component
type Props = {
  demo?: boolean;
  user?: any;
  setUser?: (user: any) => void;
  activeCanvas?: any;
};

export const Menubar = ({ user, setUser, activeCanvas, demo }: Props) => {
  const navigate = useNavigate();
  async function signOut() {
    try {
      await Auth.signOut();
      navigate("/");
      setUser?.(null);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  return (
    <div className="h-24 w-screen bg-jet border-b-4 border-cream">
      <div className="flex justify-between [&>*]:border-b-4 gap-5 [&>*]:border-cream">
        <div className="menu-option">Add Items</div>

        <div className="flex justify-center items-center ml-auto">
          {!demo && (
            <>
              {activeCanvas && <ShareButton activeCanvas={activeCanvas} />}
              <button className="button-blue bg-red" onClick={signOut}>
                Sign Out
              </button>
            </>
          )}
        </div>
        <div className="h-24 w-24 bg-green border-b-4 border-cream flex justify-center items-center text-cream">
          {user?.username}
        </div>
      </div>
    </div>
  );
};

export default Menubar;
