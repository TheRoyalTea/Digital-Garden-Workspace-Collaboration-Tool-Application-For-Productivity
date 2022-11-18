import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listRequests, createRequest } from "../graphql";

type Props = {
  activeCanvas: any;
};

const ShareButton = ({ activeCanvas }: Props) => {
  const [requests, setRequests] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);
  const [inviteCode, setInviteCode] = useState("");
  const [isEditInvite, setIsEditInvite] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isCodeGenerated, setIsCodeGenerated] = useState(false);
  //const [isCodeValid, setIsCodeValid] = useState(false);
  //const [isCodeUsed, setIsCodeUsed] = useState(false);

  const debugfn = () => {
    console.log(inviteCode, isEditInvite, isCodeGenerated, activeCanvas.id);
  };

  const generateInviteCode = () => {
    let generatedCode = Math.random().toString(36).substring(2, 8);
    if (isUnique(generatedCode)) {
      setInviteCode(generatedCode);
      setIsCodeGenerated(true);
    } else {
      generateInviteCode();
    }
  };

  const isUnique = (generatedCode: string) => {
    getRequests(generatedCode);
    return requests.length === 0;
  };

  const getRequests = async (generatedCode: string) => {
    const requests: any = await API.graphql({
      query: listRequests,
      variables: {
        filter: {
          code: {
            eq: generatedCode,
          },
        },
      },
    });
    setRequests(requests.data.listRequests.items);
  };

  const newRequest = async () => {
    await API.graphql({
      query: createRequest,
      variables: {
        input: {
          code: inviteCode,
          isEdit: isEditInvite,
          requestCanvasId: activeCanvas.id,
        },
      },
    });
  };

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);

  useEffect(() => {
    if (inviteCode !== "") newRequest();
  }, [inviteCode]);

  return (
    <>
      <button className="button-blue" onClick={() => setShowModal(true)}>
        Share
      </button>
      {showModal && (
        <>
          <button
            className="fixed bg-black bg-opacity-50 inset-0 cursor-default w-screen h-screen left-0 top-0 z-20"
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
            <p className="text-cream text-center mx-6">
              Share the code below with others to collaborate on this canvas (
              <em>{activeCanvas.name}</em>
              ).
            </p>
            <div className="flex flex-row justify-center">
              <button
                className="button-blue bg-green"
                disabled={isEditInvite}
                onClick={() => setIsEditInvite(true)}
              >
                Can Edit
              </button>
              <button
                className="button-blue bg-green"
                disabled={!isEditInvite}
                onClick={() => setIsEditInvite(false)}
              >
                Can View
              </button>
            </div>
            <input className="form-field" value={inviteCode} readOnly></input>
            <button
              className="inline-block bg-blue rounded-md h-12 w-12"
              disabled={isCopied}
              onClick={() => {
                navigator.clipboard.writeText(inviteCode);
                setIsCopied(true);
              }}
            >
              {isCopied ? "Copied!" : "Copy"}
            </button>
            <button
              className="button-blue h-12 w-40"
              onClick={() => {
                generateInviteCode();
              }}
            >
              Generate Code
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default ShareButton;
