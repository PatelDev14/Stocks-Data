import React from 'react';

const IncomeStatement = ({ incomeStatement }) => {
    if (!incomeStatement) return null; // Check if income statement is valid

    return (
        <div className="income-statement">
            <h2>Income Statement for {incomeStatement.symbol}</h2>
            <p><strong>Date:</strong> {incomeStatement.date}</p>
            <p><strong>Revenue:</strong> ${incomeStatement.revenue.toLocaleString()}</p>
            <p><strong>Cost of Revenue:</strong> ${incomeStatement.costOfRevenue.toLocaleString()}</p>
            <p><strong>Gross Profit:</strong> ${incomeStatement.grossProfit.toLocaleString()}</p>
            <p><strong>Operating Income:</strong> ${incomeStatement.operatingIncome.toLocaleString()}</p>
            <p><strong>Net Income:</strong> ${incomeStatement.netIncome.toLocaleString()}</p>
            <p><strong>Earnings Per Share (EPS):</strong> ${incomeStatement.eps}</p>
            <p><strong>Fiscal Year:</strong> {incomeStatement.calendarYear}</p>
            {/* Add more fields as needed */}
            <a href={incomeStatement.finalLink} target="_blank" rel="noopener noreferrer">View Full Report</a>
        </div>
    );
};

export default IncomeStatement;
