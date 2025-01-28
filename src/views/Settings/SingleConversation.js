import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Grid,
  Stack,
  Chip,
  AppBar,
  Toolbar,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ContactsOutlined, ChatOutlined } from '@mui/icons-material';

const SingleConversation = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const assistantId = location.state?.assistantId;

  // Mock data for demonstration
  const messages = [
    { id: 1, text: "New Conversation", sender: "guest", timestamp: "16 Dec 2023 07:40:33 PM" },
    { id: 2, text: "Hi, I am Arto how can I help?", sender: "assistant", timestamp: "16 Dec 2023 07:40:48 PM" },
    { id: 3, text: "I need help planning a weekend trip. Any ideas?", sender: "guest", timestamp: "16 Dec 2023 07:40:55 PM" },
    { id: 4, text: "I'd be happy to help you plan your weekend trip! Could you tell me what kind of activities you enjoy and if you have any specific destinations in mind?", sender: "assistant", timestamp: "16 Dec 2023 07:41:10 PM" },
    { id: 5, text: "I enjoy outdoor activities and would prefer somewhere not too far from the city.", sender: "guest", timestamp: "16 Dec 2023 07:41:30 PM" },
    { id: 6, text: "Great choice! I can suggest several nearby locations with excellent outdoor activities. Have you considered visiting the national parks in the region? They offer hiking, camping, and beautiful scenic views.", sender: "assistant", timestamp: "16 Dec 2023 07:41:45 PM" },
    { id: 7, text: "That sounds perfect! Which national park would you recommend?", sender: "guest", timestamp: "16 Dec 2023 07:42:00 PM" },
    { id: 8, text: "Based on your preference for being close to the city, I'd recommend Yosemite National Park. It's about a 4-hour drive and offers amazing hiking trails, rock climbing, and spectacular waterfalls.", sender: "assistant", timestamp: "16 Dec 2023 07:42:20 PM" },
    { id: 9, text: "Thanks! What's the best time to visit Yosemite?", sender: "guest", timestamp: "16 Dec 2023 07:42:35 PM" },
    { id: 10, text: "Spring (April-May) is the best time to visit Yosemite. The waterfalls are at their peak, the weather is mild, and the crowds are smaller than in summer. Would you like some specific trail recommendations?", sender: "assistant", timestamp: "16 Dec 2023 07:42:50 PM" }
  ];

  const conversationDetails = {
    customerId: "45064187",
    guestIp: "183.83.152.204",
    landingUrl: "https://www.invotra.com/chat...",
    networkId: "AS55577 Atria Convergence Tech...",
    conversationId: id,
    version: "216533",
    phoneNumber: `+44 7700 900${id.split('-')[1]}`
  };

  const handleBack = () => {
    navigate(`/app/settings/ai-assistant?id=${assistantId}`, { 
      state: { section: 'conversations' }
    });
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: '#fff',
          color: '#000',
          boxShadow: '0px 7px 30px 0px rgb(90 114 123 / 11%)'
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleBack}
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Conversation ID: {id}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3, mt: 8 }}>
        <Grid container spacing={3} sx={{ height: 'calc(100vh - 200px)' }}>
          {/* Left section - Chat messages */}
          <Grid item xs={8} sx={{ height: '100%' }}>
            <Card sx={{ 
              border: '1px solid', 
              borderColor: 'divider', 
              boxShadow: 'none', 
              borderRadius: 2, 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column' 
            }}>
              <CardContent sx={{ 
                flex: 1, 
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                  width: '0.4em',
                  visibility: 'hidden'
                },
                '&::-webkit-scrollbar-track': {
                  background: 'transparent'
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(0,0,0,.3)',
                  borderRadius: '4px'
                },
                '&:hover::-webkit-scrollbar': {
                  visibility: 'visible'
                },
                p: 3,
                height: '100%',
                marginRight: '-0.4em',
                paddingRight: 'calc(1.5rem + 0.4em)'
              }}>
                <Stack spacing={2}>
                  {messages.map((message) => (
                    <Box
                      key={message.id}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: message.sender === 'guest' ? 'flex-start' : 'flex-end',
                        mb: 2
                      }}
                    >
                      <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5 }}>
                        {message.sender === 'guest' ? 'Guest' : 'AI Assistant'}
                      </Typography>
                      <Box
                        sx={{
                          bgcolor: message.sender === 'guest' ? 'rgb(0,130,132)' : 'rgb(235,235,235)',
                          color: message.sender === 'guest' ? '#fff' : 'text.primary',
                          p: 1.5,
                          borderRadius: message.sender === 'guest' ? '4px 20px 20px 20px' : '20px 4px 20px 20px',
                          maxWidth: '80%'
                        }}
                      >
                        <Typography variant="body2">{message.text}</Typography>
                      </Box>
                      <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                        {message.timestamp}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Right section - Contact details */}
          <Grid item xs={4} sx={{ height: '100%' }}>
            <Card sx={{ 
              border: '1px solid', 
              borderColor: 'divider', 
              boxShadow: 'none', 
              borderRadius: 2,
              height: '100%'
            }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ContactsOutlined sx={{ color: 'rgb(54, 173, 164)' }} />
                    Contact Details
                  </Box>
                </Typography>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      Customer ID
                    </Typography>
                    <Typography variant="body2">
                      {conversationDetails.customerId}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      Phone Number
                    </Typography>
                    <Typography variant="body2">
                      {conversationDetails.phoneNumber}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      IP Address
                    </Typography>
                    <Typography variant="body2">
                      {conversationDetails.guestIp}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      Access Point URL
                    </Typography>
                    <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
                      {conversationDetails.landingUrl}
                    </Typography>
                  </Box>
                </Stack>

                <Typography variant="h6" sx={{ mb: 3, mt: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ChatOutlined sx={{ color: 'rgb(54, 173, 164)' }} />
                    Conversation Information
                  </Box>
                </Typography>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      Conversation ID
                    </Typography>
                    <Typography variant="body2">
                      {conversationDetails.conversationId}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      Bot Version
                    </Typography>
                    <Typography variant="body2">
                      Version {conversationDetails.version}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SingleConversation;
