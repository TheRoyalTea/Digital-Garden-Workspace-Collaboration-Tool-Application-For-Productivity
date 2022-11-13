import { useDrag } from "react-dnd";
import { createItem } from "../graphql";
import { API } from "aws-amplify";

type Props = {
  type: string;
  name: string;
  canvasItems: any;
  setCanvasItems: (canvasItems: any) => void;
  activeCanvas: any;
  requestedModal: string | null;
  setRequestedModal: (requestedModal: string | null) => void;
};

const DraggableToolbarItem = ({
  type,
  name,
  canvasItems,
  setCanvasItems,
  activeCanvas,
  requestedModal,
  setRequestedModal,
}: Props) => {
  const [{ isDragging }, drag] = useDrag({
    type: "toolbarItem",
    item: { type: type, name: name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="flex items-center justify-center w-48 h-24 text-xl text-cream"
    >
      <span
        className="duration-150 transform cursor-pointer hover:scale-125 underline-animation"
        onClick={() => setRequestedModal(type)}
      >
        {name}
      </span>
    </div>
  );
};

export default DraggableToolbarItem;
