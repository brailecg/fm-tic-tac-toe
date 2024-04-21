import React from "react";
import IconX from "../utils/IconX";

const BoardTile = ({ value, onTileClick }) => {
  return (
    <div className="relative flex justify-center">
      <button
        onClick={onTileClick}
        className={` bg-[var(--menu-background-color)] w-24 h-24 rounded-lg flex justify-center items-center`}>
        {value}
      </button>
      <div
        className={` bg-[var(--menu-background-shadow-color)] absolute h-24 w-24 top-2 -z-10 rounded-lg`}></div>
    </div>
  );
};

export default BoardTile;
