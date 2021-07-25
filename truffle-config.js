const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  plugins: ["truffle-security", "solidity-coverage"],
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 6721975,
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider({
          mnemonic: {
            phrase: process.env.MNEMONIC,
          },
          providerOrUrl: process.env.NODE,
        });
      },
      network_id: 42,
      gas: 4500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    main: {
      provider: () => {
        return new HDWalletProvider({
          mnemonic: {
            phrase: process.env.MNEMONIC,
          },
          providerOrUrl: process.env.NODE,
        });
      },
      network_id: 1,
      gas: 10000000,
      gas: 4600000,
      gasPrice: 20000000000,
      confirmations: 2,
      timeoutBlocks: 100,
      skipDryRun: false,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.6", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
};
