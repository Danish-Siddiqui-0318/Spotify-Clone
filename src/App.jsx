import { useContext, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display.jsx";
import { PlayerContext } from "./context/PlayerContext.jsx";

function App() {
  const [count, setCount] = useState(0);

  const { audioRef, track } = useContext(PlayerContext);

  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex ">
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
}

export default App;
