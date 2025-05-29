import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DataTable from '../Common/DataTable';
import JournalModal from './JournalModal';

const JournalList = () => {
    const { journals, deleteJournal } = useContext(AppContext);
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [selectedJournal, setSelectedJournal] = React.useState(null);

    const handleEdit = (journal) => {
        setSelectedJournal(journal);
        setModalOpen(true);
    };

    const handleDelete = (id) => {
        deleteJournal(id);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedJournal(null);
    };

    return (
        <div>
            <h2>Journal Entries</h2>
            <button onClick={() => setModalOpen(true)}>Add Journal Entry</button>
            <DataTable
                data={journals}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <JournalModal
                open={isModalOpen}
                onClose={handleCloseModal}
                journal={selectedJournal}
            />
        </div>
    );
};

export default JournalList;