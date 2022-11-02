import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import Observable from "zen-observable-ts";
import { createCanvas, listCanvas } from "../graphql";
import Board from "../pages/Board";
import Topbar from "../components/Topbar";
import Canvas from "../components/Canvas";
import CreateCanvas from "../components/CreateCanvas";
import SharedCanvas from "../components/SharedCanvas";

type Props = {
  user: any;
  setActiveCanvas: (activeCanvas: any) => void;
};

const Menu = ({ user, setActiveCanvas }: Props) => {
  const [isNewCanvas, setIsNewCanvas] = useState(false);
  const [isSharedCanvas, setIsSharedCanvas] = useState(false);
  const [canvasList, setCanvasList] = useState<any>([]);

  const fetchCanvases = async (req?: GraphQLResult<any> | Observable<any>) => {
    const canvases: GraphQLResult<any> = await API.graphql(
      graphqlOperation(listCanvas)
    );
    setCanvasList(canvases.data.listCanvas.items);
  };

  useEffect(() => {
    fetchCanvases();
  }, []);

  return (
    <>
      <div className="bg-dark-jet h-screen w-full">
        <Topbar />
        <div className="flex justify-center items-center text-cream pt-[2%] pb-[2%]">
          <div className="h-0.5 flex-1 bg-cream"></div>
          <h4>My Canvases</h4>
          <div className="h-0.5 flex-1 bg-cream"></div>
        </div>

        <div className="flex justify-center h-[25%]">
          {canvasList.map((canvas: any) => (
            <div className="flex h-[100%] w-[100%] text-cream justify-center items-center add-box border-solid">
              <p className="text-3xl">{canvas.name}</p>
              <p className="text-xl">canvas ID: {canvas.id}</p>
              <p className="text-xl">user ID: {canvas.userID}</p>
              <button
                className="button-blue h-12 w-40 bg-green"
                onClick={() => {
                  setActiveCanvas(canvas);
                }}
              >
                Open
              </button>
            </div>
          ))}
          <button className="add-box" onClick={() => setIsNewCanvas(true)}>
            <div className="flex h-[100%] w-[100%] text-cream justify-center items-center">
              <p className="text-9xl">+</p>
            </div>
          </button>
        </div>

        <div className="flex justify-center items-center text-cream pt-[2%] pb-[2%]">
          <div className="h-0.5 flex-1 bg-cream"></div>
          <h4>Shared Canvases</h4>
          <div className="h-0.5 flex-1 bg-cream"></div>
        </div>

        <div className="flex justify-center h-[25%]">
          <button className="add-box" onClick={() => setIsSharedCanvas(true)}>
            <div className="flex h-[100%] w-[100%] text-cream justify-center items-center">
              <p className="text-9xl">+</p>
            </div>
          </button>
        </div>
      </div>

      {isNewCanvas && (
        <CreateCanvas
          setIsOpened={setIsNewCanvas}
          setActiveCanvas={setActiveCanvas}
          fetchNewCanvas={fetchCanvases}
          userID={user.pool.clientId}
        />
      )}

      {isSharedCanvas && <SharedCanvas setIsSharedCanvas={setIsSharedCanvas} />}
    </>
  );
};

export default Menu;
