import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondary,
  IconButton,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Billing from '../billing/Billing';

const MyBilling = () => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [billingDialogOpen, setBillingDialogOpen] = useState(false);
  const [paymentForm, setPaymentForm] = useState({
    cardNumber: '',
    nameOnCard: '',
    country: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    state: '',
    setAsDefault: false,
  });

  const paymentMethods = [
    { id: 1, type: 'Visa', last4: '4242', expiry: '12/24' },
    { id: 2, type: 'Mastercard', last4: '8888', expiry: '06/25' },
  ];

  const billingHistory = [
    { id: 1, date: '2023-12-15', amount: '£400.00', description: 'Growth Plan - Monthly', status: 'Paid' },
    { id: 2, date: '2023-11-15', amount: '£400.00', description: 'Growth Plan - Monthly', status: 'Paid' },
    { id: 3, date: '2023-10-15', amount: '£400.00', description: 'Growth Plan - Monthly', status: 'Paid' },
  ];

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setPaymentForm(prev => ({
      ...prev,
      [name]: name === 'setAsDefault' ? checked : value
    }));
  };

  const handleAddPayment = () => {
    // Handle payment method addition here
    console.log('Adding payment method:', paymentForm);
    setDialogOpen(false);
    setPaymentForm({
      cardNumber: '',
      nameOnCard: '',
      country: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      postalCode: '',
      state: '',
      setAsDefault: false,
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" sx={{ mb: 3, ml: 1.2 }}>
        My Billing
      </Typography>
      
      <Grid container spacing={3}>
        {/* Billing Overview */}
        <Grid item xs={12}>
          <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Box display="flex" alignItems="center">
                  <AccountBalanceIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
                  <Typography variant="h5">Billing Overview</Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ textTransform: 'none' }}
                  onClick={() => setBillingDialogOpen(true)}
                >
                  Upgrade plan
                </Button>
              </Box>
              <Divider sx={{ mb: 3 }} />
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle2" color="textSecondary">Current Plan</Typography>
                  <Typography variant="h6">Growth Plan</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle2" color="textSecondary">Next Payment</Typography>
                  <Typography variant="h6">£400.00 on Jan 15, 2024</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle2" color="textSecondary">Billing Cycle</Typography>
                  <Typography variant="h6">Monthly</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Billing History */}
        <Grid item xs={12} md={6}>
          <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <ReceiptIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
                <Typography variant="h5">Billing History</Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />
              
              <List>
                {billingHistory.map((item) => (
                  <ListItem
                    key={item.id}
                    sx={{
                      px: 0,
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                      '&:last-child': { borderBottom: 'none' },
                      cursor: 'pointer',
                      '&:hover': {
                        bgcolor: 'action.hover'
                      }
                    }}
                    onClick={() => navigate(`/app/my-billing/${item.id}`)}
                  >
                    <ListItemText
                      primary={item.description}
                      secondary={new Date(item.date).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    />
                    <Typography variant="body2" color="textSecondary">
                      {item.amount}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Payment Methods */}
        <Grid item xs={12} md={6}>
          <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <PaymentIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
                <Typography variant="h5">Payment Methods</Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />
              
              <List>
                {paymentMethods.map((method) => (
                  <ListItem
                    key={method.id}
                    secondaryAction={
                      <IconButton edge="end" size="small">
                        <DeleteIcon />
                      </IconButton>
                    }
                    sx={{ px: 0 }}
                  >
                    <ListItemText
                      primary={`${method.type} ending in ${method.last4}`}
                      secondary={`Expires ${method.expiry}`}
                    />
                  </ListItem>
                ))}
              </List>
              
              <Button
                variant="outlined"
                sx={{ mt: 2, textTransform: 'none' }}
                onClick={() => setDialogOpen(true)}
              >
                Add payment method
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Add Payment Method Dialog */}
      <Dialog 
        open={dialogOpen} 
        onClose={() => setDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Add payment method</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Add your credit card details below. This card will be saved to your account and can be removed at any time.
          </Typography>

          <Typography variant="subtitle2" gutterBottom>Card information</Typography>
          <TextField
            fullWidth
            placeholder="Card number                                                MM / YY  CVC"
            name="cardNumber"
            value={paymentForm.cardNumber}
            onChange={handleInputChange}
            sx={{ mb: 3 }}
          />

          <Typography variant="subtitle2" gutterBottom>Name on card</Typography>
          <TextField
            fullWidth
            name="nameOnCard"
            value={paymentForm.nameOnCard}
            onChange={handleInputChange}
            sx={{ mb: 3 }}
          />

          <Typography variant="subtitle2" gutterBottom>Billing address</Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select
              name="country"
              value={paymentForm.country}
              onChange={handleInputChange}
              displayEmpty
              renderValue={value => value || 'Country'}
            >
              <MenuItem value="UK">United Kingdom</MenuItem>
              <MenuItem value="US">United States</MenuItem>
              {/* Add more countries as needed */}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            placeholder="Address line 1"
            name="addressLine1"
            value={paymentForm.addressLine1}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            placeholder="Address line 2"
            name="addressLine2"
            value={paymentForm.addressLine2}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                placeholder="City"
                name="city"
                value={paymentForm.city}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                placeholder="Postal code"
                name="postalCode"
                value={paymentForm.postalCode}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <TextField
            fullWidth
            placeholder="State, county, province, or region"
            name="state"
            value={paymentForm.state}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />

          <FormControlLabel
            control={
              <Checkbox
                name="setAsDefault"
                checked={paymentForm.setAsDefault}
                onChange={handleInputChange}
              />
            }
            label="Set as default payment method"
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={() => setDialogOpen(false)}
            sx={{ textTransform: 'none' }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleAddPayment}
            sx={{ textTransform: 'none' }}
          >
            Add payment method
          </Button>
        </DialogActions>
      </Dialog>

      {/* Billing Plans Dialog */}
      <Billing open={billingDialogOpen} onClose={() => setBillingDialogOpen(false)} />
    </Box>
  );
};

export default MyBilling;
