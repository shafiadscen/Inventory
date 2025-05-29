# Small Business Accounting and Inventory App

This is a React-based web application designed for small business accounting and inventory management. The application is built to work entirely offline, storing all data locally using React state and browser LocalStorage.

## Features

- **Dashboard**: View summaries of sales, purchases, stock, and outstanding amounts.
- **Customers**: Manage customer information with options to add, edit, and delete.
- **Suppliers**: Manage supplier information with options to add, edit, and delete.
- **Items/Products**: Manage product information with options to add, edit, and delete.
- **Purchase Entries**: Record purchase details including date, transporter, container number, and more.
- **Sales Entries**: Record sales details including bill number, customer, supplier, and more.
- **Receipts/Payments/Expenses/Journals**: Manage financial records with add, edit, and delete functionality.
- **Stock Management**: Monitor stock levels container-wise with running balances.
- **Transactions Summary**: View all transactions with a running balance.
- **Search/Filter**: Easily search and filter through all tables.
- **Export Data**: Optionally export data as CSV/Excel.

## Technologies Used

- React
- TypeScript
- Material UI or Ant Design (for UI components)
- LocalStorage for data persistence

## Getting Started

To run the application locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd small-business-accounting-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Start the application**:
   ```
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Project Structure

```
small-business-accounting-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Dashboard
│   │   │   └── Dashboard.tsx
│   │   ├── Customers
│   │   │   ├── CustomerList.tsx
│   │   │   └── CustomerModal.tsx
│   │   ├── Suppliers
│   │   │   ├── SupplierList.tsx
│   │   │   └── SupplierModal.tsx
│   │   ├── Items
│   │   │   ├── ItemList.tsx
│   │   │   └── ItemModal.tsx
│   │   ├── Purchases
│   │   │   ├── PurchaseList.tsx
│   │   │   └── PurchaseModal.tsx
│   │   ├── Sales
│   │   │   ├── SalesList.tsx
│   │   │   └── SalesModal.tsx
│   │   ├── Receipts
│   │   │   ├── ReceiptList.tsx
│   │   │   └── ReceiptModal.tsx
│   │   ├── Payments
│   │   │   ├── PaymentList.tsx
│   │   │   └── PaymentModal.tsx
│   │   ├── Expenses
│   │   │   ├── ExpenseList.tsx
│   │   │   └── ExpenseModal.tsx
│   │   ├── Journals
│   │   │   ├── JournalList.tsx
│   │   │   └── JournalModal.tsx
│   │   ├── Stock
│   │   │   └── StockList.tsx
│   │   ├── Transactions
│   │   │   └── TransactionSummary.tsx
│   │   ├── Export
│   │   │   └── ExportData.tsx
│   │   └── Common
│   │       ├── DataTable.tsx
│   │       ├── SearchBar.tsx
│   │       └── Layout.tsx
│   ├── context
│   │   ├── AppContext.tsx
│   │   └── types.ts
│   ├── hooks
│   │   └── useLocalStorage.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── routes.tsx
│   └── theme.ts
├── package.json
├── tsconfig.json
└── README.md
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.