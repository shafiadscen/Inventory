import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DataTable from '../Common/DataTable';
import SalesModal from './SalesModal';
import { Button } from '@mui/material';

const SalesList = () => {
    const { sales, setSales } = useContext(AppContext);
    const [open, setOpen] = React.useState(false);
    const [selectedSale, setSelectedSale] = React.useState(null);

    const handleOpen = (sale = null) => {
        setSelectedSale(sale);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedSale(null);
    };

    const handleDelete = (id) => {
        setSales(sales.filter(sale => sale.id !== id));
    };

    const columns = [
        { title: 'Bill No', field: 'billNo' },
        { title: 'Date', field: 'date' },
        { title: 'Customer', field: 'customer' },
        { title: 'Supplier', field: 'supplier' },
        { title: 'Location', field: 'location' },
        { title: 'CTNs', field: 'ctns' },
        { title: 'Pcs', field: 'pcs' },
        { title: 'Size', field: 'size' },
        { title: 'Price', field: 'price' },
        { title: 'Amount', field: 'amount' },
        { title: 'Truck No', field: 'truckNo' },
        { title: 'Paid', field: 'paid' },
        { title: 'Balance', field: 'balance' },
        { title: 'Status', field: 'status' },
        { title: 'Ref No', field: 'refNo' },
        {
            title: 'Actions',
            render: (rowData) => (
                <div>
                    <Button onClick={() => handleOpen(rowData)}>Edit</Button>
                    <Button onClick={() => handleDelete(rowData.id)}>Delete</Button>
                </div>
            )
        }
    ];

    return (
        <div>
            <h2>Sales List</h2>
            <Button variant="contained" color="primary" onClick={() => handleOpen()}>Add Sale</Button>
            <DataTable columns={columns} data={sales} />
            <SalesModal open={open} onClose={handleClose} sale={selectedSale} />
        </div>
    );
};

export default SalesList;