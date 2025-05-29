import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DataTable from '../Common/DataTable';
import PurchaseModal from './PurchaseModal';

const PurchaseList = () => {
    const { purchases, deletePurchase } = useContext(AppContext);
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [selectedPurchase, setSelectedPurchase] = React.useState(null);

    const handleEdit = (purchase) => {
        setSelectedPurchase(purchase);
        setModalOpen(true);
    };

    const handleDelete = (id) => {
        deletePurchase(id);
    };

    const handleCloseModal = () => {
        setSelectedPurchase(null);
        setModalOpen(false);
    };

    return (
        <div>
            <h2>Purchase List</h2>
            <button onClick={() => setModalOpen(true)}>Add Purchase</button>
            <DataTable
                data={purchases}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            {isModalOpen && (
                <PurchaseModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    purchase={selectedPurchase}
                />
            )}
        </div>
    );
};

export default PurchaseList;