import { Auth } from "aws-amplify";

export const Menubar = () => {
  async function signOut() {
    try {
      await Auth.signOut();
      {/* change with react-router */}
      window.location.reload();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  return (
    <div className="h-24 w-screen bg-jet border-b-4 border-cream">
      <div className="flex [&>*]:border-b-4 [&>*]:border-cream">
        <div className="menu-option">Add Items</div>
        <div className="menu-option">{"{ option }"}</div>
        <div className="menu-option">{"{ option }"}</div>
        <div className="menu-option">{"{ option }"}</div>
        <div className="flex justify-center items-center ml-[58%]">
          <button className="button-blue">Share</button>
          <button className="button-blue bg-red" onClick={signOut}>
            Sign Out
          </button>
        </div>
        <div className="h-24 w-24 ml-auto bg-green border-b-4 border-cream flex justify-center items-center text-cream">
          {"{ avatar }"}
        </div>
      </div>
    </div>
  );
};

export default Menubar;
