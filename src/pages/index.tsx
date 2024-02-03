import type { NextPage } from "next";
import Head from "next/head";
import Header from "../pages/Header";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Cosmic Bots</title>
        <meta name="Cosmic Bots" content="Cosmic Bots on Solana" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
