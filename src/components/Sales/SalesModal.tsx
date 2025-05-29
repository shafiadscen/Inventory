import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'antd';
import { SalesEntry } from '../../context/types';

interface SalesModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (entry: SalesEntry) => void;
    initialData?: SalesEntry;
}

const SalesModal: React.FC<SalesModalProps> = ({ visible, onClose, onSave, initialData }) => {
    const [formData, setFormData] = useState<SalesEntry>({
        billNo: '',
        date: '',
        customer: '',
        supplier: '',
        location: '',
        ctns: 0,
        pcs: 0,
        size: '',
        price: 0,
        amount: 0,
        truckNo: '',
        paid: 0,
        balance: 0,
        status: '',
        refNo: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

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
            title={initialData ? 'Edit Sales Entry' : 'Add Sales Entry'}
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
                <Form.Item label="Bill No">
                    <input name="billNo" value={formData.billNo} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Date">
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Customer">
                    <input name="customer" value={formData.customer} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Supplier">
                    <input name="supplier" value={formData.supplier} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Location">
                    <input name="location" value={formData.location} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="CTNs">
                    <input type="number" name="ctns" value={formData.ctns} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Pcs">
                    <input type="number" name="pcs" value={formData.pcs} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Size">
                    <input name="size" value={formData.size} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Price">
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Amount">
                    <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Truck No">
                    <input name="truckNo" value={formData.truckNo} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Paid">
                    <input type="number" name="paid" value={formData.paid} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Balance">
                    <input type="number" name="balance" value={formData.balance} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Status">
                    <input name="status" value={formData.status} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Reference No">
                    <input name="refNo" value={formData.refNo} onChange={handleChange} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default SalesModal;