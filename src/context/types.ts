export interface Customer {
    id: string;
    name: string;
    contact: string;
    email: string;
    address: string;
}

export interface Supplier {
    id: string;
    name: string;
    contact: string;
    email: string;
    address: string;
}

export interface Item {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface Purchase {
    id: string;
    date: string;
    transporter: string;
    containerNo: string;
    ctns: number;
    rate: number;
    amount: number;
    paid: number;
    balance: number;
    status: string;
    comments: string;
    discount: number;
}

export interface Sale {
    id: string;
    billNo: string;
    date: string;
    customerId: string;
    supplierId: string;
    location: string;
    ctns: number;
    pcs: number;
    size: string;
    price: number;
    amount: number;
    truckNo: string;
    paid: number;
    balance: number;
    status: string;
    refNo: string;
}

export interface Receipt {
    id: string;
    date: string;
    amount: number;
    method: string;
    comments: string;
}

export interface Payment {
    id: string;
    date: string;
    amount: number;
    method: string;
    comments: string;
}

export interface Expense {
    id: string;
    date: string;
    amount: number;
    category: string;
    comments: string;
}

export interface Journal {
    id: string;
    date: string;
    description: string;
    amount: number;
}

export interface Transaction {
    id: string;
    date: string;
    type: 'income' | 'expense';
    amount: number;
    balance: number;
}