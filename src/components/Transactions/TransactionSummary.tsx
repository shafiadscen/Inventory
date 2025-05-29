import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Card, Grid, Typography } from '@mui/material';

const TransactionSummary = () => {
    const { transactions } = useContext(AppContext);

    const totalIncome = transactions
        .filter(transaction => transaction.type === 'income')
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalExpenses = transactions
        .filter(transaction => transaction.type === 'expense')
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const runningBalance = totalIncome - totalExpenses;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <Typography variant="h6">Total Income</Typography>
                    <Typography variant="h4">${totalIncome.toFixed(2)}</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <Typography variant="h6">Total Expenses</Typography>
                    <Typography variant="h4">${totalExpenses.toFixed(2)}</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <Typography variant="h6">Running Balance</Typography>
                    <Typography variant="h4">${runningBalance.toFixed(2)}</Typography>
                </Card>
            </Grid>
        </Grid>
    );
};

export default TransactionSummary;