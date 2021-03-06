require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-ganache");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const {PRIVATE_KEY, API_URL_MATIC_MAIN, PRIVATE_KEY_LIVE, API_URL_BSC, PRIVATE_KEY_l, API_URL_ropsten, API_URL_rinkeby, API_URL_local, API_URL_mumbai} = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    local: {
      url: API_URL_local,
      accounts: [`0x${PRIVATE_KEY_l}`]
    },
    rinkeby: {
      url: API_URL_rinkeby,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    ropsten: {
      url: API_URL_ropsten,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    bsc: {
      url: API_URL_BSC,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mumbai: {
      url: API_URL_mumbai,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    polygon: {
      url: API_URL_MATIC_MAIN,
      accounts: [`0x${PRIVATE_KEY_LIVE}`]
    }
  }
};
