import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b p-6 flex justify-between">
      <p className="text-4xl font-bold">NFT Marketplace</p>
      <div className="flex mt-4">
        <Link href="/">
          <a className="mr-6 text-indigo-500 hover:text-indigo-700">Home</a>
        </Link>
        <Link href="/create-item">
          <a className="mr-4 text-indigo-500 hover:text-indigo-700">
            Sell Digital Asset
          </a>
        </Link>
        <Link href="/my-assets">
          <a className="mr-4 text-indigo-500 hover:text-indigo-700">
            My Digital Assets
          </a>
        </Link>
        <Link href="/creator-dashboard">
          <a className="mr-4 text-indigo-500 hover:text-indigo-700">
            Creator Dashboard
          </a>
        </Link>
      </div>
    </nav>
  );
}
