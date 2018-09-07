/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  networks: {
    dev: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      host: 'localhost',
      port: 8545,
      from: process.env.DEFAULT_ACCOUNT,
      network_id: 3,
      gas: 4612388
    },
    rinkeby: {
      host: 'localhost',
      port: 8545,
      from: process.env.DEFAULT_ACCOUNT,
      network_id: 4,
      gas: 4612388
    }
  }
};
