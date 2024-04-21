"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import BoardHeader from "../components/BoardHeader";
import BoardTile from "../components/BoardTile";
import useTicTacToe from "./useTicTacToe";

const Board = () => {
  const { squares, handleClick, reset } = useTicTacToe();

  return (
    <div className="px-2 sm:px-0 space-y-10">
      <BoardHeader reset={reset} />
      <div className="grid grid-cols-3 gap-x-2 gap-y-4 content-around">
        <BoardTile value={squares[0]} onTileClick={() => handleClick(0)} />
        <BoardTile value={squares[1]} onTileClick={() => handleClick(1)} />
        <BoardTile value={squares[2]} onTileClick={() => handleClick(2)} />
        <BoardTile value={squares[3]} onTileClick={() => handleClick(3)} />
        <BoardTile value={squares[4]} onTileClick={() => handleClick(4)} />
        <BoardTile value={squares[5]} onTileClick={() => handleClick(5)} />
        <BoardTile value={squares[6]} onTileClick={() => handleClick(6)} />
        <BoardTile value={squares[7]} onTileClick={() => handleClick(7)} />
        <BoardTile value={squares[8]} onTileClick={() => handleClick(8)} />
      </div>
      <div className="grid grid-cols-3 gap-x-2">
        <div className=" flex flex-col justify-center items-center w-24 h-16 bg-[var(--primary-green)] rounded-lg">
          <p className=" text-xs">X(P1)</p>
          <p className=" text-xl font-bold">14</p>
        </div>
        <div className=" flex flex-col justify-center items-center w-24 h-16 bg-[var(--icon-grey)] rounded-lg">
          <p className=" text-xs">TIES</p>
          <p className=" text-xl font-bold">14</p>
        </div>
        <div className=" flex flex-col justify-center items-center w-24 h-16 bg-[var(--primary-yellow)] rounded-lg">
          <p className=" text-xs">O(P2)</p>
          <p className=" text-xl font-bold">14</p>
        </div>
      </div>
    </div>
  );
};

export default Board;
