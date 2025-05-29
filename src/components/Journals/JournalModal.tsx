import React, { useState } from 'react';
import { Modal, Button, Form } from 'antd';
import { Journal } from '../../context/types';

interface JournalModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (journal: Journal) => void;
  journal?: Journal;
}

const JournalModal: React.FC<JournalModalProps> = ({ visible, onClose, onSave, journal }) => {
  const [formData, setFormData] = useState<Journal>({
    date: journal?.date || '',
    description: journal?.description || '',
    amount: journal?.amount || 0,
    type: journal?.type || 'income',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal
      title={journal ? 'Edit Journal Entry' : 'Add Journal Entry'}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Save
        </Button>,
      ]}
    >
      <Form layout="vertical">
        <Form.Item label="Date">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Description">
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Amount">
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Type">
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default JournalModal;