import { useState } from "react";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import Observable from "zen-observable-ts";
import { API } from "aws-amplify";
import {
  createEditable,
  createViewable,
  getRequest as request,
  getCanvas as canvas,
  listRequests,
} from "../graphql";

type Props = {
  setIsSharedCanvas: (isSharedCanvas: boolean) => void;
  user: any;
  fetchSharedCanvases: (
    newCanvas?: GraphQLResult<any> | Observable<any>
  ) => void;
};

const SharedCanvas = ({
  setIsSharedCanvas,
  user,
  fetchSharedCanvases,
}: Props) => {
  const [inviteCode, setInviteCode] = useState<string>();

  const newViewable = async (request: any) => {
    const viewable: GraphQLResult<any> = await API.graphql({
      query: createViewable,
      variables: {
        input: {
          userID: user.attributes.sub,
          viewableCanvasId: request.requestCanvasId,
        },
      },
    });
    fetchSharedCanvases(viewable);
  };

  const newEditable = async (request: any) => {
    const editable: GraphQLResult<any> = await API.graphql({
      query: createEditable,
      variables: {
        input: {
          userID: user.attributes.sub,
          editableCanvasId: request.requestCanvasId,
        },
      },
    });
    fetchSharedCanvases(editable);
  };

  const getRequest = async () => {
    const req: any = await API.graphql({
      query: listRequests,
      variables: {
        filter: {
          code: {
            eq: inviteCode,
          },
        },
      },
    });
    const reqItems = req.data.listRequests.items;
    if (reqItems.length === 0) {
      alert("Invalid invite code");
      return;
    } else {
      reqItems[0].isEdit ? newEditable(reqItems[0]) : newViewable(reqItems[0]);
      setIsSharedCanvas(false);
    }
  };

  return (
    <>
      <button
        className="fixed bg-black bg-opacity-50 inset-0 cursor-default w-full h-screen"
        onClick={() => setIsSharedCanvas(false)}
      ></button>

      <div>
        <div className="pop-up-box">
          <p className="text-5xl text-cream">Join Canvas</p>

          <form>
            <input
              className="form-field"
              value={inviteCode}
              placeholder="Invite Code"
              onChange={(e) => setInviteCode(e.target.value)}
            ></input>
          </form>

          <button
            className="button-blue h-12 w-40"
            onClick={() => {
              getRequest();
            }}
          >
            Join
          </button>
        </div>
      </div>
    </>
  );
};

export default SharedCanvas;
