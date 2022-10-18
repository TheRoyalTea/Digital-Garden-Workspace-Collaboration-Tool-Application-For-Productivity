type Props = {
    setIsNewCanvas: (isNewCanvas: boolean) => void;
    setIsValidCanvas: (isValidCanvas: boolean) => void;
};

const CreateCanvas = ({setIsNewCanvas, setIsValidCanvas}: Props) => {
    return (
        <>
        <button className="fixed bg-black bg-opacity-50 inset-0 cursor-default w-full h-screen" onClick={() => setIsNewCanvas(false)}></button>
        
        <div>
            <div className="pop-up-box">
                <p className="text-5xl text-cream">Create Canvas</p>

                <form>
                    <input className="form-field" placeholder="Name"></input>
                </form>

                <button className="button-blue h-12 w-40" onClick={() => {setIsNewCanvas(false), setIsValidCanvas(true)}}>Create</button>
            </div>
        </div>
        </>
    )
}

export default CreateCanvas;