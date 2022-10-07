import Canvas from "./components/Canvas";
import Menubar from "./components/Menubar";
import Toolbar from "./components/Toolbar";

const App = () => {
  
  return (
    <div className="App">
      <Menubar />
      <Toolbar />
      <Canvas />
    </div>
  )
}

export default App;
