import React, { useContext, useState } from 'react';
import { Modal, Button, Form } from 'antd';
import { AppContext } from '../../context/AppContext';
import { Payment } from '../../context/types';

const PaymentModal = ({ visible, onClose, payment }) => {
    const { addPayment, updatePayment } = useContext(AppContext);
    const [formData, setFormData] = useState<Payment>(payment || {
        id: '',
        date: '',
        amount: 0,
        method: '',
        comments: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        if (payment) {
            updatePayment(formData);
        } else {
            addPayment(formData);
        }
        onClose();
    };

    return (
        <Modal
            title={payment ? 'Edit Payment' : 'Add Payment'}
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
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
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
                <Form.Item label="Payment Method">
                    <input
                        type="text"
                        name="method"
                        value={formData.method}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item label="Comments">
                    <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default PaymentModal;