import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const CheckoutLayout = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <Outlet />
    </Box>
  );
};

export default CheckoutLayout;
