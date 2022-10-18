type Props = {
    setIsSharedCanvas: (isSharedCanvas: boolean) => void;
    setIsValidCanvas: (isValidCanvas: boolean) => void;
};

const SharedCanvas = ({setIsSharedCanvas, setIsValidCanvas}: Props) => {
    return (
        <>
        <button className="fixed bg-black bg-opacity-50 inset-0 cursor-default w-full h-screen" onClick={() => setIsSharedCanvas(false)}></button>
        
        <div>
            <div className="pop-up-box">
                <p className="text-5xl text-cream">Join Canvas</p>

                <form>
                    <input className="form-field" placeholder="Invite Code"></input>
                </form>
                
                <button className="button-blue h-12 w-40" onClick={() => {setIsSharedCanvas(false), setIsValidCanvas(true)}}>Join</button>
            </div>
        </div>
        </>
    )
}

export default SharedCanvas;