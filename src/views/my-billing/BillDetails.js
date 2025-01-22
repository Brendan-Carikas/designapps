import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';

const BillDetails = () => {
  const { billId } = useParams();
  const navigate = useNavigate();

  // Mock data - replace with actual API call
  const billDetails = {
    id: billId,
    invoiceNumber: 'INV-2023-001',
    date: '2023-12-15',
    dueDate: '2023-12-15',
    status: 'Paid',
    amount: '£400.00',
    description: 'Growth Plan - Monthly',
    billingPeriod: 'Dec 15, 2023 - Jan 14, 2024',
    paymentMethod: 'Visa ending in 4242',
    items: [
      {
        description: 'Growth Plan Subscription',
        period: 'Monthly',
        quantity: 1,
        unitPrice: '£400.00',
        amount: '£400.00',
      }
    ]
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, ml: 3 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/app/my-billing')}
          sx={{ mr: 3, textTransform: 'none' }}
        >
          Back
        </Button>
        <Typography variant="h2" sx={{ flexGrow: 1 }}>
          Invoice #{billDetails.invoiceNumber}
        </Typography>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={() => {
            // Generate PDF content
            const content = `
Invoice #${billDetails.invoiceNumber}
Date: ${new Date(billDetails.date).toLocaleDateString('en-GB')}
Amount: ${billDetails.amount}

${billDetails.description}
Billing Period: ${billDetails.billingPeriod}
Payment Method: ${billDetails.paymentMethod}

Items:
${billDetails.items.map(item => `- ${item.description}: ${item.amount}`).join('\n')}
`;
            
            // Create blob and download
            const blob = new Blob([content], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `invoice-${billDetails.invoiceNumber}.txt`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          }}
          sx={{ 
            textTransform: 'none',
            borderRadius: 2,
            mr: 3
          }}
        >
          Download Invoice
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Invoice Details */}
        <Grid item xs={12}>
          <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <ReceiptIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
                <Typography variant="h4">Invoice Details</Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="subtitle2" color="textSecondary">Invoice Date</Typography>
                      <Typography variant="body1">{new Date(billDetails.date).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle2" color="textSecondary">Due Date</Typography>
                      <Typography variant="body1">{new Date(billDetails.dueDate).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle2" color="textSecondary">Status</Typography>
                      <Typography variant="body1">{billDetails.status}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle2" color="textSecondary">Payment Method</Typography>
                      <Typography variant="body1">{billDetails.paymentMethod}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" color="textSecondary">Billing Period</Typography>
                      <Typography variant="body1">{billDetails.billingPeriod}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" color="textSecondary">Description</Typography>
                      <Typography variant="body1">{billDetails.description}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Invoice Items */}
        <Grid item xs={12}>
          <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <TableContainer component={Paper} elevation={0}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>Period</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Unit Price</TableCell>
                      <TableCell align="right">Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {billDetails.items.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{item.period}</TableCell>
                        <TableCell align="right">{item.quantity}</TableCell>
                        <TableCell align="right">{item.unitPrice}</TableCell>
                        <TableCell align="right">{item.amount}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={4} align="right" sx={{ borderBottom: 'none' }}>
                        <Typography variant="subtitle1">Total</Typography>
                      </TableCell>
                      <TableCell align="right" sx={{ borderBottom: 'none' }}>
                        <Typography variant="subtitle1">{billDetails.amount}</Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BillDetails;
