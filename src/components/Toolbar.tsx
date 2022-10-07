import DraggableToolbarItem from "./DraggableToolbarItem";

const Toolbar = () => {
  return (
    <div className="h-[calc(100vh-6rem)] w-48 bg-jet flex flex-col border-r-4 border-cream">
      <div className="h-24 w-48 border-b-2 border-cream flex justify-center items-center text-3xl text-green">
        Add Items
      </div>
        <DraggableToolbarItem name="Markdown"/>
        <DraggableToolbarItem name="Code Snippet"/>
        <DraggableToolbarItem name="Link"/>
    </div>
  );
};

export default Toolbar;
