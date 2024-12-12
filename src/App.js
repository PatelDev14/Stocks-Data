// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css'; 
// import QuoteDisplay from './Features/QuoteDisplay';
// import MostActive from './Features/MostActive';
// import TopGainers from './Features/TopGainers';
// import TopLosers from './Features/TopLosers';
// import PopularStocks from './Features/PopularStocks';


// const App = () => {
//     const [symbol, setSymbol] = useState('');
//     const [quote, setQuote] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const [openList, setOpenList] = useState(null);

//     const fetchQuote = async () => {
//         if (!symbol) {
//             console.log("Please enter a stock symbol.");
//             return;
//         }

//         setLoading(true);
//         try {
//             const response = await axios.get(`https://financialmodelingprep.com/api/v3/search?query=${symbol}&apikey=6Llqcp1uApVi1TrTf8Yjw3OjvbMYFLQf`);
//             //const response = await axios.get(`https://backend-stock-analysis.onrender.com/api/quote/${symbol}`);
//             //const response = await axios.get(`http://localhost:5000/api/quote/${symbol}`);
//             console.log("Quote response:", response.data);
//             setQuote(response.data);
//         } catch (error) {
//             console.error("Error fetching quote:", error);
//             setQuote(null);
//         }
//         setLoading(false);
//     };

//     const handleStockSelect = (selectedSymbol) => {
//         setSymbol(selectedSymbol);
//         setQuote(null); 
//     };

   
//     const toggleList = (listName) => {
//         setOpenList(openList === listName ? null : listName); 
//     };

//     return (
//         <div className="app">
//             <h1>Stock Analysis</h1>
//             <input
//                 type="text"
//                 value={symbol}
//                 onChange={(e) => setSymbol(e.target.value)}
//                 placeholder="Enter stock symbol"
//             />
//             <button onClick={fetchQuote} disabled={loading}>Get Quote</button>
//             {loading && <p>Loading...</p>}

//             <QuoteDisplay quote={quote} />
            
//             {/* <PopularStocks onStockSelect={handleStockSelect} />
//             <MostActive onStockSelect={handleStockSelect} />
//             <TopGainers onStockSelect={handleStockSelect} />
//             <TopLosers onStockSelect={handleStockSelect} /> */}

//             {/* Pass the toggle function and open state to each component */}
//             <PopularStocks onStockSelect={handleStockSelect} isOpen={openList === 'popular'} toggleList={() => toggleList('popular')} />
//             <MostActive onStockSelect={handleStockSelect} isOpen={openList === 'active'} toggleList={() => toggleList('active')} />
//             <TopGainers onStockSelect={handleStockSelect} isOpen={openList === 'gainers'} toggleList={() => toggleList('gainers')} />
//             <TopLosers onStockSelect={handleStockSelect} isOpen={openList === 'losers'} toggleList={() => toggleList('losers')} /> 
            
//         </div>
//     );
// };

// export default App;



import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 
import QuoteDisplay from './Features/QuoteDisplay';
import MostActive from './Features/MostActive';
import TopGainers from './Features/TopGainers';
import TopLosers from './Features/TopLosers';
import PopularStocks from './Features/PopularStocks';

const App = () => {
    const [symbol, setSymbol] = useState('');
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(false);
    const [openList, setOpenList] = useState(null);

    const fetchQuote = async () => {
        if (!symbol) {
            console.log("Please enter a stock symbol.");
            return;
        }

        setLoading(true);
        try {
            // Fetch quote data using the user input symbol
            //const response = await axios.get(`https://financialmodelingprep.com/api/v3/search?query=${symbol}&apikey=6Llqcp1uApVi1TrTf8Yjw3OjvbMYFLQf`);
            const response = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=6Llqcp1uApVi1TrTf8Yjw3OjvbMYFLQf`);
            console.log("Quote response:", response.data);

            // Assuming response.data is an array and we want the first result
            if (response.data.length > 0) {
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
            <button onClick={fetchQuote} disabled={loading}>Get Quote</button>
            {loading && <p>Loading...</p>}

            <QuoteDisplay quote={quote} />
            
            {/* Uncomment these if you want to use them */}
            {/* <PopularStocks onStockSelect={handleStockSelect} />
            <MostActive onStockSelect={handleStockSelect} />
            <TopGainers onStockSelect={handleStockSelect} />
            <TopLosers onStockSelect={handleStockSelect} /> */}

            {/* Pass the toggle function and open state to each component */}
            <PopularStocks onStockSelect={handleStockSelect} isOpen={openList === 'popular'} toggleList={() => toggleList('popular')} />
            <MostActive onStockSelect={handleStockSelect} isOpen={openList === 'active'} toggleList={() => toggleList('active')} />
            <TopGainers onStockSelect={handleStockSelect} isOpen={openList === 'gainers'} toggleList={() => toggleList('gainers')} />
            <TopLosers onStockSelect={handleStockSelect} isOpen={openList === 'losers'} toggleList={() => toggleList('losers')} /> 
            
        </div>
    );
};

export default App;
