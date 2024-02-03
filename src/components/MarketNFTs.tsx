import React from "react";
import styled from "styled-components";
import CBA from "../assets/token1.svg";
import CBD from "../assets/token2.svg";
import CBF from "../assets/token3.svg";

const MarketNFTDataContainer = styled.div`
  position: relative;
  bottom: 3.8rem;
  right: 1.5rem;
`;

const MarketNFTData = styled.div`
  position: relative;
  bottom: 3.9rem;
  right: 1.6rem;
`;

const MarketNFTsDisplay = styled.img`
  display: flex;
  position: relative;
  top: 5rem;
  height: 10rem;
`;

const MarketChar = styled.img`
  position: relative;
  height: 2rem;
`;
const MarketDataContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 4rem;
  left: 10rem;
  flex-direction: column;
`;
const MarketDataRows = styled.div`
  display: flex;
  margin-bottom: -15px;
  justify-content: space-between;
`;

const MarketDataColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const MarketDataColumnRight = styled.div`
  position: absolute;
  left: 10rem;
  display: flex;
  flex-direction: column;
`;

const MarketData = styled.p`
  color: white;
  margin-bottom: -5px;
`;
const MarketData1 = styled.p`
  display: flex;
  margin-bottom: -5px;
  color: white;
`;
const MarketPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 20rem;
  left: 1rem;
  height: 1rem;
  padding: 1.5rem 3rem 1.5rem 3rem;
  width: 23rem;
  border: 2px solid #cf9cfe;
`;

const MarketPrice1 = styled.p`
  position: relative;
  top: -1rem;
  color: white;
  padding: 0 0.5rem 0 0.5rem;
`;
const MarketChar1 = styled.img`
  position: relative;
  top: -1rem;
  margin-left: 0.5rem;
  height: 2.5rem;
`;
const MarketPurchase = styled.div`
  position: absolute;
  top: 24rem;
  left: 4rem;
  color: white;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  padding: 0.5rem;
  background: #f2d857;
  min-width: 16rem;
  cursor: pointer;
  &:hover {
    color: #089dbf;
  }
`;

const MarketHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const MarketHeader = styled.h1`
  margin-left: 1rem;
  color: #f2d857;
`;

const MarketNFTsList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 2.3rem;
  right: 3rem;
  height: 21rem;
  width: 6rem;
`;

const MarketNFT = styled.img`
  height: 100px;
  width: 100px;
`;

export default function MarketNFTs({
  item,
  src,
  alt,
  key,
  setNFTs,
  header,
  page,
}) {
  return (
    <MarketNFTDataContainer>
      <MarketNFTData>
        <MarketNFTsDisplay src={item.src} alt="NFTs" />
        <MarketDataContainer>
          <MarketHeaderWrapper>
            <MarketChar src={CBF} alt="NFT icon" />
            <MarketHeader> {item.header} </MarketHeader>
          </MarketHeaderWrapper>
          <MarketDataRows>
            <MarketDataColumn>
              <MarketData>Rarity:</MarketData>
              <MarketData>Mining Power:</MarketData>
              <MarketData>Ammo Usage:</MarketData>
              <MarketData>Blast Splashes:</MarketData>
              <MarketData>Blast Usage:</MarketData>
            </MarketDataColumn>
            <MarketDataColumnRight>
              <MarketData1>{item.rarity}</MarketData1>
              <MarketData1>3</MarketData1>
              <MarketData1>5</MarketData1>
              <MarketData1>60</MarketData1>
              <MarketData1>10</MarketData1>
            </MarketDataColumnRight>
          </MarketDataRows>
        </MarketDataContainer>
        <MarketPrice>
          <MarketChar1 src={CBA} alt="fire" />
          <MarketPrice1> 470 </MarketPrice1>
          <MarketChar1 src={CBD} alt="fire" />
          <MarketPrice1> 320 </MarketPrice1>
        </MarketPrice>
        <MarketPurchase> Buy </MarketPurchase>
      </MarketNFTData>
    </MarketNFTDataContainer>
  );
}
