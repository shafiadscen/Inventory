import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DataTable from '../Common/DataTable';
import CustomerModal from './CustomerModal';

const CustomerList = () => {
    const { customers, addCustomer, editCustomer, deleteCustomer } = useContext(AppContext);
    const [selectedCustomer, setSelectedCustomer] = React.useState(null);
    const [modalOpen, setModalOpen] = React.useState(false);

    const handleAddEditCustomer = (customer) => {
        if (selectedCustomer) {
            editCustomer(customer);
        } else {
            addCustomer(customer);
        }
        setModalOpen(false);
        setSelectedCustomer(null);
    };

    const handleEdit = (customer) => {
        setSelectedCustomer(customer);
        setModalOpen(true);
    };

    const handleDelete = (id) => {
        deleteCustomer(id);
    };

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Phone', dataIndex: 'phone', key: 'phone' },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
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
            <DataTable data={customers} columns={columns} />
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