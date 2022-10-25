export const Topbar = () => {
    return (
      <div className="h-24 w-screen bg-jet border-b-4 border-cream">
        <div className="flex [&>*]:border-b-4 [&>*]:border-cream">
          <div className="menu-option">
            {"{drop down}"}
          </div>
  
          <div className="h-24 w-24 ml-auto bg-green border-b-4 border-cream flex justify-center items-center text-cream">
            {"{avatar}"}
          </div>
        </div>
      </div>
    );
  };
  
  export default Topbar;
  