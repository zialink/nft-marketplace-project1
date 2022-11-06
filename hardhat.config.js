require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const quickNode = process.env.QuickNode_ID;
const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: `https://skilled-nameless-pallet.ethereum-goerli.discover.quiknode.pro/${quickNode}/`,
      accounts: [`0x${privateKey}`],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
