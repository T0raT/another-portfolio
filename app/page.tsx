import { Noto_Serif_Display } from "next/font/google";

const notoSansJP = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="z-100 animate-intro-shrink"></header>
      <main
        className={`${notoSansJP.className} z-1 overflow-y-auto bg-[#940707] h-full flex flex-col justify-center`}
      >
        <h1 className="m-auto my-0 text-5xl font-bold">Tiger Liu</h1>
        <h3 className="m-auto my-0 mt-20 text-xl">
          React Nextjs CSS TailwindCSS Python C
        </h3>
      </main>
      <footer className="z-100 animate-intro-shrink"></footer>
    </div>
  );
}
