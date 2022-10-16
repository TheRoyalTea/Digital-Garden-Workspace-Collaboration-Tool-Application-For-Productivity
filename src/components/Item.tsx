import React, { useEffect, useState } from "react";

type Props = {
  name: string;
};

const Item = ({ name }: Props) => {
  const [content, setContent] = useState("");
  const [savedContent, setSavedContent] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setSavedContent(content);
    setIsConfirmed(true);
  };

  const handleCancel = () => {
    setContent(savedContent);
    setIsConfirmed(true);
  };

  const handleKeyDown = (e: any) => {
    console.log(e.key);
    e.key === "Enter" && handleConfirm();
    e.key === "Escape" && handleCancel();
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);

  }, [handleKeyDown])

  const confirmedItem = content !== "" && (
    <div
      className="h-24 w-40 m-10 bg-jet text-xl text-cream rounded-xl border border-cream border-opacity-25 shadow-[8px_8px_rgba(0,0,0,0.4)] flex justify-center items-center hover:border-2 hover:border-opacity-75 transition hover:duration-150 hover:shadow-[12px_12px_rgba(0,0,0,0.3)] hover:translate-x-[-4px] hover:translate-y-[-4px]"
      onClick={() => setIsConfirmed(false)}
    >
      {content}
    </div>
  );

  const editingModal = (
    <div className="h-[calc(100%-80px)] w-[calc(100%-80px)] absolute m-10 bg-jet text-xl text-cream rounded-xl border border-cream border-opacity-25 shadow-[24px_24px_rgba(0,0,0,0.4)] flex justify-center items-center" onKeyDown={handleKeyDown}>
      <input
        className="h-12 w-40 text-xl text-cream bg-jet rounded-xl border"
        placeholder="Enter text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        autoFocus
      ></input>

      <button
        className="h-12 w-40 text-xl text-cream bg-jet rounded-xl border"
        {...(content === "" && { disabled: true })}
        onClick={handleConfirm}
      >
        Confirm
      </button>

      <button
        className="h-12 w-40 text-xl text-cream bg-jet rounded-xl border"
        onClick={() => setContent("")}
      >
        Clear
      </button>

      <button
        className="h-12 w-40 text-xl text-cream bg-jet rounded-xl border"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );

  return <>{isConfirmed ? confirmedItem : editingModal}</>;
};

export default Item;
