// // const express = require('express');
// // const cors = require('cors');
// // const axios = require('axios');
// // require('dotenv').config();

// // const app = express();
// // const port = process.env.PORT || 5000;

// // app.use(cors());
// // app.use(express.json());

// // // Example route
// // app.get('/api/quote/:symbol', async (req, res) => {
// //   try {
// //     const { symbol } = req.params;
// //     const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.FMP_API_KEY}`);
// //     res.json(response.data[0]);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error fetching stock data' });
// //   }
// // });

// // app.listen(port, () => {
// //   console.log(`Server is running on port: ${port}`);
// // });

// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Serve static files from a 'public' directory
// app.use(express.static('public'));

// // Root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Stock Analysis API');
// });

// // Example route
// app.get('/api/quote/:symbol', async (req, res) => {
//   try {
//     const { symbol } = req.params;
//     const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=6Llqcp1uApVi1TrTf8Yjw3OjvbMYFLQf`);
//     //const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.FMP_API_KEY}`);
//     res.json(response.data[0]);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching stock data' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });

const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
// const port = process.env.PORT || 3001;
const port = process.env.PORT || 8080;  // Or use just process.env.PORT



const FMP_API_KEY = process.env.FMP_API_KEY;


// Middleware
app.use(cors());
app.use(express.json());


// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Stock Analysis API!');
});

// Fetch stock quotes
app.get('/quote/:symbol', async (req, res) => {
    const symbol = req.params.symbol;
    try {
        const apiUrl = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${FMP_API_KEY}`;
        console.log(`Fetching data from: ${apiUrl}`);
        
        const response = await axios.get(apiUrl);
        
        if (!response.data || response.data.length === 0) {
            return res.status(404).json({ error: 'No data found for the given symbol' });
        }

        const quote = response.data[0];
        res.json(quote);

    } catch (error) {
        console.error("Error fetching quote:", error.message);
        if (error.response) {
            console.error("Error status:", error.response.status);
            console.error("Error data:", error.response.data);
        }
        res.status(500).json({ error: 'Failed to fetch quote', details: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
