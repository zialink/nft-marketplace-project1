import Image from "next/image";
import Link from "next/link";
import Button from "../button";

export default function Card({ nft, key, buyNft }) {
  return (
    <div
      className="overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl"
      key={key && key}
    >
      <div className="flex h-full">
        <div className="next-image-wrapper h-full flex-1">
          <Image
            className="object-cover"
            src={nft.image}
            layout="responsive"
            width="200"
            height="260"
            alt={nft.name}
          />
        </div>
        <div className="flex-1 relative p-8">
          <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            {nft.name}
          </div>
          <p className="mt-2 pb-4 text-gray-500">
            {nft.description.substring(0, 80)}...
          </p>
          <div className="mt-4">
            {buyNft ? (
              <Button
                onClick={() => buyNft(nft)}
                className="absolute bottom-0 right-0"
                variant="lightPurple"
              >
                Buy - {nft.price}ETH
              </Button>
            ) : (
              <Button
                onClick={() => buyNft(nft)}
                className="absolute bottom-0 right-0"
                variant="lightPurple"
                disabled
              >
                {nft.price}ETH
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
