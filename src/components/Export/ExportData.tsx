import React from 'react';
import { Button } from '@mui/material';

const ExportData: React.FC = () => {
    const handleExport = () => {
        // Logic to export data as CSV or Excel
        console.log('Exporting data...');
    };

    return (
        <div>
            <h2>Export Data</h2>
            <Button variant="contained" color="primary" onClick={handleExport}>
                Export as CSV
            </Button>
        </div>
    );
};

export default ExportData;