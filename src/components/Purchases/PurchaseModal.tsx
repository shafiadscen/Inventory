import React, { useContext, useState } from 'react';
import { Modal, Button, Form } from 'antd';
import { AppContext } from '../../context/AppContext';
import { Purchase } from '../../context/types';

interface PurchaseModalProps {
  visible: boolean;
  onClose: () => void;
  purchase?: Purchase;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ visible, onClose, purchase }) => {
  const { addPurchase, updatePurchase } = useContext(AppContext);
  const [formData, setFormData] = useState<Purchase>({
    date: purchase?.date || '',
    transporter: purchase?.transporter || '',
    containerNo: purchase?.containerNo || '',
    ctns: purchase?.ctns || 0,
    rate: purchase?.rate || 0,
    amount: purchase?.amount || 0,
    paid: purchase?.paid || 0,
    balance: purchase?.balance || 0,
    status: purchase?.status || '',
    comments: purchase?.comments || '',
    discount: purchase?.discount || 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (purchase) {
      updatePurchase(purchase.id, formData);
    } else {
      addPurchase(formData);
    }
    onClose();
  };

  return (
    <Modal
      title={purchase ? 'Edit Purchase' : 'Add Purchase'}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
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
          <input type="text" name="comments" value={formData.comments} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Discount">
          <input type="number" name="discount" value={formData.discount} onChange={handleChange} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PurchaseModal;