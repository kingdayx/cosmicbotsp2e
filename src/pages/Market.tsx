import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo1.svg";
import bg from "../assets/bg.png";
import button from "../assets/button.svg";
import game from "../assets/Game_Screen.svg";
import { isMobile } from "react-device-detect";
import mobileBar from "../assets/mobileTopBar.svg";
import MobileScreenBG from "../assets/mobileScreen.svg";
import button1 from "../assets/button1.svg";
import token1 from "../assets/token1.svg";
import token2 from "../assets/token2.svg";
import token3 from "../assets/token3.svg";
import Link from "next/link";
import lightning from "../assets/lightning.svg";
import potion from "../assets/potion.svg";
import NFT1 from "../assets/NFTs/3.png";
import NFT2 from "../assets/NFTs/6.png";
import NFT3 from "../assets/NFTs/7.png";
import NFT4 from "../assets/NFTs/8.png";
import NFT5 from "../assets/NFTs/9.png";
import NFT6 from "../assets/NFTs/2.png";
import NFT7 from "../assets/NFTs/4.png";
import NFT8 from "../assets/NFTs/10.png";
import NFT9 from "../assets/NFTs/1.png";
import NFT10 from "../assets/NFTs/5.png";

import MarketNFTs from "../components/MarketNFTs";

const MarketContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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

const HeaderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.7rem;
  position: relative;
  left: 1rem;
  width: 10rem;
  background-repeat: no-repeat;
  height: 3rem;
  text-underline: none;
  text-decoration: none;
  &:active {
    transform: scale(0.9);
  }
`;

const HeaderGame = styled.img`
  position: relative;
  top: -4rem;
  right: 7rem;
  bottom: 5rem;
  height: 30rem;
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

const HeaderTokens1 = styled.div`
  display: flex;
  position: relative;
  left: -10%;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: 1rem;
`;

const HeaderToken = styled.img`
  width: 2rem;
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

const HeaderTokenDeposit = styled.div`
  margin-left: 0.5rem;
  margin-right: 2rem;
  color: white;
`;
const MarketContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  position: fixed;
  top: 28%;
  left: 20%;
  right: 32%;
  z-index: 100;

  @media screen and (min-width: 1200px) {
    top: 28%;
    left: 20%;
    right: 30%;
  }
  @media screen and (min-width: 1400px) {
    top: 28%;
    left: 22%;
    right: 30%;
  }
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

const HeaderTokens = styled.div`
  display: flex;
  position: relative;
  top: 0;
  z-index: 2;
`;

const HeaderTopBar = styled.img`
  position: absolute;
  top: 0;
  z-index: 1;
  max-width: 99.99%;
`;

const HeaderTokenContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 0.5rem;
  left: 25%;
  right: 20%;
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

const HeaderMobile = styled.div`
  display: flex;
  flex-direction: row;
  scrollbar-width: 2rem;
  overflow: hidden;
  overflow-x: scroll;
  width: 100%;
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

const MarketNFTImages = styled.img`
  height: 100px;
  width: 100px;
  cursor: pointer;
`;

const MarketNFTsList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 2.3rem;
  right: 3rem;
  height: 21rem;
  width: 6rem;
  scrollbar-width: 2rem;
  overflow: hidden;
  overflow-y: scroll;
`;

const MarketNFTData = styled.div`
  display: flex;
`;

export default function Market() {
  const [nfts, setNFTs] = useState(0);
  const NFTs = [
    {
      src: NFT1,
      page: 0,
      header: "EMG-12a",
      rarity: "common",
      mp: 3,
      ammo: 5,
      blastSpash: 60,
      blast: 10,
      marketprice1: 470,
      marketprice2: 320,
    },
    {
      src: NFT2,
      page: 1,
      header: "EMG-27a",
      rarity: "common",
      mp: 3,
      ammo: 5,
      blastSpash: 60,
      blast: 10,
      marketprice1: 470,
      marketprice2: 320,
    },
    {
      src: NFT3,
      page: 2,
      header: "Big Buddy",
      rarity: "common",
      mp: 3,
      ammo: 5,
      blastSpash: 60,
      blast: 10,
      marketprice1: 470,
      marketprice2: 320,
    },
    {
      src: NFT4,
      page: 3,
      header: "Astral Piearcer",
      rarity: "common",
      mp: 3,
      ammo: 5,
      blastSpash: 60,
      blast: 10,
      marketprice1: 470,
      marketprice2: 320,
    },
    {
      src: NFT5,
      page: 4,
      header: "Blast Splasher",
      rarity: "common",
      mp: 3,
      ammo: 5,
      blastSpash: 60,
      blast: 10,
      marketprice1: 470,
      marketprice2: 320,
    },
    {
      src: NFT6,
      page: 5,
      header: "MK Devastator",
      rarity: "common",
      mp: 3,
      ammo: 5,
      blastSpash: 60,
      blast: 10,
      marketprice1: 470,
      marketprice2: 320,
    },
    {
      src: NFT7,
      page: 6,
      header: "Astral Slinger",
      rarity: "common",
      mp: 3,
      ammo: 5,
      blastSpash: 60,
      blast: 10,
      marketprice1: 470,
      marketprice2: 320,
    },
    {
      src: NFT8,
      page: 7,
      header: "Boomstick",
      rarity: "common",
      mp: 3,
      ammo: 5,
      blastSpash: 60,
      blast: 10,
      marketprice1: 470,
      marketprice2: 320,
    },
    {
      src: NFT9,
      page: 8,
      header: "Zx-4 Plasma",
      rarity: "common",
      mp: 3,
      ammo: 5,
      blastSpash: 60,
      blast: 10,
      marketprice1: 470,
      marketprice2: 320,
    },
    {
      src: NFT10,
      page: 9,
      header: "Incinerator",
      rarity: "common",
      mp: 3,
      ammo: 5,
      blastSpash: 60,
      blast: 10,
      marketprice1: 470,
      marketprice2: 320,
    },
  ];

  console.log("nft selected", nfts);

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

        <HeaderMobile className="scrollbars">
          {NFTs.map((index, key) => {
            return <MarketNFTImages onClick={() => setNFTs(index.page)} />;
          })}
        </HeaderMobile>
        <MarketNFTData>
          {NFTs.map((item, key) => {
            if (nfts === item.page) return <div />;
          })}
        </MarketNFTData>

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
      <MarketContainer1 style={{ backgroundImage: `url(${bg})` }}>
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
        <HeaderGame src={game} alt="game screen" />
        <MarketContainer className="scrollbars">
          <MarketNFTsList className="scrollbars">
            {NFTs.map((index, key) => {
              return <MarketNFTImages onClick={() => setNFTs(index.page)} />;
            })}
          </MarketNFTsList>
          <MarketNFTData>
            {NFTs.map((item, key) => {
              if (nfts === item.page) return <div />;
            })}
          </MarketNFTData>
        </MarketContainer>
        <HeaderContainer1>
          {/* <Link to="/home" style={{ textDecorationLine: "none" }}>
            <HeaderButton style={{ backgroundImage: `url(${button})`} } >Home</HeaderButton>{" "}
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
      </MarketContainer1>
    );
  };

  return <>{isMobile ? MobileView() : DesktopView()}</>;
}
