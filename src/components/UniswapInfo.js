import { ChainId, Token, WETH, Fetcher } from '@uniswap/sdk';
import { ethers } from 'ethers';

const chainId = ChainId.OPTIMISM;
const tokenAddress1 = '0x23c76c0c76E7D1792BC1F9738A3DD97eE42868B8';
const tokenAddress2 = '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58';

//const web32 = new Web3('https://mainnet.optimism.io');
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.optimism.io');
//const provider = web3; //new Web3.providers.HttpProvider(web32);

const token1 = new Token(chainId, tokenAddress1, 18);
const token2 = new Token(chainId, tokenAddress2, 18);

const pair = await Fetcher.fetchPairData(token1, token2, provider);

console.log(pair);