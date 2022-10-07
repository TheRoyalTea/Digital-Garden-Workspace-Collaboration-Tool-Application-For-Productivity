import { useDrag } from "react-dnd";

type Props = {
  name: string;
};

const DraggableToolbarItem = ({ name }: Props) => {
    const [{ isDragging }, drag] = useDrag({
        type: "toolbarItem",
        item: { name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });

  return (
    <div ref={drag} className="h-24 w-48 flex justify-center items-center text-xl text-cream">
      <span className="cursor-pointer transform duration-150 hover:scale-125" >
        {name}
      </span>
    </div>
  );
};

export default DraggableToolbarItem;
