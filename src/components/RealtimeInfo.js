import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Web3 } from 'web3';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { Line } from 'react-chartjs-2';





const contractAddress = '0x96856161c42296124c3f4325e6aF896d64e61c6A';

//const abi = [/* ABI of the smart contract */];
import abi from '../abi/token.json';


const RealtimeInfo = () => {
  const [totalTokens, setTotalTokens] = useState(0);
  const [propertyValuation, setPropertyValuation] = useState(0);
  const [dividendPool, setDividendPool] = useState(0);
  const [lastMonthDividends, setLastMonthDividends] = useState(0);
  const [averageMonthlyRentalIncome, setAverageMonthlyRentalIncome] = useState(0);
  const [tokenSupplyStatus, setTokenSupplyStatus] = useState('Available');
  const [currentTokenPrice, setCurrentTokenPrice] = useState(0);
  const [totalDividends, setTotalDividends] = useState(0);
  const [numPropertiesOwned, setNumPropertiesOwned] = useState(1);
  const [projectedAnnualROI, setProjectedAnnualROI] = useState(0);
  const [investorCount, setInvestorCount] = useState(0);

  const [totalSquareInches, setTotalSquareInches] = useState(0);
  const [tokenTradingVolume, setTokenTradingVolume] = useState(0);
  
  // Additional states for future property acquisition and market performance chart can be added here

  useEffect(() => {
   
    (async () => {

        //console.log(abi.output.abi);
        const web3 = new Web3('https://optimism-mainnet.infura.io/v3/07aed982b7244ca8a8e207267d367baf');
        //const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

        const myContract = new web3.eth.Contract(abi.output.abi, contractAddress);
        
        const supply = await myContract.methods.totalSupply().call();
        console.log(supply);
        setTotalTokens(supply);

        
        /*
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, abi, provider);

      const data = await Promise.all([
        contract.totalTokens(),
        contract.propertyValuation(),
        contract.dividendPool(),
        contract.lastMonthDividends(),
        contract.averageMonthlyRentalIncome(),
        contract.totalTokensAvailable(),
        contract.currentTokenPrice(),
        contract.totalDividends(),
        contract.numPropertiesOwned(),
        contract.projectedAnnualROI(),
        contract.investorCount(),
      ]);
      
      
      setTotalTokens(data[0].toString());
      setPropertyValuation(ethers.utils.formatEther(data[1]));
      setDividendPool(ethers.utils.formatEther(data[2]));
      setLastMonthDividends(ethers.utils.formatEther(data[3]));
      setAverageMonthlyRentalIncome(ethers.utils.formatEther(data[4]));
      setTokenSupplyStatus(data[5].toNumber() > 0 ? 'Available' : 'Sold Out');
      setCurrentTokenPrice(ethers.utils.formatEther(data[6]));
      setTotalDividends(ethers.utils.formatEther(data[7]));
      setNumPropertiesOwned(data[8].toNumber());
      setProjectedAnnualROI(Number((data[9] / 100).toFixed(2)));
      setInvestorCount(data[10].toNumber());
      */
      
      // You can add additional method calls and state updates for future property acquisition and market performance chart here
    })();
  }, []);

  return (
<Grid container spacing={3}>
  {/* Property and Token Information */}
  <Grid item xs={12}>
    <Typography variant="h4" gutterBottom>Property and Token Information</Typography>
  </Grid>
  
  {/* Total Number of INCH2 Tokens Minted */}
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      <CardContent>
        <Typography variant="h6" role="img" aria-label="Token">🪙 Total Number of INCH2 Tokens Minted</Typography>
        {totalTokens ? (
          <Typography variant="body1">{totalTokens}</Typography>
        ) : (
          <Skeleton animation="wave" variant="text" width={100} height={20} />
        )}
        <Typography variant="caption">Represents the total count of INCH2 tokens available.</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Total Square Inches Represented */}
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      <CardContent>
        <Typography variant="h6" role="img" aria-label="Area">📏 Total Square Inches Represented</Typography>
        {totalSquareInches ? (
          <Typography variant="body1">{totalSquareInches}</Typography>
        ) : (
          <Skeleton animation="wave" variant="text" width={100} height={20} />
        )}
        <Typography variant="caption">Total area in square inches represented by INCH2 tokens.</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Financials */}
  <Grid item xs={12}>
    <Typography variant="h4" gutterBottom>Financials</Typography>
  </Grid>

  {/* Property Valuation */}
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      <CardContent>
        <Typography variant="h6" role="img" aria-label="Valuation">🏠 Property Valuation</Typography>
        {propertyValuation ? (
          <Typography variant="body1">${propertyValuation}</Typography>
        ) : (
          <Skeleton animation="wave" variant="text" width={100} height={20} />
        )}
        <Typography variant="caption">Current market valuation of the property.</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Dividend Pool */}
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      <CardContent>
        <Typography variant="h6" role="img" aria-label="Dividends">💰 Dividend Pool</Typography>
        {dividendPool ? (
          <Typography variant="body1">${dividendPool}</Typography>
        ) : (
          <Skeleton animation="wave" variant="text" width={100} height={20} />
        )}
        <Typography variant="caption">Total accumulated dividends to be distributed.</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Last Month's Dividends */}
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      <CardContent>
        <Typography variant="h6" role="img" aria-label="Calendar">📅 Last Month&apos;s Dividends</Typography>
        {lastMonthDividends ? (
          <Typography variant="body1">${lastMonthDividends}</Typography>
        ) : (
          <Skeleton animation="wave" variant="text" width={100} height={20} />
        )}
        <Typography variant="caption">Dividends distributed in the previous month.</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Performance */}
  <Grid item xs={12}>
    <Typography variant="h4" gutterBottom>Performance</Typography>
  </Grid>

  {/* Average Monthly Rental Income */}
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      <CardContent>
        <Typography variant="h6" role="img" aria-label="Income">💼 Average Monthly Rental Income</Typography>
        {averageMonthlyRentalIncome ? (
          <Typography variant="body1">${averageMonthlyRentalIncome}</Typography>
        ) : (
          <Skeleton animation="wave" variant="text" width={100} height={20} />
        )}
        <Typography variant="caption">Average monthly rental income from the property.</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Current Token Price */}
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      <CardContent>
        <Typography variant="h6" role="img" aria-label="Price Tag">🏷️ Current Token Price</Typography>
        {currentTokenPrice ? (
          <Typography variant="body1">${currentTokenPrice}</Typography>
        ) : (
          <Skeleton animation="wave" variant="text" width={100} height={20} />
        )}
        <Typography variant="caption">Market price of an INCH2 token.</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Market Performance Chart */}
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      <CardContent>
        <Typography variant="h6" role="img" aria-label="Chart">📊 Market Performance Chart</Typography>
        {/* Placeholder for market chart */}
        <Skeleton animation="wave" variant="rect" width={210} height={118} />
        <Typography variant="caption">Graph showing trends in token price, rental income, and dividends.</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Investor Insights */}
  <Grid item xs={12}>
    <Typography variant="h4" gutterBottom>Investor Insights</Typography>
  </Grid>

  {/* Investor Count */}
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      <CardContent>
        <Typography variant="h6" role="img" aria-label="Investor Count">👥 Investor Count</Typography>
        {investorCount ? (
          <Typography variant="body1">{investorCount}</Typography>
        ) : (
          <Skeleton animation="wave" variant="text" width={100} height={20} />
        )}
        <Typography variant="caption">Total number of investors holding INCH2 tokens.</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Future Property Acquisition Plans */}
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      <CardContent>
        <Typography variant="h6" role="img" aria-label="Plan">📝 Future Property Acquisition Plans</Typography>
        {/* Placeholder for future plans */}
        <Skeleton animation="wave" variant="text" width={210} height={118} />
        <Typography variant="caption">Outline of plans for purchasing additional properties.</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Token Trading Volume */}
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      <CardContent>
        <Typography variant="h6" role="img" aria-label="Volume">🔄 Token Trading Volume</Typography>
        {tokenTradingVolume ? (
          <Typography variant="body1">{tokenTradingVolume}</Typography>
        ) : (
          <Skeleton animation="wave" variant="text" width={100} height={20} />
        )}
        <Typography variant="caption">Volume of INCH2 tokens traded over a specific period.</Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>
  

  );
}

export default RealtimeInfo;