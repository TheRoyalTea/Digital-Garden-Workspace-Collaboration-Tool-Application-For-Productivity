import { useState, useEffect } from "react";
import cx from "classnames";
import { Prism } from "react-syntax-highlighter";
import { API } from "aws-amplify";
import { createItem } from "../graphql";

type Props = {
  type: string | null;
  activeCanvas: any;
  canvasItems: any;
  setCanvasItems: (canvasItems: any) => void;
  setRequestedModal: (requestedModal: string | null) => void;
};

const ItemModal = ({
  type,
  activeCanvas,
  setCanvasItems,
  canvasItems,
  setRequestedModal,
}: Props) => {
  const [content, setContent] = useState("");
  const [savedContent, setSavedContent] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  const newItem = async () => {
    const item: any = await API.graphql({
      query: createItem,
      variables: {
        input: {
          type: type,
          content: content,
          canvasID: activeCanvas.id,
        },
      },
    });
    setCanvasItems([...canvasItems, item.data.createItem]);
  };

  const handleConfirm = () => {
    setSavedContent(content);
    newItem();
    setRequestedModal(null);
  };

  const handleCancel = () => {
    setContent(savedContent);
    setRequestedModal(null);
  };

  const handleKeyDown = (e: any) => {
    console.log(e.key);
    e.shiftKey && e.key === "Enter" && handleConfirm();
    e.key === "Escape" && handleCancel();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className={cx(
        "h-[calc(100%-80px)] w-[calc(100%-80px)] absolute bg-jet bg-opacity-50 text-xl text-cream rounded-xl",
        "border border-cream border-opacity-25",
        "shadow-[24px_24px_rgba(0,0,0,0.3)]",
        "flex flex-col justify-center p-16",
        "transition duration-200",
        "hover:border-2 hover:border-opacity-75 hover:bg-opacity-100 hover:duration-300"
      )}
    >
      <textarea
        className="text-xl border text-cream bg-jet h-48 rounded-xl"
        placeholder="Enter text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        autoFocus
      ></textarea>
      {type === "CODE" && (
        <select
          className="text-xl border text-cream bg-jet rounded-xl"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          {Prism.supportedLanguages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      )}
      <div className="flex justify-center items-center mt-4">
        <button
          className="w-40 h-12 text-xl border text-cream bg-jet rounded-xl"
          onClick={handleConfirm}
        >
          Confirm
        </button>

        <button
          className="w-40 h-12 text-xl border text-cream bg-jet rounded-xl"
          onClick={() => setContent("")}
        >
          Clear
        </button>

        <button
          className="w-40 h-12 text-xl border text-cream bg-jet rounded-xl"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
