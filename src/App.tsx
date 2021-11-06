import "./App.css";
import { useState } from "react";
import { music } from "./data/data";
import dll from "./scripts/dll";
import AllMusic from "./components/AllMusic/AllMusic.component";
import Player from "./components/Player/Player.component";

function App() {
  const [queue, setQueue] = useState(dll.getAllNodes());
  const [data, setData] = useState(music);

  return (
    <div className="App">
      <AllMusic
        queue={queue}
        data={data}
        handleQueue={(arr) => setQueue(arr)}
        handleData={(arr) => setData(arr)}
      />
      <Player
        data={
          queue.length
            ? queue
            : [
                {
                  name: "Risen",
                  id: 0,
                  link: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/yavKnIN3s6oa3EfiwzzNyPMZTy628UONGK7ahpMq.mp3",
                },
              ]
        }
      />
    </div>
  );
}

export default App;
