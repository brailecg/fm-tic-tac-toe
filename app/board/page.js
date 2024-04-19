"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import BoardHeader from "../components/BoardHeader";
import BoardTile from "../components/BoardTile";

const Board = () => {
  const searchParams = useSearchParams();
  const player = searchParams.get("player");

  return (
    <div className="px-2 sm:px-0 space-y-10">
      <BoardHeader />
      <div className="grid grid-cols-3 gap-x-2 gap-y-4 content-around">
        <BoardTile />
        <BoardTile />
        <BoardTile />
        <BoardTile />
        <BoardTile />
        <BoardTile />
        <BoardTile />
        <BoardTile />
        <BoardTile />
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
