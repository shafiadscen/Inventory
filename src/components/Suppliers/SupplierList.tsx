import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DataTable from '../Common/DataTable';
import SupplierModal from './SupplierModal';

const SupplierList = () => {
    const { suppliers, addSupplier, editSupplier, deleteSupplier } = useContext(AppContext);
    const [selectedSupplier, setSelectedSupplier] = React.useState(null);
    const [modalOpen, setModalOpen] = React.useState(false);

    const handleAddEditSupplier = (supplier) => {
        if (selectedSupplier) {
            editSupplier(supplier);
        } else {
            addSupplier(supplier);
        }
        setModalOpen(false);
        setSelectedSupplier(null);
    };

    const handleEdit = (supplier) => {
        setSelectedSupplier(supplier);
        setModalOpen(true);
    };

    const handleDelete = (id) => {
        deleteSupplier(id);
    };

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Contact', dataIndex: 'contact', key: 'contact' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, supplier) => (
                <>
                    <button onClick={() => handleEdit(supplier)}>Edit</button>
                    <button onClick={() => handleDelete(supplier.id)}>Delete</button>
                </>
            ),
        },
    ];

    return (
        <div>
            <h2>Supplier List</h2>
            <button onClick={() => setModalOpen(true)}>Add Supplier</button>
            <DataTable data={suppliers} columns={columns} />
            {modalOpen && (
                <SupplierModal
                    supplier={selectedSupplier}
                    onClose={() => {
                        setModalOpen(false);
                        setSelectedSupplier(null);
                    }}
                    onSubmit={handleAddEditSupplier}
                />
            )}
        </div>
    );
};

export default SupplierList;