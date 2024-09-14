"use client";
import { useState } from "react";
import { Noto_Sans_Display } from "next/font/google";
import "../components/ui/static.css";
import "../components/ui/text-effects.css";
import AboutMe from "@/app/AboutMe";
import Head from "next/head";
const notoSans = Noto_Sans_Display({
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
    <div className="font-futura w-screen h-screen flex flex-col">
      <header className="flex z-100 animate-intro-shrink bg-[#3c3836]">
        {/* Can use a loop to render this later I think */}
      </header>
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

      <AboutMe
        navHover={navHover}
        hoveredItem={hoveredItem}
        fontClass={notoSans.className}
      />

      <footer className="z-100 animate-intro-shrink bg-[#3c3836]"></footer>
    </div>
  );
}
