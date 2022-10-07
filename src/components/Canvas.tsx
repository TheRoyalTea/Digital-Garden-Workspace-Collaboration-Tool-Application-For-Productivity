import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Item from "./Item";

const Canvas = () => {
    const [canvasItems, setCanvasItems] = useState<React.ReactNode>([]);

    const [{ isOver }, drop] = useDrop({
        accept: "toolbarItem",
        drop: (item) => {
            setCanvasItems((canvasItems: any) => [...canvasItems, item]);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        })
    });

  return (
    <div ref={drop} className="h-[calc(100vh-6rem)] w-[calc(100vw-12rem)] absolute top-24 left-48 bg-[#242020] flex flex-row flex-wrap justify-evenly content-start">
        {(canvasItems as any[]).map((item: any) => (
            <Item name={item.name} />
        ))}
    </div>
  )
}

export default Canvas;