var LoonieCrowdSale = artifacts.require("./LoonieCrowdSale.sol");
var LoonieToken = artifacts.require("./LoonieToken.sol");

module.exports = function(deployer, accounts) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 75, endTime = startTime + 3600 * 24 * 30;

  const rate = 25000; // rate of conversion

  deployer.deploy(LoonieToken, {gas: 2000000});
  LoonieToken.deployed().then(function (instance) {
      tok = instance;
      tok.owner.call().then(function(owner){
          deployer.deploy(LoonieCrowdSale,
              startTime,
              endTime,
              rate, 
              owner, // wallet for sending the funds
              instance.address, // deployed contract              
              {gas: 2000000});
      });
      LoonieCrowdSale.deployed().then(function(inst){
        ico = inst;
        return ico.address;        
      }).then(function(address){
          return tok.transferOwnership(address);
      });
      }); 
        

};
