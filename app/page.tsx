export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="z-100 animate-intro-shrink"></header>
      <main className="z-50 overflow-scroll bg-[#690026] animate-intro-grow flex flex-col justify-center">
        <h1 className="m-auto my-0 text-5xl">Tiger Liu</h1>
        <h3 className="m-auto my-0 mt-20 text-xl">
          React Nextjs CSS TailwindCSS Python C
        </h3>
      </main>
      <footer className="z-100 animate-intro-shrink"></footer>
    </div>
  );
}
