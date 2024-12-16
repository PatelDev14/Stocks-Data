import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 
import QuoteDisplay from './Features/QuoteDisplay';
import MostActive from './Features/MostActive';
import TopGainers from './Features/TopGainers';
import TopLosers from './Features/TopLosers';
import PopularStocks from './Features/PopularStocks';
//import IncomeStatement from './Features/IncomeStatement';
//import StockQuote from './Features/StockQuote';
import StockChart from './Features/StockChart';

const App = () => {
    const [symbol, setSymbol] = useState('');
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(false);
    const [openList, setOpenList] = useState(null);
   // const [incomeStatement, setIncomeStatement] = useState(null); // State for income statement
    //const [loadingIncome, setLoadingIncome] = useState(false); // Loading state for income statement
    //const [loadingStockQuote, setLoadingStockQuote] = useState(false);
    const [historicalData, setHistoricalData] = useState(null);
    const [rsiData, setRSIData] = useState(null);

    const apiKey = "6Llqcp1uApVi1TrTf8Yjw3OjvbMYFLQf";

    


    /*Stock Information*/
    const fetchQuote = async () => {
        if (!symbol) {
            console.log("Please enter a stock symbol.");
            return;
        }

        setLoading(true);
        try {
            // Fetch quote data using the user input symbol
            const response = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`);
            console.log("Quote response:", response.data);

            // Assuming response.data is an object and we want the result directly
            if (response.data) {
                setQuote(response.data[0]); // Set quote to the first result
            } else {
                console.log("No results found for the given symbol.");
                setQuote(null); // No results found
            }
        } catch (error) {
            console.error("Error fetching quote:", error);
            setQuote(null); // Set null if error occurs
        }
        setLoading(false);
    };

    /* Chart*/
    const fetchHistoricalData = async () => {
        try {
          const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${apiKey}`);
          setHistoricalData(response.data.historical);
        } catch (error) {
          console.error("Error fetching historical data:", error);
          setHistoricalData(null);
        }
      };
      

    
    /* RSI*/

    const fetchRSIData = async () => {
        try {
          const response = await axios.get(`https://financialmodelingprep.com/api/v3/technical_indicator/5min/${symbol}?type=rsi&period=10&apikey=${apiKey}`);
          setRSIData(response.data);
        } catch (error) {
          console.error("Error fetching RSI data:", error);
          setRSIData(null);
        }
      };

     
      
      
      

    

    const handleStockSelect = (selectedSymbol) => {
        setSymbol(selectedSymbol);
        setQuote(null); 
    };

    const toggleList = (listName) => {
        setOpenList(openList === listName ? null : listName); 
    };

    return (
        <div className="app">
            <h1>Stock Analysis</h1>
            <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                placeholder="Enter stock symbol"
            />
            <button onClick={() => {fetchQuote(); fetchHistoricalData(); fetchRSIData(); }} disabled={loading}>Get Quote</button>
        
            
            {loading && <p>Loading...</p>}
        
            {/* Display Quote Display and Stock Quote */}
            <QuoteDisplay quote={quote} />

            <button onClick={fetchHistoricalData}>Fetch Chart</button>
            {/*{historicalData && <StockChart historicalData={historicalData} />}*/}
            {historicalData && rsiData && <StockChart historicalData={historicalData} rsiData={rsiData} />}
         

            {/* Pass the toggle function and open state to each component */}
            <PopularStocks onStockSelect={handleStockSelect} isOpen={openList === 'popular'} toggleList={() => toggleList('popular')} />
            <MostActive onStockSelect={handleStockSelect} isOpen={openList === 'active'} toggleList={() => toggleList('active')} />
            <TopGainers onStockSelect={handleStockSelect} isOpen={openList === 'gainers'} toggleList={() => toggleList('gainers')} />
            <TopLosers onStockSelect={handleStockSelect} isOpen={openList === 'losers'} toggleList={() => toggleList('losers')} /> 
            
        </div>
    );
};

export default App;

