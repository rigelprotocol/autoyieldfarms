const {
  expectRevert,
  constants,
  expectEvent,
  time,
} = require("@openzeppelin/test-helpers");
const Unifarm = artifacts.require("UnifarmV2");
const TokenA = artifacts.require("TokenA");

contract("Unifarm Contract Function feature", (accounts) => {
  const owner = accounts[0];
  const testAccount1 = accounts[3];
  const testAccount2 = accounts[4];
  const testAccount3 = accounts[5];
  const val = 1000;

  before(async function() {
    this.Unifarm = await Unifarm.new(owner);
    this.tokenA = await TokenA.new();
    this.tokenB = await TokenA.new();
    this.tokenC = await TokenA.new();
    this.tokenD = await TokenA.new();
    this.tokenE = await TokenA.new();
    this.tokenF = await TokenA.new();
    this.tmp = await TokenA.new();

    //await this.tokenA.transfer(this.Unifarm.address, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenB.transfer(this.Unifarm.address, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenC.transfer(this.Unifarm.address, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenD.transfer(this.Unifarm.address, web3.utils.toWei("1000")); //,web3.utils.toWei('1000'))
    await this.tokenE.transfer(this.Unifarm.address, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenF.transfer(this.Unifarm.address, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
  });

  it("test token  transfer ", async function() {
    await this.tokenA.transfer(testAccount1, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenA.transfer(testAccount2, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenA.transfer(testAccount3, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))

    await this.tokenB.transfer(testAccount1, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenB.transfer(testAccount2, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenB.transfer(testAccount3, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))

    await this.tokenC.transfer(testAccount1, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenC.transfer(testAccount2, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenC.transfer(testAccount3, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
  });
  it("test token  transfer ", async function() {
    await this.tokenD.transfer(testAccount1, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenD.transfer(testAccount2, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenD.transfer(testAccount3, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))

    await this.tokenE.transfer(testAccount1, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenE.transfer(testAccount2, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenE.transfer(testAccount3, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))

    await this.tokenF.transfer(testAccount1, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenF.transfer(testAccount2, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
    await this.tokenF.transfer(testAccount3, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))


    await this.tmp.transfer(testAccount1, web3.utils.toWei("1000")); //web3.utils.toWei('1000'))
  });

  //addToken
  describe("addToken Feature", async function() {
    it("revert if non owner try to set addToken ", async function() {
      expectRevert(
        this.Unifarm.addToken(
          this.tokenA.address,
          web3.utils.toWei("10"),
          web3.utils.toWei("90"),
          18,
          false,
          { from: testAccount1 }
        ),
        "Ownable: caller is not the owner"
      );
    });

    it("add the Token A Details by Owner", async function() {
      await this.Unifarm.addToken(
        this.tokenA.address,
        web3.utils.toWei("10"),
        web3.utils.toWei("90"),
        18,
        false
      );
    });

    it("add the Token B Details by Owner", async function() {
      await this.Unifarm.addToken(
        this.tokenB.address,
        web3.utils.toWei("10"),
        web3.utils.toWei("90"),
        18,
        false
      );
    });

    it("add the Token C Details by Owner", async function() {
      await this.Unifarm.addToken(
        this.tokenC.address,
        web3.utils.toWei("10"),
        web3.utils.toWei("90"),
        18,
        false
      );
    });

    it("add the Token D Details by Owner", async function() {
      await this.Unifarm.addToken(
        this.tokenD.address,
        web3.utils.toWei("10"),
        web3.utils.toWei("90"),
        18,
        false
      );
    });

    it("add the Token E Details by Owner", async function() {
      await this.Unifarm.addToken(
        this.tokenE.address,
        web3.utils.toWei("10"),
        web3.utils.toWei("90"),
        18,
        false
      );
    });
  });

  // updateToken
  describe("updateToken Feature", async function() {
    it("revert if non owner try to update the token details ", async function() {
      expectRevert(
        this.Unifarm.updateToken(
          this.tokenF.address,
          web3.utils.toWei("10"),
          web3.utils.toWei("90"),
          false,
          { from: testAccount1 }
        ),
        "Ownable: caller is not the owner"
      );
    });

    it("revert if owner try to set update the token for not exist token ", async function() {
      expectRevert(
        this.Unifarm.updateToken(
          this.tokenF.address,
          web3.utils.toWei("10"),
          web3.utils.toWei("10"),
          false,
          { from: owner }
        ),
        "Token Not Exist"
      );
    });

    it("update the Token A Details by Owner", async function() {
      await this.Unifarm.updateToken(
        this.tokenA.address,
        web3.utils.toWei("10"),
        web3.utils.toWei("90"),
        false
      );
    });

    it("update the Token D Details by Owner", async function() {
      await this.Unifarm.updateToken(
        this.tokenD.address,
        web3.utils.toWei("10"),
        web3.utils.toWei("90"),
        false
      );
    });

    it("add the Token F Details by Owner", async function() {
      await this.Unifarm.addToken(
        this.tokenF.address,
        web3.utils.toWei("10"),
        web3.utils.toWei("90"),
        18,
        false
      );
    });

    it("update the Token F Details by Owner", async function() {
      await this.Unifarm.updateToken(
        this.tokenF.address,
        web3.utils.toWei("10"),
        web3.utils.toWei("90"),
        true
      );
    });
  });

  //setDailyDistribution
  describe("setDailyDistribution Feature", async function() {
    it("revert if non owner try to set setDailyDistribution ", async function() {
      expectRevert(
        this.Unifarm.setDailyDistribution(
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
          [
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
          ],

          { from: testAccount1 }
        ),
        "Ownable: caller is not the owner"
      );
    });

    it("revert if owner try to set setDailyDistribution for not exist token ", async function() {
      expectRevert(
        this.Unifarm.setDailyDistribution(
          [
            this.tmp.address,
            this.tmp.address,
            this.tmp.address,
            this.tmp.address,
            this.tmp.address,
            this.tmp.address,
          ],
          [
            this.tokenA.address,
            this.tokenB.address,
            this.tokenC.address,
            this.tokenD.address,
            this.tokenE.address,
            this.tokenF.address,
          ],
          [
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
          ],

          { from: owner }
        ),
        "Token not exist"
      );
    });

    it("revert if owner try to set setDailyDistribution for invalid index", async function() {
      expectRevert(
        this.Unifarm.setDailyDistribution(
          [
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
          [
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
            web3.utils.toWei("1"),
          ],

          { from: owner }
        ),
        "Invalid Input"
      );
    });

    it("set the daily distribution for tokenA (staked) by owner", async function() {
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
        [
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
        ]
      );
    });

    it("set the daily distribution for tokenB (staked) by owner", async function() {
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
        [
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
        ]
      );
    });

    it("set the daily distribution for tokenC (staked) by owner", async function() {
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
        [
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
        ]
      );
    });

    it("set the daily distribution for tokenD (staked) by owner", async function() {
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
        [
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
        ]
      );
    });

    it("set the daily distribution for tokenE (staked) by owner", async function() {
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
        [
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
        ]
      );
    });

    it("set the daily distribution for tokenF (staked) by owner", async function() {
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
        [
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
          web3.utils.toWei("1"),
        ]
      );
    });
  });

  // updateSequence
  describe("updateSequence Feature", async function() {
    it("revert if non owner try to set updateSequence ", async function() {
      expectRevert(
        this.Unifarm.updateSequence(
          this.tokenA.address,
          [
            this.tokenA.address,
            this.tokenB.address,
            this.tokenC.address,
            this.tokenD.address,
            this.tokenE.address,
            this.tokenF.address,
          ],

          { from: testAccount1 }
        ),
        "Ownable: caller is not the owner"
      );
    });

    it("revert if owner try to set updateSequence for not exist token ", async function() {
      expectRevert(
        this.Unifarm.updateSequence(
          this.tmp.address,

          [
            this.tokenA.address,
            this.tokenB.address,
            this.tokenC.address,
            this.tokenD.address,
            this.tokenE.address,
            this.tokenF.address,
          ],

          { from: owner }
        ),
        "Staked Token Not Exist"
      );
    });

    it("revert if owner try to set updateSequence for invalid index", async function() {
      expectRevert(
        this.Unifarm.updateSequence(
          this.tokenA.address,
          [
            this.tokenA.address,
            this.tokenB.address,
            this.tokenC.address,
            this.tokenD.address,
            this.tokenE.address,
            this.tokenF.address,
            this.tokenF.address,
            this.tokenF.address,
            this.tokenF.address,
            this.tokenF.address,
          ],

          { from: owner }
        ),
        "Invalid Input"
      );
    });

    it("set the sequence for tokenA (staked) by owner", async function() {
      await this.Unifarm.updateSequence(this.tokenA.address, [
        this.tokenA.address,
        this.tokenB.address,
        this.tokenC.address,
        this.tokenD.address,
        this.tokenE.address,
        this.tokenF.address,
      ]);
    });

    it("set the sequence for tokenB (staked) by owner", async function() {
      await this.Unifarm.updateSequence(this.tokenB.address, [
        this.tokenB.address,
        this.tokenA.address,        
        this.tokenC.address,
        this.tokenD.address,
        this.tokenE.address,
        this.tokenF.address,
      ]);
    });

    it("set the sequence for tokenC (staked) by owner", async function() {
      await this.Unifarm.updateSequence(this.tokenC.address, [
        this.tokenC.address,
        this.tokenA.address,
        this.tokenB.address,        
        this.tokenD.address,
        this.tokenE.address,
        this.tokenF.address,
      ]);
    });

    it("set the sequence for tokenD (staked) by owner", async function() {
      await this.Unifarm.updateSequence(
        this.tokenD.address,

        [
          this.tokenD.address,
          this.tokenA.address,
          this.tokenB.address,
          this.tokenC.address,          
          this.tokenE.address,
          this.tokenF.address,
        ]
      );
    });

    it("set the sequencefor tokenE (staked) by owner", async function() {
      await this.Unifarm.updateSequence(this.tokenE.address, [
        this.tokenE.address,
        this.tokenA.address,
        this.tokenB.address,
        this.tokenC.address,
        this.tokenD.address,        
        this.tokenF.address,
      ]);
    });

    it("set the sequence for tokenF (staked) by owner", async function() {
      await this.Unifarm.updateSequence(this.tokenF.address, [
        this.tokenF.address,
        this.tokenA.address,
        this.tokenB.address,
        this.tokenC.address,
        this.tokenD.address,
        this.tokenE.address,       
      ]);
    });
  });

  //updateWhiteListStatus
  describe("updateWhiteListStatus Feature", async function() {
    it("revert if non owner try to set updateWhiteListStatus ", async function() {
      expectRevert(
        this.Unifarm.updateWhiteListStatus(
          [
            this.tokenA.address,
            this.tokenB.address,
            this.tokenC.address,
            this.tokenD.address,
            this.tokenE.address,
            this.tokenF.address,
          ],
          [true, true, true, false, false, true],

          { from: testAccount1 }
        ),
        "Ownable: caller is not the owner"
      );
    });

    it("revert if owner try to give invalid input ", async function() {
      expectRevert(
        this.Unifarm.updateWhiteListStatus(
          [
            this.tokenA.address,
            this.tokenB.address,
            this.tokenC.address,
            this.tokenD.address,
            this.tokenE.address,
          ],
          [true, true, true, false, false, true],

          { from: owner }
        ),
        "Invalid Input"
      );
    });

    it("set the tokenA and tokenC as whitelist", async function() {
      await this.Unifarm.updateWhiteListStatus(
        [
          this.tokenA.address,
          this.tokenB.address,
          this.tokenC.address,
          this.tokenD.address,
          this.tokenE.address,
          this.tokenF.address,
        ],
        [true, false, true, false, false, false]
      );
    });

    it("check token A is in whitelist", async function() {
      var tokenAStatus = await this.Unifarm.whiteList(this.tokenA.address);

      expect(true).to.equal(tokenAStatus);
    });

    it("check token C is in whitelist", async function() {
      var tokenCStatus = await this.Unifarm.whiteList(this.tokenC.address);

      expect(true).to.equal(tokenCStatus);
    });
  });

  // lockableToken
  describe("lockableToken Feature", async function() {
    it("revert if non owner try to set lockableToken ", async function() {
      expectRevert(
        this.Unifarm.lockableToken(this.tokenA.address, 1, 2, "false", {
          from: testAccount1,
        }),
        "Ownable: caller is not the owner"
      );
    });

    it("revert if owner try to set lockableToken with invalid lockable status", async function() {
      expectRevert(
        this.Unifarm.lockableToken(this.tokenA.address, 4, 2, "false", {
          from: owner,
        }),
        "Invalid Lockable Status"
      );
    });
    it("revert if owner try to set lockableToken with invalid token", async function() {
      expectRevert(
        this.Unifarm.lockableToken(this.tmp.address, 1, 2, "false", {
          from: owner,
        }),
        "Token Not Exist"
      );
    });

    it("owner lock the token A for 30 days", async function() {
      await this.Unifarm.lockableToken(
        this.tokenA.address,
        1,
        30 * 86400,
        "false"
      );
    });

    it("check token A is locked for 30 days whitelist", async function() {
      var tokenADetails = await this.Unifarm.tokenDetails(this.tokenA.address);
      var contractStoredLockedTime = tokenADetails.lockableDays.toNumber();
      var currentTime = await time.latest();
      //increase(time.duration.days(91))
      //console.log(endTime.toNumber(), endTime.toNumber() + (86400 * 30) , tokenADetails.lockableDays.toNumber());
      expect(currentTime.toNumber() + 86400 * 30).to.equal(
        contractStoredLockedTime
      );
    });

    it("owner unlock the token A", async function() {
      await this.Unifarm.lockableToken(this.tokenA.address, 2, 0, "false");
    });

    it("check token A is unlocked", async function() {
      var tokenADetails = await this.Unifarm.tokenDetails(this.tokenA.address);
      var contractStoredLockedTime = tokenADetails.lockableDays.toNumber();
      expect(0).to.equal(contractStoredLockedTime);
    });

    it("owner set optionable Status as true for the token A", async function() {
      await this.Unifarm.lockableToken(this.tokenA.address, 3, 0, "true");
    });

    it("check token A's optionable status  is true", async function() {
      var tokenADetails = await this.Unifarm.tokenDetails(this.tokenA.address);
      var contractStoredOptionableStatus = tokenADetails.optionableStatus;
      expect(true).to.equal(contractStoredOptionableStatus);
    });
  });

  //updateStakeDuration
  describe("updateStakeDuration Feature", async function() {
    it("revert if non owner try to set updateStakeDuration ", async function() {
      expectRevert(
        this.Unifarm.updateStakeDuration(86400 * 95, { from: testAccount1 }),
        "Ownable: caller is not the owner"
      );
    });

    it("set the duration days as 95 days", async function() {
      await this.Unifarm.updateStakeDuration(86400 * 95);
    });

    it("check staked duration is 95 days", async function() {
      var stakedDuration = await this.Unifarm.stakeDuration();
      var Duration = stakedDuration.toNumber();
      expect(86400 * 95).to.equal(Duration);
    });

    it("set the duration days as 90 days - Original", async function() {
      await this.Unifarm.updateStakeDuration(86400 * 90);
    });

  });

  //updateRefPercentage
  describe("updateRefPercentage Feature", async function() {
    it("revert if non owner try to set updateRefPercentage ", async function() {
      expectRevert(
        this.Unifarm.updateRefPercentage(web3.utils.toWei("100"), {
          from: testAccount1,
        }),
        "Ownable: caller is not the owner"
      );
    });

    it("owner update the refePercentage to 10%", async function() {
      await this.Unifarm.updateRefPercentage(web3.utils.toWei("10"));
    });

    it("check refPercentage is 10", async function() {
      var refPercentage = await this.Unifarm.refPercentage();
      var Perc = refPercentage.toString();
      expect(web3.utils.toWei("10")).to.equal(Perc);
    });
  });

  //updateIntervalDays
  describe("updateIntervalDays Feature", async function() {
    it("revert if non owner try to set updateIntervalDays ", async function() {
      expectRevert(
        this.Unifarm.updateIntervalDays([1, 8, 25, 29, 36, 48], {
          from: testAccount1,
        }),
        "Ownable: caller is not the owner"
      );
    });

    it("revert if owner try to set updateIntervalDays with invalid day ", async function() {
      expectRevert(
        this.Unifarm.updateIntervalDays([1, 8, 25, 29, 36, 98], {
          from: owner,
        }),
        "Invalid Interval Day"
      );
    });

    it("set the interval days", async function() {
      await this.Unifarm.updateIntervalDays([1, 8, 25, 29, 36, 48]);
    });

    it("check interval days is updated", async function() {
      var intervalDays = await this.Unifarm.intervalDays(0);
      var Duration = intervalDays.toNumber();
      expect(1).to.equal(Duration);

      var intervalDays = await this.Unifarm.intervalDays(5);
      var Duration = intervalDays.toNumber();
      expect(48).to.equal(Duration);
    });


    it("set the interval days original", async function() {
      await this.Unifarm.updateIntervalDays( [1, 8, 15, 22, 29, 36]);
    });

  });

  //SafeWithdraw
  describe("safeWithdraw Feature", async function() {
    it("revert if non owner try to  safeWithdraw ", async function() {
      expectRevert(
        this.Unifarm.safeWithdraw(this.tokenA.address, 10, {
          from: testAccount1,
        }),
        "Ownable: caller is not the owner"
      );
    });

    it("revert if contract has Insufficient Balance owner try to safeWithdraw ", async function() {
      expectRevert(
        this.Unifarm.safeWithdraw(this.tokenA.address, 10, { from: owner }),
        "Insufficient Balance"
      );
    });

    it("token balance check", async function() {
      var contractbalBefore = web3.utils.fromWei(
        (await this.tokenA.balanceOf(this.Unifarm.address)).toString()
      );

      console.log("Contract Before: ", contractbalBefore);
    });

    it("token A transferred to Contract", async function() {
      await this.tokenA.transfer(
        this.Unifarm.address,
        web3.utils.toWei("1000")
      ); //web3.utils.toWei('1000'))
    });

    it("token A transferred to Owner", async function() {
      await this.Unifarm.safeWithdraw(
        this.tokenA.address,
        web3.utils.toWei("1")
      );
    });

    it("token balance check", async function() {
      var contractbalAfter = web3.utils.fromWei(
        (await this.tokenA.balanceOf(this.Unifarm.address)).toString()
      );

      console.log("Contract After: ", contractbalAfter);
    });
  });



   //stakeToken
  describe("stakeToken Feature", async function() {

      it("revert if user try to stake  without approval", async function() {
        expectRevert(
          this.Unifarm.stake(owner, this.tokenB.address, web3.utils.toWei("10"), {
            from: testAccount1,
          }),
          "Insufficient Allowance"
        );
      });


      it("revert if user try to stake  exceed amount", async function() {

        await this.tokenB.approve(this.Unifarm.address, web3.utils.toWei("100"), {
          from: testAccount1,
        });


        expectRevert(
          this.Unifarm.stake(owner, this.tokenB.address, web3.utils.toWei("10000"), {
            from: testAccount1,
          }),
          "STAKE : Maxlimit exceeds"
        );
      });

      it("revert if user try to stake other token", async function() {

        await this.tmp.approve(this.Unifarm.address, web3.utils.toWei("100"), {
          from: testAccount1,
        });


        expectRevert(
          this.Unifarm.stake(owner, this.tmp.address, web3.utils.toWei("10000"), {
            from: testAccount1,
          }),
          "STAKE : Token is not Exist"
        );
      });  


      it("revert if user try to stake whitelist token", async function() {

        await this.tokenA.approve(this.Unifarm.address, web3.utils.toWei("100"), {
          from: testAccount1,
        });


        expectRevert(
          this.Unifarm.stake(owner, this.tokenA.address, web3.utils.toWei("10"), {
            from: testAccount1,
          }),
          "STAKE: Only WhiteList Allowed"
        );
      });  



      it("user1 staking B token", async function () {
        const user = testAccount1;

        var userbalBefore = web3.utils.fromWei(
          (await this.tokenB.balanceOf(user)).toString()
        );

       
    
        await this.tokenB.approve(this.Unifarm.address, web3.utils.toWei("100"), {
          from: testAccount1,
        });
    
        
        var contractbalBefore = web3.utils.fromWei(
          (await this.tokenB.balanceOf(this.Unifarm.address)).toString()
        );

        console.log("userBal Before: ", userbalBefore, "contractBal Before: ", contractbalBefore);
    
        await this.Unifarm.stake(owner, this.tokenB.address, web3.utils.toWei("10"), {
          from: testAccount1,
        });
       
    
        var userbalAfter = web3.utils.fromWei(
          (await this.tokenB.balanceOf(user)).toString()
        );
        var contractbalAfter = web3.utils.fromWei(
          (await this.tokenB.balanceOf(this.Unifarm.address)).toString()
        );

        console.log("userBal After: ", userbalAfter, "contractBal After: ", contractbalAfter);
    
        expect(Number(userbalAfter) + Number(10)).to.equal(Number(userbalBefore));
        expect(Number(contractbalBefore) + Number(10)).to.equal(Number(contractbalAfter));

      });
  

  })

   //UnstakeToken
   describe("UnstakeToken Feature", async function() {


    // it("revert if user try to unstake with invalid id", async function() {  
    //   await time.increase(time.duration.days(100));
    //   expectRevert(
    //     await this.Unifarm.unStake("1", { from: testAccount2 }),
    //     "CLAIM : Insufficient Staked Amount"
    //   );
    // });  

    it("user1 unstaking B token", async function () {
        var user = testAccount1;
        await time.increase(time.duration.days(100));
    
        var stakeAmt = web3.utils.toWei("10");

        var ObalA = web3.utils.fromWei(
          (await this.tokenA.balanceOf(owner)).toString()
        );

        var ObalB = web3.utils.fromWei(
          (await this.tokenB.balanceOf(owner)).toString()
        );

        var ObalC = web3.utils.fromWei(
          (await this.tokenC.balanceOf(user)).toString()
        );
        var ObalD = web3.utils.fromWei(
          (await this.tokenD.balanceOf(user)).toString()
        );
        var ObalE = web3.utils.fromWei(
          (await this.tokenE.balanceOf(user)).toString()
        );
        var ObalF = web3.utils.fromWei(
          (await this.tokenF.balanceOf(user)).toString()
        );
    
        var balA = web3.utils.fromWei(
          (await this.tokenA.balanceOf(user)).toString()
        );
        var balB = web3.utils.fromWei(
          (await this.tokenB.balanceOf(user)).toString()
        );
        var balC = web3.utils.fromWei(
          (await this.tokenC.balanceOf(user)).toString()
        );
        var balD = web3.utils.fromWei(
          (await this.tokenD.balanceOf(user)).toString()
        );
        var balE = web3.utils.fromWei(
          (await this.tokenE.balanceOf(user)).toString()
        );
        var balF = web3.utils.fromWei(
          (await this.tokenF.balanceOf(user)).toString()
        );
    
        await this.Unifarm.unStake("0", { from: user });

        var ObalA1 = web3.utils.fromWei(
          (await this.tokenA.balanceOf(owner)).toString()
        );

        var ObalB1 = web3.utils.fromWei(
          (await this.tokenB.balanceOf(owner)).toString()
        );

        var ObalC1 = web3.utils.fromWei(
          (await this.tokenC.balanceOf(user)).toString()
        );
        var ObalD1 = web3.utils.fromWei(
          (await this.tokenD.balanceOf(user)).toString()
        );
        var ObalE1 = web3.utils.fromWei(
          (await this.tokenE.balanceOf(user)).toString()
        );
        var ObalF1 = web3.utils.fromWei(
          (await this.tokenF.balanceOf(user)).toString()
        );


    
        var balA1 = web3.utils.fromWei(
          (await this.tokenA.balanceOf(user)).toString()
        );
        var balB1 = web3.utils.fromWei(
          (await this.tokenB.balanceOf(user)).toString()
        );
        var balC1 = web3.utils.fromWei(
          (await this.tokenC.balanceOf(user)).toString()
        );
        var balD1 = web3.utils.fromWei(
          (await this.tokenD.balanceOf(user)).toString()
        );
        var balE1 = web3.utils.fromWei(
          (await this.tokenE.balanceOf(user)).toString()
        );
        var balF1 = web3.utils.fromWei(
          (await this.tokenF.balanceOf(user)).toString()
        );
    
        var cA1 = web3.utils.fromWei(
          (await this.tokenA.balanceOf(this.Unifarm.address)).toString()
        );
        var cB1 = web3.utils.fromWei(
          (await this.tokenB.balanceOf(this.Unifarm.address)).toString()
        );
        var cC1 = web3.utils.fromWei(
          (await this.tokenC.balanceOf(this.Unifarm.address)).toString()
        );
        var cD1 = web3.utils.fromWei(
          (await this.tokenD.balanceOf(this.Unifarm.address)).toString()
        );
        var cE1 = web3.utils.fromWei(
          (await this.tokenE.balanceOf(this.Unifarm.address)).toString()
        );
        var cF1 = web3.utils.fromWei(
          (await this.tokenF.balanceOf(this.Unifarm.address)).toString()
        );

        // console.log("Owner Token A:", ObalA, ObalA1);
        // console.log("Owner Token B:", ObalB, ObalB1);
        // console.log("Owner Token C:", ObalC, ObalC1);
        // console.log("Owner Token D:", ObalD, ObalD1);
        // console.log("Owner Token E:", ObalE, ObalE1);
        // console.log("Owner Token F:", ObalF, ObalF1);
        
        // console.log("User Token A:", balA, balA1);
        // console.log("User Token B:", balB, balB1);
        // console.log("User Token C:", balC, balC1);
        // console.log("User Token D:", balD, balD1);
        // console.log("User Token E:", balE, balE1);
        // console.log("User Token F:", balF, balF1);


        // console.log("Token A Contract:", cA1);
        // console.log("Token B Contract:", cB1);
        // console.log("Token C Contract:", cC1);
        // console.log("Token D Contract:", cD1);
        // console.log("Token E Contract:", cE1);
        // console.log("Token F Contract:", cF1);

        
        // var refPercentage = Number(((91 * ((stakeAmt *  web3.utils.toWei("1"))/ web3.utils.toWei("90"))) * web3.utils.toWei("10"))/ web3.utils.toWei("100"))//((Number(91 * ((stakeAmt * 1) / 90)).toFixed(2)) * 10)/100;

        // console.log(Number(ObalB)+ refPercentage, Number(ObalB1));

        // console.log((Number(balB)+ (Number(91 * ((stakeAmt * 1) / 90)).toFixed(2))) , balB1);
        
        // expect(
        //   (Number(balB) + refPercentage.to.equal(Number(balB1).toFixed(2))));

        // expect(
        //   (Number(balA) + Number(2 * (83 * ((stakeAmt * 1) / 90)))).toFixed(2)
        // ).to.equal(Number(balA1).toFixed(2));
        // expect(
        //   (Number(balC) + Number(76 * ((stakeAmt * 1) / 90))).toFixed(2)
        // ).to.equal(Number(balC1).toFixed(2));
        // expect(
        //   (Number(balD) + Number(69 * ((stakeAmt * 1) / 90))).toFixed(2)
        // ).to.equal(Number(balD1).toFixed(2));
        // expect(
        //   (Number(balE) + Number(62 * ((stakeAmt * 1) / 90))).toFixed(2)
        // ).to.equal(Number(balE1).toFixed(2));
        // expect(
        //   (Number(balF) + Number(55 * ((stakeAmt * 1) / 90))).toFixed(2)
        // ).to.equal(Number(balF1).toFixed(2));
    
        // expect(Number(val) + Number(1 * (90 * ((stakeAmt * 1) / 90)))).to.equal(
        //   Number(cA1)
        // );
        // expect(Number(val) - Number(83 * ((stakeAmt * 1) / 90))).to.equal(
        //   Number(cB1)
        // );
        // expect(Number(val) - Number(76 * ((stakeAmt * 1) / 90))).to.equal(
        //   Number(cC1)
        // );
        // expect(Number(val) - Number(69 * ((stakeAmt * 1) / 90))).to.equal(
        //   Number(cD1)
        // );
        // expect(Number(val) - Number(62 * ((stakeAmt * 1) / 90))).to.equal(
        //   Number(cE1)
        // );
        // expect(Number(val) - Number(55 * ((stakeAmt * 1) / 90))).to.equal(
        //   Number(cF1)
        // );

        });
      });
      // });
      // it("user1 unstaking A token", async function () {
      //   var user = testAccount1;
      //   await time.increase(time.duration.days(91));
    
      //   var stakeAmt = Number(10);
    
      //   var balA = web3.utils.fromWei(
      //     (await this.tokenA.balanceOf(user)).toString()
      //   );
      //   var balB = web3.utils.fromWei(
      //     (await this.tokenB.balanceOf(user)).toString()
      //   );
      //   var balC = web3.utils.fromWei(
      //     (await this.tokenC.balanceOf(user)).toString()
      //   );
      //   var balD = web3.utils.fromWei(
      //     (await this.tokenD.balanceOf(user)).toString()
      //   );
      //   var balE = web3.utils.fromWei(
      //     (await this.tokenE.balanceOf(user)).toString()
      //   );
      //   var balF = web3.utils.fromWei(
      //     (await this.tokenF.balanceOf(user)).toString()
      //   );
    
      //   await this.Unifarm.unStake("2", { from: user });
    
      //   var balA1 = web3.utils.fromWei(
      //     (await this.tokenA.balanceOf(user)).toString()
      //   );
      //   var balB1 = web3.utils.fromWei(
      //     (await this.tokenB.balanceOf(user)).toString()
      //   );
      //   var balC1 = web3.utils.fromWei(
      //     (await this.tokenC.balanceOf(user)).toString()
      //   );
      //   var balD1 = web3.utils.fromWei(
      //     (await this.tokenD.balanceOf(user)).toString()
      //   );
      //   var balE1 = web3.utils.fromWei(
      //     (await this.tokenE.balanceOf(user)).toString()
      //   );
      //   var balF1 = web3.utils.fromWei(
      //     (await this.tokenF.balanceOf(user)).toString()
      //   );
    
      //   expect(
      //     (Number(balA) + Number(2 * (90 * ((stakeAmt * 1) / 90)))).toFixed(2)
      //   ).to.equal(Number(balA1).toFixed(2));
      //   expect(
      //     (Number(balB) + Number(83 * ((stakeAmt * 1) / 90))).toFixed(2)
      //   ).to.equal(Number(balB1).toFixed(2));
      //   expect(
      //     (Number(balC) + Number(76 * ((stakeAmt * 1) / 90))).toFixed(2)
      //   ).to.equal(Number(balC1).toFixed(2));
      //   expect(
      //     (Number(balD) + Number(69 * ((stakeAmt * 1) / 90))).toFixed(2)
      //   ).to.equal(Number(balD1).toFixed(2));
      //   expect(
      //     (Number(balE) + Number(62 * ((stakeAmt * 1) / 90))).toFixed(2)
      //   ).to.equal(Number(balE1).toFixed(2));
      //   expect(
      //     (Number(balF) + Number(55 * ((stakeAmt * 1) / 90))).toFixed(2)
      //   ).to.equal(Number(balF1).toFixed(2));
      // });
    
      // it("user1 staking Btoken", async function () {
      //   const user = testAccount1;
    
      //   await this.tokenB.approve(this.Unifarm.address, web3.utils.toWei("100"), {
      //     from: testAccount1,
      //   });
    
      //   var userbalBefore = web3.utils.fromWei(
      //     (await this.tokenB.balanceOf(user)).toString()
      //   );
      //   var contractbalBefore = web3.utils.fromWei(
      //     (await this.tokenB.balanceOf(this.Unifarm.address)).toString()
      //   );
    
      //   await this.Unifarm.stake(this.tokenB.address, web3.utils.toWei("10"), {
      //     from: user,
      //   });
    
      //   var userbalAfter = web3.utils.fromWei(
      //     (await this.tokenB.balanceOf(user)).toString()
      //   );
      //   var contractbalAfter = web3.utils.fromWei(
      //     (await this.tokenB.balanceOf(this.Unifarm.address)).toString()
      //   );
    
      //   expect(Number(userbalAfter) + Number(10)).to.equal(Number(userbalBefore));
      //   expect(Number(contractbalBefore) + Number(10)).to.equal(
      //     Number(contractbalAfter)
      //   );
      // // });

    // );
    //  });
  

  // 

  // it("user1 unstaking A token", async function () {
  //   var user = testAccount1;
  //   await time.increase(time.duration.days(91));

  //   var stakeAmt = Number(10);

  //   var balA = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   await this.Unifarm.unStake("0", { from: user });

  //   var balA1 = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB1 = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC1 = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD1 = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE1 = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF1 = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   var cA1 = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(this.Unifarm.address)).toString()
  //   );
  //   var cB1 = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(this.Unifarm.address)).toString()
  //   );
  //   var cC1 = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(this.Unifarm.address)).toString()
  //   );
  //   var cD1 = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(this.Unifarm.address)).toString()
  //   );
  //   var cE1 = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(this.Unifarm.address)).toString()
  //   );
  //   var cF1 = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   expect(
  //     (Number(balA) + Number(2 * (90 * ((stakeAmt * 1) / 90)))).toFixed(2)
  //   ).to.equal(Number(balA1).toFixed(2));
  //   expect(
  //     (Number(balB) + Number(83 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balB1).toFixed(2));
  //   expect(
  //     (Number(balC) + Number(76 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balC1).toFixed(2));
  //   expect(
  //     (Number(balD) + Number(69 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balD1).toFixed(2));
  //   expect(
  //     (Number(balE) + Number(62 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balE1).toFixed(2));
  //   expect(
  //     (Number(balF) + Number(55 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balF1).toFixed(2));

  //   expect(Number(val) + Number(1 * (90 * ((stakeAmt * 1) / 90)))).to.equal(
  //     Number(cA1)
  //   );
  //   expect(Number(val) - Number(83 * ((stakeAmt * 1) / 90))).to.equal(
  //     Number(cB1)
  //   );
  //   expect(Number(val) - Number(76 * ((stakeAmt * 1) / 90))).to.equal(
  //     Number(cC1)
  //   );
  //   expect(Number(val) - Number(69 * ((stakeAmt * 1) / 90))).to.equal(
  //     Number(cD1)
  //   );
  //   expect(Number(val) - Number(62 * ((stakeAmt * 1) / 90))).to.equal(
  //     Number(cE1)
  //   );
  //   expect(Number(val) - Number(55 * ((stakeAmt * 1) / 90))).to.equal(
  //     Number(cF1)
  //   );
  // });
  // it("user1 unstaking A token", async function () {
  //   var user = testAccount1;
  //   await time.increase(time.duration.days(91));

  //   var stakeAmt = Number(10);

  //   var balA = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   await this.Unifarm.unStake("2", { from: user });

  //   var balA1 = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB1 = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC1 = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD1 = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE1 = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF1 = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   expect(
  //     (Number(balA) + Number(2 * (90 * ((stakeAmt * 1) / 90)))).toFixed(2)
  //   ).to.equal(Number(balA1).toFixed(2));
  //   expect(
  //     (Number(balB) + Number(83 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balB1).toFixed(2));
  //   expect(
  //     (Number(balC) + Number(76 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balC1).toFixed(2));
  //   expect(
  //     (Number(balD) + Number(69 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balD1).toFixed(2));
  //   expect(
  //     (Number(balE) + Number(62 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balE1).toFixed(2));
  //   expect(
  //     (Number(balF) + Number(55 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balF1).toFixed(2));
  // });

  // it("user1 staking Btoken", async function () {
  //   const user = testAccount1;

  //   await this.tokenB.approve(this.Unifarm.address, web3.utils.toWei("100"), {
  //     from: testAccount1,
  //   });

  //   var userbalBefore = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var contractbalBefore = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   await this.Unifarm.stake(this.tokenB.address, web3.utils.toWei("10"), {
  //     from: user,
  //   });

  //   var userbalAfter = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var contractbalAfter = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   expect(Number(userbalAfter) + Number(10)).to.equal(Number(userbalBefore));
  //   expect(Number(contractbalBefore) + Number(10)).to.equal(
  //     Number(contractbalAfter)
  //   );
  // });

  // it("user1 unstaking B token", async function () {
  //   var user = testAccount1;
  //   await time.increase(time.duration.days(91));

  //   var stakeAmt = Number(10);

  //   var balA = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   await this.Unifarm.unStake("3", { from: user });

  //   var balA1 = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB1 = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC1 = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD1 = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE1 = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF1 = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   expect(
  //     (Number(balA) + Number(83 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balA1).toFixed(2));
  //   expect(
  //     (Number(balB) + Number(2 * (90 * ((stakeAmt * 1) / 90)))).toFixed(2)
  //   ).to.equal(Number(balB1).toFixed(2));
  //   expect(
  //     (Number(balC) + Number(76 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balC1).toFixed(2));
  //   expect(
  //     (Number(balD) + Number(69 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balD1).toFixed(2));
  //   expect(
  //     (Number(balE) + Number(62 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balE1).toFixed(2));
  //   expect(
  //     (Number(balF) + Number(55 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balF1).toFixed(2));
  // });
  // it("user1 staking Ctoken", async function () {
  //   const user = testAccount1;

  //   await this.tokenC.approve(this.Unifarm.address, web3.utils.toWei("100"), {
  //     from: testAccount1,
  //   });

  //   var userbalBefore = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var contractbalBefore = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   await this.Unifarm.stake(this.tokenC.address, web3.utils.toWei("10"), {
  //     from: testAccount1,
  //   });

  //   var userbalAfter = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var contractbalAfter = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   expect((Number(userbalAfter) + Number(10)).toFixed(2)).to.equal(
  //     Number(userbalBefore).toFixed(2)
  //   );
  //   expect(Number(contractbalBefore) + Number(10)).to.equal(
  //     Number(contractbalAfter)
  //   );
  // });

  // it("user1 unstaking Ctoken", async function () {
  //   var user = testAccount1;
  //   await time.increase(time.duration.days(91));

  //   var stakeAmt = Number(10);

  //   var balA = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   await this.Unifarm.unStake("4", { from: user });

  //   var balA1 = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB1 = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC1 = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD1 = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE1 = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF1 = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   expect(
  //     (Number(balA) + Number(83 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balA1).toFixed(2));
  //   expect(
  //     (Number(balC) + Number(2 * (90 * ((stakeAmt * 1) / 90)))).toFixed(2)
  //   ).to.equal(Number(balC1).toFixed(2));
  //   expect(
  //     (Number(balB) + Number(76 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balB1).toFixed(2));
  //   expect(
  //     (Number(balD) + Number(69 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balD1).toFixed(2));
  //   expect(
  //     (Number(balE) + Number(62 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balE1).toFixed(2));
  //   expect(
  //     (Number(balF) + Number(55 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balF1).toFixed(2));
  // });

  // it("user1 staking Dtoken", async function () {
  //   const user = testAccount1;

  //   await this.tokenD.approve(this.Unifarm.address, web3.utils.toWei("100"), {
  //     from: testAccount1,
  //   });

  //   var userbalBefore = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var contractbalBefore = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   await this.Unifarm.stake(this.tokenD.address, web3.utils.toWei("10"), {
  //     from: user,
  //   });

  //   var userbalAfter = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var contractbalAfter = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   expect((Number(userbalAfter) + Number(10)).toFixed(2)).to.equal(
  //     Number(userbalBefore).toFixed(2)
  //   );
  //   expect(Number(contractbalBefore) + Number(10)).to.equal(
  //     Number(contractbalAfter)
  //   );
  // });

  // it("user1 unstaking Dtoken", async function () {
  //   var user = testAccount1;
  //   await time.increase(time.duration.days(91));

  //   var stakeAmt = Number(10);

  //   var balA = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   await this.Unifarm.unStake("5", { from: user });

  //   var balA1 = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB1 = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC1 = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD1 = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE1 = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF1 = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   expect(
  //     (Number(balA) + Number(83 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balA1).toFixed(2));
  //   expect(
  //     (Number(balD) + Number(2 * (90 * ((stakeAmt * 1) / 90)))).toFixed(2)
  //   ).to.equal(Number(balD1).toFixed(2));
  //   expect(
  //     (Number(balB) + Number(76 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balB1).toFixed(2));
  //   expect(
  //     (Number(balC) + Number(69 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balC1).toFixed(2));
  //   expect(
  //     (Number(balE) + Number(62 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balE1).toFixed(2));
  //   expect(
  //     (Number(balF) + Number(55 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balF1).toFixed(2));
  // });

  // it("user1 staking Etoken", async function () {
  //   const user = testAccount1;

  //   await this.tokenE.approve(this.Unifarm.address, web3.utils.toWei("100"), {
  //     from: user,
  //   });

  //   var userbalBefore = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var contractbalBefore = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   await this.Unifarm.stake(this.tokenE.address, web3.utils.toWei("10"), {
  //     from: testAccount1,
  //   });

  //   var userbalAfter = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var contractbalAfter = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   expect((Number(userbalAfter) + Number(10)).toFixed(2)).to.equal(
  //     Number(userbalBefore).toFixed(2)
  //   );
  //   expect(Number(contractbalBefore) + Number(10)).to.equal(
  //     Number(contractbalAfter)
  //   );
  // });

  // it("user1 unstaking Etoken", async function () {
  //   var user = testAccount1;
  //   await time.increase(time.duration.days(91));

  //   var stakeAmt = Number(10);

  //   var balA = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   await this.Unifarm.unStake("6", { from: user });

  //   var balA1 = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB1 = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC1 = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD1 = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE1 = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF1 = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   expect(
  //     (Number(balA) + Number(83 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balA1).toFixed(2));
  //   expect(
  //     (Number(balE) + Number(2 * (90 * ((stakeAmt * 1) / 90)))).toFixed(2)
  //   ).to.equal(Number(balE1).toFixed(2));
  //   expect(
  //     (Number(balB) + Number(76 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balB1).toFixed(2));
  //   expect(
  //     (Number(balC) + Number(69 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balC1).toFixed(2));
  //   expect(
  //     (Number(balD) + Number(62 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balD1).toFixed(2));
  //   expect(
  //     (Number(balF) + Number(55 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balF1).toFixed(2));
  // });

  // it("user1 staking Ftoken", async function () {
  //   const user = testAccount1;

  //   await this.tokenF.approve(this.Unifarm.address, web3.utils.toWei("100"), {
  //     from: user,
  //   });

  //   var userbalBefore = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );
  //   var contractbalBefore = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   await this.Unifarm.stake(this.tokenF.address, web3.utils.toWei("10"), {
  //     from: user,
  //   });

  //   var userbalAfter = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );
  //   var contractbalAfter = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   expect((Number(userbalAfter) + Number(10)).toFixed(2)).to.equal(
  //     Number(userbalBefore).toFixed(2)
  //   );
  //   expect(Number(contractbalBefore) + Number(10)).to.equal(
  //     Number(contractbalAfter)
  //   );
  // });

  // it("user1 unstaking Ftoken", async function () {
  //   var user = testAccount1;
  //   await time.increase(time.duration.days(91));

  //   var stakeAmt = Number(10);

  //   var balA = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   await this.Unifarm.unStake("7", { from: user });

  //   var balA1 = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB1 = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC1 = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD1 = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE1 = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF1 = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   expect(
  //     (Number(balA) + Number(83 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balA1).toFixed(2));
  //   expect(
  //     (Number(balF) + Number(2 * (90 * ((stakeAmt * 1) / 90)))).toFixed(2)
  //   ).to.equal(Number(balF1).toFixed(2));
  //   expect(
  //     (Number(balB) + Number(76 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balB1).toFixed(2));
  //   expect(
  //     (Number(balC) + Number(69 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balC1).toFixed(2));
  //   expect(
  //     (Number(balD) + Number(62 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balD1).toFixed(2));
  //   expect(
  //     (Number(balE) + Number(55 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balE1).toFixed(2));
  // });

  // it("user2 staking Ftoken", async function () {
  //   const user = testAccount2;

  //   await this.tokenF.approve(this.Unifarm.address, web3.utils.toWei("100"), {
  //     from: user,
  //   });

  //   var userbalBefore = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );
  //   var contractbalBefore = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   await this.Unifarm.stake(this.tokenF.address, web3.utils.toWei("10"), {
  //     from: user,
  //   });

  //   var userbalAfter = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );
  //   var contractbalAfter = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   expect((Number(userbalAfter) + Number(10)).toFixed(2)).to.equal(
  //     Number(userbalBefore).toFixed(2)
  //   );
  //   expect(Number(contractbalBefore) + Number(10)).to.equal(
  //     Number(contractbalAfter)
  //   );
  // });

  // it("user2 unstaking Ftoken", async function () {
  //   var user = testAccount2;
  //   await time.increase(time.duration.days(7));

  //   var stakeAmt = Number(10);

  //   var balA = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   await this.Unifarm.unStake("0", { from: user });

  //   var balA1 = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB1 = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC1 = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD1 = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE1 = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF1 = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   expect(
  //     (Number(balF) + Number(stakeAmt + 7 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balF1).toFixed(2));
  //   expect(Number(balB).toFixed(2)).to.equal(Number(balB1).toFixed(2));
  //   expect(Number(balC).toFixed(2)).to.equal(Number(balC1).toFixed(2));
  //   expect(Number(balD).toFixed(2)).to.equal(Number(balD1).toFixed(2));
  //   expect(Number(balE).toFixed(2)).to.equal(Number(balE1).toFixed(2));
  // });

  // it("user3 staking Btoken", async function () {
  //   const user = testAccount3;

  //   await this.tokenB.approve(this.Unifarm.address, web3.utils.toWei("100"), {
  //     from: user,
  //   });

  //   var userbalBefore = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var contractbalBefore = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   await this.Unifarm.stake(this.tokenB.address, web3.utils.toWei("10"), {
  //     from: user,
  //   });

  //   var userbalAfter = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var contractbalAfter = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   expect((Number(userbalAfter) + Number(10)).toFixed(2)).to.equal(
  //     Number(userbalBefore).toFixed(2)
  //   );
  //   expect(Number(contractbalBefore) + Number(10)).to.equal(
  //     Number(contractbalAfter)
  //   );
  // });

  // it("user3 unstaking Btoken", async function () {
  //   var user = testAccount3;
  //   await time.increase(time.duration.days(14));

  //   var stakeAmt = Number(10);

  //   var balA = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   await this.Unifarm.unStake("0", { from: user });

  //   var balA1 = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB1 = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC1 = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD1 = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE1 = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF1 = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   expect(
  //     (Number(balA) + Number(7 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balA1).toFixed(2));
  //   expect(
  //     (Number(balB) + Number(stakeAmt + 14 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balB1).toFixed(2));
  //   expect(Number(balE).toFixed(2)).to.equal(Number(balE1).toFixed(2));
  //   expect(Number(balC).toFixed(2)).to.equal(Number(balC1).toFixed(2));
  //   expect(Number(balD).toFixed(2)).to.equal(Number(balD1).toFixed(2));
  //   expect(Number(balE).toFixed(2)).to.equal(Number(balE1).toFixed(2));
  // });

  // it("user3 staking Ctoken", async function () {
  //   const user = testAccount3;

  //   await this.tokenC.approve(this.Unifarm.address, web3.utils.toWei("100"), {
  //     from: user,
  //   });

  //   var userbalBefore = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var contractbalBefore = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   await this.Unifarm.stake(this.tokenC.address, web3.utils.toWei("10"), {
  //     from: user,
  //   });

  //   var userbalAfter = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var contractbalAfter = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   expect((Number(userbalAfter) + Number(10)).toFixed(2)).to.equal(
  //     Number(userbalBefore).toFixed(2)
  //   );
  //   expect(Number(contractbalBefore) + Number(10)).to.equal(
  //     Number(contractbalAfter)
  //   );
  // });

  // it("user3 unstaking Ctoken", async function () {
  //   var user = testAccount3;
  //   await time.increase(time.duration.days(21));

  //   var stakeAmt = Number(10);

  //   var balA = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   await this.Unifarm.unStake("1", { from: user });

  //   var balA1 = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB1 = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC1 = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD1 = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE1 = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF1 = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   expect(
  //     (Number(balA) + Number(14 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balA1).toFixed(2));
  //   expect(
  //     (Number(balC) + Number(stakeAmt + 21 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balC1).toFixed(2));
  //   expect(
  //     (Number(balB) + Number(7 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balB1).toFixed(2));
  //   expect(Number(balF).toFixed(2)).to.equal(Number(balF1).toFixed(2));
  //   expect(Number(balD).toFixed(2)).to.equal(Number(balD1).toFixed(2));
  //   expect(Number(balE).toFixed(2)).to.equal(Number(balE1).toFixed(2));
  // });

  // it("user3 staking Dtoken", async function () {
  //   const user = testAccount3;

  //   await this.tokenD.approve(this.Unifarm.address, web3.utils.toWei("100"), {
  //     from: user,
  //   });

  //   var userbalBefore = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var contractbalBefore = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   await this.Unifarm.stake(this.tokenD.address, web3.utils.toWei("10"), {
  //     from: user,
  //   });

  //   var userbalAfter = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var contractbalAfter = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(this.Unifarm.address)).toString()
  //   );

  //   expect((Number(userbalAfter) + Number(10)).toFixed(2)).to.equal(
  //     Number(userbalBefore).toFixed(2)
  //   );
  //   expect(Number(contractbalBefore) + Number(10)).to.equal(
  //     Number(contractbalAfter)
  //   );
  // });

  // it("user3 unstaking Dtoken", async function () {
  //   var user = testAccount3;
  //   await time.increase(time.duration.days(28));

  //   var stakeAmt = Number(10);

  //   var balA = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   await this.Unifarm.changeTokenBlockedStatus(
  //     this.tokenD.address,
  //     this.tokenC.address,
  //     true,
  //     { from: owner }
  //   );

  //   await this.Unifarm.unStake("2", { from: user });

  //   var balA1 = web3.utils.fromWei(
  //     (await this.tokenA.balanceOf(user)).toString()
  //   );
  //   var balB1 = web3.utils.fromWei(
  //     (await this.tokenB.balanceOf(user)).toString()
  //   );
  //   var balC1 = web3.utils.fromWei(
  //     (await this.tokenC.balanceOf(user)).toString()
  //   );
  //   var balD1 = web3.utils.fromWei(
  //     (await this.tokenD.balanceOf(user)).toString()
  //   );
  //   var balE1 = web3.utils.fromWei(
  //     (await this.tokenE.balanceOf(user)).toString()
  //   );
  //   var balF1 = web3.utils.fromWei(
  //     (await this.tokenF.balanceOf(user)).toString()
  //   );

  //   expect(
  //     (Number(balA) + Number(21 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balA1).toFixed(2));
  //   expect(
  //     (Number(balB) + Number(14 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balB1).toFixed(2));
  //   expect(Number(balF).toFixed(2)).to.equal(Number(balF1).toFixed(2));
  //   expect(
  //     (Number(balD) + Number(stakeAmt + 28 * ((stakeAmt * 1) / 90))).toFixed(2)
  //   ).to.equal(Number(balD1).toFixed(2));
  //   expect(Number(balE).toFixed(2)).to.equal(Number(balE1).toFixed(2));
  // });
});
