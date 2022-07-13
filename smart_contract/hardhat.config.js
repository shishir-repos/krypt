

require('@nomiclabs/hardhat-waffle');

module.exports = 
{
  solidity: '0.8.0',
  networks: 
  { rinkeby:
    {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/WZkhJnHbjYN91You2zae8lXsm2DxmSlH' ,
      accounts: [ 'f2eae8ab6d00818e9bfedbb2f8d3fdd8f4ac82996f24abfb5ea5acc15b193f8b' ]
    } 
  }
}