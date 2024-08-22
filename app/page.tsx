"use client";
import { useState } from "react";
import { Noto_Serif_Display } from "next/font/google";
import "../components/ui/static.css";
import "../components/ui/text-effects.css";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { ShootingStars } from "@/components/ui/ShootingStars";
const notoSansJP = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [navHover, setNavHover] = useState<boolean>(false);

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="flex z-100 animate-intro-shrink bg-[#3c3836]">
        {/* Can use a loop to render this later I think */}
        <nav
          onMouseEnter={() => setNavHover(true)}
          onMouseLeave={() => setNavHover(false)}
          className="self-end flex justify-around py-4 tracking-in-expand-slow"
        >
          <button
            className="text-gruv-fg0 text-xl ml-5 "
            onMouseEnter={() => handleMouseEnter("About Me")}
          >
            About Me
          </button>
          <button
            className="text-gruv-fg0 text-xl ml-5"
            onMouseEnter={() => handleMouseEnter("Projects")}
          >
            Projects
          </button>
          <button
            className="text-gruv-fg0 text-xl ml-5"
            onMouseEnter={() => handleMouseEnter("Contact Me")}
          >
            Contact Me
          </button>
        </nav>
      </header>
      <main
        className={`${notoSansJP.className} bg-gruv-bg0-h z-50 overflow-clip relative h-full flex flex-col justify-center`}
      >
        {navHover && (
          <div className="absolute flex flex-col justify-center items-center w-full h-full z-30 backdrop-blur-lg text-5xl font-bold text-gruv-fg0">
            <h1 className="tracking-in-expand">{hoveredItem}</h1>
          </div>
        )}
        <h1 className="z-10 m-auto my-0 gap-10 text-center text-5xl font-bold text-gruv-fg0 ">
          Tiger Liu
        </h1>
        <ul className=" my-0 mt-10 text-xl self-center text-gruv-fg0 text-flicker-in-glow">
          <li className="inline-block">React</li>
          <li className="inline-block ml-5">NextJS</li>
          <li className="inline-block ml-5">CSS</li>
          <li className="inline-block ml-5">Tailwind CSS</li>
          <li className="inline-block ml-5">ThreeJS</li>
        </ul>
        <StarsBackground />
        <ShootingStars />
      </main>
      <footer className="z-100 animate-intro-shrink bg-[#3c3836]"></footer>
    </div>
  );
}
