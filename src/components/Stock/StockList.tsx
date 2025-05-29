import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DataTable from '../Common/DataTable';
import SearchBar from '../Common/SearchBar';
import { StockItem } from '../../context/types';

const StockList: React.FC = () => {
    const { stockItems, deleteStockItem } = useContext(AppContext);
    const [searchTerm, setSearchTerm] = React.useState('');

    const filteredStockItems = stockItems.filter((item: StockItem) =>
        item.containerNo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id: number) => {
        deleteStockItem(id);
    };

    return (
        <div>
            <h2>Stock Management</h2>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <DataTable
                data={filteredStockItems}
                onDelete={handleDelete}
                columns={[
                    { title: 'Container No', field: 'containerNo' },
                    { title: 'CTNs', field: 'ctns' },
                    { title: 'Rate', field: 'rate' },
                    { title: 'Amount', field: 'amount' },
                    { title: 'Balance', field: 'balance' },
                    { title: 'Status', field: 'status' },
                    { title: 'Comments', field: 'comments' },
                ]}
            />
        </div>
    );
};

export default StockList;