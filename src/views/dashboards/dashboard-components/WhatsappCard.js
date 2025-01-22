import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const WhatsappCard = ({ sx }) => {
  const whatsappNumber = '+1 234 567 8900';

  const handleCopy = () => {
    navigator.clipboard.writeText(whatsappNumber);
  };

  return (
    <Card sx={sx}>
      <CardContent sx={{ height: '100%', pb: '32px !important', position: 'relative' }}>
        <Box display="flex" alignItems="center" mb={2}>
          <WhatsAppIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
          <Typography variant="h5">WhatsApp Number</Typography>
        </Box>
        <Typography variant="h3" color="primary" gutterBottom>
          {whatsappNumber}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Typography variant="body2" color="textSecondary" mb={2}>
              Use this number to connect your WhatsApp Business API
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={handleCopy}
              variant="outlined"
              size="small"
            >
              Copy
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WhatsappCard;