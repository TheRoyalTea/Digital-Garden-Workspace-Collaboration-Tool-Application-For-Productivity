export const Menubar = () => {
  return (
    <div className="h-24 w-screen bg-jet border-b-4 border-cream">
      <div className="flex divide-x-2 divide-cream [&>*]:border-b-4 [&>*]:border-cream">
        <div className="h-24 w-24 bg-blue flex justify-center items-center text-cream">
          Add Items
        </div>
        <div className="h-24 w-24 bg-jet flex justify-center items-center text-cream">
          {"{ option }"}
        </div>
        <div className="h-24 w-24 bg-jet flex justify-center items-center text-cream">
          {"{ option }"}
        </div>
        <div className="h-24 w-24 bg-jet flex justify-center items-center text-cream border-cream">
          {"{ option }"}
        </div>
      </div>
      <button className="h-12 w-20 absolute top-[22px] right-28 bg-blue rounded-xl text-cream">Share</button>
      <div className="h-24 w-24 absolute top-0 right-0 bg-green border-b-4 border-cream flex justify-center items-center text-cream">
        {"{ avatar }"}
      </div>
    </div>
  );
};

export default Menubar;
