import React, { useState } from "react";
import { useDrop } from "react-dnd";
import cx from "classnames";
import Item from "./Item";
import ItemModal from "./ItemModal";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);
import "../assets/css/react-grid-layout.css";
import "../assets/css/react-resizable.css";

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
        "h-[calc(100vh-6rem)] w-[calc(100vw-12rem)] p-7 overflow-y-auto overflow-x-hidden",
        "scrollbar-hide absolute top-24 left-48 bg-dark-jet",
        isOver && "outline-dashed outline-4 outline-green outline-offset-[-4px]"
      )}
    >
      <ResponsiveGridLayout
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={50}
        margin={[15, 15]}
        onLayoutChange={(layout, layouts) => {
          console.log("current layout: ", layout);
          console.log("layouts", layouts);
        }}
      >
        {(canvasItems as any[]).map((item: any, idx: number) => (
          <div
            key={"i" + idx}
            data-grid={{
              x: idx,
              y: Math.floor(idx / 5) * Math.ceil(Math.random() * 4),
              w: Math.ceil(Math.random() * 4),
              h: Math.ceil(Math.random() * 4),
            }}
          >
            <Item data={item} setRequestedModal={setRequestedModal} />
          </div>
        ))}
      </ResponsiveGridLayout>
      {requestedModal ? (
        <ItemModal
          requestedModal={requestedModal}
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
