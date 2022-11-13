import Layout from "../components/ui/layout";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { nftaddress, nftmarketaddress } from "../config";

import NFT from "./api/NFT.json";
import Market from "./api/NFTMarket.json";
import Card from "../components/ui/nft_card";

//const quickNode = process.env.QuickNode_ID;
const url =
  "https://skilled-nameless-pallet.ethereum-goerli.discover.quiknode.pro/33c3e61d45a79913e7352973839aaff1d5583db2/";

export default function Home() {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    loadNFTs();
  }, [loadingState]);

  async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider(url);

    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider
    );
    const data = await marketContract.fetchMarketItems();

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

  async function buyNft(nft) {
    const providerOptions = {
      walletconnect: {
        package: WalletConnect,
        options: {
          rpc: { url },
        },
      },
    };
    const web3modal = new Web3Modal({ cacheProvider: true, providerOptions });
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const signer = provider.getSigner();
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

    const transaction = await contract.createMarketSale(
      nftaddress,
      nft.tokenId,
      { value: price }
    );
    await transaction.wait();
    loadNFTs();
  }

  return (
    <div className="flex justify-center">
      {loadingState && <p className="mb-96">Loading...</p>}
      {!nfts.length && loadingState === false ? (
        <h1 className="px-20 py-10 text-3xl mb-80">No items in Marketplace</h1>
      ) : (
        <div className={`h-screen mb-28`}>
          <div
            className={`grid grid-flow-row justify-center items-center grid-cols-1 sm:grid-cols-2 ${
              nfts.length < 3
                ? "md:grid-cols-auto 2xl:grid-cols-auto"
                : "md:grid-cols-3 2xl:grid-cols-4"
            }   pt-4 pb-10 gap-12 span-y`}
          >
            {nfts.map((nft, i) => (
              <Card nft={nft} key={i} buyNft={buyNft} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

Home.Layout = Layout;
