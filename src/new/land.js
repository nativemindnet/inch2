const Web3 = require('web3');
const contractABI = []; // Replace with your contract's ABI
const contractAddress = '0x96856161c42296124c3f4325e6aF896d64e61c6A';

const web3 = new Web3('https://optimism-mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Example: Fetch total number of INCH2 tokens minted
contract.methods.totalSupply().call()
  .then((totalSupply) => {
    console.log('Total INCH2 Tokens Minted:', totalSupply);
    // Update this value on your webpage
  })
  .catch(console.error);