import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import CustomerList from './components/Customers/CustomerList';
import SupplierList from './components/Suppliers/SupplierList';
import ItemList from './components/Items/ItemList';
import PurchaseList from './components/Purchases/PurchaseList';
import SalesList from './components/Sales/SalesList';
import ReceiptList from './components/Receipts/ReceiptList';
import PaymentList from './components/Payments/PaymentList';
import ExpenseList from './components/Expenses/ExpenseList';
import JournalList from './components/Journals/JournalList';
import StockList from './components/Stock/StockList';
import TransactionSummary from './components/Transactions/TransactionSummary';
import ExportData from './components/Export/ExportData';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/customers" component={CustomerList} />
                <Route path="/suppliers" component={SupplierList} />
                <Route path="/items" component={ItemList} />
                <Route path="/purchases" component={PurchaseList} />
                <Route path="/sales" component={SalesList} />
                <Route path="/receipts" component={ReceiptList} />
                <Route path="/payments" component={PaymentList} />
                <Route path="/expenses" component={ExpenseList} />
                <Route path="/journals" component={JournalList} />
                <Route path="/stock" component={StockList} />
                <Route path="/transactions" component={TransactionSummary} />
                <Route path="/export" component={ExportData} />
            </Switch>
        </Router>
    );
};

export default Routes;