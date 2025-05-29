import React from 'react';
import { Container } from '@mui/material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Container maxWidth="lg">
            {children}
        </Container>
    );
};

export default Layout;