"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import BoardHeader from "../components/BoardHeader";

const Board = () => {
  const searchParams = useSearchParams();
  const player = searchParams.get("player");

  return (
    <div>
      <BoardHeader />
    </div>
  );
};

export default Board;
