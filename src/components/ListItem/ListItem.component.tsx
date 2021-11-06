import React from "react";
import "./ListItem.component.css";
interface ListItemProps {
  id: number;
  link: string;
  name: string;
  addMusic?: (id: number) => void;
  removeMusic?: (id: number) => void;
}
const ListItem: React.FC<ListItemProps> = ({
  id,
  link,
  name,
  addMusic,
  removeMusic,
}) => {
  const result = addMusic ? (
    <div className="listItem">
      <div>{name}</div>
      <div className="btn-add" onClick={() => addMusic(id)}>
        <i className="fa fa-plus "></i>
      </div>
    </div>
  ) : removeMusic ? (
    <div className="listItem1">
      <div>{name}</div>
      <div className="btn-add" onClick={() => removeMusic(id)}>
        <i className="fa fa-minus "></i>
      </div>
    </div>
  ) : (
    <></>
  );
  return result;
};

export default ListItem;
