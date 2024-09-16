"use client";
import { useState } from "react";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { NaviBar } from "@/components/NaviBar";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";

export default function Assignments() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [navHover, setNavHover] = useState<boolean>(false);

  return (
    <div className="font-futura w-screen h-screen flex flex-col relative">
      <header className="flex z-100 animate-intro-shrink bg-[#3c3836]">
        {/* Can use a loop to render this later I think */}
      </header>
      <NaviBar
        setHoveredItem={setHoveredItem}
        setNavHover={setNavHover}
        navHover={navHover}
        hoveredItem={hoveredItem}
      />
      <main
        className={`font-futura bg-gruv-bg0-h z-50 overflow-clip relative h-full flex flex-col justify-center`}
      >
        <BackgroundBeamsWithCollision className={"h-full md:h-full dark"}>
          {navHover && (
            <div className="absolute flex flex-col justify-center items-center w-full h-full z-30 backdrop-blur-lg text-5xl font-bold text-gruv-fg0">
              <h1 className="tracking-in-expand">{hoveredItem}</h1>
            </div>
          )}

          <h1 className=" z-10 m-auto my-0 gap-10 text-5xl md:text-6xl lg:text-8xl font-bold text-gruv-fg0 ">
            Assignments page
          </h1>
        </BackgroundBeamsWithCollision>
      </main>
      <footer className="z-100 animate-intro-shrink bg-[#3c3836]"></footer>
    </div>
  );
}
