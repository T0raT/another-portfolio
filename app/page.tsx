"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Noto_Sans_Display } from "next/font/google";
import "../components/css/text-effects.css";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { NaviBar } from "@/components/NaviBar";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";

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

  const words = [
    // { text: "React" },
    // { text: "Nextjs" },
    // { text: "CSS" },
    // { text: "TailwindCSS" },
    // { text: "Threejs" },
    { text: "Frontend" },
    { text: "is" },
    { text: "my" },
    { text: "passion" },
  ];

  return (
    <div className="font-futura w-screen h-screen flex flex-col relative">
      <header className="flex z-100 animate-intro-shrink bg-[#3c3836]">
        {/* Can use a loop to render this later I think */}
      </header>
      <NaviBar
        navHover={navHover}
        setNavHover={setNavHover}
        hoveredItem={hoveredItem}
        setHoveredItem={setHoveredItem}
      />
      <main
        className={`futura bg-gruv-bg0-h z-50 overflow-clip relative h-full flex flex-col justify-center`}
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
        <h1 className=" z-10 w-[50%] m-auto my-0 gap-10 text-5xl md:text-6xl lg:text-8xl font-bold text-gruv-fg0 ">
          <TextHoverEffect text="Tiger Liu" />
        </h1>
        <TypewriterEffect className="mt-8 text-gruv-yellow" words={words} />
        <ShootingStars />
        <StarsBackground />
      </main>
      <footer className="z-100 animate-intro-shrink bg-[#3c3836]"></footer>
    </div>
  );
}
