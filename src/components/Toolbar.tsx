import DraggableToolbarItem from "./DraggableToolbarItem";

// fix types
type Props = {
  canvasItems: any;
  setCanvasItems: (canvasItems: any) => void;
  activeCanvas: any;
  requestedModal: string | null;
  setRequestedModal: (requestedModal: string | null) => void;
};

enum ItemType {
  MARKDOWN = "MARKDOWN",
  CODE = "CODE",
  LINK = "LINK",
}

const Toolbar = ({
  canvasItems,
  setCanvasItems,
  activeCanvas,
  requestedModal,
  setRequestedModal,
}: Props) => {
  const toolbarItems = [
    { type: ItemType.MARKDOWN, name: "markdown" },
    { type: ItemType.CODE, name: "code snip" },
    { type: ItemType.LINK, name: "link" },
  ];
  return (
    <div className="h-[calc(100vh-6rem)] w-48 bg-jet flex flex-col border-r-4 border-cream">
      <div className="h-24 w-48 border-b-2 border-cream flex justify-center items-center text-3xl text-green">
        Add Items
      </div>
      {toolbarItems.map((item) => (
        <DraggableToolbarItem
          type={item.type}
          name={item.name}
          canvasItems={canvasItems}
          setCanvasItems={setCanvasItems}
          activeCanvas={activeCanvas}
          requestedModal={requestedModal}
          setRequestedModal={setRequestedModal}
        />
      ))}
    </div>
  );
};

export default Toolbar;
