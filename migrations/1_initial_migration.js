const SpecialPool = artifacts.require("SpecialPool.sol");
// var MasterChef = artifacts.require("MasterChef.sol");
const RigelToken = artifacts.require("RigelToken");

const ethers = require("ethers")
const parseEther = ethers.ethers.utils.parseEther;
module.exports = async function(deployer, network, accounts) {
    // Deploy RigelToken Token
    await deployer.deploy(RigelToken, accounts[0])
    const rigelToken = await RigelToken.deployed()
    // Deploy SpecialPool Token
    await deployer.deploy(SpecialPool, rigelToken.address)
    const sPool = await SpecialPool.deployed()

    // Deploy BUSD_RGP_TokenSales - BUSC
    // await deployer.deploy(MasterChef, rigelToken.address, accounts[1], 10000000000000000000, 9815383)
    // const masterChef = await MasterChef.deployed()
    // Transfer all tokens to RGPTokenSales (1 million)
    // await rigelToken.transfer(MasterChef.address, parseEther("10000000"))
    await rigelToken.transfer(SpecialPool.address, parseEther("10000000"))
    


    //   // Transfer 100 USDTToken tokens to investor
    await rigelToken.transfer(accounts[1], parseEther("1000000"))
    console.log('*************** START  ***************');
    console.log(rigelToken.address);
    console.log("Please, setup ganache network in your metamask")
    console.log("and import this address to your metamask address")
    console.log(accounts[0])
    console.log('*************** END  ***************');
}
