import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Switch,
  FormControlLabel,
  Divider,
  Button,
  Stack,
  IconButton,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import { useAuthBackground } from "../../contexts/AuthBackgroundContext";
import LoginIcon from '@mui/icons-material/Login';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import PaletteIcon from '@mui/icons-material/Palette';

const InvotraAdmin = () => {
  const { currentUser } = useAuth();
  const { currentTheme, setTheme, unsavedChanges, saveTheme } = useTheme();
  const { 
    showBackground, 
    setShowBackground,
    isModal, 
    setIsModal,
    isTwoColumn, 
    setIsTwoColumn,
    customImage, 
    setCustomImage,
    unsavedChanges: backgroundUnsavedChanges,
    saveChanges: saveBackgroundChanges
  } = useAuthBackground();

  const themeOptions = [
    { value: 'light', label: 'Light Theme' },
    { value: 'modern', label: 'Modern Theme' },
    { value: 'dark', label: 'Dark Theme' },
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleLoginStyleChange = (event) => {
    const value = event.target.value;
    if (value === 'modal') {
      setShowBackground(true);
      setIsModal(true);
      setIsTwoColumn(false);
    } else if (value === 'twocolumn') {
      setShowBackground(true);
      setIsModal(false);
      setIsTwoColumn(true);
    } else {
      setShowBackground(true);
      setIsModal(false);
      setIsTwoColumn(false);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h2" gutterBottom sx={{ mb: 2 }}>
        Admin Panel
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <LoginIcon color="primary" sx={{ width: 32, height: 32, mr: 2 }} />
                <Typography variant="h5">Login/Signup Settings</Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />
              
              <Stack spacing={3}>
                <Box>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showBackground}
                        onChange={(e) => setShowBackground(e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Show Image"
                  />
                  
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                    Toggle to show or hide image on login and signup screens
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Preview
                  </Typography>
                  <Box 
                    sx={{ 
                      border: '2px dashed',
                      borderColor: 'divider',
                      borderRadius: 1,
                      p: 3,
                      textAlign: 'center',
                      bgcolor: 'background.default',
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        cursor: 'pointer',
                      }}
                    />
                    {customImage ? (
                      <Box sx={{ maxWidth: '400px', margin: '0 auto' }}>
                        <Box
                          component="img"
                          src={customImage}
                          alt="Custom background"
                          sx={{
                            width: '100%',
                            aspectRatio: '4/3',
                            objectFit: 'cover',
                            borderRadius: 1,
                          }}
                        />
                        <IconButton
                          color="error"
                          onClick={() => setCustomImage(null)}
                          sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'background.paper' }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    ) : (
                      <Box>
                        <ImageIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 1 }} />
                        <Typography variant="body2" color="textSecondary">
                          Click to upload a custom background image
                        </Typography>
                        <Typography variant="caption" color="textSecondary" display="block">
                          Recommended size: 1920x1080px
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>

                <FormControl component="fieldset">
                  <FormLabel component="legend">Login Style</FormLabel>
                  <RadioGroup
                    aria-label="login-style"
                    name="login-style"
                    value={isModal ? 'modal' : isTwoColumn ? 'twocolumn' : 'default'}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === 'modal') {
                        setShowBackground(true);
                        setIsModal(true);
                        setIsTwoColumn(false);
                      } else if (value === 'twocolumn') {
                        setShowBackground(true);
                        setIsModal(false);
                        setIsTwoColumn(true);
                      } else {
                        setShowBackground(true);
                        setIsModal(false);
                        setIsTwoColumn(false);
                      }
                    }}
                  >
                    <FormControlLabel
                      value="default"
                      control={<Radio />}
                      label="Default"
                    />
                    <FormControlLabel
                      value="modal"
                      control={<Radio />}
                      label="Modal style"
                    />
                    <FormControlLabel
                      value="twocolumn"
                      control={<Radio />}
                      label="Two column"
                    />
                  </RadioGroup>
                </FormControl>

                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    onClick={saveBackgroundChanges}
                    disabled={!backgroundUnsavedChanges}
                  >
                    Save Changes
                  </Button>
                  {backgroundUnsavedChanges && (
                    <Typography variant="caption" color="warning.main" sx={{ ml: 2 }}>
                      You have unsaved changes
                    </Typography>
                  )}
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Theme Selection Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <IconButton color="primary" sx={{ width: 32, height: 32, mr: 2 }}>
                  <PaletteIcon />
                </IconButton>
                <Typography variant="h5">Theme Settings</Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />
              
              <RadioGroup
                aria-label="theme"
                name="theme"
                value={currentTheme}
                onChange={handleThemeChange}
              >
                {themeOptions.map((option) => (
                  <FormControlLabel 
                    key={option.value}
                    value={option.value} 
                    control={<Radio />} 
                    label={option.label}
                    sx={{ mb: 2 }}
                  />
                ))}
              </RadioGroup>
              
              <Box mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<SaveIcon />}
                  onClick={saveTheme}
                  disabled={!unsavedChanges}
                >
                  Save Changes
                </Button>
                {unsavedChanges && (
                  <Typography variant="caption" color="warning.main" sx={{ ml: 2 }}>
                    You have unsaved changes
                  </Typography>
                )}
              </Box>
              
              <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                Select your preferred theme style. Changes will be saved and persisted.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InvotraAdmin;
