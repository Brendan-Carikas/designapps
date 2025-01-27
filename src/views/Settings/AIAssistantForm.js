import React, { useState, useEffect, useRef } from 'react';
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardHeader,
  Drawer,
  Paper,
  Tooltip,
  InputAdornment,
  Autocomplete,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  ListItemIcon,
} from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAIAssistants } from '../../contexts/AIAssistantsContext';
import { useNotification } from '../../contexts/NotificationContext';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SearchIcon from '@mui/icons-material/Search';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LinkIcon from '@mui/icons-material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import DashboardIcon from '@mui/icons-material/Dashboard';
import artoIcon from '../../assets/images/arto-icon-crop.png';

const copyTooltip = 'Copy';

const technicalContent = (
  <>
    <h3>Core purpose</h3>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '2'  }}>
      <Box 
        component={Paper} 
        elevation={0} 
        sx={{ 
          p: 2, 
          mb: 2, 
          backgroundColor: 'rgba(0, 0, 0, 0.02)', 
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
          position: 'relative',
          zIndex: 1200
        }}
      >
        <Typography flex={1}>You are an AI-powered support assistant for AJC Trailers' EasyCabin.</Typography>
        <Tooltip title={copyTooltip}>
          <IconButton 
            size="small" 
            onClick={() => navigator.clipboard.writeText("You are an AI-powered support assistant for AJC Trailers' EasyCabin.")}
            sx={{ mt: -0.5, zIndex: 1201 }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Box 
        component={Paper} 
        elevation={0} 
        sx={{ 
          p: 2, 
          mb: 2, 
          backgroundColor: 'rgba(0, 0, 0, 0.02)', 
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
          position: 'relative',
          zIndex: 1200
        }}
      >
        <Typography flex={1}>Prioritise clear, concise, and simple responses to minimise confusion.</Typography>
        <Tooltip title={copyTooltip}>
          <IconButton 
            size="small" 
            onClick={() => navigator.clipboard.writeText("Prioritise clear, concise, and simple responses to minimise confusion.")}
            sx={{ mt: -0.5, zIndex: 1201 }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Box 
        component={Paper} 
        elevation={0} 
        sx={{ 
          p: 2, 
          mb: 2, 
          backgroundColor: 'rgba(0, 0, 0, 0.02)', 
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
          position: 'relative',
          zIndex: 1200
        }}
      >
        <Typography flex={1}>Provide accurate, professional, and clear support to customers 24/7 regarding EasyCabin products, parts, and technical enquiries.</Typography>
        <Tooltip title={copyTooltip}>
          <IconButton 
            size="small" 
            onClick={() => navigator.clipboard.writeText("Provide accurate, professional, and clear support to customers 24/7 regarding EasyCabin products, parts, and technical enquiries.")}
            sx={{ mt: -0.5, zIndex: 1201 }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Box 
        component={Paper} 
        elevation={0} 
        sx={{ 
          p: 2, 
          mb: 2, 
          backgroundColor: 'rgba(0, 0, 0, 0.02)', 
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
          position: 'relative',
          zIndex: 1200
        }}
      >
        <Typography flex={1}>You must respond only in UK English and use data strictly from the vector store.</Typography>
        <Tooltip title={copyTooltip}>
          <IconButton 
            size="small" 
            onClick={() => navigator.clipboard.writeText("You must respond only in UK English and use data strictly from the vector store.")}
            sx={{ mt: -0.5, zIndex: 1201 }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Box 
        component={Paper} 
        elevation={0} 
        sx={{ 
          p: 2, 
          mb: 2, 
          backgroundColor: 'rgba(0, 0, 0, 0.02)', 
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
          position: 'relative',
          zIndex: 1200
        }}
      >
        <Typography flex={1}>Never use public web content under any circumstances.</Typography>
        <Tooltip title={copyTooltip}>
          <IconButton 
            size="small" 
            onClick={() => navigator.clipboard.writeText("Never use public web content under any circumstances.")}
            sx={{ mt: -0.5, zIndex: 1201 }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </ul>
    <h3>Style and tone</h3>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '2'  }}>
      <Box 
        component={Paper} 
        elevation={0} 
        sx={{ 
          p: 2, 
          mb: 2, 
          backgroundColor: 'rgba(0, 0, 0, 0.02)', 
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
          position: 'relative',
          zIndex: 1200
        }}
      >
        <Typography flex={1}>Use a polite, professional, approachable, and trustworthy tone, aligned with the EasyCabin brand.</Typography>
        <Tooltip title={copyTooltip}>
          <IconButton 
            size="small" 
            onClick={() => navigator.clipboard.writeText("Use a polite, professional, approachable, and trustworthy tone, aligned with the EasyCabin brand.")}
            sx={{ mt: -0.5, zIndex: 1201 }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Box 
        component={Paper} 
        elevation={0} 
        sx={{ 
          p: 2, 
          mb: 2, 
          backgroundColor: 'rgba(0, 0, 0, 0.02)', 
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
          position: 'relative',
          zIndex: 1200
        }}
      >
        <Typography flex={1}>Maintain short sentences and a conversational tone.</Typography>
        <Tooltip title={copyTooltip}>
          <IconButton 
            size="small" 
            onClick={() => navigator.clipboard.writeText("Maintain short sentences and a conversational tone.")}
            sx={{ mt: -0.5, zIndex: 1201 }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Box 
        component={Paper} 
        elevation={0} 
        sx={{ 
          p: 2, 
          mb: 2, 
          backgroundColor: 'rgba(0, 0, 0, 0.02)', 
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
          position: 'relative',
          zIndex: 1200
        }}
      >
        <Typography flex={1}>Structure responses using clear sequential steps.</Typography>
        <Tooltip title={copyTooltip}>
          <IconButton 
            size="small" 
            onClick={() => navigator.clipboard.writeText("Structure responses using clear sequential steps.")}
            sx={{ mt: -0.5, zIndex: 1201 }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Box 
        component={Paper} 
        elevation={0} 
        sx={{ 
          p: 2, 
          mb: 2, 
          backgroundColor: 'rgba(0, 0, 0, 0.02)', 
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
          position: 'relative',
          zIndex: 1200
        }}
      >
        <Typography flex={1}>Ensure each step addresses a single action or check before moving to the next.</Typography>
        <Tooltip title={copyTooltip}>
          <IconButton 
            size="small" 
            onClick={() => navigator.clipboard.writeText("Ensure each step addresses a single action or check before moving to the next.")}
            sx={{ mt: -0.5, zIndex: 1201 }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Box 
        component={Paper} 
        elevation={0} 
        sx={{ 
          p: 2, 
          mb: 2, 
          backgroundColor: 'rgba(0, 0, 0, 0.02)', 
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
          position: 'relative',
          zIndex: 1200
        }}
      >
        <Typography flex={1}>Comply with WCAG accessibility standards to maintain readability.</Typography>
        <Tooltip title={copyTooltip}>
          <IconButton 
            size="small" 
            onClick={() => navigator.clipboard.writeText("Comply with WCAG accessibility standards to maintain readability.")}
            sx={{ mt: -0.5, zIndex: 1201 }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </ul>
    <h3>Technical and troubleshooting</h3>
    <h4>Step by step</h4>
    <Box 
      component={Paper} 
      elevation={0} 
      sx={{ 
        p: 2, 
        mb: 2, 
        backgroundColor: 'rgba(0, 0, 0, 0.02)', 
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: 1,
        position: 'relative',
        zIndex: 1200
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1 }}>
        <Box>
          <Typography paragraph sx={{ mb: 2 }}>To troubleshoot the issue, follow the steps below in order to identify and resolve the issue.</Typography>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: '2' }}>
            <li><strong>Step 1:</strong> Ensure you are in a safe environment and there are no immediate hazards. If it is safe, proceed with the steps below.</li>
            <li><strong>Step 2:</strong> Check if the hydraulic isolator switch is on. If it is off, switch it on.</li>
            <li><strong>Step 3:</strong> Check if the batteries are low. If they are, turn on the generator and try again.</li>
            <li><strong>Step 4:</strong> Check the hydraulic oil level. If it's low, fill the reservoir with oil.</li>
          </ul>
          <Typography paragraph sx={{ mt: 2, mb: 0 }}>If these steps don't resolve the issue, let me know, and I can provide more detailed troubleshooting guidance.</Typography>
        </Box>
        <Tooltip title={copyTooltip}>
          <IconButton 
            size="small" 
            onClick={() => navigator.clipboard.writeText(`To troubleshoot the issue, follow the steps below in order to identify and resolve the issue.

Step 1: Ensure you are in a safe environment and there are no immediate hazards. If it is safe, proceed with the steps below.
Step 2: Check if the hydraulic isolator switch is on. If it is off, switch it on.
Step 3: Check if the batteries are low. If they are, turn on the generator and try again.
Step 4: Check the hydraulic oil level. If it's low, fill the reservoir with oil.

If these steps don't resolve the issue, let me know, and I can provide more detailed troubleshooting guidance.`)}
            sx={{ mt: 0, zIndex: 1201 }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
    <hr />
    <h4>Does this answer your question?</h4>
    <p>If the customer replies Yes:</p>
    <p><strong>Response:</strong> "Great, glad we could help!"</p>
    <p>If the customer replies No:</p>
    <p><strong>Response:</strong> "Sorry about that—let's try again. Could you please summarise exactly what you are looking for or clarify your question?"</p>
    <hr />
    <h3>If no relevant information exists:</h3>
    <p>"It seems we don't have the specific details to answer your question. Our helpful team can assist you further. Please email us at info@easycabin.co.uk or call 01582 310894."</p>
    <h3>If a question is unrelated to EasyCabin products or mentions competitors:</h3>
    <p>"We're here to support you with EasyCabin products and parts. Unfortunately, your question seems unrelated to this. If you think this is incorrect, please contact our team at 01582 310894 or info@easycabin.co.uk."</p>
  </>
);

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
  const [logo, setLogo] = useState(null);
  const [fabIcon, setFabIcon] = useState(null);
  const [corePurposeInstructions, setCorePurposeInstructions] = useState(() => {
    return localStorage.getItem('corePurposeInstructions') || '';
  });
  const [styleToneInstructions, setStyleToneInstructions] = useState(() => {
    return localStorage.getItem('styleToneInstructions') || '';
  });
  const [technicalInstructions, setTechnicalInstructions] = useState(() => {
    return localStorage.getItem('technicalInstructions') || '';
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState('');
  const [drawerTitle, setDrawerTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [whatsappDialogOpen, setWhatsappDialogOpen] = useState(false);
  const [copyTooltip, setCopyTooltip] = useState('Copy');
  const [uploadedFiles, setUploadedFiles] = useState(() => {
    const savedFiles = localStorage.getItem('uploadedFiles');
    return savedFiles ? JSON.parse(savedFiles) : [];
  });
  const contentRef = useRef(null);

  const [selectedSection, setSelectedSection] = useState('general');
  const sidebarWidth = 240;

  useEffect(() => {
    localStorage.setItem('corePurposeInstructions', corePurposeInstructions);
  }, [corePurposeInstructions]);

  useEffect(() => {
    localStorage.setItem('styleToneInstructions', styleToneInstructions);
  }, [styleToneInstructions]);

  useEffect(() => {
    localStorage.setItem('technicalInstructions', technicalInstructions);
  }, [technicalInstructions]);

  useEffect(() => {
    localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));
  }, [uploadedFiles]);

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

  const scrollToSection = (id) => {
    if (!contentRef.current) return;
    const contentElement = contentRef.current;

    setTimeout(() => {
      const targetElement = contentElement.querySelector(`[id="${id}"]`);
      if (!targetElement) return;

      const padding = 180; // Padding from top of scroll container
      contentElement.scrollTo({
        top: targetElement.offsetTop - padding,
        behavior: 'smooth'
      });
    }, 100); // Small delay to ensure content is rendered
  };

  const handleShowExample = (content, title) => {
    setDrawerContent(content);
    setDrawerTitle(title);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
    setSearchTerm('');  // Reset search when closing drawer
  };

  const handleSearch = (event, value) => {
    if (typeof value === 'string') {
      setSearchTerm(value);
    } else if (value && value.title) {
      setSearchTerm(value.title);
      scrollToSection(value.id);
    } else {
      setSearchTerm('');
    }
  };

  const getSearchOptions = () => {
    const options = [];
    if (!technicalContent || !technicalContent.props || !technicalContent.props.children) return options;

    React.Children.forEach(technicalContent.props.children, (child) => {
      if (!child || !child.type) return;

      if (child.type === 'h3') {
        options.push({
          id: child.props.children.toLowerCase().replace(/\s+/g, '-'),
          title: child.props.children
        });
      }
    });

    return options;
  };

  const getFilteredContent = () => {
    if (!technicalContent) return null;
    if (!searchTerm) return technicalContent;

    const searchLower = searchTerm.toLowerCase();
    
    // Check if the search term matches an option title
    const selectedOption = getSearchOptions().find(opt => opt.title.toLowerCase() === searchLower);
    
    if (selectedOption) {
      // If it's a selected option, show that section and all content below it until next h3
      let foundSection = false;
      let sectionContent = [];
      
      React.Children.forEach(technicalContent.props.children, (child) => {
        if (!child) return;
        
        // Start collecting content when we find the matching h3
        if (child.type === 'h3' && child.props.children.toLowerCase() === searchLower) {
          foundSection = true;
          sectionContent.push(child);
          return;
        }
        
        // Stop collecting when we hit the next h3
        if (child.type === 'h3' && foundSection) {
          foundSection = false;
          return;
        }
        
        // Collect all content between the matching h3 and the next h3
        if (foundSection) {
          sectionContent.push(child);
        }
      });
      
      return sectionContent.length > 0 ? sectionContent : null;
    }

    // If it's not a selected option, do text search as before
    return React.Children.map(technicalContent.props.children, (child) => {
      if (!child || !child.props) return null;

      // Search in text content
      const textContent = React.Children.toArray(child.props.children)
        .map(c => typeof c === 'string' ? c : '')
        .join(' ');

      if (textContent.toLowerCase().includes(searchLower)) {
        return child;
      }
      return null;
    }).filter(Boolean);
  };

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

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
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

  const handleFabIconChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFabIcon(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFabIconRemove = () => {
    setFabIcon(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (assistantId) {
        await updateAssistant(assistantId, {
          ...formData,
          status: formData.isActive ? 'Active' : 'Inactive'
        });
      } else {
        await addAssistant({
          ...formData,
          status: formData.isActive ? 'Active' : 'Inactive'
        });
      }
      navigate('/app/settings');
    } catch (error) {
      console.error('Error saving AI Assistant:', error);
    }
  };

  const handleCancel = () => {
    navigate('/app/settings');
    setIsDrawerOpen(false);
    setSearchTerm('');  // Reset search when canceling
  };

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files);
    
    if (files.length > 0) {
      try {
        const formData = new FormData();
        const newFiles = files.map(file => ({
          name: file.name,
          uploadDate: new Date().toLocaleString(),
        }));

        files.forEach(file => {
          formData.append('files', file);
        });

        // TODO: Implement file upload API call
        console.log('Files to upload:', files);
        
        setUploadedFiles(prev => [...prev, ...newFiles]);
        alert('Files uploaded successfully');
      } catch (error) {
        console.error('Error uploading files:', error);
        alert('Error uploading files');
      }
    }
  };

  const handleFileDelete = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'background.paper',
          color: 'text.primary',
          borderBottom: '1px solid',
          borderColor: 'divider',
          boxShadow: 'none',
          zIndex: (theme) => theme.zIndex.drawer - 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {assistantId ? 'Edit AI Assistant' : 'Create AI Assistant'}
          </Typography>
          <Button 
            color="inherit" 
            onClick={handleCancel}
            sx={{ mr: 2 }}
          >
            Cancel
          </Button>
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleSubmit}
          >
            {assistantId ? 'Edit Assistant' : 'Create AI Assistant'}
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
          position: 'absolute',
          '& .MuiDrawer-paper': {
            width: sidebarWidth,
            boxSizing: 'border-box',
            backgroundColor: 'background.paper',
            border: 'none',
            pt: 8,
          },
        }}
      >
        <List sx={{ 
          px: 2,
          overflow: 'hidden'
        }}>
          <ListItem
            button
            selected={selectedSection === 'general'}
            onClick={() => {
              setSelectedSection('general');
              scrollToSection('details');
            }}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                '& .MuiListItemIcon-root': {
                  color: 'common.white',
                },
                '& .MuiListItemText-primary': {
                  color: 'common.white',
                  fontWeight: 500,
                },
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: selectedSection === 'general' ? 'common.white' : 'inherit' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="General" />
          </ListItem>
          <ListItem
            button
            selected={selectedSection === 'theme'}
            onClick={() => {
              setSelectedSection('theme');
              scrollToSection('theme');
            }}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                '& .MuiListItemIcon-root': {
                  color: 'common.white',
                },
                '& .MuiListItemText-primary': {
                  color: 'common.white',
                  fontWeight: 500,
                },
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: selectedSection === 'theme' ? 'common.white' : 'inherit' }}>
              <ColorLensIcon />
            </ListItemIcon>
            <ListItemText primary="Theme" />
          </ListItem>
          <ListItem
            button
            selected={selectedSection === 'train'}
            onClick={() => {
              setSelectedSection('train');
              scrollToSection('train');
            }}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                '& .MuiListItemIcon-root': {
                  color: 'common.white',
                },
                '& .MuiListItemText-primary': {
                  color: 'common.white',
                  fontWeight: 500,
                },
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: selectedSection === 'train' ? 'common.white' : 'inherit' }}>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Train" />
          </ListItem>
          <ListItem
            button
            selected={selectedSection === 'knowledge'}
            onClick={() => {
              setSelectedSection('knowledge');
              scrollToSection('knowledge');
            }}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                '& .MuiListItemIcon-root': {
                  color: 'common.white',
                },
                '& .MuiListItemText-primary': {
                  color: 'common.white',
                  fontWeight: 500,
                },
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: selectedSection === 'knowledge' ? 'common.white' : 'inherit' }}>
              <StickyNote2Icon />
            </ListItemIcon>
            <ListItemText primary="Knowledge" />
          </ListItem>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          backgroundColor: 'background.default',
          position: 'relative',
          zIndex: 0
        }}
        ref={contentRef}
      >
        <Box sx={{ mt: 8 }}>
          {/* General Section */}
          {selectedSection === 'general' && (
            <>
              <Box sx={{ p: 3, mb: 2 }}>
                <Typography variant="h2" sx={{ ml: 1 }}>
                  General
                </Typography>
              </Box>
              {/* General Card */}
              <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2, mx: 4 }}>
                <CardContent sx={{ p: 3 }}>
                  
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

                      
                    </Grid>
                  </form>
                </CardContent>
              </Card>

              {/* Connect Card */}
              <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2, mx: 4, }}>
                <CardContent sx={{ p: 3 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <LinkIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
                    <Typography variant="h5">Connect</Typography>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <Box sx={{ mb: 3 }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ mb: 2, textTransform: 'none' }}
                      onClick={() => setWhatsappDialogOpen(true)}
                    >
                      Connect WhatsApp Business
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </>
          )}

          {/* Theme Section */}
          {selectedSection === 'theme' && (
            <>
              <Box sx={{ p: 3, mb: 2 }}>
                <Typography variant="h2" sx={{ ml: 1 }}>
                  Theme
                </Typography>
              </Box>
              <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2, mx: 4 }}>
                <CardContent sx={{ p: 3 }}>
                  
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
                        Recommended size: 120px (minimum height) pixels. PNG or SVG format.
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mb: 3, mt:6 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      FAB icon
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                      {fabIcon ? (
                        <Box
                          component="img"
                          src={fabIcon}
                          alt="App Icon"
                          sx={{ width: 80, height: 80, borderRadius: 1, objectFit: 'contain' }}
                        />
                      ) : (
                        <Box
                          sx={{
                            width: 80,
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
                        component={fabIcon ? "button" : "label"}
                        variant="outlined"
                        sx={{ textTransform: 'none' }}
                        onClick={fabIcon ? handleFabIconRemove : undefined}
                      >
                        {fabIcon ? 'Remove image' : 'Upload image'}
                        {!fabIcon && (
                          <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={handleFabIconChange}
                          />
                        )}
                      </Button>
                      <Typography variant="caption" color="textSecondary">
                        Recommended size: 120px (maximum width) x 120px (minimum height) pixels. PNG or SVG format.
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </>
          )}

          {/* Train Section */}
          {selectedSection === 'train' && (
            <>
              <Box sx={{ p: 3, mb: 2 }}>
                <Typography variant="h2" sx={{ ml: 1 }}>
                  Train
                </Typography>
              </Box>
              <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2, mx: 4 }}>
                <CardHeader
                  title={
                    <Box display="flex" alignItems="center">
                      <Typography variant="h5">Instructions for AI Assistant</Typography>
                    </Box>
                  }
                  action={
                    <Button 
                      variant="text" 
                      onClick={() => handleShowExample(
                        technicalContent,
                        'Instruction library'
                      )}
                    >
                      Instruction library
                    </Button>
                  }
                />
                <CardContent sx={{ p: 3 }}>
                  <Divider sx={{ mb: 3 }} />
                  <Box sx={{ mb: 3 }}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5">Core purpose</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          label="Core Purpose Instructions"
                          value={corePurposeInstructions}
                          onChange={(e) => setCorePurposeInstructions(e.target.value)}
                          variant="outlined"
                          placeholder="Enter core purpose instructions for the AI assistant..."
                          sx={{ mt: 2 }}
                        />
                      </AccordionDetails>
                    </Accordion>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5">Style and tone</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          label="Style and Tone Instructions"
                          value={styleToneInstructions}
                          onChange={(e) => setStyleToneInstructions(e.target.value)}
                          variant="outlined"
                          placeholder="Enter style and tone instructions for the AI assistant..."
                          sx={{ mt: 2 }}
                        />
                      </AccordionDetails>
                    </Accordion>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5">Technical and troubleshooting</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          label="Technical Instructions"
                          value={technicalInstructions}
                          onChange={(e) => setTechnicalInstructions(e.target.value)}
                          variant="outlined"
                          placeholder="Enter technical and troubleshooting instructions for the AI assistant..."
                          sx={{ mt: 2 }}
                        />
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </CardContent>
              </Card>
            </>
          )}

          {/* Knowledge Section */}
          {selectedSection === 'knowledge' && (
            <>
              <Box sx={{ p: 3, mb: 2 }}>
                <Typography variant="h2" sx={{ ml: 1 }}>
                  Knowledge
                </Typography>
              </Box>
              <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2, mx: 4 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <SchoolIcon color="primary" sx={{ width: 24, height: 24, mr: 2 }} />
                    <Typography variant="h5">Knowledge</Typography>
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <Divider sx={{ mb: 3, mt: 4 }} />
                    <Button
                      variant="outlined"
                      component="label"
                      startIcon={<UploadFileIcon />}
                      sx={{ textTransform: 'none' }}
                    >
                      Upload Files
                      <input
                        type="file"
                        hidden
                        multiple
                        onChange={handleFileUpload}
                        accept=".txt,.pdf,.doc,.docx"
                      />
                    </Button>
                    <Typography variant="caption" color="textSecondary" sx={{ display: 'block', mt: 1 }}>
                      Accepted file formats: TXT, PDF, DOC, DOCX
                    </Typography>

                    {uploadedFiles.length > 0 && (
                      <List sx={{ mt: 2 }}>
                        {uploadedFiles.map((file, index) => (
                          <ListItem key={index} sx={{ px: 0 }}>
                            <ListItemText
                              primary={file.name}
                              secondary={`Uploaded: ${file.uploadDate}`}
                              primaryTypographyProps={{ fontSize: '12px' }}
                              secondaryTypographyProps={{ fontSize: '12px' }}
                            />
                            <IconButton edge="end" onClick={() => handleFileDelete(index)}>
                              <DeleteIcon />
                            </IconButton>
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </>
          )}

          {/* Dialogs */}
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={handleDrawerClose}
            ModalProps={{
              BackdropProps: {
                sx: {
                  zIndex: (theme) => theme.zIndex.modal + 1
                }
              }
            }}
            sx={{
              '& .MuiDrawer-paper': {
                width: '50%',
                maxWidth: 800,
                p: 3,
                zIndex: (theme) => theme.zIndex.modal + 1
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography variant="h5">{drawerTitle}</Typography>
              <Autocomplete
                freeSolo
                options={getSearchOptions()}
                inputValue={searchTerm}
                onInputChange={handleSearch}
                getOptionLabel={(option) => {
                  if (typeof option === 'string') return option;
                  return option.title || '';
                }}
                renderOption={(props, option) => (
                  <Box component="li" {...props} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <StickyNote2Icon fontSize="small" />
                    <Typography>
                      {option.title}
                    </Typography>
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Search instructions..."
                    sx={{ mt: 2 }}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box ref={contentRef} sx={{ overflowY: 'auto', flex: 1 }}>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                {getFilteredContent()}
              </Typography>
            </Box>
          </Drawer>

          {/* WhatsApp Dialog */}
          <Dialog
            open={whatsappDialogOpen}
            onClose={() => setWhatsappDialogOpen(false)}
            aria-labelledby="whatsapp-dialog-title"
          >
            <DialogTitle id="whatsapp-dialog-title">Connect WhatsApp Business</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To connect your WhatsApp Business account, please follow these steps:
              </DialogContentText>
              <Box component="ol" sx={{ mt: 2 }}>
                <li>Open WhatsApp Business on your phone</li>
                <li>Go to Settings > WhatsApp Business API</li>
                <li>Scan the QR code below</li>
              </Box>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  bgcolor: 'grey.100',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: 2,
                  mx: 'auto',
                }}
              >
                QR Code Placeholder
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setWhatsappDialogOpen(false)}>Close</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
};

export default AIAssistantForm;
