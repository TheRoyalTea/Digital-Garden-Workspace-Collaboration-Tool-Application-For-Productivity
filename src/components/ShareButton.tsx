import { useState } from "react";

type Props = {
  activeCanvas: any;
};

const ShareButton = ({ activeCanvas }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [inviteCode, setInviteCode] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isCodeGenerated, setIsCodeGenerated] = useState(false);

  return (
    <>
      <button className="button-blue" onClick={() => setShowModal(true)}>
        Share
      </button>
      {showModal && (
        <>
          <button
            className="fixed bg-black bg-opacity-50 inset-0 cursor-default w-full h-screen"
            onClick={() => setShowModal(false)}
          ></button>
          <div
            className="pop-up-box"
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setShowModal(false);
              }
            }}
          >
            <p className="text-5xl text-cream">Share Canvas</p>
            <p className="text-cream">
              Share this link with others to collaborate on this canvas(
              {activeCanvas.name}).
            </p>
            <input className="form-field" value={inviteCode} readOnly></input>
            <button
              className="inline-block bg-blue rounded-md h-12 w-12"
              onClick={() => {
                navigator.clipboard.writeText(inviteCode);
                setIsCopied(true);
              }}
            >
              {isCopied ? "Copied!" : "Copy"}
            </button>
            <button className="button-blue h-12 w-40">Generate Code</button>
          </div>
        </>
      )}
    </>
  );
};

export default ShareButton;
