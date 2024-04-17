import React from "react";
import PrimaryButton from "./utils/PrimaryButton";
import IconX from "./utils/IconX";
import IconO from "./utils/IconO";
import SelectPlayer from "./components/SelectPlayer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center ">
      <div className="px-2 min-w-[var(--mobile-width)] sm:px-0 sm:min-w-[var(--desktop-width)] space-y-10">
        <div className="flex items-center justify-center space-x-1">
          <IconX fillColor="iconGreen" />
          <IconO fillColor="iconYellow" />
        </div>
        <SelectPlayer />
        <div className="space-y-4">
          <PrimaryButton btnText="NEW GAME (VS CPU)" color="btnYellow" />
          <PrimaryButton btnText="NEW GAME (VS PLAYER)" color="btnGreen" />
        </div>
      </div>
    </main>
  );
}
