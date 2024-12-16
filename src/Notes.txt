import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const timeRanges = [
  { label: 'Live', days: 1 },
  { label: '1 Day', days: 1 },
  { label: '1 Week', days: 7 },
  { label: '1 Month', days: 30 },
  { label: '1 Year', days: 365 },
  { label: '5 Years', days: 1825 },
  { label: 'Max', days: Infinity }
];

const StockChart = ({ historicalData, rsiData }) => {
  const [selectedRange, setSelectedRange] = useState('1 Month');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filterData = () => {
      const range = timeRanges.find(r => r.label === selectedRange);
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - range.days);

      const filtered = historicalData.filter(item => new Date(item.date) >= cutoffDate);
      setFilteredData(filtered.reverse());
    };

    filterData();
  }, [selectedRange, historicalData]);

  const data = {
    labels: filteredData.map((item) => {
      const date = new Date(item.date);
      if (selectedRange === 'Live' || selectedRange === '1 Day') {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      } else if (selectedRange === '1 Week') {
        return date.toLocaleDateString([], { weekday: 'short' });
      } else if (selectedRange === '1 Month') {
        return date.toLocaleDateString([], { day: 'numeric', month: 'short' });
      } else if (selectedRange === '1 Year') {
        return date.toLocaleDateString([], { month: 'short' });
      } else {
        return date.getFullYear().toString();
      }
    }),

datasets: [
    {
      label: 'Close Price',
      data: filteredData.map(item => item.close),
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      yAxisID: 'y'
    },
    {
      label: 'RSI',
      data: rsiData.map(item => item.rsi),
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
      yAxisID: 'y1'
    }
  ]
};

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Stock Price History - ${selectedRange}`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time Period'
        },
        ticks: {
          maxTicksLimit: 10
        }
      },

y: {
    type: 'linear',
    display: true,
    position: 'left',
    title: {
      display: true,
      text: 'Price'
    }
  },
  y1: {
    type: 'linear',
    display: true,
    position: 'right',
    title: {
      display: true,
      text: 'RSI'
    },
    min: 0,
    max: 100,
    grid: {
      drawOnChartArea: false
    }
  }
}
};
  return (
    <div>
      <select value={selectedRange} onChange={(e) => setSelectedRange(e.target.value)}>
        {timeRanges.map(range => (
          <option key={range.label} value={range.label}>{range.label}</option>
        ))}
      </select>
      <Line options={options} data={data} />
    </div>
  );
};

export default StockChart;
