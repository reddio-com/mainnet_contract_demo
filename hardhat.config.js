require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/{your infura key}`,
      accounts: ["your account private key"],
    },
  },
  etherscan: {
    apiKey: "your api key",
  },
};