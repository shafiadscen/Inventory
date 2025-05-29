import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'antd';
import { Item } from '../../context/types';

interface ItemModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (item: Item) => void;
  itemToEdit?: Item;
}

const ItemModal: React.FC<ItemModalProps> = ({ visible, onClose, onSave, itemToEdit }) => {
  const [form] = Form.useForm();
  
  useEffect(() => {
    if (itemToEdit) {
      form.setFieldsValue(itemToEdit);
    } else {
      form.resetFields();
    }
  }, [itemToEdit, form]);

  const handleFinish = (values: Item) => {
    onSave(values);
    onClose();
  };

  return (
    <Modal
      title={itemToEdit ? 'Edit Item' : 'Add Item'}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={() => form.submit()}>
          Save
        </Button>,
      ]}
    >
      <Form form={form} onFinish={handleFinish}>
        <Form.Item
          name="name"
          label="Item Name"
          rules={[{ required: true, message: 'Please input the item name!' }]}
        >
          <input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
        >
          <input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Please input the price!' }]}
        >
          <input type="number" />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[{ required: true, message: 'Please input the quantity!' }]}
        >
          <input type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ItemModal;