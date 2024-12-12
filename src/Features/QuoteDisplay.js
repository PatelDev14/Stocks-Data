// import React from 'react';

// const QuoteDisplay = ({ quote }) => {
//     // Check if quote is valid and has the expected structure
//     if (!quote) return null;

//     return (
//         <div className="quote-display">
//             <h2>Quote Information</h2>
//             <h3>{quote.companyName} ({quote.symbol})</h3>
//             <p><strong>Price:</strong> ${quote.price.toFixed(2)}</p>
//             <p><strong>Market Cap:</strong> ${quote.mktCap.toLocaleString()}</p>
//             <p><strong>P/E Ratio:</strong> {quote.lastDiv ? quote.lastDiv.toFixed(2) : 'N/A'}</p>
//             <p><strong>CEO:</strong> {quote.ceo}</p>
//             <p><strong>Website:</strong> <a href={quote.website} target="_blank" rel="noopener noreferrer">{quote.website}</a></p>
//             <p><strong>Description:</strong> {quote.description}</p>
//         </div>
//     );
// };

// export default QuoteDisplay;

// import React from 'react';

// // Function to format numbers into human-readable strings
// const formatNumber = (num) => {
//     if (num >= 1e12) {
//         return (num / 1e12).toFixed(2) + 'T'; // Trillions
//     } else if (num >= 1e9) {
//         return (num / 1e9).toFixed(2) + 'B'; // Billions
//     } else if (num >= 1e6) {
//         return (num / 1e6).toFixed(2) + 'M'; // Millions
//     }
//     return num; // Return as is for smaller numbers
// };

// // Function to format change with sign
// const formatChange = (change) => {
//     return change >= 0 ? `+${change.toFixed(2)}` : change.toFixed(2);
// };

// const QuoteDisplay = ({ quote }) => {
//     if (!quote) return null; // Check if quote is valid

//     return (
//         <div className="quote-display">
//             <h2>Quote Information</h2>
            
//             <h3>{quote.companyName} ({quote.symbol})</h3>
//             <p><strong>Price:</strong> ${quote.price.toFixed(2)}</p>
//             <p><strong>Market Cap:</strong> ${formatNumber(quote.mktCap)}</p>
//             <p><strong>Changes:</strong> {formatChange(quote.changes)}</p>
//             <p><strong>Industry:</strong> {quote.industry}</p>
//             <p><strong>Currency:</strong> {quote.currency}</p>
//             <p><strong>Range:</strong> {quote.range}</p>
//             <p><strong>Sector:</strong> {quote.sector}</p>
//             <p><strong>Country:</strong> {quote.country}</p>
//             <p><strong>IPO Date:</strong> {new Date(quote.ipoDate).toLocaleDateString()}</p>
//             <p><strong>Full-Time Employees:</strong> {quote.fullTimeEmployees}</p>
//             <p><strong>Phone:</strong> {quote.phone}</p>
//             <p><strong>Address:</strong> {quote.address}, {quote.city}, {quote.state} {quote.zip}</p>
//             <p><strong>Description:</strong> {quote.description}</p>
            
//         </div>
//     );
// };

// export default QuoteDisplay;


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

// Function to format change with sign
const formatChange = (change) => {
    return change >= 0 ? `+${change.toFixed(2)}` : change.toFixed(2);
};

const QuoteDisplay = ({ quote }) => {
    if (!quote) return null; // Check if quote is valid

    return (
        <div className="quote-display">
            <h2>Quote Information</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <img 
                    src={quote.image} 
                    alt={`${quote.companyName} logo`} 
                    style={{ width: '50px', height: 'auto', marginRight: '10px' }} 
                />
                <div style={{ flexGrow: 1, textAlign: 'center' }}>
                    <h3 style={{ margin: 0 }}>
                        {quote.companyName} <span style={{ fontWeight: 'normal', fontSize: '0.8em' }}>(<strong>{quote.symbol}</strong>)</span>
                    </h3>
                </div>
            </div>
            <p><strong>Price:</strong> ${quote.price.toFixed(2)}</p>
            <p><strong>Market Cap:</strong> ${formatNumber(quote.mktCap)}</p>
            <p><strong>P/E Ratio:</strong> {quote.lastDiv ? quote.lastDiv.toFixed(2) : 'N/A'}</p>
            <p><strong>Changes:</strong> ${formatChange(quote.changes)}</p>
            <p><strong>Industry:</strong> {quote.industry}</p>
            <p><strong>Currency:</strong> {quote.currency}</p>
            <p><strong>Range:</strong> ${quote.range}</p>
            <p><strong>Sector:</strong> {quote.sector}</p>
            <p><strong>Country:</strong> {quote.country}</p>
            <p><strong>CEO:</strong> {quote.ceo}</p>
            <p><strong>IPO Date:</strong> {new Date(quote.ipoDate).toLocaleDateString()}</p>
            <p><strong>Full-Time Employees:</strong> {quote.fullTimeEmployees}</p>
            <p><strong>Phone:</strong> {quote.phone}</p>
            <p><strong>Address:</strong> {quote.address}, {quote.city}, {quote.state} {quote.zip}</p>
            <p><strong>Description:</strong> {quote.description}</p>
        </div>
    );
};

export default QuoteDisplay;

