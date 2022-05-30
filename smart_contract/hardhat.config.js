// require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// module.exports = {
//   solidity: "0.8.4",
// };


// My http key for alchamy
// https://eth-ropsten.alchemyapi.io/v2/EqfYoCyUc6Xhvyw_nLdfTzNmkiN3Tcgj




// https://eth-ropsten.alchemyapi.io/v2/Tq2BZqel6WJJlq6VTQm4Npf6tsrAIxuI

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Tq2BZqel6WJJlq6VTQm4Npf6tsrAIxuI',
      accounts: ['ab9a9858bbf150bc826be271e1ff5d997a6b0c93e11888a1fbae23df0a4af72b'],
    },
  },
};