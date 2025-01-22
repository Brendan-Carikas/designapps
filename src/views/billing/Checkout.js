import React from 'react';
import {
  Grid,
  Typography,
  Button,
  Box,
  Divider,
  TextField,
  MenuItem,
  Stack,
  IconButton,
  useTheme,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logoNormal from "../../assets/images/arto-site-logo.png";
import logoReverse from "../../assets/images/arto-site-logo-reverse.png";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const selectedPlan = location.state?.plan;
  const logo = theme.palette.mode === 'dark' ? logoReverse : logoNormal;

  if (!selectedPlan) {
    navigate('/app/my-billing');
    return null;
  }

  const handleBack = () => {
    navigate('/app/my-billing');
  };

  return (
    <Box sx={{ 
      p: 3, 
      maxWidth: 1200, 
      mx: 'auto',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{ mb: 4 }}>
        <IconButton 
          onClick={handleBack}
          sx={{ mb: 0 }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography 
          variant="body1" 
          component="span" 
          sx={{ 
            ml: 1,
            mt:1.5,
          
            cursor: 'pointer',
            '&:hover': { textDecoration: 'underline' }
          }}
          onClick={handleBack}
        >
          Back to Arto
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3, bgcolor: 'white', color: 'black' }}>
            
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 1,
                fontWeight: 500
              }}
            >
              Subscription
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'row',
              gap: 1,
              mb: 3
            }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 0,
                  fontWeight: 500,
                  fontSize: '2.5rem'
                }}
              >
                £{selectedPlan.price}.00
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'text.secondary',
                  fontWeight: 400,
                  pt: 0.5
                }}
              >
                per month
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Box 
                component="img" 
                src={logo}
                sx={{ width: 40, height: 40, objectFit: 'contain' }} 
              />
              <Box>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 500,
                    color: 'text.primary',
                    mb: 0.5
                  }}
                >
                  {selectedPlan.title}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: 'text.secondary',
                    mb: 1
                  }}
                >
                  Togethere's premium plan to work better togethere
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  
                  
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: 'black',
                color: 'white',
                '&:hover': { bgcolor: 'black' },
               
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Box component="img" src="https://js.stripe.com/v3/fingerprinted/img/applePay-1a20e6d1f687dfd34571382ce7c4c23e.svg" sx={{ height: 48 }} />
            </Button>
            
            <Divider>
              <Typography variant="body2" color="text.secondary">Or pay with card</Typography>
            </Divider>
            
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
            />
            
            <TextField
              fullWidth
              label="Card information"
              placeholder="1234 1234 1234 1234"
              variant="outlined"
            />
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="MM / YY"
                variant="outlined"
                sx={{ flex: 1 }}
              />
              <TextField
                label="CVC"
                variant="outlined"
                sx={{ flex: 1 }}
              />
            </Box>
            
            <TextField
              fullWidth
              label="Cardholder name"
              placeholder="Full name on card"
              variant="outlined"
            />
            
            <TextField
              select
              fullWidth
              label="Country or region"
              defaultValue="UK"
              variant="outlined"
            >
              <MenuItem value="UK">United Kingdom</MenuItem>
            </TextField>
            
            <TextField
              fullWidth
              label="Postal code"
              variant="outlined"
            />
            
            <Button
              variant="contained"
              fullWidth
              color="primary"
              size="large"
            >
              Subscribe
            </Button>
            
            <Typography variant="body2" color="text.secondary" align="center">
              By confirming your subscription, you allow Togethere to charge you for future payments in accordance with their terms. You can always cancel your subscription.
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">Powered by Stripe
            | Terms Privacy</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;
