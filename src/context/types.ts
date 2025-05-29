export interface Customer {
    id: number;
    name: string;
    contact: string;
    email: string;
    address: string;
}

export interface Supplier {
    id: number;
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

export interface StockItem {
    id: string;
    containerNo: string;
    ctns: number;
    rate: number;
    amount: number;
    balance: number;
    status: string;
    comments: string;
}

export interface AppState {
    customers: Customer[];
    suppliers: Supplier[];
    items: Item[];
    purchases: Purchase[];
    sales: Sale[];
    receipts: Receipt[];
    payments: Payment[];
    expenses: Expense[];
    journals: Journal[];
    transactions: Transaction[];
    stockItems: StockItem[];
}

export type AppAction =
    | { type: 'ADD_CUSTOMER'; payload: Customer }
    | { type: 'EDIT_CUSTOMER'; payload: Customer }
    | { type: 'DELETE_CUSTOMER'; payload: number }
    | { type: 'ADD_SUPPLIER'; payload: Supplier }
    | { type: 'EDIT_SUPPLIER'; payload: Supplier }
    | { type: 'DELETE_SUPPLIER'; payload: number }
    | { type: 'ADD_ITEM'; payload: Item }
    | { type: 'EDIT_ITEM'; payload: Item }
    | { type: 'DELETE_ITEM'; payload: string }
    | { type: 'ADD_PURCHASE'; payload: Purchase }
    | { type: 'EDIT_PURCHASE'; payload: Purchase }
    | { type: 'DELETE_PURCHASE'; payload: string }
    | { type: 'ADD_SALE'; payload: Sale }
    | { type: 'EDIT_SALE'; payload: Sale }
    | { type: 'DELETE_SALE'; payload: string }
    | { type: 'ADD_RECEIPT'; payload: Receipt }
    | { type: 'EDIT_RECEIPT'; payload: Receipt }
    | { type: 'DELETE_RECEIPT'; payload: string }
    | { type: 'ADD_PAYMENT'; payload: Payment }
    | { type: 'EDIT_PAYMENT'; payload: Payment }
    | { type: 'DELETE_PAYMENT'; payload: string }
    | { type: 'ADD_EXPENSE'; payload: Expense }
    | { type: 'EDIT_EXPENSE'; payload: Expense }
    | { type: 'DELETE_EXPENSE'; payload: string }
    | { type: 'ADD_JOURNAL'; payload: Journal }
    | { type: 'EDIT_JOURNAL'; payload: Journal }
    | { type: 'DELETE_JOURNAL'; payload: string }
    | { type: 'ADD_TRANSACTION'; payload: Transaction }
    | { type: 'DELETE_TRANSACTION'; payload: string }
    | { type: 'ADD_STOCK_ITEM'; payload: StockItem }
    | { type: 'EDIT_STOCK_ITEM'; payload: StockItem }
    | { type: 'DELETE_STOCK_ITEM'; payload: string };

export const initialState: AppState = {
    customers: [],
    suppliers: [],
    items: [],
    purchases: [],
    sales: [],
    receipts: [],
    payments: [],
    expenses: [],
    journals: [],
    transactions: [],
    stockItems: []
};

export const appReducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return { ...state, customers: [...state.customers, action.payload] };
        case 'EDIT_CUSTOMER':
            return {
                ...state,
                customers: state.customers.map(customer =>
                    customer.id === action.payload.id ? action.payload : customer
                )
            };
        case 'DELETE_CUSTOMER':
            return {
                ...state,
                customers: state.customers.filter(customer => customer.id !== action.payload)
            };
        // Add similar cases for other actions
        default:
            return state;
    }
};