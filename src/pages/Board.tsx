import Canvas from "../components/Canvas";
import Menubar from "../components/Menubar";
import Toolbar from "../components/Toolbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";

const Board = () => {
  const [canvasItems, setCanvasItems] = useState<React.ReactNode>([]);
  
  return (
    <>
      <Menubar />
      <DndProvider backend={HTML5Backend}>
        {/* fix (?) prop drilling */}
        <Toolbar canvasItems={canvasItems} setCanvasItems={setCanvasItems}/>
        <Canvas canvasItems={canvasItems} setCanvasItems={setCanvasItems}/>
      </DndProvider>
    </>
  );
};

export default Board;
