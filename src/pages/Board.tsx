import Canvas from "../components/Canvas";
import Menubar from "../components/Menubar";
import Toolbar from "../components/Toolbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Board = () => {
  return (
    <>
      <Menubar />
      <DndProvider backend={HTML5Backend}>
        <Toolbar />
        <Canvas />
      </DndProvider>
    </>
  );
};

export default Board;
