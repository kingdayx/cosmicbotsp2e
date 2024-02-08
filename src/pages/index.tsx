import type { NextPage } from "next";
import Head from "next/head";
import Mycards from "./mycards";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Cosmic Bots</title>
        <meta name="Cosmic Bots" content="Cosmic Bots on Solana" />
      </Head>
      <Mycards />
    </div>
  );
};

export default Home;
