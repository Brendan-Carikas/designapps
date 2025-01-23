import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Input,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Drawer,
  InputAdornment,
  Link,
  CardHeader,
  Autocomplete,
  Paper,
  Tooltip,
  Avatar,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinkIcon from '@mui/icons-material/Link';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import SchoolIcon from '@mui/icons-material/School';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import artoIcon from '../../assets/images/arto-icon-crop.png';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAIAssistants } from '../../contexts/AIAssistantsContext';

const Settings = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { assistants, deleteAssistant } = useAIAssistants();
  const [appName, setAppName] = useState('My AI Assistant');
  const [corePurposeInstructions, setCorePurposeInstructions] = useState(() => {
    return localStorage.getItem('corePurposeInstructions') || '';
  });
  const [styleToneInstructions, setStyleToneInstructions] = useState(() => {
    return localStorage.getItem('styleToneInstructions') || '';
  });
  const [technicalInstructions, setTechnicalInstructions] = useState(() => {
    return localStorage.getItem('technicalInstructions') || '';
  });
  const [logo, setLogo] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState('');
  const [drawerTitle, setDrawerTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [copyTooltip, setCopyTooltip] = useState('Copy');
  const [activeTab, setActiveTab] = useState(() => {
    const tab = searchParams.get('tab');
    return tab ? parseInt(tab) : 0;
  });
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedAssistant, setSelectedAssistant] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [activeAssistant, setActiveAssistant] = useState(null);
  const [files, setFiles] = useState(() => {
    const savedFiles = localStorage.getItem('uploadedFiles');
    return savedFiles ? JSON.parse(savedFiles) : [];
  });
  const [whatsappDialogOpen, setWhatsappDialogOpen] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const contentRef = useRef(null);

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
              onClick={() => handleCopyText("You are an AI-powered support assistant for AJC Trailers' EasyCabin.")}
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
              onClick={() => handleCopyText("Prioritise clear, concise, and simple responses to minimise confusion.")}
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
              onClick={() => handleCopyText("Provide accurate, professional, and clear support to customers 24/7 regarding EasyCabin products, parts, and technical enquiries.")}
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
              onClick={() => handleCopyText("You must respond only in UK English and use data strictly from the vector store.")}
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
              onClick={() => handleCopyText("Never use public web content under any circumstances.")}
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
              onClick={() => handleCopyText("Use a polite, professional, approachable, and trustworthy tone, aligned with the EasyCabin brand.")}
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
              onClick={() => handleCopyText("Prioritise clear, concise, and simple responses to minimise confusion.")}
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
              onClick={() => handleCopyText("Maintain short sentences and a conversational tone.")}
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
              onClick={() => handleCopyText("Structure responses using clear sequential steps.")}
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
              onClick={() => handleCopyText("Ensure each step addresses a single action or check before moving to the next.")}
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
              onClick={() => handleCopyText("Comply with WCAG accessibility standards to maintain readability.")}
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
              onClick={() => handleCopyText(`To troubleshoot the issue, follow the steps below in order to identify and resolve the issue.

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
      <p><strong>Response:</strong> 😕 "Sorry about that—let's try again. Could you please summarise exactly what you are looking for or clarify your question?"</p>
      <hr />
      <h3>If no relevant information exists:</h3>
      <p>"It seems we don't have the specific details to answer your question. Our helpful team can assist you further. Please email us at info@easycabin.co.uk or call 01582 310894."</p>
      <h3>If a question is unrelated to EasyCabin products or mentions competitors:</h3>
      <p>"We're here to support you with EasyCabin products and parts. Unfortunately, your question seems unrelated to this. If you think this is incorrect, please contact our team at 01582 310894 or info@easycabin.co.uk."</p>
    </>
  );

  const addIdsToHeadings = (content) => {
    if (!content || typeof content === 'string') return content;

    let headingCount = 0;
    const processElement = (element) => {
      if (!element || !element.props) return element;

      // Add id to h3 elements
      if (element.type === 'h3') {
        const id = `section-${headingCount++}`;
        return React.cloneElement(element, { id });
      }

      // Process children
      if (element.props.children) {
        if (Array.isArray(element.props.children)) {
          const newChildren = element.props.children.map(processElement);
          return React.cloneElement(element, {}, ...newChildren);
        } else {
          const newChild = processElement(element.props.children);
          return React.cloneElement(element, {}, newChild);
        }
      }

      return element;
    };

    if (Array.isArray(content)) {
      return content.map(processElement);
    }
    return processElement(content);
  };

  const extractTableOfContents = (content) => {
    if (!content || typeof content === 'string') return [];
    
    const headings = [];
    let headingCount = 0;
    
    const extractFromElement = (element) => {
      if (!element || !element.props) return;

      // Check if it's an h3 element
      if (element.type === 'h3') {
        const id = `section-${headingCount++}`;
        headings.push({
          id,
          title: typeof element.props.children === 'string' 
            ? element.props.children 
            : Array.isArray(element.props.children) 
              ? element.props.children.join('') 
              : element.props.children.toString(),
        });
      }

      // Recursively check children
      if (element.props.children) {
        if (Array.isArray(element.props.children)) {
          element.props.children.forEach(extractFromElement);
        } else {
          extractFromElement(element.props.children);
        }
      }
    };

    if (Array.isArray(content)) {
      content.forEach(extractFromElement);
    } else {
      extractFromElement(content);
    }

    return headings;
  };

  const handleShowExample = (content, title) => {
    const processedContent = addIdsToHeadings(content);
    setDrawerContent(processedContent);
    setDrawerTitle(title);
    setDrawerOpen(true);
    setSearchTerm('');
  };

  const scrollToSection = (id) => {
    setTimeout(() => {
      const contentElement = contentRef.current;
      if (!contentElement) return;

      const targetElement = contentElement.querySelector(`[id="${id}"]`);
      if (!targetElement) return;

      const padding = 180; // Padding from top of scroll container
      contentElement.scrollTo({
        top: targetElement.offsetTop - padding,
        behavior: 'smooth'
      });
    }, 100); // Small delay to ensure content is rendered
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

  const getFilteredContent = () => {
    if (!drawerContent) return null;
    if (!searchTerm) return drawerContent;

    const processElement = (element) => {
      if (!element || !element.props) return element;

      // If it's a text element and matches search, highlight it
      if (typeof element.props.children === 'string' &&
          element.props.children.toLowerCase().includes(searchTerm.toLowerCase())) {
        return element;
      }

      // Process children
      if (element.props.children) {
        if (Array.isArray(element.props.children)) {
          const newChildren = element.props.children
            .map(processElement)
            .filter(child => child !== null);
          if (newChildren.length > 0) {
            return React.cloneElement(element, {}, ...newChildren);
          }
        } else {
          const newChild = processElement(element.props.children);
          if (newChild !== null) {
            return React.cloneElement(element, {}, newChild);
          }
        }
      }

      return null;
    };

    if (Array.isArray(drawerContent)) {
      const filtered = drawerContent
        .map(processElement)
        .filter(element => element !== null);
      return filtered.length > 0 ? filtered : null;
    }
    return processElement(drawerContent);
  };

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopyTooltip('Copied!');
    setTimeout(() => setCopyTooltip('Copy'), 2000);
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
    // ...
  };

  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files).map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date().toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    }));
    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
    localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
  };

  const handleSave = () => {
    // ...
  };

  const handleWhatsappConnect = () => {
    // ...
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSearchTerm('');  // Reset search when closing drawer
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleMenuOpen = (event, assistant) => {
    setMenuAnchorEl(event.currentTarget);
    setActiveAssistant(assistant);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setActiveAssistant(null);
  };

  const handleEdit = () => {
    handleMenuClose();
    navigate(`/app/settings/ai-assistant?id=${activeAssistant.id}`);
  };

  const handleDeleteClick = () => {
    handleMenuClose();
    setSelectedAssistant(activeAssistant);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    deleteAssistant(selectedAssistant.id);
    // showNotification(`AI Assistant "${selectedAssistant.name}" has been deleted`);
    setDeleteDialogOpen(false);
    setSelectedAssistant(null);
  };

  useEffect(() => {
    localStorage.setItem('corePurposeInstructions', corePurposeInstructions);
  }, [corePurposeInstructions]);

  useEffect(() => {
    localStorage.setItem('styleToneInstructions', styleToneInstructions);
  }, [styleToneInstructions]);

  useEffect(() => {
    localStorage.setItem('technicalInstructions', technicalInstructions);
  }, [technicalInstructions]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" sx={{ mb: 3, ml: 1.2 }}>
        Settings
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="settings tabs" sx={{ mb: 3 }}>
          <Tab label="General" />
          <Tab label="Instructions" />
          <Tab label="AI Assistants" />
        </Tabs>
      </Box>

      {/* Connect Tab */}
      {activeTab === 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2 }}>
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
          </Grid>
        </Grid>
      )}

      {/* Instructions Tab */}
      {activeTab === 1 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2 }}>
              <CardHeader
                title={
                  <Box display="flex" alignItems="center">
                    <img src={artoIcon} alt="Arto Icon" style={{ width: 29, height: 36, marginRight: 16, marginBottom: 0 }} />
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
                      <Typography variant="h5">
                      Core purpose
                      </Typography>
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
                      <Typography variant="h5">
                      Style and tone
                      </Typography>
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
                      <Typography variant="h5">
                      Technical and troubleshooting
                      </Typography>
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

                <Box sx={{ mb: 3, mt: 9 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <SchoolIcon color="primary" sx={{ width: 24, height: 24, mr: 2 }} />
                    <Typography variant="h5">Knowledge Base</Typography>
                    
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
                    <Typography variant="caption" color="textSecondary">
                      Accepted file formats: TXT, PDF, DOC, DOCX
                    </Typography>
                  </Box>

                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* AI Assistants Tab */}
      {activeTab === 2 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2 }}>
              <CardContent sx={{ p: 3 }}>
                <Box display="flex" alignItems="center" mb={2}>
                <img src={artoIcon} alt="Arto Icon" style={{ width: 29, height: 36, marginRight: 16, marginBottom: 0 }} />

                  <Typography variant="h5">AI Assistants</Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: 'none' }}
                    onClick={() => navigate('/app/settings/ai-assistant')}
                  >
                    Create
                  </Button>
                </Box>
                <Divider sx={{ mb: 3 }} />
                
                <Box sx={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}>
                  <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Model</TableCell>
                        <TableCell>Max Tokens</TableCell>
                        <TableCell>Temperature</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Created</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {assistants.map((assistant) => (
                        <TableRow key={assistant.id}>
                          <TableCell>{assistant.name}</TableCell>
                          <TableCell>
                            <Typography
                              variant="body2"
                              sx={{
                                maxWidth: 200,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                fontSize: 'inherit'
                              }}
                            >
                              {assistant.description || '-'}
                            </Typography>
                          </TableCell>
                          <TableCell>{assistant.model}</TableCell>
                          <TableCell>{assistant.maxTokens}</TableCell>
                          <TableCell>{assistant.temperature}</TableCell>
                          <TableCell>
                            <Box
                              sx={{
                                backgroundColor: assistant.status === 'Active' ? '#e8f5e9' : '#ffebee',
                                color: assistant.status === 'Active' ? '#2e7d32' : '#c62828',
                                borderRadius: 1,
                                px: 1,
                                py: 0.5,
                                display: 'inline-block',
                              }}
                            >
                              {assistant.status}
                            </Box>
                          </TableCell>
                          <TableCell>{assistant.date}</TableCell>
                          <TableCell>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                              <IconButton
                                size="small"
                                onClick={(e) => handleMenuOpen(e, assistant)}
                                sx={{ color: 'text.secondary' }}
                              >
                                <MoreHorizOutlinedIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>

                {/* Options Menu */}
                <Menu
                  anchorEl={menuAnchorEl}
                  open={Boolean(menuAnchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem onClick={handleEdit}>
                    <ListItemIcon>
                      <EditIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: 'text.secondary' }}>Edit</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleDeleteClick}>
                    <ListItemIcon>
                      <DeleteIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: 'text.secondary' }}>Delete</ListItemText>
                  </MenuItem>
                </Menu>

                {/* Delete Confirmation Dialog */}
                <Dialog
                  open={deleteDialogOpen}
                  onClose={() => setDeleteDialogOpen(false)}
                  maxWidth="xs"
                  fullWidth
                >
                  <DialogTitle>Delete AI Assistant</DialogTitle>
                  <DialogContent>
                    Are you sure you want to delete "{selectedAssistant?.name}"? This action cannot be undone.
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => setDeleteDialogOpen(false)}
                      sx={{ textTransform: 'none' }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleDeleteConfirm}
                      color="error"
                      variant="contained"
                      sx={{ textTransform: 'none' }}
                    >
                      Delete
                    </Button>
                  </DialogActions>
                </Dialog>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* Save Button */}
      {activeTab !== 2 && (
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{ textTransform: 'none' }}
            >
              Save changes
            </Button>
          </Box>
        </Grid>
      )}

      {/* WhatsApp Connection Dialog */}
      <Dialog 
        open={whatsappDialogOpen} 
        onClose={() => setWhatsappDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Connect WhatsApp Business</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="WhatsApp Business Number"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              placeholder="Enter your WhatsApp Business number"
              variant="outlined"
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={() => setWhatsappDialogOpen(false)} 
            sx={{ textTransform: 'none' }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleWhatsappConnect}
            sx={{ textTransform: 'none' }}
          >
            Connect
          </Button>
        </DialogActions>
      </Dialog>

      {/* Example Content Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: '400px',
            padding: '24px',
          },
        }}
      >
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3">{drawerTitle}</Typography>
          <IconButton 
            onClick={handleDrawerClose}
            size="small"
            sx={{ 
              bgcolor: 'background.paper',
              '&:hover': {
                bgcolor: 'background.paper',
                opacity: 0.8
              }
            }}
          >
            <ClearIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ mb: 2 }}>
          <Autocomplete
            freeSolo
            options={extractTableOfContents(drawerContent)}
            getOptionLabel={(option) => {
              if (typeof option === 'string') {
                return option;
              }
              return option.title || '';
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                size="small"
                placeholder="Search content..."
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
            value={searchTerm}
            onChange={handleSearch}
            onInputChange={(event, value) => setSearchTerm(value)}
          />
        </Box>
        {drawerContent && (
          <Box 
            ref={contentRef}
            sx={{ 
              maxHeight: 'calc(100vh - 250px)',
              overflowY: 'auto',
              pr: 1,
              '& h3': {
                fontSize: '1.2rem',
                fontWeight: 600,
                mb: 2,
                mt: 3,
                '&:first-of-type': {
                  mt: 0
                }
              },
              '& h4': {
                fontSize: '1.1rem',
                fontWeight: 500,
                mb: 2,
                mt: 3
              },
              '& p': {
                mb: 2,
                lineHeight: 1.6
              },
              '& ul': {
                mb: 2,
                pl: 3
              },
              '& li': {
                mb: 1
              },
              '& hr': {
                my: 3
              },
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                },
              },
            }}
          >
            <Box component="div" sx={{ position: 'relative' }}>
              {getFilteredContent()}
            </Box>
          </Box>
        )}
      </Drawer>
    </Box>
  );
};

export default Settings;
