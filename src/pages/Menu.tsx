import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import Observable from "zen-observable-ts";
import { listCanvas, deleteCanvas } from "../graphql";
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
    const canvases: GraphQLResult<any> = await API.graphql({
      query: listCanvas,
      variables: {
        filter: {
          userID: {
            eq: user.pool.clientID,
          },
        },
      },
    });
    if (req) {
      setCanvasList((canvasList: any) => [
        ...canvasList,
        canvases.data.listCanvas.items[0],
      ]);
    } else {
      setCanvasList(canvases.data.listCanvas.items);
    }
  };

  const removeCanvas = async (id: string) => {
    try {
      await API.graphql({
        query: deleteCanvas,
        variables: {
          input: {
            id,
          },
        },
      });
      setCanvasList(canvasList.filter((canvas: any) => canvas.id !== id));
    } catch (err) {
      console.log(err);
    }
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

        <div className="flex justify-center items-center h-[30%] gap-6 overflow-x-scroll first:ml-auto last:mr-auto">
          {canvasList.map((canvas: any) => (
            <div className="flex flex-col h-[80%] w-96 text-cream justify-center items-center add-box border-solid hover:scale-110 transition-all">
              <p className="text-xl">{canvas.name}</p>
              <p className="text-base">canvas ID: {canvas.id}</p>
              <p className="text-base">user ID: {canvas.userID}</p>
              <button
                className="button-blue h-12 w-40 bg-green"
                onClick={() => {
                  setActiveCanvas(canvas);
                }}
              >
                Open
              </button>
              <button
                className="button-blue h-12 w-40 bg-red"
                onClick={() => {
                  removeCanvas(canvas.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
          <button className="add-box" onClick={() => setIsNewCanvas(true)}>
            <div className="flex h-[80%] w-60 text-cream justify-center items-center">
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
