import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DataTable from '../Common/DataTable';
import CustomerModal from './CustomerModal';
import { Customer } from '../../context/types';

const CustomerList = () => {
    const { state, dispatch } = useContext(AppContext);
    const [selectedCustomer, setSelectedCustomer] = React.useState<Customer | null>(null);
    const [modalOpen, setModalOpen] = React.useState(false);

    const handleAddEditCustomer = (customer: Customer) => {
        if (selectedCustomer) {
            dispatch({ type: 'EDIT_CUSTOMER', payload: customer });
        } else {
            dispatch({ type: 'ADD_CUSTOMER', payload: customer });
        }
        setModalOpen(false);
        setSelectedCustomer(null);
    };

    const handleEdit = (customer: Customer) => {
        setSelectedCustomer(customer);
        setModalOpen(true);
    };

    const handleDelete = (id: number) => {
        dispatch({ type: 'DELETE_CUSTOMER', payload: id });
    };

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Phone', dataIndex: 'phone', key: 'phone' },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: unknown, record: Customer) => (
                <>
                    <button onClick={() => handleEdit(record)}>Edit</button>
                    <button onClick={() => handleDelete(record.id)}>Delete</button>
                </>
            ),
        },
    ];

    return (
        <div>
            <h2>Customer List</h2>
            <button onClick={() => setModalOpen(true)}>Add Customer</button>
            <DataTable data={state.customers} columns={columns} />
            {modalOpen && (
                <CustomerModal
                    visible={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleAddEditCustomer}
                    customer={selectedCustomer}
                />
            )}
        </div>
    );
};

export default CustomerList;