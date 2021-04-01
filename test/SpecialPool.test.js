var SpecialPool = artifacts.require('./SpecialPool.sol');
var RigelToken = artifacts.require('./RigelToken');

// var UserYieldFarming = artifacts.require('./UserYieldFarming.sol');

// require('chai')
//   .use(require('chai-as-promised'))
//   .should()

contract('Memory Token', (deployer, network, accounts) => {
  let pool
  let rigel
  var stakeAmount = 1000000000000000; // in wei

  before(async () => {
    pool = await SpecialPool.deployed();
    rigel = await RigelToken.deployed();
    // yieldFarm = await UserYieldFarming.deployed()
    var ethers = require("ethers")
    var parseEther = ethers.ethers.utils.parseEther;
  })
   

   
     it('initializes the contract with the correct values', function() {
    return SpecialPool.deployed().then(function(instance) {
      pool = instance;
      return pool.address
    }).then(function(address) {
      assert.notEqual(address, 0x0, 'has contract address');
      return pool.ENTRY_RATE();
    }).then(function(address) {
      assert.notEqual(address, 0x0, 'has token contract address');
      return pool.DAYS30_RATE();
    });
  });











    it('facilitates stakers to stake', function() {
    return SpecialPool.deployed().then(function(instance) {
      // Grab token instance first
      pool = instance;
      return SpecialPool.deployed();
    }).then(function(instance) {
      // Then grab token sale instance
      pool = instance;
      // Provision 75% of all tokens to the token sale
      return pool.calculateRewards(1000000000000000, { from: accounts[0] })
    })
  });


})