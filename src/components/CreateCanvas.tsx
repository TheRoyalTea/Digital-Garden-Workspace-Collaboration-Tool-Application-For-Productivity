import { useState } from "react";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import Observable from "zen-observable-ts";
import { API } from "aws-amplify";
import { createCanvas } from "../graphql";

type Props = {
  setIsOpened: (isNewCanvas: boolean) => void;
  setActiveCanvas: (activeCanvas: any) => void;
	fetchNewCanvas: (req?: GraphQLResult<any> | Observable<any>) => void;
	userID: string;
};

const CreateCanvas = ({ setIsOpened, setActiveCanvas, fetchNewCanvas, userID }: Props) => {
  const [name, setName] = useState("");

	const newCanvas = async () => {
    const req = await API.graphql({
      query: createCanvas,
      variables: {
        input: {
          userID: userID,
          name: name,
        },
      },
    });
    fetchNewCanvas(req);
  };
  return (
    <>
      <button
        className="fixed bg-black bg-opacity-50 inset-0 cursor-default w-full h-screen"
        onClick={() => setIsOpened(false)}
      ></button>

      <div>
        <div className="pop-up-box">
          <p className="text-5xl text-cream">Create Canvas</p>

          <form>
            <input
              className="form-field"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </form>

          <button
            className="button-blue h-12 w-40"
            onClick={() => {
							newCanvas();
							setIsOpened(false);
            }}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateCanvas;
