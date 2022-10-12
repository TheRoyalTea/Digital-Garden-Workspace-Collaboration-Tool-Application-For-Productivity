import DraggableToolbarItem from "./DraggableToolbarItem";

// fix types
type Props = {
  canvasItems: any;
  setCanvasItems: (canvasItems: any) => void;
};

const Toolbar = ({ canvasItems, setCanvasItems }: Props) => {
  const toolbarItems = [
    { name: "markdown" },
    { name: "code snip" },
    { name: "link" },
  ];
  return (
    <div className="h-[calc(100vh-6rem)] w-48 bg-jet flex flex-col border-r-4 border-cream">
      <div className="h-24 w-48 border-b-2 border-cream flex justify-center items-center text-3xl text-green">
        Add Items
      </div>
      {toolbarItems.map((item) => (
        <DraggableToolbarItem name={item.name} canvasItems={canvasItems} setCanvasItems={setCanvasItems} />
      ))}

    </div>
  );
};

export default Toolbar;
