import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import Footer from "../components/Footer";
import Work3 from "../components/Work";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mason's Touch Construction</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Masonry and Foundation Repair" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <About />

      <Work />

      <Contact />

      <Footer />
    </div>
  );
}
