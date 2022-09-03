require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks :{
    goerli: {
      url:'https://eth-goerli.g.alchemy.com/v2/On2f8vPZy4vEUcIeXPVWjkT_itzk6rgG',
      accounts:['27ffffb3ac22419ee9df0c6f2c6336210383a59d39e6cb2e8ec323d9217b5dde'],
    }
  }
}