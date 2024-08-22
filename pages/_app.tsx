import { Noto_Sans_JP } from "next/font/google";
import type { AppProps } from "next/app";
import "../app/.global.css";

// If loading a variable font, you don't need to specify the font weight
const notoSansJp = Noto_Sans_JP({
  subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSansJp.className}>
      <Component {...pageProps} />
    </main>
  );
}
