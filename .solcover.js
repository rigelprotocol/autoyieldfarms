module.exports = {
    norpc: true,
    port: 8555,
    buildDirPath: "/build",
    copyPackages: ['openzeppelin-solidity'],
    skipFiles: [
        'Migrations.sol',
        "OroNetwork.sol",
        "PriceGold.sol",
        "PriceORO.sol",
        "PriceSilver.sol",
        "PriceUSDC.sol"
    ]
};

