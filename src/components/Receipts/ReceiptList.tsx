import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DataTable from '../Common/DataTable';
import ReceiptModal from './ReceiptModal';

const ReceiptList = () => {
    const { receipts, deleteReceipt } = useContext(AppContext);
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [selectedReceipt, setSelectedReceipt] = React.useState(null);

    const handleEdit = (receipt) => {
        setSelectedReceipt(receipt);
        setModalOpen(true);
    };

    const handleDelete = (id) => {
        deleteReceipt(id);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedReceipt(null);
    };

    return (
        <div>
            <h2>Receipts</h2>
            <DataTable
                data={receipts}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            {isModalOpen && (
                <ReceiptModal
                    open={isModalOpen}
                    onClose={handleCloseModal}
                    receipt={selectedReceipt}
                />
            )}
        </div>
    );
};

export default ReceiptList;