import { useState } from "react";
import Board from "../pages/Board";
import Topbar from "../components/Topbar";
import Canvas from "../components/Canvas"
import CreateCanvas from "../components/CreateCanvas";
import SharedCanvas from "../components/SharedCanvas";

type Props = {
    setIsValidCanvas: (isValidCanvas: boolean) => void;
    setIsNewCanvas: (isNewCanvas: boolean) => void;
    setIsSharedCanvas: (isSharedCanvas: boolean) => void;
  };

const Menu = ({setIsValidCanvas, setIsNewCanvas, setIsSharedCanvas}: Props) => {    
    return (
        <>
        <div className= "bg-dark-jet h-screen w-full">
            {<Topbar />}

            <div className="flex justify-center items-center text-cream pt-[2%] pb-[2%]">
                <div className="h-0.5 flex-1 bg-cream"></div>
                <h4>My Canvases</h4>
                <div className="h-0.5 flex-1 bg-cream"></div>
            </div>

            <div className="flex justify-center h-[25%]">
                <button className="add-box" onClick={() => setIsNewCanvas(true)}>
                    <div className="flex h-[100%] w-[100%] text-cream justify-center items-center">
                        <p className="text-9xl">+</p>
                    </div>
                </button>
            </div>
            
            <div className="flex justify-center items-center text-cream pt-[2%] pb-[2%]">
                <div className="h-0.5 flex-1 bg-cream"></div>
                <h4>Shared Canvases</h4>
                <div className="h-0.5 flex-1 bg-cream"></div>
            </div>

            <div className="flex justify-center h-[25%]">
                <button className="add-box" onClick={() => setIsSharedCanvas(true)}>
                    <div className="flex h-[100%] w-[100%] text-cream justify-center items-center">
                        <p className="text-9xl">+</p>
                    </div>
                </button>
            </div>
        </div>
        </>
    );
}

export default Menu;