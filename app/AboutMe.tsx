import { StarsBackground } from "@/components/ui/StarsBackground";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";

type AboutMeProps = {
  hoveredItem: string | null;
  navHover: boolean;
  fontClass: string;
};

export default function AboutMe({
  navHover,
  hoveredItem,
  fontClass,
}: AboutMeProps) {
  const words = [
    { text: "React" },
    { text: "Nextjs" },
    { text: "CSS" },
    { text: "TailwindCSS" },
    { text: "Threejs" },
  ];

  return (
    // NOTE: Main should ideally have a z index of 50 for all content
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
      <h1 className=" z-10 m-auto my-0 gap-10 text-8xl font-bold text-gruv-fg0 ">
        tiger liu
      </h1>
      {/* <ul className=" my-0 mt-10 text-xl self-center text-gruv-fg0 text-flicker-in-glow">
        <li className="inline-block">React</li>
        <li className="inline-block ml-5">NextJS</li>
        <li className="inline-block ml-5">CSS</li>
        <li className="inline-block ml-5">Tailwind CSS</li>
        <li className="inline-block ml-5">ThreeJS</li>
      </ul> */}
      <TypewriterEffect className="mt-6 text-gruv-yellow" words={words} />
      <ShootingStars />
      <StarsBackground />
    </main>
  );
}
