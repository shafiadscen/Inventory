import React from 'react';
import { useAppContext } from '../../context/AppContext';
import DataTable from '../Common/DataTable';
import SearchBar from '../Common/SearchBar';
import { StockItem } from '../../context/types';

const StockList: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const [searchTerm, setSearchTerm] = React.useState('');

    const filteredStockItems = state.stockItems.filter((item: StockItem) =>
        item.containerNo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id: string) => {
        dispatch({ type: 'DELETE_STOCK_ITEM', payload: id });
    };

    const columns = [
        { title: 'Container No', dataIndex: 'containerNo' },
        { title: 'CTNs', dataIndex: 'ctns' },
        { title: 'Rate', dataIndex: 'rate' },
        { title: 'Amount', dataIndex: 'amount' },
        { title: 'Balance', dataIndex: 'balance' },
        { title: 'Status', dataIndex: 'status' },
        { title: 'Comments', dataIndex: 'comments' },
    ];

    return (
        <div>
            <h2>Stock Management</h2>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <DataTable
                data={filteredStockItems}
                columns={columns}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default StockList;