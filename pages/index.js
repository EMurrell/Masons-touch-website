import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import Footer from "../components/Footer";
import Work2 from "../components/Work2";
import Work3 from "../components/Work3";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mason's Touch Construction</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <About />

      <Work3 />

      <Footer />
    </div>
  );
}
