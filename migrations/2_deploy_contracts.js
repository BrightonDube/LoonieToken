const LoonieCrowdSale = artifacts.require('./LoonieCrowdSale.sol');
const LoonieToken = artifacts.require('./LoonieToken.sol');

module.exports = function(deployer, network, accounts) {
  const openingTime = web3.eth.getBlock('latest').timestamp + 5; 
  const closingTime = openingTime + 86400 * 30; // 30 days
  const rate = new web3.BigNumber(1/35000000000000); 
  const wallet = accounts[0];

  return deployer
    .then(() => {
      return deployer.deploy(LoonieToken);
    })
    .then(() => {
      return deployer.deploy(
        LoonieCrowdSale,
        openingTime,
        closingTime,
        rate,
        wallet,
        LoonieToken.address
      );
    });
};