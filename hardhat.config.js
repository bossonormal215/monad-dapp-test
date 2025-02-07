require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.28',
  networks: {
    ethereumSepolia: {
      url: process.env.ETH_SEPOLIA_RPC, // Alchemy or Infura
      accounts: [process.env.PRIVATE_KEY],
    },
    arbitrumSepolia: {
      url: process.env.ARB_SEPOLIA_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
    baseSepolia: {
      url: process.env.BASE_SEPOLIA_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
    monadDevNet: {
      url: process.env.MONAD_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
