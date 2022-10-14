import React, { useState } from "react";
import { useDrop } from "react-dnd";
import cx from "classnames";
import Item from "./Item";

// fix types
type Props = {
    canvasItems: any;
    setCanvasItems: (canvasItems: any) => void;
};

const Canvas = ({canvasItems, setCanvasItems} : Props) => {
  
  const [{ isOver }, drop] = useDrop({
    accept: "toolbarItem",
    drop: (item) => {
      setCanvasItems((canvasItems: any) => [...canvasItems, item]);
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
        "h-[calc(100vh-6rem)] w-[calc(100vw-12rem)] absolute top-24 left-48 bg-[#242020] flex flex-row flex-wrap justify-evenly content-start",
        isOver && "outline-dashed outline-4 outline-green outline-offset-[-4px]"
      )}
    >
      {(canvasItems as any[]).map((item: any) => (
        <Item name={item.name} />
      ))}
    </div>
  );
};

export default Canvas;
