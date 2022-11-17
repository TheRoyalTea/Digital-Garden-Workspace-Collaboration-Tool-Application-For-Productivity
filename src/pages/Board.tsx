import Canvas from "../components/Canvas";
import Menubar from "../components/Menubar";
import Toolbar from "../components/Toolbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect, useState } from "react";
//FIXME: Cannot find module 'aws-amplify' or its corresponding type declarations.ts(2307)
//@ts-ignore
import { API } from "aws-amplify";
import { listItems } from "../graphql";

type Props = {
  user: any;
  setUser: (user: any) => void;
  activeCanvas: any;
  setActiveCanvas: (activeCanvas: any) => void;
};
const Board = ({ user, setUser, activeCanvas, setActiveCanvas }: Props) => {
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
      <Menubar setUser={setUser} />
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
