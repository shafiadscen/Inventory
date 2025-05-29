import React, { useContext, useState } from 'react';
import { Modal, Button, Form } from 'antd';
import { AppContext } from '../../context/AppContext';
import { Expense } from '../../context/types';

interface ExpenseModalProps {
  visible: boolean;
  onClose: () => void;
  expense?: Expense;
}

const ExpenseModal: React.FC<ExpenseModalProps> = ({ visible, onClose, expense }) => {
  const { addExpense, updateExpense } = useContext(AppContext);
  const [formData, setFormData] = useState<Expense>(
    expense || { date: '', transporter: '', containerNo: '', ctns: 0, rate: 0, amount: 0, paid: 0, balance: 0, status: '', comments: '', discount: 0 }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (expense) {
      updateExpense(formData);
    } else {
      addExpense(formData);
    }
    onClose();
  };

  return (
    <Modal
      title={expense ? 'Edit Expense' : 'Add Expense'}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>,
      ]}
    >
      <Form layout="vertical">
        <Form.Item label="Date">
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Transporter">
          <input type="text" name="transporter" value={formData.transporter} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Container No">
          <input type="text" name="containerNo" value={formData.containerNo} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="CTNs">
          <input type="number" name="ctns" value={formData.ctns} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Rate">
          <input type="number" name="rate" value={formData.rate} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Amount">
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Paid">
          <input type="number" name="paid" value={formData.paid} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Balance">
          <input type="number" name="balance" value={formData.balance} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Status">
          <input type="text" name="status" value={formData.status} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Comments">
          <textarea name="comments" value={formData.comments} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Discount">
          <input type="number" name="discount" value={formData.discount} onChange={handleChange} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ExpenseModal;