import React, { useState } from 'react';
import { Modal, Button, Form } from 'antd';
import { Supplier } from '../../context/types';

interface SupplierModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (supplier: Supplier) => void;
  supplier?: Supplier;
}

const SupplierModal: React.FC<SupplierModalProps> = ({ visible, onClose, onSave, supplier }) => {
  const [name, setName] = useState(supplier ? supplier.name : '');
  const [contact, setContact] = useState(supplier ? supplier.contact : '');
  const [address, setAddress] = useState(supplier ? supplier.address : '');

  const handleSubmit = () => {
    const newSupplier: Supplier = {
      id: supplier ? supplier.id : Date.now(),
      name,
      contact,
      address,
    };
    onSave(newSupplier);
    onClose();
  };

  return (
    <Modal
      title={supplier ? 'Edit Supplier' : 'Add Supplier'}
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
        <Form.Item label="Supplier Name">
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Contact">
          <input value={contact} onChange={(e) => setContact(e.target.value)} />
        </Form.Item>
        <Form.Item label="Address">
          <input value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SupplierModal;