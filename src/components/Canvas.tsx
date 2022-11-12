import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { API } from "aws-amplify";
import cx from "classnames";
import Item from "./Item";
import ItemModal from "./ItemModal";

// fix types
type Props = {
  canvasItems: any;
  setCanvasItems: (canvasItems: any) => void;
  activeCanvas: any;
  requestedModal: string | null;
  setRequestedModal: (requestedModal: string | null) => void;
};

const Canvas = ({
  canvasItems,
  setCanvasItems,
  activeCanvas,
  requestedModal,
  setRequestedModal,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [{ isOver }, drop] = useDrop({
    accept: "toolbarItem",
    drop: (item: any) => {
      setRequestedModal(item.type);
      console.log(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={cx(
        "h-[calc(100vh-6rem)] w-[calc(100vw-12rem)] p-10 overflow-x-auto overflow-y-auto",
        "scrollbar-hide absolute top-24 left-48 bg-dark-jet",
        "flex flex-row flex-wrap justify-start gap-3 items-start basis-96 content-start",
        isOver && "outline-dashed outline-4 outline-green outline-offset-[-4px]"
      )}
    >
      {(canvasItems as any[]).map(
        (item: any) => (console.log(item), (<Item data={item} />))
      )}
      {requestedModal ? (
        <ItemModal
          type={requestedModal}
          activeCanvas={activeCanvas}
          canvasItems={canvasItems}
          setCanvasItems={setCanvasItems}
          setRequestedModal={setRequestedModal}
        />
      ) : null}
    </div>
  );
};

export default Canvas;
