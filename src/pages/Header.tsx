import axios from "axios";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import styled from "styled-components";
import game from "../assets/Game_Screen.svg";

import bg from "../assets/bg.png";
import button from "../assets/button.svg";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";

import logo from "../assets/logo1.svg";
import mobileBar from "../assets/mobileTopBar.svg";
import MobileScreenBG from "../assets/mobileScreen.svg";
import button1 from "../assets/button1.svg";
import token1 from "../assets/token1.svg";
import token2 from "../assets/token2.svg";
import token3 from "../assets/token3.svg";

import lightning from "../assets/lightning.svg";
import potion from "../assets/potion.svg";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: url("./assets/bg.png");
`;
const HeaderMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100rem;
  background-repeat: no-repeat;
  background-image: url(${MobileScreenBG});
  background-size: cover;
`;
const HeaderContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: -7em;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const HeaderNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const HeaderImage = styled.img`
  height: 10rem;
`;

const HeaderGame = styled.img`
  position: relative;
  top: -4rem;
  right: 7rem;
  bottom: 5rem;
  height: 30rem;
`;

const HeaderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.7rem;
  position: relative;
  left: 1rem;
  width: 10rem;
  background: url(${button});
  background-repeat: no-repeat;
  height: 3rem;
  text-decoration: none;
  &:active {
    transform: scale(0.9);
  }
`;

const HeaderTokens1 = styled.div`
  display: flex;
  position: relative;
  left: -10%;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: 1rem;
`;

const HeaderLightning = styled.img`
  position: relative;
  right: 3rem;
  width: 2rem;
`;
const HeaderPotion = styled.img`
  position: relative;
  left: 3.5rem;
  width: 2rem;
`;

const HeaderEnergyBar1 = styled.div`
  position: relative;
  max-height: 2rem;
  top: 1rem;
  left: 16%;
  width: 13rem;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #2680eb;
  z-index: 2;
  background: #023059;
`;

const MarketContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 13rem;
  left: 28rem;
`;

const MarketNFTsList = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  bottom: 2rem;
  height: 20rem;
  right: 3rem;
  width: 30.5rem;
  overflow: hidden;
  overflow-y: scroll;
  columns-count: 2;
  flex-wrap: wrap;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const HeaderNFTAsset = styled.img`
  height: 10rem;
  weight: 10rem;
  float: left;
  padding: 2rem;
`;

const HeaderNFTContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MarketNFTs = styled.img`
  height: 5rem;
  cursor: pointer;
`;
const MarketChar = styled.img`
  position: relative;
  top: 1rem;
  height: 3rem;
`;

const HeaderAssetID = styled.p`
  color: white;
`;
const HeaderAssetName = styled.p`
  color: white;
`;

const HeaderWalletConnect = styled.div`
  position: absolute;
`;

const HeaderWalletWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;

const HeaderMobile = styled.div`
  width: 100%;
`;

const HeaderTokens = styled.div`
  display: flex;
  position: relative;
  top: 0;
  z-index: 2;
`;

const HeaderToken = styled.img`
  width: 2rem;
  z-index: 10;
`;

const HeaderTokenDeposit = styled.div`
  margin-left: 0.5rem;
  margin-right: 2rem;
  color: white;
  z-index: 10;
`;

const HeaderTokenContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 0.5rem;
  left: 25%;
  right: 20%;
`;

const HeaderTopBar = styled.img`
  position: absolute;
  top: 0;
  z-index: 1;
  max-width: 99.99%;
`;

const HeaderEnergyBar = styled.div`
  position: relative;
  max-height: 2rem;
  top: 1.5rem;
  left: 25%;
  right: 20%;
  width: 13rem;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #2680eb;
  z-index: 2;
  background: #023059;
`;

const HeaderBottomBar = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
`;

const HeaderBottomBarContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;

const HeaderBotomBarBG = styled.img`
  height: 100%;
  width: 100%;
`;

const HeaderBotButton = styled.div`
  display: flex;
  color: white;
  font-size: 1rem;
  min-width: 7rem;
  left: 6%;
  margin-right: 0.4rem;
  margin-left: 0.4rem;
  justify-content: center;
  align-items: center;
  background: url(${button1});
  background-repeat: no-repeat;
  background-size: cover;
  height: 2rem;
  &:active {
    transform: scale(0.9);
  }
`;

export default function Header() {
  const [data, setData] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");
  // Use the RPC endpoint of your choice.
  const umi = createUmi("http://127.0.0.1:8899").use(mplCandyMachine());

  const connectWallet = async () => {
    console.log("connectWallet()", walletAddress);
    // const { solana } = window;
    // if (solana) {
    //   const response = await solana.connect();
    //   setWalletAddress(response.publicKey.toString());
    //   if (!localStorage.justOnce) {
    //     setTimeout(function () {
    //       localStorage.setItem("justOnce", "true");
    //       window.location.reload(true);
    //     }, 3000);
    //   }
  };
  // useEffect(() => {
  //   fetch();
  // }, []);

  // const fetch = async () => {
  //   try {
  //     const fetch = await axios.get(
  //       "https://wax.api.atomicassets.io/atomicassets/v1/assets?owner=dplbq.wam"
  //     );

  //     const fetches = fetch.data.data;
  //     let data = [];
  //     for (let i = 0; i < fetches.length; i++) {
  //       if (fetches[i].collection.collection_name == "farmersworld") {
  //         data.push(fetches[i]);
  //         // return fetches
  //       }
  //     }
  //     setData(data);
  //     console.log("data", data);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  //   // return fetches
  // };

  const [fetching, fetched] = useState("");

  const MobileView = () => {
    return (
      <HeaderMobileContainer>
        <HeaderTokens>
          <HeaderTopBar src={mobileBar} alt="mobile bar" />
          <HeaderTokenContainer>
            <HeaderToken src={token1} alt="token 1" />
            <HeaderTokenDeposit>0</HeaderTokenDeposit>
            <HeaderToken src={token2} alt="token 2" />
            <HeaderTokenDeposit>0</HeaderTokenDeposit>
            <HeaderToken src={token3} alt="token 3" />
            <HeaderTokenDeposit>0</HeaderTokenDeposit>
          </HeaderTokenContainer>
        </HeaderTokens>
        <HeaderEnergyBar>
          <HeaderLightning src={lightning} alt="lightning" />
          100/400
          <HeaderPotion src={potion} alt="potion" />
        </HeaderEnergyBar>

        <HeaderMobile> help </HeaderMobile>
        <HeaderBottomBarContainer>
          <HeaderBotomBarBG src={mobileBar} alt="mobile bar" />
          <HeaderBottomBar>
            <Link href="/market" style={{ textDecorationLine: "none" }}>
              <HeaderBotButton>Market</HeaderBotButton>
            </Link>
            <Link href="/mycards" style={{ textDecorationLine: "none" }}>
              <HeaderBotButton>My Cards</HeaderBotButton>
            </Link>
            <Link href="/play" style={{ textDecorationLine: "none" }}>
              <HeaderBotButton>Play</HeaderBotButton>
            </Link>
          </HeaderBottomBar>
        </HeaderBottomBarContainer>
      </HeaderMobileContainer>
    );
  };
  const DesktopView = () => {
    return (
      <HeaderContainer style={{ backgroundImage: `url(${bg})` }}>
        <HeaderNavWrapper>
          <HeaderTokens1>
            <HeaderToken src={token1} alt="token 1" />
            <HeaderTokenDeposit>0</HeaderTokenDeposit>
            <HeaderToken src={token2} alt="token 2" />
            <HeaderTokenDeposit>0</HeaderTokenDeposit>
            <HeaderToken src={token3} alt="token 3" />
            <HeaderTokenDeposit>0</HeaderTokenDeposit>
          </HeaderTokens1>
          <HeaderImage src={logo} alt="Logo" />
          <HeaderEnergyBar1>
            <HeaderLightning src={lightning} alt="lightning" />
            100/400
            <HeaderPotion src={potion} alt="potion" />
          </HeaderEnergyBar1>
        </HeaderNavWrapper>
        <HeaderGame src={game} alt="game screen"></HeaderGame>
        <MarketContainer className="scrollbar">
          <MarketNFTsList>
            {data.map((value, key) => {
              return (
                <HeaderNFTContainer key={key}>
                  <HeaderAssetID>assetId: {value.asset_id}</HeaderAssetID>
                  <HeaderAssetName>name: {value.name}</HeaderAssetName>
                  <HeaderNFTAsset
                    src={`https://atomichub-ipfs.com/ipfs/${value.data.img}`}
                    alt={value.data.name}
                  />
                </HeaderNFTContainer>
              );
            })}
          </MarketNFTsList>
        </MarketContainer>
        <HeaderContainer1>
          {/* <Link to="/home" style={{ textDecorationLine: "none" }}>
            <HeaderButton style={{ backgroundImage: `url(${button})` }} >Home</HeaderButton>{" "}
          </Link> */}
          <Link href="/mycards" style={{ textDecorationLine: "none" }}>
            <HeaderButton style={{ backgroundImage: `url(${button})` }}>
              My Cards
            </HeaderButton>
          </Link>
          <Link href="/market" style={{ textDecorationLine: "none" }}>
            <HeaderButton style={{ backgroundImage: `url(${button})` }}>
              Market
            </HeaderButton>
          </Link>
          <Link href="/play" style={{ textDecorationLine: "none" }}>
            <HeaderButton style={{ backgroundImage: `url(${button})` }}>
              Play
            </HeaderButton>
          </Link>
        </HeaderContainer1>
      </HeaderContainer>
    );
  };
  return <>{isMobile ? MobileView() : DesktopView()}</>;
}
