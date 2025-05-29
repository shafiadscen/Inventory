import React from 'react';
import { Table } from 'antd';

interface DataTableProps {
  columns: any[];
  data: any[];
  loading?: boolean;
  onRowClick?: (record: any) => void;
}

const DataTable: React.FC<DataTableProps> = ({ columns, data, loading, onRowClick }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      onRow={record => ({
        onClick: () => onRowClick && onRowClick(record),
      })}
      rowKey="id" // Assuming each data item has a unique 'id' field
    />
  );
};

export default DataTable;