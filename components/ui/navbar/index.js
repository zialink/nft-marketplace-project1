// full code link: https://codesandbox.io/s/tailwind-react-hamburger-menu-tjhfyx

import { useState } from "react"; // import state
import Link from "next/link";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8 mb-5">
      <p className="text-4xl font-bold">NFT Marketplace</p>

      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex uppercase flex-col items-center justify-between min-h-[250px]">
              <li>
                <Link href="/">
                  <a
                    className="mr-6 text-indigo-500 hover:text-indigo-700"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/create-item">
                  <a
                    className="mr-4 text-indigo-500 hover:text-indigo-700"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Sell Digital Asset
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/my-assets">
                  <a
                    className="mr-4 text-indigo-500 hover:text-indigo-700"
                    onClick={() => setIsNavOpen(false)}
                  >
                    My Digital Assets
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/my-assets">
                  <a
                    className="mr-4 text-indigo-500 hover:text-indigo-700"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Creator Dashboard
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <Link href="/">
              <a className="mr-6 text-indigo-500 hover:text-indigo-700">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/create-item">
              <a className="mr-4 text-indigo-500 hover:text-indigo-700">
                Sell Digital Asset
              </a>
            </Link>
          </li>
          <li>
            <Link href="/my-assets">
              <a className="mr-4 text-indigo-500 hover:text-indigo-700">
                My Digital Assets
              </a>
            </Link>
          </li>
          <li>
            <Link href="/my-assets">
              <a className="mr-4 text-indigo-500 hover:text-indigo-700">
                Creator Dashboard
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
