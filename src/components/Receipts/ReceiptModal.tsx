import React, { useState } from 'react';
import { Modal, Button, Form } from 'antd';
import { Receipt } from '../../context/types';

interface ReceiptModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (receipt: Receipt) => void;
  initialData?: Receipt;
}

const ReceiptModal: React.FC<ReceiptModalProps> = ({ visible, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState<Receipt>(initialData || {
    date: '',
    amount: 0,
    comments: '',
    status: 'Pending',
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
      title={initialData ? 'Edit Receipt' : 'Add Receipt'}
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
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Amount">
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Comments">
          <textarea name="comments" value={formData.comments} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Status">
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ReceiptModal;