import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Link } from 'react-router-dom';

const PlanCard = ({ sx }) => {
  const currentPlan = {
    name: 'Free Plan',
    period: 'Monthly',
    nextBilling: 'Jan 20, 2024'
  };

  return (
    <Card sx={sx}>
      <CardContent sx={{ height: '100%', pb: '32px !important', position: 'relative' }}>
        <Box display="flex" alignItems="center" mb={2}>
          <WorkspacePremiumIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
          <Typography variant="h5">Current Plan</Typography>
        </Box>
        <Typography variant="h3" color="primary" gutterBottom>
          {currentPlan.name}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {currentPlan.period} Plan
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Next billing: {currentPlan.nextBilling}
            </Typography>
          </Box>
          <Box>
            <Button 
            
            
              variant="outlined" 
              color="primary"
            >
              Upgrade Plan
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PlanCard;