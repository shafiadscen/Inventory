import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'antd';
import { Customer } from '../../context/types';

interface CustomerModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (customer: Customer) => void;
  customer?: Customer;
}

const CustomerModal: React.FC<CustomerModalProps> = ({ visible, onClose, onSave, customer }) => {
  const [formData, setFormData] = useState<Customer>({
    id: customer ? customer.id : Date.now(),
    name: customer ? customer.name : '',
    email: customer ? customer.email : '',
    phone: customer ? customer.phone : '',
    address: customer ? customer.address : '',
  });

  useEffect(() => {
    if (customer) {
      setFormData(customer);
    } else {
      setFormData({ id: Date.now(), name: '', email: '', phone: '', address: '' });
    }
  }, [customer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal
      title={customer ? 'Edit Customer' : 'Add Customer'}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Save
        </Button>,
      ]}
    >
      <Form layout="vertical">
        <Form.Item label="Name">
          <input name="name" value={formData.name} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Email">
          <input name="email" value={formData.email} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Phone">
          <input name="phone" value={formData.phone} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Address">
          <input name="address" value={formData.address} onChange={handleChange} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CustomerModal;