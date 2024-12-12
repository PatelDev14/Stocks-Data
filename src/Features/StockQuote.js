import React from 'react';

// Function to format numbers into human-readable strings
const formatNumber = (num) => {
    if (num >= 1e12) {
        return (num / 1e12).toFixed(2) + 'T'; // Trillions
    } else if (num >= 1e9) {
        return (num / 1e9).toFixed(2) + 'B'; // Billions
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + 'M'; // Millions
    }
    return num; // Return as is for smaller numbers
};

const StockQuote = ({ stockData }) => {
    if (!stockData) return null; // Check if stock data is valid

    return (
        <div className="stock-quote">
            <h2>Stock Quote for {stockData.name} ({stockData.symbol})</h2>
            <p><strong>Price:</strong> ${stockData.price ? stockData.price.toFixed(2) : 'N/A'}</p>
            <p><strong>Change:</strong> {stockData.change ? stockData.change.toFixed(2) : 'N/A'} 
               ({(stockData.changesPercentage !== undefined ? (stockData.changesPercentage * 100).toFixed(2) : 'N/A')}%)</p>
            <p><strong>Day Low:</strong> ${stockData.dayLow ? stockData.dayLow.toFixed(2) : 'N/A'}</p>
            <p><strong>Day High:</strong> ${stockData.dayHigh ? stockData.dayHigh.toFixed(2) : 'N/A'}</p>
            <p><strong>Year Low:</strong> ${stockData.yearLow ? stockData.yearLow.toFixed(2) : 'N/A'}</p>
            <p><strong>Year High:</strong> ${stockData.yearHigh ? stockData.yearHigh.toFixed(2) : 'N/A'}</p>
            <p><strong>Market Cap:</strong> ${formatNumber(stockData.marketCap)}</p>
            <p><strong>Volume:</strong> {stockData.volume ? stockData.volume.toLocaleString() : 'N/A'}</p>
            <p><strong>Average Volume:</strong> {stockData.avgVolume ? stockData.avgVolume.toLocaleString() : 'N/A'}</p>
            <p><strong>Open:</strong> ${stockData.open ? stockData.open.toFixed(2) : 'N/A'}</p>
            <p><strong>Previous Close:</strong> ${stockData.previousClose ? stockData.previousClose.toFixed(2) : 'N/A'}</p>
            <p><strong>P/E Ratio:</strong> {stockData.pe !== undefined ? stockData.pe : 'N/A'}</p>
            <p><strong>Earnings Announcement:</strong> {stockData.earningsAnnouncement ? new Date(stockData.earningsAnnouncement).toLocaleString() : 'N/A'}</p>
            <p><strong>Shares Outstanding:</strong> {stockData.sharesOutstanding ? stockData.sharesOutstanding.toLocaleString() : 'N/A'}</p>
        </div>
    );
};

export default StockQuote;
