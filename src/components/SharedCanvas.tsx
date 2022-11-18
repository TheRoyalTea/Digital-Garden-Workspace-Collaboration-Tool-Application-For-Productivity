import { useState } from "react";

type Props = {
  setIsSharedCanvas: (isSharedCanvas: boolean) => void;
};

const SharedCanvas = ({ setIsSharedCanvas }: Props) => {
  const [inviteCode, setInviteCode] = useState<string>();
  return (
    <>
      <button
        className="fixed bg-black bg-opacity-50 inset-0 cursor-default w-full h-screen"
        onClick={() => setIsSharedCanvas(false)}
      ></button>

      <div>
        <div className="pop-up-box">
          <p className="text-5xl text-cream">Join Canvas</p>

          <form>
            <input
              className="form-field"
              value={inviteCode}
              placeholder="Invite Code"
              onChange={(e) => setInviteCode(e.target.value)}
            ></input>
          </form>

          <button
            className="button-blue h-12 w-40"
            onClick={() => {
              setIsSharedCanvas(false);
            }}
          >
            Join
          </button>
        </div>
      </div>
    </>
  );
};

export default SharedCanvas;
