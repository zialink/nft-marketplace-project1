require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const infuraId = process.env.INFURA_ID;
const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },

    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      //url: "https://rpc-mumbai.matic.today",
      accounts: [`0x${privateKey}`],
    },
    matic: {
      url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      // url: "https://rpc-mainnet.maticvigil.com",
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
