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
  const [requestedModal, setRequestedModal] = useState<string | null>(null);

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
    setCanvasItems(canvasItems.data.listItems.items);
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
        <Toolbar
          canvasItems={canvasItems}
          setCanvasItems={setCanvasItems}
          activeCanvas={activeCanvas}
          requestedModal={requestedModal}
          setRequestedModal={setRequestedModal}
        />
        <Canvas
          canvasItems={canvasItems}
          setCanvasItems={setCanvasItems}
          activeCanvas={activeCanvas}
          requestedModal={requestedModal}
          setRequestedModal={setRequestedModal}
        />
      </DndProvider>
    </>
  );
};

export default Board;
