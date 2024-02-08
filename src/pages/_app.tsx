import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { ContextProvider } from "../contexts/ContextProvider";
import { AppBar } from "../components/AppBar";
import { ContentContainer } from "../components/ContentContainer";
import { Footer } from "../components/Footer";
import Notifications from "../components/Notification";
import logo from "../assets/logo.svg";
import Header from "./mycards";
import Market from "./Market";
import Play from "./play";
import bg from "../assets/bg.png";
import React, { useEffect, useState, useMemo } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";
import Image from "next/image";
import Context from "./Context";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [loggedIn, setLogIn] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const wallet = useWallet();

  useEffect(() => {
    console.log("wallet", wallet);
    if (wallet.connected) {
      console.log("wallet connect", wallet.connected);
      setLogIn(true);
    }
  }, [wallet]);

  const renderLogin = () => {
    const umi = createUmi("http://127.0.0.1:8899").use(mplCandyMachine());

    const Content = () => {
      const { connection } = useConnection();
      const connectWallet = () => {
        console.log("connection >>", connection);
        console.log("candy machine", umi);
        setLogIn(true);
      };
      return (
        <div>
          <WalletMultiButton onClick={connectWallet} />
        </div>
      );
    };

    return (
      <div className="HeaderContainer">
        <Image src={logo} alt="logo" className="HeaderImage" />
        <div className="HeaderContainer1">
          {/* <Notifications /> */}
          <Content />
        </div>
      </div>
    );
  };
  return (
    <>
      <Head>
        <title>Cosmic Bots</title>
      </Head>
      <Context>
        <ContextProvider>
          {loggedIn ? (
            <div>
              <Notifications />
              <AppBar />
              <Component {...pageProps} />
            </div>
          ) : (
            renderLogin()
          )}
        </ContextProvider>
      </Context>
    </>
  );
};

export default App;
