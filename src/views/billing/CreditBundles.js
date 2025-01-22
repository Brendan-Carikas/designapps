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

const BundleCard = ({ title, price, credits, valuePerCredit, features, buttonText, isPopular, onClick }) => {
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
            /one-time
          </Typography>
        </Typography>
        <Divider sx={{ my: 2 }} />
        <List sx={{ flexGrow: 1 }}>
          <ListItem sx={{ px: 0 }}>
            <ListItemText 
              primary={<Typography variant="subtitle1"><strong>{credits.toLocaleString()}</strong> credits</Typography>}
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText 
              primary={
                <Typography variant="subtitle1">
                  £{valuePerCredit} per credit
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

const CreditBundles = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleOpenCheckout = (bundle) => {
    onClose();
    navigate('/checkout', { state: { plan: bundle } });
  };

  const bundles = [
    {
      title: 'Starter Bundle',
      price: '150',
      credits: 500,
      valuePerCredit: '0.30',
      features: [
        '17% savings vs. overage rate',
        'Never expires',
        'Perfect for occasional use',
      ],
      buttonText: 'Get Starter Bundle',
    },
    {
      title: 'Professional Bundle',
      price: '500',
      credits: 2000,
      valuePerCredit: '0.25',
      features: [
        '25% savings vs. overage rate',
        'Never expires',
        'Best for growing teams',
        'Priority support',
      ],
      buttonText: 'Get Professional Bundle',
      isPopular: true,
    },
    {
      title: 'Enterprise Bundle',
      price: '2000',
      credits: 10000,
      valuePerCredit: '0.20',
      features: [
        '33% savings vs. overage rate',
        'Never expires',
        'Perfect for high volume',
        'Priority support',
        'Usage analytics',
      ],
      buttonText: 'Get Enterprise Bundle',
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
          <Typography variant="h2">Credit Bundles</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
          Purchase additional credits with volume discounts
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ p: 6, pb: 6, mt: 2 }}>
        <Grid container spacing={3}>
          {bundles.map((bundle, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              lg={4} 
              key={index} 
              sx={{ 
                display: 'flex',
                '& > *': {
                  width: '100%'
                }
              }}
            >
              <BundleCard {...bundle} onClick={() => handleOpenCheckout(bundle)} />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default CreditBundles;
