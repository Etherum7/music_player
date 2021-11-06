/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { music } from "../../data/data";
import ListItem from "../ListItem/ListItem.component";
import dll from "../../scripts/dll";
import "./AllMusic.component.css";
interface AllMusicProps {
  queue: typeof music;
  data: typeof music;
  handleQueue: (arr: typeof music) => void;
  handleData: (arr: typeof music) => void;
}
const AllMusic: React.FC<AllMusicProps> = ({
  queue,
  data,
  handleQueue,
  handleData,
}) => {
  useEffect(() => {
    addMusic(0);
  }, []);

  const addMusic = (id: number) => {
    // console.log(music[id]);
    dll.insert({ ...music[id] });
    handleData(data.filter((d) => d.id !== id));
    handleQueue(dll.getAllNodes());
  };
  const removeMusic = (id: number) => {
    dll.remove(id);
    handleData([...data, { ...music[id] }]);
    handleQueue(dll.getAllNodes());
  };
  // console.log(dll.getAllNodes());
  return (
    <div className="AllMusic">
      <div className="Recommendations">
        <h2>Recommendations</h2>
        {data.map((item, index) => (
          <ListItem key={index} addMusic={(id) => addMusic(id)} {...item} />
        ))}
      </div>
      <div className="Currently">
        <h2>Queue</h2>
        {queue.map((item) => (
          <ListItem
            key={item.name}
            removeMusic={(id) => removeMusic(id)}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default AllMusic;
