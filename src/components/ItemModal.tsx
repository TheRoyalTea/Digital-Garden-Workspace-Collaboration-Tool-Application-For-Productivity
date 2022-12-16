import { useState, useEffect } from "react";
import cx from "classnames";
import { Prism } from "react-syntax-highlighter";
//@ts-ignore
import { API } from "aws-amplify";
import {
  createItem as create,
  listItems,
  updateItem as update,
  deleteItem,
} from "../graphql";

type Props = {
  requestedModal: string | null;
  activeCanvas?: any;
  canvasItems: any;
  setCanvasItems: (canvasItems: any) => void;
  setRequestedModal: (requestedModal: string | null) => void;
  demo?: boolean;
};

const ItemModal = ({
  requestedModal,
  activeCanvas,
  setCanvasItems,
  canvasItems,
  setRequestedModal,
  demo,
}: Props) => {
  const [content, setContent] = useState("");
  const [savedContent, setSavedContent] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  const types = ["MARKDOWN", "CODE", "LINK"];

  const fetchItem = async () => {
    const item: any = await API.graphql({
      query: listItems,
      variables: {
        filter: {
          id: {
            eq: requestedModal,
          },
        },
      },
    });
    setSavedContent(item.data.listItems.items[0].content);
    setContent(item.data.listItems.items[0].content);
  };

  const createItem = async () => {
    const item: any = await API.graphql({
      query: create,
      variables: {
        input: {
          type: requestedModal,
          content: content,
          canvasID: activeCanvas.id,
        },
      },
    });
    setCanvasItems([...canvasItems, item.data.createItem]);
  };

  const updateItem = async () => {
    try {
      const item: any = await API.graphql({
        query: update,
        variables: {
          input: {
            id: requestedModal,
            content: content,
          },
        },
      });
      const updatedCanvasItems = canvasItems.map((canvasItem: any) => {
        if (canvasItem.id === item.data.updateItem.id) {
          return item.data.updateItem;
        }
        return canvasItem;
      });
      setCanvasItems(updatedCanvasItems);
    } catch (err) {
      console.log(err);
    }
  };

  const removeItem = async () => {
    try {
      await API.graphql({
        query: deleteItem,
        variables: {
          input: {
            id: requestedModal,
          },
        },
      });
      setCanvasItems(
        canvasItems.filter((item: any) => item.id !== requestedModal)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleConfirm = () => {
    setSavedContent(content);
    // FIXME: to differentiate between a new item and an existing item
    if (requestedModal && types.includes(requestedModal)) {
      demo
        ? setCanvasItems([
            ...canvasItems,
            {
              id: Math.random().toString(36).substring(2, 8),
              content: content,
              type: requestedModal,
            },
          ])
        : createItem();
    } else if (content === "") {
      demo
        ? setCanvasItems(
            canvasItems.filter((item: any) => item.id !== requestedModal)
          )
        : removeItem();
    } else {
      if (demo) {
        const updatedCanvasItems = canvasItems.map((canvasItem: any) => {
          if (canvasItem.id === requestedModal) {
            return {
              ...canvasItem,
              content: content,
            };
          }
          return canvasItem;
        });
        setCanvasItems(updatedCanvasItems);
      } else {
        updateItem();
      }
    }
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

  useEffect(() => {
    if (requestedModal && !types.includes(requestedModal)) {
      if (demo) {
        const item = canvasItems.find(
          (item: any) => item.id === requestedModal
        );
        setSavedContent(item.content);
        setContent(item.content);
      } else {
        fetchItem();
      }
    }
  }, []);

  return (
    <div
      className={cx(
        "h-[calc(100%-80px)] w-[calc(100%-80px)] absolute left-10 top-10 bg-jet bg-opacity-50 text-xl text-cream rounded-xl",
        "border border-cream border-opacity-25",
        "shadow-[24px_24px_rgba(0,0,0,0.3)]",
        "flex flex-col justify-center p-16",
        "transition duration-200",
        "hover:border-2 hover:border-opacity-75 hover:bg-opacity-100 hover:duration-300"
      )}
    >
      <textarea
        className="text-xl border text-cream bg-jet h-48 rounded-xl p-4"
        placeholder="Enter text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        autoFocus
      ></textarea>
      {requestedModal === "CODE" && (
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
