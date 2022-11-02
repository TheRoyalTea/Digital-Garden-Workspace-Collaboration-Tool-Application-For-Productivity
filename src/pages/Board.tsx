import Canvas from "../components/Canvas";
import Menubar from "../components/Menubar";
import Toolbar from "../components/Toolbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listItems } from "../graphql";

type Props = {
  user: any;
  activeCanvas: any;
  setActiveCanvas: (activeCanvas: any) => void;
};
const Board = ({ user, activeCanvas, setActiveCanvas }: Props) => {
  const [canvasItems, setCanvasItems] = useState<any>([]);

  const fetchCanvasItems = async () => {
    const canvasItems: any = await API.graphql({
      query: listItems,
      variables: {
        filter: {
          canvasID: {
            eq: activeCanvas.id,
          },
        },
      },
    });
    setCanvasItems(canvasItems.data.listCanvasItems.items);
  };

  useEffect(() => {
    fetchCanvasItems();
    return () => {
      setActiveCanvas(null);
    };
  }, []);

  return (
    <>
      <Menubar />
      <DndProvider backend={HTML5Backend}>
        <Toolbar canvasItems={canvasItems} setCanvasItems={setCanvasItems} />
        <Canvas canvasItems={canvasItems} setCanvasItems={setCanvasItems} />
      </DndProvider>
    </>
  );
};

export default Board;
