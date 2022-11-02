import Canvas from "../components/Canvas";
import Menubar from "../components/Menubar";
import Toolbar from "../components/Toolbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect, useState } from "react";

type Props = {
  user: any;
  activeCanvas: any;
  setActiveCanvas: (activeCanvas: any) => void;
};
const Board = ({ user, activeCanvas, setActiveCanvas }: Props) => {
  const [canvasItems, setCanvasItems] = useState<React.ReactNode>([]);

  useEffect(() => {
    return () => {
      setActiveCanvas(null);
    };
  }, [user]);

  return (
    <>
      <div className="w-screen h-12 text-center bg-cream text-jet">
        {activeCanvas.name}
      </div>
      <Menubar />
      <DndProvider backend={HTML5Backend}>
        {/* fix (?) prop drilling */}
        <Toolbar canvasItems={canvasItems} setCanvasItems={setCanvasItems} />
        <Canvas canvasItems={canvasItems} setCanvasItems={setCanvasItems} />
      </DndProvider>
    </>
  );
};

export default Board;
