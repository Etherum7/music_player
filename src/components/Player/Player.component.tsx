import "./Player.css";
import { useState } from "react";
import { music } from "../../data/data";

interface PlayerProps {
  data: typeof music;
}
const Player: React.FC<PlayerProps> = ({ data }) => {
  const [audio, setAudio] = useState(new Audio(data[0].link));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPauseTrack = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  const next = () => {
    const len = data.length;
    if (currentIndex < len - 1) {
      audio.pause();
      setIsPlaying(false);
      setAudio(() => new Audio(data[currentIndex + 1].link));
      setCurrentIndex(() => currentIndex + 1);
    }
  };
  const prev = () => {
    // const len = data.length;
    if (currentIndex > 0) {
      audio.pause();
      setIsPlaying(false);
      setAudio(() => new Audio(data[currentIndex - 1].link));
      setCurrentIndex(() => currentIndex - 1);
    }
  };
  return (
    <div className="player">
      <div className="info">{data[currentIndex].name}</div>
      <div className="control">
        <div className="btn" onClick={() => prev()}>
          <i className="fa fa-step-backward fa-2x"></i>
        </div>

        <div
          className="btn"
          onClick={() => playPauseTrack()}>
          {isPlaying ? (
            <i className="fa fa-pause-circle fa-2x"></i>
          ) : (
            <i className="fa fa-play-circle fa-2x"></i>
          )}
        </div>

        <div className="btn" onClick={() => next()}>
          <i className="fa fa-step-forward fa-2x"></i>
        </div>
      </div>
    </div>
  );
};

export default Player;
