import Layout from "../components/ui/layout";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import Image from "next/image";

import { nftaddress, nftmarketaddress } from "../config";

import NFT from "./api/NFT.json";
import Market from "./api/NFTMarket.json";
import Card from "../components/ui/nft_card";

export default function MyAssets() {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    loadNFTs();
  }, [loadingState]);

  async function loadNFTs() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      signer
    );
    const data = await marketContract.fetchMyNFTs();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );
    setNfts(items);
    setLoadingState(false);
    console.log(`nfts: ${nfts.length}, loading state: ${loadingState}`);
  }

  return (
    <div className="flex justify-center">
      {loadingState && <p className="mb-96">Loading...</p>}
      {!nfts.length && loadingState === false ? (
        <h1 className="px-20 py-10 text-3xl mb-80">No assets owned</h1>
      ) : (
        <div className="px-8">
          <div
            className={`grid grid-flow-row justify-center grid-cols-1 sm:grid-cols-2 ${
              nfts.length < 3
                ? "md:grid-cols-auto 2xl:grid-cols-auto"
                : "md:grid-cols-3 2xl:grid-cols-4"
            }  pt-4 gap-10`}
          >
            {nfts.map((nft, i) => (
              <Card nft={nft} key={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

MyAssets.Layout = Layout;
