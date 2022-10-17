import React, { useEffect, useState } from "react";
import cx from "classnames";
import { Prism } from "react-syntax-highlighter";
import MarkdownItem from "./MarkdownItem";
import CodeSnipItem from "./CodeSnipItem";
import LinkItem from "./LinkItem";

type Props = {
  name: string;
};

const Item = ({ name }: Props) => {
  const [size, setSize] = useState({ width: 300, height: 300 });
  const [content, setContent] = useState("");
  const [savedContent, setSavedContent] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

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
    e.shiftKey && e.key === "Enter" && handleConfirm();
    e.key === "Escape" && handleCancel();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const confirmedItem = savedContent !== "" && (
    <div
      className={cx(
        "text-xl text-cream rounded-xl",
        "border border-cream border-opacity-25",
        "shadow-[8px_8px_rgba(0,0,0,0.4)]",
        "inline-block break-all whitespace-pre-line resize overflow-auto select-none",
        "hover:border-2 hover:border-opacity-75 transition hover:duration-150",
        "hover:shadow-[16px_16px_rgba(0,0,0,0.3)] hover:translate-x-[-4px] hover:translate-y-[-4px]",
        name === "code snip" ? "bg-gruv-dark" : "bg-jet"
      )}
      onDoubleClick={(e) => {
        setIsConfirmed(false);
      }}
    >
      {(() => {
        switch (name) {
          case "markdown":
            return <MarkdownItem savedContent={savedContent} />;
          case "code snip":
            return <CodeSnipItem savedContent={savedContent} selectedLanguage={selectedLanguage} />;
          case "link":
            return <LinkItem savedContent={savedContent} />;
        }
      })()}
    </div>
  );

  const editingModal = (
    <div
      className={cx(
        "h-[calc(100%-80px)] w-[calc(100%-80px)] absolute m-10 bg-jet bg-opacity-50 text-xl text-cream rounded-xl",
        "border border-cream border-opacity-25",
        "shadow-[24px_24px_rgba(0,0,0,0.3)]",
        "flex justify-center items-center",
        "transition duration-200",
        "hover:border-2 hover:border-opacity-75 hover:bg-opacity-100 hover:duration-300"
      )}
    >
      <textarea
        className="text-xl border text-cream bg-jet rounded-xl"
        placeholder="Enter text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        autoFocus
      ></textarea>
      {name === "code snip" && (
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
  );

  return (
    <>
      {savedContent !== "" && confirmedItem}
      {!isConfirmed && editingModal}
    </>
  );
};

export default Item;
