const { expectRevert, constants, expectEvent, time } = require('@openzeppelin/test-helpers');
const Unifarm = artifacts.require('Unifarm')
const TokenA = artifacts.require('TokenA')
// const TokenB = artifacts.require('TokenB')
// const TokenC = artifacts.require('TokenC')
// const TokenD = artifacts.require('TokenD')
// const TokenE = artifacts.require('TokenE')
// const TokenF = artifacts.require('TokenF')




contract('Unifarm Contract Function feature', (accounts) => {
    const owner = accounts[0];
    const testAccount1 = accounts[3];




    before(async function () {

        this.Unifarm = await Unifarm.new();
        this.tokenA = await TokenA.new();
        this.tokenB = await TokenA.new();
        this.tokenC = await TokenA.new();
        this.tokenD = await TokenA.new();
        this.tokenE = await TokenA.new();
        this.tokenF = await TokenA.new();
        this.tmp = await TokenA.new();

        await this.tokenA.transfer(this.Unifarm.address, 1000)//web3.utils.toWei('1000'))
        await this.tokenB.transfer(this.Unifarm.address, 1000)//web3.utils.toWei('1000'))
        await this.tokenC.transfer(this.Unifarm.address, 1000)//web3.utils.toWei('1000'))
        await this.tokenD.transfer(this.Unifarm.address, 1000)//,web3.utils.toWei('1000'))
        await this.tokenE.transfer(this.Unifarm.address, 1000)//web3.utils.toWei('1000'))
        await this.tokenF.transfer(this.Unifarm.address, 1000)//web3.utils.toWei('1000'))

    })

    describe('addToken feature', async function () {


        it('revert if non owner try to set addToken ', async function () {

            expectRevert(this.Unifarm.addToken(this.tokenA.address, web3.utils.toWei('10'), web3.utils.toWei('90'), 18, { from: testAccount1 }), "Ownable: caller is not the owner")

        })


        // it('revert if non owner try to set setDailyDistribution ', async function () {

        //     expectRevert(this.Unifarm.setDailyDistribution(this.tokenA.address, this.tokenA.address, web3.utils.toWei('10'), { from: testAccount1 }), "Ownable: caller is not the owner")

        // })

        // it('revert if owner try to set setDailyDistribution for not exist token ', async function () {

        //     expectRevert(this.Unifarm.setDailyDistribution(this.tokenA.address, this.tokenA.address, web3.utils.toWei('10'), { from: owner }), "Token not exist")

        // })

        it('revert if non owner try to set updateToken ', async function () {

            expectRevert(this.Unifarm.updateToken(this.tokenA.address, web3.utils.toWei('10'), 18, { from: testAccount1 }), "Ownable: caller is not the owner")

        })

        it('revert if owner try to set updateToken for not exist token ', async function () {

            expectRevert(this.Unifarm.updateToken(this.tokenA.address, web3.utils.toWei('10'), 18, { from: owner }), "Token Not Exist")

        })

        it('revert if non owner try to set updateStakeDuration ', async function () {

            expectRevert(this.Unifarm.updateStakeDuration(18, { from: testAccount1 }), "Ownable: caller is not the owner")

        })

        it('revert if non owner try to set updateIntervalDays ', async function () {

            expectRevert(this.Unifarm.updateIntervalDays([18, 10, 10], { from: testAccount1 }), "Ownable: caller is not the owner")
        })
        it('revert if non owner try to set changeTokenBlockedStatus ', async function () {

            expectRevert(this.Unifarm.changeTokenBlockedStatus(this.tokenA.address, this.tokenA.address, true, { from: testAccount1 }), "Ownable: caller is not the owner")
        })
        it('revert if owner try to set changeTokenBlockedStatus for not exist token ', async function () {

            expectRevert(this.Unifarm.changeTokenBlockedStatus(this.tokenA.address, this.tokenA.address, true, { from: owner }), "Token not exist")
        })
        it('revert if non owner try to  safeWithdraw ', async function () {

            expectRevert(this.Unifarm.safeWithdraw(this.tokenA.address, 10, { from: testAccount1 }), "Ownable: caller is not the owner")
        })
        it('revert if contract has Insufficient Balance owner try to safeWithdraw ', async function () {

            expectRevert(this.Unifarm.safeWithdraw(this.tokenA.address, 10, { from: owner }), "Insufficient Balance")
        })

    })




})