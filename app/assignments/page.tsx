"use client";
import { useState } from "react";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { NaviBar } from "@/components/NaviBar";

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
        {/* On hovering nav, sets nav render state to true.
         * On hovering nav item, sets item state to text of item.
         * Basically just renders the blur modal first, then render the nav items. Animation replays on item switching.
         */}
        {navHover && (
          <div className="absolute flex flex-col justify-center items-center w-full h-full z-30 backdrop-blur-lg text-5xl font-bold text-gruv-fg0">
            <h1 className="tracking-in-expand">{hoveredItem}</h1>
          </div>
        )}

        <h1 className=" z-10 m-auto my-0 gap-10 text-5xl md:text-6xl lg:text-8xl font-bold text-gruv-fg0 ">
          Assignments page
        </h1>
        {/* <ul className=" my-0 mt-10 text-xl self-center text-gruv-fg0 text-flicker-in-glow">
        <li className="inline-block">React</li>
        <li className="inline-block ml-5">NextJS</li>
        <li className="inline-block ml-5">CSS</li>
        <li className="inline-block ml-5">Tailwind CSS</li>
        <li className="inline-block ml-5">ThreeJS</li>
      </ul> */}
        <ShootingStars />
        <StarsBackground />
      </main>
      <footer className="z-100 animate-intro-shrink bg-[#3c3836]"></footer>
    </div>
  );
}
