const Toolbar = () => {
  return (
    <div className="h-[calc(100vh-6rem)] w-48 bg-jet flex flex-col border-r-4 border-cream">
      <div className="h-24 w-48 border-b-2 border-cream flex justify-center items-center text-3xl text-green">
        Add Items
      </div>
      <div className="h-24 w-48 flex justify-center items-center text-xl text-cream">
        <span className="cursor-pointer transform duration-150 hover:scale-125">{"Markdown"}</span>
      </div>
      <div className="h-24 w-48 flex justify-center items-center text-xl text-cream">
        <span className="cursor-pointer transform duration-150 hover:scale-125">{"Code Snip"}</span>
      </div>
      <div className="h-24 w-48 flex justify-center items-center text-xl text-cream">
        <span className="cursor-pointer transform duration-150 hover:scale-125">{"Link"}</span>
      </div>
    </div>
  );
};

export default Toolbar;
