import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, Button } from '@mui/material';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CreditBundles from '../../billing/CreditBundles';

const CreditCard = ({ sx }) => {
  const [openBundles, setOpenBundles] = useState(false);
  const totalCredits = 500;
  const usedCredits = 120;
  const remainingCredits = totalCredits - usedCredits;
  const progress = (usedCredits / totalCredits) * 100;

  const handleOpenBundles = () => {
    setOpenBundles(true);
  };

  const handleCloseBundles = () => {
    setOpenBundles(false);
  };

  return (
    <Card sx={sx}>
      <CardContent sx={{ height: '100%', pb: '32px !important', position: 'relative' }}>
        <Box display="flex" alignItems="center" mb={2}>
          <CreditScoreIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
          <Typography variant="h5">Credits</Typography>
        </Box>
        <Typography variant="h3" color="primary" gutterBottom>
          {remainingCredits}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {usedCredits} credits used out of {totalCredits}
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ mb: 2, borderRadius: 1 }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="body2" color="textSecondary">
            Once the usage limit is reached, you can purchase further credit.
          </Typography>
          <Box>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleOpenBundles}
            >
              Add credits
            </Button>
          </Box>
        </Box>
      </CardContent>
      <CreditBundles open={openBundles} onClose={handleCloseBundles} />
    </Card>
  );
};

export default CreditCard;