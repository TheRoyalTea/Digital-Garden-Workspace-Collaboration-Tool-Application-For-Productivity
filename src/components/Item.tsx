import React, { useEffect, useState } from "react";
import cx from "classnames";
import { Prism } from "react-syntax-highlighter";
import MarkdownItem from "./MarkdownItem";
import CodeSnipItem from "./CodeSnipItem";
import LinkItem from "./LinkItem";

type Props = {
  data: any;
  setRequestedModal: (requestedModal: string | null) => void;
};

const Item = ({ data, setRequestedModal }: Props) => {
  return (
    <div
      className={cx(
        "text-xl text-cream rounded-xl",
        "border border-cream border-opacity-25",
        "shadow-[8px_8px_rgba(0,0,0,0.4)] hover:shadow-[16px_16px_rgba(0,0,0,0.3)]",
        "inline-block break-all whitespace-pre-line resize overflow-auto select-none",
        "hover:border-2 hover:border-opacity-75 transition hover:duration-150",
        "hover:translate-x-[-4px] hover:translate-y-[-4px]",
        data.name === "code snip" ? "bg-gruv-dark" : "bg-jet"
      )}
      onDoubleClick={(e) => {
        // TODO: add double click to edit (open modal with item id, content, and type)
        setRequestedModal(data.id);
      }}
    >
      {(() => {
        switch (data.type) {
          case "MARKDOWN":
            return <MarkdownItem savedContent={data.content} />;
          case "CODE":
            {
              /* FIXME: add language support */
            }
            return (
              <CodeSnipItem
                savedContent={data.content}
                selectedLanguage={"javascript"}
              />
            );
          case "LINK":
            return <LinkItem savedContent={data.content} />;
        }
      })()}
    </div>
  );
};

export default Item;
