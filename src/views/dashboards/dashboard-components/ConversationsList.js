import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const ConversationsList = ({ sx }) => {
  const conversations = [
    {
      id: 1,
      customer: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
      message: 'Hey! I have a question about my subscription...',
      time: '9:30 AM',
    },
    {
      id: 2,
      customer: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
      message: 'Thanks for your help with the setup!',
      time: '11:45 AM',
    },
    {
      id: 3,
      customer: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces',
      message: 'When will the new features be available?',
      time: '2:15 PM',
    },
    {
      id: 4,
      customer: 'David Park',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces',
      message: 'The dashboard looks great!',
      time: '4:30 PM',
    },
  ];

  const getStatusColor = (status) => {
    return status === 'active' ? 'primary' : 'default';
  };

  return (
    <Card sx={sx}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <ChatIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
          <Typography variant="h4">Recent Conversations</Typography>
        </Box>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {conversations.map((conv) => (
            <ListItem
              key={conv.id}
              alignItems="flex-start"
              sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
                '&:last-child': {
                  borderBottom: 'none',
                },
              }}
            >
              <ListItemAvatar>
                <Avatar src={conv.avatar} alt={conv.customer}>
                  {conv.customer[0]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography component="span" variant="subtitle1">
                      {conv.customer}
                    </Typography>
                  </Box>
                }
                secondary={
                  <>
                    {' — '}{conv.message}
                    <Typography
                      component="span"
                      variant="caption"
                      sx={{ display: 'block', color: 'text.secondary' }}
                    >
                      {conv.time}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ConversationsList;
