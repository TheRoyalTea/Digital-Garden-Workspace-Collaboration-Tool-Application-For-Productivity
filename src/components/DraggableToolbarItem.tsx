import { useDrag } from "react-dnd";

type Props = {
  name: string;
  canvasItems: any;
  setCanvasItems: (canvasItems: any) => void;
};

const DraggableToolbarItem = ({ name, canvasItems, setCanvasItems }: Props) => {
    const [{ isDragging }, drag] = useDrag({
        type: "toolbarItem",
        item: { name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });

  return (
    <div ref={drag} className="flex items-center justify-center w-48 h-24 text-xl text-cream">
      <span className="duration-150 transform cursor-pointer hover:scale-125 underline-animation" 
      onClick={() => setCanvasItems((canvasItems: any) => [...canvasItems, {name: name}])}>
        {name}
      </span>
    </div>
  );
};

export default DraggableToolbarItem;
