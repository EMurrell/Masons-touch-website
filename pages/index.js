import Head from "next/head";
import Hero from "../components/Hero.js";
import About from "../components/About.js";
import Work from "../components/Work.js";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mason's Touch Construction</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Hero />

      <About />

      <Work />

      <Footer />
    </div>
  );
}
