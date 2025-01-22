import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  useTheme,
  Box,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const PricingCard = ({ title, price, queryLimit, overageCharges, features, buttonText, isPopular, onClick }) => {
  const theme = useTheme();
  
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        boxShadow: 'none',
        mt: 0
      }}
    >
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h3" component="div" gutterBottom color="primary.main" sx={{ fontWeight: 600 }}>
          £{price}
          <Typography variant="subtitle1" component="span" color="text.secondary">
            /month
          </Typography>
        </Typography>
        <Divider sx={{ my: 2 }} />
        <List sx={{ flexGrow: 1 }}>
          <ListItem sx={{ px: 0 }}>
            <ListItemText 
              primary={<Typography variant="subtitle1"><strong>{queryLimit.toLocaleString()}</strong> queries per month</Typography>}
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText 
              primary={
                <Typography variant="subtitle1">
                  {overageCharges === 'Custom' ? 'Custom overage charges' : `£${overageCharges} per 100 queries overage`}
                </Typography>
              }
            />
          </ListItem>
          {features?.map((feature, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <CheckIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
        <Button
          variant={isPopular ? "contained" : "outlined"}
          color="primary"
          fullWidth
          onClick={onClick}
          sx={{ 
            mt: 2,
            textTransform: 'none',
            py: 1
          }}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

const Billing = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleOpenCheckout = (plan) => {
    onClose();
    navigate('/checkout', { state: { plan } });
  };

  const plans = [
    {
      title: 'Starter',
      price: '200',
      queryLimit: 1000,
      overageCharges: '25',
      features: [
        'Basic features',
        'Email support',
      ],
      buttonText: 'Choose Starter',
    },
    {
      title: 'Professional',
      price: '500',
      queryLimit: 5000,
      overageCharges: '20',
      features: [
        'Advanced features',
        'Priority support',
        'API access',
      ],
      buttonText: 'Choose Professional',
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: '1000',
      queryLimit: 20000,
      overageCharges: '15',
      features: [
        'All features',
        '24/7 support',
        'Dedicated account manager',
        'Custom integrations',
      ],
      buttonText: 'Choose Enterprise',
    },
    {
      title: 'Custom',
      price: 'Custom',
      queryLimit: 50000,
      overageCharges: 'Custom',
      features: [
        'All features',
        'White-glove support',
        'Custom development',
        'On-premise deployment',
      ],
      buttonText: 'Contact Sales',
    },
  ];

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="xl"
      fullWidth
    >
      <DialogTitle sx={{ pt: 5, pl: 6 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h2">Plans</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
          Flexible plans for your business
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ p: 6, pb: 6, mt: 2 }}>
        <Grid container spacing={3}>
          {plans.map((plan, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              lg={3} 
              key={index} 
              sx={{ 
                display: 'flex',
                '& > *': {
                  width: '100%'
                }
              }}
            >
              <PricingCard {...plan} onClick={() => handleOpenCheckout(plan)} />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default Billing;
