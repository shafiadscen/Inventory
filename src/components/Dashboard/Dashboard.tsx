import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Card, Grid, Typography } from '@mui/material';

const Dashboard = () => {
    const { state } = useAppContext();
    const { sales, purchases, stockItems, transactions } = state;

    const totalSales = sales.reduce((acc, sale) => acc + sale.amount, 0);
    const totalPurchases = purchases.reduce((acc, purchase) => acc + purchase.amount, 0);
    const totalStock = stockItems.reduce((acc, item) => acc + item.ctns, 0);
    const totalOutstanding = transactions
        .filter(transaction => transaction.type === 'expense')
        .reduce((acc, transaction) => acc + transaction.balance, 0);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <Typography variant="h5">Total Sales</Typography>
                    <Typography variant="h6">{totalSales.toFixed(2)}</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <Typography variant="h5">Total Purchases</Typography>
                    <Typography variant="h6">{totalPurchases.toFixed(2)}</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <Typography variant="h5">Total Stock</Typography>
                    <Typography variant="h6">{totalStock} containers</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <Typography variant="h5">Total Outstanding</Typography>
                    <Typography variant="h6">{totalOutstanding.toFixed(2)}</Typography>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Dashboard;