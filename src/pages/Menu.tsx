import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Observable from "zen-observable-ts";
import {
  createCanvas,
  listCanvas,
  deleteCanvas,
  updateCanvas,
} from "../graphql";
import Board from "../pages/Board";
import Menubar from "../components/Menubar";
import Canvas from "../components/Canvas";
import CreateCanvas from "../components/CreateCanvas";
import SharedCanvas from "../components/SharedCanvas";

type Props = {
  user: any;
  setUser: (user: any) => void;
  setActiveCanvas: (activeCanvas: any) => void;
};

const Menu = ({ user, setUser, setActiveCanvas }: Props) => {
  const [isNewCanvas, setIsNewCanvas] = useState(false);
  const [isSharedCanvas, setIsSharedCanvas] = useState(false);
  const [canvasList, setCanvasList] = useState<any>([]);
  const [canvasNames, setCanvasNames] = useState<string[]>([]);

  const navigate = useNavigate();

  const fetchCanvases = async (
    newCanvas?: GraphQLResult<any> | Observable<any>
  ) => {
    const canvases: GraphQLResult<any> = await API.graphql({
      query: listCanvas,
      variables: {
        filter: {
          userID: {
            eq: user.attributes.sub,
          },
        },
      },
    });
    if (newCanvas) {
      setCanvasList((canvasList: any) => [
        ...canvasList,
        canvases.data.listCanvas.items[0],
      ]);
      setCanvasNames((canvasNames: string[]) => [
        canvases.data.listCanvas.items.name,
      ]);
    } else {
      setCanvasList(canvases.data.listCanvas.items);
      setCanvasNames(
        canvases.data.listCanvas.items.map((canvas: any) => canvas.name)
      );
    }
  };

  const handleNameChange = (idx: number, newName: string) => {
    const newCanvasNames = [...canvasNames];
    newCanvasNames[idx] = newName;
    setCanvasNames(newCanvasNames);
  };

  const updateCanvasName = async (id: string, name: string) => {
    const req = await API.graphql({
      query: updateCanvas,
      variables: {
        input: {
          id: id,
          name: name,
        },
      },
    });
    // TODO: update canvas name in canvasList
    fetchCanvases();
  };

  // FIXME: remove items from canvas when deleted
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
        <Menubar setUser={setUser} />
        <div className="flex justify-center items-center gap-3 text-cream pt-[2%] pb-[2%]">
          <div className="h-0.5 flex-1 bg-cream"></div>
          <h4>My Canvases</h4>
          <div className="h-0.5 flex-1 bg-cream"></div>
        </div>

        <div className="flex justify-center items-center h-[30%] gap-6 overflow-x-scroll first:ml-auto last:mr-auto">
          {canvasList.map((canvas: any, idx: number) => (
            <div className="flex flex-col h-[80%] w-96 text-cream justify-center items-center add-box border-solid hover:scale-110 transition-all">
              <input
                value={canvasNames[idx]}
                onChange={(e) => {
                  // FIXME: expensive
                  handleNameChange(idx, e.target.value);
                }}
                onBlur={() => {
                  updateCanvasName(canvas.id, canvasNames[idx]);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.currentTarget.blur();
                  }
                }}
                className="text-xl outline-none border-none bg-[rgba(0,0,0,0)] text-center transition duration-200 focus:bg-[rgba(0,0,0,0.3)] focus:border focus:border-[rgba(255,255,255,0.2)] rounded-md"
              ></input>
              <p className="text-base">canvas ID: {canvas.id}</p>
              <p className="text-base">user ID: {canvas.userID}</p>
              <button
                className="button-blue h-12 w-40 bg-green"
                onClick={() => {
                  setActiveCanvas(canvas);
                  navigate("/canvas/" + canvas.id);
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

        <div className="flex justify-center items-center gap-3 text-cream pt-[2%] pb-[2%]">
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
          user={user}
          fetchCanvases={fetchCanvases}
        />
      )}

      {isSharedCanvas && <SharedCanvas setIsSharedCanvas={setIsSharedCanvas} />}
    </>
  );
};

export default Menu;
