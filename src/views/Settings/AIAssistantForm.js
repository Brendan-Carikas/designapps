import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Switch,
  FormControlLabel,
  Divider,
  IconButton,
} from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAIAssistants } from '../../contexts/AIAssistantsContext';
import { useNotification } from '../../contexts/NotificationContext';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';

const AIAssistantForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const assistantId = searchParams.get('id');
  const { addAssistant, updateAssistant, assistants } = useAIAssistants();
  const { showNotification } = useNotification();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    model: 'gpt-4',
    temperature: 0.7,
    maxTokens: 2000,
    isActive: true,
  });
  const [appName, setAppName] = useState('My AI Assistant');
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    if (assistantId) {
      const assistant = assistants.find(a => a.id === assistantId);
      if (assistant) {
        setFormData({
          name: assistant.name,
          description: assistant.description || '',
          model: assistant.model,
          temperature: assistant.temperature,
          maxTokens: assistant.maxTokens,
          isActive: assistant.status === 'Active',
        });
      }
    }
  }, [assistantId, assistants]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSwitchChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoRemove = () => {
    setLogo(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (assistantId) {
      updateAssistant(assistantId, formData);
      showNotification(`AI Assistant "${formData.name}" has been updated successfully`);
    } else {
      addAssistant(formData);
      showNotification(`AI Assistant "${formData.name}" has been created successfully`);
    }
    navigate('/app/settings?tab=3');
  };

  const handleCancel = () => {
    navigate('/app/settings?tab=3');
  };

  return (
    <Box sx={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1200,
      bgcolor: 'background.default',
      overflow: 'auto',
      p: 3
    }}>
      <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2, maxWidth: 800, mx: 'auto', mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="h5">
              {assistantId ? 'Edit AI Assistant' : 'Create AI Assistant'}
            </Typography>
          </Box>
          <Divider sx={{ mb: 3 }} />

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Assistant Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  multiline
                  rows={4}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Model</InputLabel>
                  <Select
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    label="Model"
                  >
                    <MenuItem value="gpt-4">GPT-4</MenuItem>
                    <MenuItem value="gpt-3.5-turbo">GPT-3.5 Turbo</MenuItem>
                    <MenuItem value="claude-2">Claude 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Max Tokens"
                  name="maxTokens"
                  type="number"
                  value={formData.maxTokens}
                  onChange={handleChange}
                  inputProps={{ min: 1, max: 4000 }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Temperature"
                  name="temperature"
                  type="number"
                  value={formData.temperature}
                  onChange={handleChange}
                  inputProps={{ step: 0.1, min: 0, max: 2 }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.isActive}
                      onChange={handleSwitchChange}
                      name="isActive"
                    />
                  }
                  label="Active"
                />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={handleCancel}
                    sx={{ textTransform: 'none' }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: 'none' }}
                  >
                    {assistantId ? 'Update Assistant' : 'Save Assistant'}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2, maxWidth: 800, mx: 'auto' }}>
        <CardContent sx={{ p: 3 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <ColorLensIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
            <Typography variant="h5">Theme</Typography>
          </Box>
          <Divider sx={{ mb: 3 }} />

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="App Name"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              variant="outlined"
            />
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              App Logo
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
              {logo ? (
                <Box
                  component="img"
                  src={logo}
                  alt="App Logo"
                  sx={{ width: 440, height: 80, borderRadius: 1, objectFit: 'contain' }}
                />
              ) : (
                <Box
                  sx={{
                    width: 440,
                    height: 80,
                    borderRadius: 1,
                    border: '1px dashed',
                    borderColor: 'divider',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ImageIcon color="action" sx={{ fontSize: 40 }} />
                </Box>
              )}
              <Button
                component={logo ? "button" : "label"}
                variant="outlined"
                sx={{ textTransform: 'none' }}
                onClick={logo ? handleLogoRemove : undefined}
              >
                {logo ? 'Remove image' : 'Upload image'}
                {!logo && (
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleLogoChange}
                  />
                )}
              </Button>
              <Typography variant="caption" color="textSecondary">
                Recommended size: 220px (maximum width) x 40px (minimum height) pixels. PNG or JPG format.
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AIAssistantForm;
