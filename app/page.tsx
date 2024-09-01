"use client";
import { useState } from "react";
import { Noto_Serif_Display } from "next/font/google";
import "../components/ui/static.css";
import "../components/ui/text-effects.css";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
import AboutMe from "@/pages/AboutMe";
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
      <AboutMe
        navHover={navHover}
        hoveredItem={hoveredItem}
        fontClass={notoSansJP.className}
      />
      <footer className="z-100 animate-intro-shrink bg-[#3c3836]"></footer>
    </div>
  );
}
