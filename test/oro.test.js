const { expectRevert, constants, expectEvent, time } = require('@openzeppelin/test-helpers');
const Unifarm = artifacts.require('Unifarm')
const TokenA = artifacts.require('TokenA')
const TokenB = artifacts.require('TokenB')
const TokenC = artifacts.require('TokenC')
const TokenD = artifacts.require('TokenD')
const TokenE = artifacts.require('TokenE')
const TokenF = artifacts.require('TokenF')


contract('Unifarm Contract Function feature', (accounts) => {
    const owner = accounts[0];
    const testAccount1 = accounts[3];
    const testAccount2 = accounts[4];
    const testAccount3 = accounts[5];
    const testAccount4 = accounts[6];
    const testAccount5 = accounts[7];
    const testAccount6 = accounts[8];
    const testAccount7 = accounts[9];
    const testAccount8 = accounts[1];
    const testAccount9 = accounts[2];



    before(async function () {

        this.Unifarm = await Unifarm.new();
        this.tokenA = await TokenA.new();
        this.tokenB = await TokenB.new();
        this.tokenC = await TokenC.new();
        this.tokenD = await TokenD.new();
        this.tokenE = await TokenE.new();
        this.tokenF = await TokenF.new();
        this.tmp = await TokenF.new();

        await this.tokenA.transfer(this.Unifarm.address, web3.utils.toWei('1000'))//web3.utils.toWei('1000'))
        await this.tokenB.transfer(this.Unifarm.address, web3.utils.toWei('1000'))//web3.utils.toWei('1000'))
        await this.tokenC.transfer(this.Unifarm.address, web3.utils.toWei('1000'))//web3.utils.toWei('1000'))
        await this.tokenD.transfer(this.Unifarm.address, web3.utils.toWei('1000'))//,web3.utils.toWei('1000'))
        await this.tokenE.transfer(this.Unifarm.address, web3.utils.toWei('1000'))//web3.utils.toWei('1000'))
        await this.tokenF.transfer(this.Unifarm.address, web3.utils.toWei('1000'))//web3.utils.toWei('1000'))

    })

    describe('stake and unstake feature', async function () {


        it('test token  transfer ', async function () {

            await this.tokenA.transfer(testAccount1, web3.utils.toWei('1000'))//web3.utils.toWei('1000'))
            await this.tokenA.transfer(testAccount2, web3.utils.toWei('1000'))//web3.utils.toWei('1000'))
            await this.tokenA.transfer(testAccount3, web3.utils.toWei('1000'))//web3.utils.toWei('1000'))
            await this.tokenA.transfer(testAccount4, web3.utils.toWei('1000'))//web3.utils.toWei('1000'))
            await this.tokenA.transfer(testAccount5, web3.utils.toWei('1000'))//web3.utils.toWei('1000'))
            await this.tokenA.transfer(testAccount6, web3.utils.toWei('1000'))//web3.utils.toWei('1000'))
            await this.tokenA.transfer(testAccount7, web3.utils.toWei('1000'))//web3.utils.toWei('1000'))
            await this.tokenA.transfer(testAccount8, web3.utils.toWei('1000'))//web3.utils.toWei('1000'))
            await this.tokenA.transfer(testAccount9, web3.utils.toWei('1000'))//web3.utils.toWei('1000'))

        })

        it("addToken ", async function () {

            await this.Unifarm.addToken(this.tokenA.address, web3.utils.toWei('10'), web3.utils.toWei('90'), 18);
            await this.Unifarm.addToken(this.tokenB.address, web3.utils.toWei('10'), web3.utils.toWei('90'), 18);
            await this.Unifarm.addToken(this.tokenC.address, web3.utils.toWei('10'), web3.utils.toWei('90'), 18);
            await this.Unifarm.addToken(this.tokenD.address, web3.utils.toWei('10'), web3.utils.toWei('90'), 18);
            await this.Unifarm.addToken(this.tokenE.address, web3.utils.toWei('10'), web3.utils.toWei('90'), 18);
            await this.Unifarm.addToken(this.tokenF.address, web3.utils.toWei('10'), web3.utils.toWei('90'), 18);


        })
        it("daily distribution", async function () {
            // await this.Unifarm.setDailyDistribution(this.tokenA.address, this.tokenA.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenA.address, this.tokenB.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenA.address, this.tokenC.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenA.address, this.tokenD.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenA.address, this.tokenE.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenA.address, this.tokenF.address, web3.utils.toWei('1'))

            // await this.Unifarm.setDailyDistribution(this.tokenB.address, this.tokenA.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenB.address, this.tokenB.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenB.address, this.tokenC.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenB.address, this.tokenD.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenB.address, this.tokenE.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenB.address, this.tokenF.address, web3.utils.toWei('1'))

            // await this.Unifarm.setDailyDistribution(this.tokenC.address, this.tokenA.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenC.address, this.tokenB.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenC.address, this.tokenC.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenC.address, this.tokenD.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenC.address, this.tokenE.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenC.address, this.tokenF.address, web3.utils.toWei('1'))

            // await this.Unifarm.setDailyDistribution(this.tokenD.address, this.tokenA.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenD.address, this.tokenB.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenD.address, this.tokenC.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenD.address, this.tokenD.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenD.address, this.tokenE.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenD.address, this.tokenF.address, web3.utils.toWei('1'))

            // await this.Unifarm.setDailyDistribution(this.tokenE.address, this.tokenA.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenE.address, this.tokenB.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenE.address, this.tokenC.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenE.address, this.tokenD.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenE.address, this.tokenE.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenE.address, this.tokenF.address, web3.utils.toWei('1'))

            // await this.Unifarm.setDailyDistribution(this.tokenF.address, this.tokenA.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenF.address, this.tokenB.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenF.address, this.tokenC.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenF.address, this.tokenD.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenF.address, this.tokenE.address, web3.utils.toWei('1'))
            // await this.Unifarm.setDailyDistribution(this.tokenF.address, this.tokenF.address, web3.utils.toWei('1'))

            await this.Unifarm.setDailyDistribution(
                [
                  this.tokenA.address,
                  this.tokenA.address,
                  this.tokenA.address,
                  this.tokenA.address,
                  this.tokenA.address,
                  this.tokenA.address,
                ],
                [
                  this.tokenA.address,
                  this.tokenB.address,
                  this.tokenC.address,
                  this.tokenD.address,
                  this.tokenE.address,
                  this.tokenF.address,
                ],
                [web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1")]
              );
          
              await this.Unifarm.setDailyDistribution(
                [
                  this.tokenB.address,
                  this.tokenB.address,
                  this.tokenB.address,
                  this.tokenB.address,
                  this.tokenB.address,
                  this.tokenB.address,
                ],
                [
                  this.tokenA.address,
                  this.tokenB.address,
                  this.tokenC.address,
                  this.tokenD.address,
                  this.tokenE.address,
                  this.tokenF.address,
                ],
                [web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1")]
              );
          
              await this.Unifarm.setDailyDistribution(
                [
                  this.tokenC.address,
                  this.tokenC.address,
                  this.tokenC.address,
                  this.tokenC.address,
                  this.tokenC.address,
                  this.tokenC.address,
                ],
                [
                  this.tokenA.address,
                  this.tokenB.address,
                  this.tokenC.address,
                  this.tokenD.address,
                  this.tokenE.address,
                  this.tokenF.address,
                ],
                [web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1")]
              );
          
              await this.Unifarm.setDailyDistribution(
                [
                  this.tokenD.address,
                  this.tokenD.address,
                  this.tokenD.address,
                  this.tokenD.address,
                  this.tokenD.address,
                  this.tokenD.address,
                ],
                [
                  this.tokenA.address,
                  this.tokenB.address,
                  this.tokenC.address,
                  this.tokenD.address,
                  this.tokenE.address,
                  this.tokenF.address,
                ],
                [web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1")]
              );
          
              await this.Unifarm.setDailyDistribution(
                [
                  this.tokenE.address,
                  this.tokenE.address,
                  this.tokenE.address,
                  this.tokenE.address,
                  this.tokenE.address,
                  this.tokenE.address,
                ],
                [
                  this.tokenA.address,
                  this.tokenB.address,
                  this.tokenC.address,
                  this.tokenD.address,
                  this.tokenE.address,
                  this.tokenF.address,
                ],
                [web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1")]
              );
          
              await this.Unifarm.setDailyDistribution(
                [
                  this.tokenF.address,
                  this.tokenF.address,
                  this.tokenF.address,
                  this.tokenF.address,
                  this.tokenF.address,
                  this.tokenF.address,
                ],
                [
                  this.tokenA.address,
                  this.tokenB.address,
                  this.tokenC.address,
                  this.tokenD.address,
                  this.tokenE.address,
                  this.tokenF.address,
                ],
                [web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1"),
                web3.utils.toWei("1")]
              );
        })

        it("updateSequence", async function () {
            await this.Unifarm.updateSequence(this.tokenA.address,
                [this.tokenA.address, this.tokenB.address, this.tokenC.address, this.tokenD.address, this.tokenE.address, this.tokenF.address])
            await this.Unifarm.updateSequence(this.tokenB.address,
                [this.tokenB.address, this.tokenA.address, this.tokenC.address, this.tokenD.address, this.tokenE.address, this.tokenF.address])
            await this.Unifarm.updateSequence(this.tokenC.address,
                [this.tokenC.address, this.tokenA.address, this.tokenB.address, this.tokenD.address, this.tokenE.address, this.tokenF.address])
            await this.Unifarm.updateSequence(this.tokenD.address,
                [this.tokenD.address, this.tokenA.address, this.tokenB.address, this.tokenC.address, this.tokenE.address, this.tokenF.address])
            await this.Unifarm.updateSequence(this.tokenE.address,
                [this.tokenE.address, this.tokenA.address, this.tokenB.address, this.tokenC.address, this.tokenD.address, this.tokenF.address])
            await this.Unifarm.updateSequence(this.tokenF.address,
                [this.tokenF.address, this.tokenA.address, this.tokenB.address, this.tokenC.address, this.tokenD.address, this.tokenE.address])

        })

    })


    describe('stake and unstake ', async function () {

        it("user1 staking A token", async function () {

            await this.tokenA.approve(this.Unifarm.address, web3.utils.toWei('100'), { from: testAccount1 })
            await this.tokenA.approve(this.Unifarm.address, web3.utils.toWei('100'), { from: testAccount2 })

            await this.Unifarm.stake(this.tokenA.address, web3.utils.toWei('10'), { from: testAccount1 })
            await this.Unifarm.stake(this.tokenA.address, web3.utils.toWei('10'), { from: testAccount1 })
            await this.Unifarm.stake(this.tokenA.address, web3.utils.toWei('10'), { from: testAccount1 })


        })

        it("user1 Unstaking A token", async function () {
            var user = testAccount1;
            await time.increase(time.duration.days(91));

            var stakeAmt = Number(10)


            var balA = web3.utils.fromWei((await this.tokenA.balanceOf(user)).toString())
            var balB = web3.utils.fromWei((await this.tokenB.balanceOf(user)).toString())
            var balC = web3.utils.fromWei((await this.tokenC.balanceOf(user)).toString())
            var balD = web3.utils.fromWei((await this.tokenD.balanceOf(user)).toString())
            var balE = web3.utils.fromWei((await this.tokenE.balanceOf(user)).toString())
            var balF = web3.utils.fromWei((await this.tokenF.balanceOf(user)).toString())
            console.log("B: ", balA, balB, balC, balD, balE, balF)


            await this.Unifarm.unStake('0', { from: user })



            var balA1 = (web3.utils.fromWei((await this.tokenA.balanceOf(user)).toString()))
            var balB1 = web3.utils.fromWei((await this.tokenB.balanceOf(user)).toString())
            var balC1 = web3.utils.fromWei((await this.tokenC.balanceOf(user)).toString())
            var balD1 = web3.utils.fromWei((await this.tokenD.balanceOf(user)).toString())
            var balE1 = web3.utils.fromWei((await this.tokenE.balanceOf(user)).toString())
            var balF1 = web3.utils.fromWei((await this.tokenF.balanceOf(user)).toString())

            // console.log("A: ", balA1, balB1, balC1, balD1, balE1, balF1)


            expect(((Number(balA) + Number(2 * (90 * (stakeAmt * 1 / 90)))).toFixed(2))).to.equal((Number(balA1)).toFixed(2));
            expect(((Number(balB) + Number((83 * (stakeAmt * 1 / 90)))).toFixed(2))).to.equal((Number(balB1)).toFixed(2));
            expect(((Number(balC) + Number((76 * (stakeAmt * 1 / 90)))).toFixed(2))).to.equal((Number(balC1)).toFixed(2));
            expect(((Number(balD) + Number((69 * (stakeAmt * 1 / 90)))).toFixed(2))).to.equal((Number(balD1)).toFixed(2));
            expect(((Number(balE) + Number((62 * (stakeAmt * 1 / 90)))).toFixed(2))).to.equal((Number(balE1)).toFixed(2));
            expect(((Number(balF) + Number((55 * (stakeAmt * 1 / 90)))).toFixed(2))).to.equal((Number(balF1)).toFixed(2));










        })
        it("user1 Unstaking A token", async function () {
            var user = testAccount1;
            await time.increase(time.duration.days(91));

            var stakeAmt = Number(10)

            var balA = web3.utils.fromWei((await this.tokenA.balanceOf(user)).toString())
            var balB = web3.utils.fromWei((await this.tokenB.balanceOf(user)).toString())
            var balC = web3.utils.fromWei((await this.tokenC.balanceOf(user)).toString())
            var balD = web3.utils.fromWei((await this.tokenD.balanceOf(user)).toString())
            var balE = web3.utils.fromWei((await this.tokenE.balanceOf(user)).toString())
            var balF = web3.utils.fromWei((await this.tokenF.balanceOf(user)).toString())

            await this.Unifarm.unStake('2', { from: user })

            var balA1 = (web3.utils.fromWei((await this.tokenA.balanceOf(user)).toString()))
            var balB1 = web3.utils.fromWei((await this.tokenB.balanceOf(user)).toString())
            var balC1 = web3.utils.fromWei((await this.tokenC.balanceOf(user)).toString())
            var balD1 = web3.utils.fromWei((await this.tokenD.balanceOf(user)).toString())
            var balE1 = web3.utils.fromWei((await this.tokenE.balanceOf(user)).toString())
            var balF1 = web3.utils.fromWei((await this.tokenF.balanceOf(user)).toString())


            expect(((Number(balA) + Number(2 * (90 * (stakeAmt * 1 / 90)))).toFixed(2))).to.equal((Number(balA1)).toFixed(2));
            expect(((Number(balB) + Number((83 * (stakeAmt * 1 / 90)))).toFixed(2))).to.equal((Number(balB1)).toFixed(2));
            expect(((Number(balC) + Number((76 * (stakeAmt * 1 / 90)))).toFixed(2))).to.equal((Number(balC1)).toFixed(2));
            expect(((Number(balD) + Number((69 * (stakeAmt * 1 / 90)))).toFixed(2))).to.equal((Number(balD1)).toFixed(2));
            expect(((Number(balE) + Number((62 * (stakeAmt * 1 / 90)))).toFixed(2))).to.equal((Number(balE1)).toFixed(2));
            expect(((Number(balF) + Number((55 * (stakeAmt * 1 / 90)))).toFixed(2))).to.equal((Number(balF1)).toFixed(2));

        })

        //stake revert

        it("revert if staking token not exist", async function () {

            expectRevert(this.Unifarm.stake(this.tmp.address, 100, { from: testAccount1 }), "STAKE : Token is not Exist");
        })
        it("revert if staking token amount exist user max limit", async function () {

            expectRevert(this.Unifarm.stake(this.tokenA.address, 100, { from: testAccount1 }), "STAKE : Amount should be within permit");
        })

    })

})