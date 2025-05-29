import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DataTable from '../Common/DataTable';
import PaymentModal from './PaymentModal';

const PaymentList = () => {
    const { payments, deletePayment } = useContext(AppContext);
    const [selectedPayment, setSelectedPayment] = React.useState(null);
    const [isModalOpen, setModalOpen] = React.useState(false);

    const handleEdit = (payment) => {
        setSelectedPayment(payment);
        setModalOpen(true);
    };

    const handleDelete = (id) => {
        deletePayment(id);
    };

    const handleModalClose = () => {
        setSelectedPayment(null);
        setModalOpen(false);
    };

    return (
        <div>
            <h2>Payments</h2>
            <DataTable
                data={payments}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            {isModalOpen && (
                <PaymentModal
                    payment={selectedPayment}
                    onClose={handleModalClose}
                />
            )}
        </div>
    );
};

export default PaymentList;