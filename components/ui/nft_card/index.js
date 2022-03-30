import Image from "next/image";
import Link from "next/link";
import Button from "../button";

export default function Card({ nft, buyNft }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl mb-4">
      <div className="flex h-full">
        <div className="next-image-wrapper h-60 flex-1">
          <Image
            className="object-cover"
            src={nft.image}
            layout="fixed"
            width="200"
            height="250"
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
