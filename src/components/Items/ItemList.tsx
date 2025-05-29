import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DataTable from '../Common/DataTable';
import ItemModal from './ItemModal';
import { Button } from '@mui/material';

const ItemList = () => {
    const { items, deleteItem } = useContext(AppContext);
    const [openModal, setOpenModal] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);

    const handleEdit = (item) => {
        setSelectedItem(item);
        setOpenModal(true);
    };

    const handleDelete = (id) => {
        deleteItem(id);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedItem(null);
    };

    return (
        <div>
            <h2>Items</h2>
            <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
                Add Item
            </Button>
            <DataTable
                data={items}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            {openModal && (
                <ItemModal
                    open={openModal}
                    onClose={handleCloseModal}
                    item={selectedItem}
                />
            )}
        </div>
    );
};

export default ItemList;