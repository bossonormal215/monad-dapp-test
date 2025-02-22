const { ethers, network } = require('hardhat');
require('dotenv').config();

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(
    `Deploying contracts with account: ${deployer.address} on network: ${network.name}`
  );

  // Define Pyth Oracle addresses for different networks
  const pythOracleAddresses = {
    ethereumSepolia: process.env.PYTH_ORACLE_ETHEREUM_SEPOLIA,
    arbitrumSepolia: process.env.PYTH_ORACLE_ARBITRUM_SEPOLIA,
    baseSepolia: process.env.PYTH_ORACLE_BASE_SEPOLIA,
    monadTestnet: process.env.PYTH_ORACLE_MONAD_TESTNET,
  };

  // Get the correct Pyth Oracle Address for the current network
  const pythOracleAddress = pythOracleAddresses[network.name];

  if (!pythOracleAddress) {
    console.error(`Pyth Oracle Address not found for network: ${network.name}`);
    process.exit(1);
  }

  // Deploy the contract
  const PythBridge = await ethers.getContractFactory('bridgeCon');
  const bridge = await PythBridge.deploy(pythOracleAddress);
  await bridge.deployed();

  console.log(`PythBridge deployed to: ${bridge.address} on ${network.name}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
