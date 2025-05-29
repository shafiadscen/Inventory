import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DataTable from '../Common/DataTable';
import ExpenseModal from './ExpenseModal';

const ExpenseList = () => {
    const { expenses, deleteExpense } = useContext(AppContext);
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [selectedExpense, setSelectedExpense] = React.useState(null);

    const handleEdit = (expense) => {
        setSelectedExpense(expense);
        setModalOpen(true);
    };

    const handleDelete = (id) => {
        deleteExpense(id);
    };

    const handleCloseModal = () => {
        setSelectedExpense(null);
        setModalOpen(false);
    };

    return (
        <div>
            <h2>Expense List</h2>
            <DataTable
                data={expenses}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <ExpenseModal
                open={isModalOpen}
                onClose={handleCloseModal}
                expense={selectedExpense}
            />
        </div>
    );
};

export default ExpenseList;