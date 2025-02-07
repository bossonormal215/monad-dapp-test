const { ethers } = require('hardhat');
require('dotenv').config();

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with account: ${deployer.address}`);

  // Fetch Pyth Oracle Address from .env
  const pythOracleAddress = process.env.PYTH_ORACLE_ADDRESS;

  // Deploy the contract
  const PythBridge = await ethers.getContractFactory('bridgeCon');
  const bridge = await PythBridge.deploy(pythOracleAddress);
  await bridge.deployed();

  console.log(`PythBridge deployed to: ${bridge.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
