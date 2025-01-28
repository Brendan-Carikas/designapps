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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  TablePagination,
  Menu,
  Stack,
  Chip
} from '@mui/material';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { useAIAssistants } from '../../contexts/AIAssistantsContext';
import { useNotification } from '../../contexts/NotificationContext';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LinkIcon from '@mui/icons-material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FilterListIcon from '@mui/icons-material/FilterList';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
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
  const location = useLocation();
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
    color: '#1976d2', // Default color (Material-UI primary blue)
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
  const [conversations] = useState([
    { id: 'conv-001', customerName: 'Guest', time: 'Jan 27, 2025, 8:30 AM', phoneNumber: '+44 7700 900001', platform: 'WhatsApp' },
    { id: 'conv-002', customerName: 'Guest', time: 'Jan 26, 2025, 7:15 AM', phoneNumber: '+44 7700 900002', platform: 'WhatsApp' },
    { id: 'conv-003', customerName: 'Guest', time: 'Jan 25, 2025, 6:45 AM', phoneNumber: '+44 7700 900003', platform: 'WhatsApp' },
    { id: 'conv-004', customerName: 'Guest', time: 'Jan 24, 2025, 5:20 AM', phoneNumber: '+44 7700 900004', platform: 'WhatsApp' },
    { id: 'conv-005', customerName: 'Guest', time: 'Jan 23, 2025, 4:10 AM', phoneNumber: '+44 7700 900005', platform: 'WhatsApp' },
    { id: 'conv-006', customerName: 'Guest', time: 'Jan 22, 2025, 3:45 PM', phoneNumber: '+44 7700 900006', platform: 'WhatsApp' },
    { id: 'conv-007', customerName: 'Guest', time: 'Jan 22, 2025, 2:30 PM', phoneNumber: '+44 7700 900007', platform: 'WhatsApp' },
    { id: 'conv-008', customerName: 'Guest', time: 'Jan 22, 2025, 1:15 PM', phoneNumber: '+44 7700 900008', platform: 'WhatsApp' },
    { id: 'conv-009', customerName: 'Guest', time: 'Jan 21, 2025, 11:45 AM', phoneNumber: '+44 7700 900009', platform: 'WhatsApp' },
    { id: 'conv-010', customerName: 'Guest', time: 'Jan 21, 2025, 10:30 AM', phoneNumber: '+44 7700 900010', platform: 'WhatsApp' },
    { id: 'conv-011', customerName: 'Guest', time: 'Jan 21, 2025, 9:15 AM', phoneNumber: '+44 7700 900011', platform: 'WhatsApp' },
    { id: 'conv-012', customerName: 'Guest', time: 'Jan 20, 2025, 4:45 PM', phoneNumber: '+44 7700 900012', platform: 'WhatsApp' },
    { id: 'conv-013', customerName: 'Guest', time: 'Jan 20, 2025, 3:30 PM', phoneNumber: '+44 7700 900013', platform: 'WhatsApp' },
    { id: 'conv-014', customerName: 'Guest', time: 'Jan 20, 2025, 2:15 PM', phoneNumber: '+44 7700 900014', platform: 'WhatsApp' },
    { id: 'conv-015', customerName: 'Guest', time: 'Jan 19, 2025, 1:45 PM', phoneNumber: '+44 7700 900015', platform: 'WhatsApp' },
    { id: 'conv-016', customerName: 'Guest', time: 'Jan 19, 2025, 12:30 PM', phoneNumber: '+44 7700 900016', platform: 'WhatsApp' },
    { id: 'conv-017', customerName: 'Guest', time: 'Jan 19, 2025, 11:15 AM', phoneNumber: '+44 7700 900017', platform: 'WhatsApp' },
    { id: 'conv-018', customerName: 'Guest', time: 'Jan 18, 2025, 5:45 PM', phoneNumber: '+44 7700 900018', platform: 'WhatsApp' },
    { id: 'conv-019', customerName: 'Guest', time: 'Jan 18, 2025, 4:30 PM', phoneNumber: '+44 7700 900019', platform: 'WhatsApp' },
    { id: 'conv-020', customerName: 'Guest', time: 'Jan 18, 2025, 3:15 PM', phoneNumber: '+44 7700 900020', platform: 'WhatsApp' },
    { id: 'conv-021', customerName: 'Guest', time: 'Jan 17, 2025, 2:45 PM', phoneNumber: '+44 7700 900021', platform: 'WhatsApp' },
    { id: 'conv-022', customerName: 'Guest', time: 'Jan 17, 2025, 1:30 PM', phoneNumber: '+44 7700 900022', platform: 'WhatsApp' },
    { id: 'conv-023', customerName: 'Guest', time: 'Jan 17, 2025, 12:15 PM', phoneNumber: '+44 7700 900023', platform: 'WhatsApp' },
    { id: 'conv-024', customerName: 'Guest', time: 'Jan 16, 2025, 11:45 AM', phoneNumber: '+44 7700 900024', platform: 'WhatsApp' },
    { id: 'conv-025', customerName: 'Guest', time: 'Jan 16, 2025, 10:30 AM', phoneNumber: '+44 7700 900025', platform: 'WhatsApp' }
  ]);
  const [selectedConversations, setSelectedConversations] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [activeConversationId, setActiveConversationId] = useState(null);
  const [customDateDialog, setCustomDateDialog] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
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
          color: assistant.color || '#1976d2', // Default color (Material-UI primary blue)
        });
      }
    }
  }, [assistantId, assistants]);

  useEffect(() => {
    if (location.state?.section) {
      setSelectedSection(location.state.section);
      scrollToSection(location.state.section);
    }
  }, [location]);

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

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedConversations(filteredConversations.map(conv => conv.id));
    } else {
      setSelectedConversations([]);
    }
  };

  const handleSelectConversation = (id) => {
    setSelectedConversations(prev => {
      if (prev.includes(id)) {
        return prev.filter(convId => convId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleMenuOpen = (event, conversationId) => {
    setMenuAnchorEl(event.currentTarget);
    setActiveConversationId(conversationId);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setActiveConversationId(null);
  };

  const handleRowClick = (id) => {
    navigate(`/app/settings/conversations/${id}`, {
      state: { assistantId }
    });
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setFilterAnchorEl(null);
    if (filter === 'custom') {
      setCustomDateDialog(true);
    }
    // Reset page when filter changes
    setPage(0);
  };

  const handleCustomDateConfirm = () => {
    setCustomDateDialog(false);
    // Reset page when date range changes
    setPage(0);
  };

  const handleCustomDateCancel = () => {
    setCustomDateDialog(false);
    setSelectedFilter('all');
    setStartDate(null);
    setEndDate(null);
    // Reset page when canceling custom date
    setPage(0);
  };

  const handleDateChange = (date, type) => {
    if (type === 'start') {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const getFilteredByDate = (conversations) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);
    
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(today.getDate() - 30);

    switch (selectedFilter) {
      case 'today':
        return conversations.filter(conv => {
          const convDate = new Date(conv.time);
          return convDate >= today;
        });
      case '7d':
        return conversations.filter(conv => {
          const convDate = new Date(conv.time);
          return convDate >= sevenDaysAgo;
        });
      case '30d':
        return conversations.filter(conv => {
          const convDate = new Date(conv.time);
          return convDate >= thirtyDaysAgo;
        });
      case 'custom':
        if (!startDate || !endDate) return conversations;
        return conversations.filter(conv => {
          const convDate = new Date(conv.time);
          return convDate >= startDate && convDate <= endDate;
        });
      default:
        return conversations;
    }
  };

  const filteredConversations = getFilteredByDate(conversations).filter(conversation => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      conversation.id.toLowerCase().includes(searchLower) ||
      conversation.customerName.toLowerCase().includes(searchLower) ||
      conversation.phoneNumber.toLowerCase().includes(searchLower) ||
      conversation.platform.toLowerCase().includes(searchLower)
    );
  });

  const sidebarItems = [
    {
      icon: <DashboardIcon />,
      text: 'General',
      value: 'general',
      show: true
    },
    
    {
      icon: <SchoolIcon />,
      text: 'Instructions',
      value: 'train',
      show: true
    },
    {
      icon: <StickyNote2Icon />,
      text: 'Knowledge',
      value: 'knowledge',
      show: true
    },

    {
      icon: <ColorLensIcon />,
      text: 'Theme',
      value: 'theme',
      show: true
    },
    {
      
      icon: <ChatIcon />,
      text: 'Conversations',
      value: 'conversations',
      show: !!assistantId
      
      
    }
  ];

  const filteredSidebarItems = sidebarItems.filter(item => item.show);

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
          mb: 3
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
          {filteredSidebarItems.map((item) => (
            <ListItem
              key={item.value}
              button
              selected={selectedSection === item.value}
              onClick={() => {
                setSelectedSection(item.value);
                scrollToSection(item.value);
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
              <ListItemIcon sx={{ minWidth: 40, color: selectedSection === item.value ? 'common.white' : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
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

                      <Grid item xs={12} md={6}>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={formData.color}
                              onChange={handleSwitchChange}
                              name="color"
                            />
                          }
                          label="Color"
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
                        Recommended size: 80x80 pixels. PNG or SVG format.
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mb: 3, mt: 6 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Colour
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                      <input
                        type="color"
                        value={formData.color}
                        onChange={(e) => handleChange({ target: { name: 'color', value: e.target.value }})}
                        style={{ 
                          width: '100px',
                          height: '40px',
                          padding: '0',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      />
                      <Typography variant="caption" color="textSecondary">
                        Define the colour for your chatbot assistant
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
                  Instructions
                </Typography>
              </Box>
              <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2, mx: 4 }}>
                <CardHeader
                  title={
                    <Box display="flex" alignItems="center">
                      <SchoolIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
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

          {/* Conversations Section */}
          {selectedSection === 'conversations' && assistantId && (
            <>
              <Box sx={{ p: 3, mb: 2 }}>
                <Typography variant="h2" sx={{ ml: 1 }}>
                  Conversations
                </Typography>
              </Box>
              
              
              <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2, mx: 4 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        placeholder="Search conversations"
                        size="small"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{ 
                          width: 440,
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3
                          }
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon color="action" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        variant="outlined"
                        onClick={handleFilterClick}
                        startIcon={<FilterListIcon />}
                        sx={{ 
                          textTransform: 'none',
                          minWidth: 140
                        }}
                      >
                        {selectedFilter === 'all' ? 'All time' : 
                         selectedFilter === 'today' ? 'Today' :
                         selectedFilter === '7d' ? 'Last 7 days' :
                         selectedFilter === '30d' ? 'Last 30 days' :
                         'Custom range'}
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={selectedConversations.length === 0}
                        sx={{ textTransform: 'none' }}
                        startIcon={<FileDownloadIcon />}
                      >
                        Export
                      </Button>
                    </Box>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <Box sx={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}>
                    <Table sx={{ minWidth: 650 }}>
                      <TableHead>
                        <TableRow>
                          <TableCell padding="checkbox" sx={{ pl: 2 }}>
                            <Checkbox
                              indeterminate={selectedConversations.length > 0 && selectedConversations.length < filteredConversations.length}
                              checked={selectedConversations.length === filteredConversations.length && filteredConversations.length > 0}
                              onChange={handleSelectAll}
                            />
                          </TableCell>
                          <TableCell sx={{ color: 'text.primary', fontWeight: 600 }}>Conversation ID</TableCell>
                          <TableCell sx={{ color: 'text.primary', fontWeight: 600 }}>Phone Number</TableCell>
                          <TableCell sx={{ color: 'text.primary', fontWeight: 600 }}>Customer Name</TableCell>
                          <TableCell sx={{ color: 'text.primary', fontWeight: 600 }}>Created Date</TableCell>
                          <TableCell sx={{ color: 'text.primary', fontWeight: 600 }}>Platform</TableCell>
                          <TableCell align="right" sx={{ pr: 2, color: 'text.primary', fontWeight: 600 }}>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {filteredConversations
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((conversation) => (
                            <TableRow
                              key={conversation.id}
                              hover
                              onClick={() => handleRowClick(conversation.id)}
                              sx={{ cursor: 'pointer' }}
                            >
                              <TableCell padding="checkbox" onClick={(e) => e.stopPropagation()} sx={{ pl: 2 }}>
                                <Checkbox
                                  checked={selectedConversations.includes(conversation.id)}
                                  onChange={() => handleSelectConversation(conversation.id)}
                                />
                              </TableCell>
                              <TableCell sx={{ color: 'text.primary' }}>{conversation.id}</TableCell>
                              <TableCell sx={{ color: 'text.primary' }}>{conversation.phoneNumber}</TableCell>
                              <TableCell sx={{ color: 'text.primary' }}>{conversation.customerName}</TableCell>
                              <TableCell sx={{ color: 'text.primary' }}>{conversation.time}</TableCell>
                              <TableCell sx={{ color: 'text.primary' }}>{conversation.platform}</TableCell>
                              <TableCell align="right" onClick={(e) => e.stopPropagation()} sx={{ pr: 3 }}>
                                <IconButton 
                                  onClick={(event) => handleMenuOpen(event, conversation.id)}
                                >
                                  <MoreHorizIcon fontSize="small" />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                    <Box sx={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                    }}>
                      <Box sx={{ p: 2 }}>
                        {selectedConversations.length > 0 && (
                          <Typography variant="body2" color="text.primary">
                            {selectedConversations.length} {selectedConversations.length === 1 ? 'row' : 'rows'} selected
                          </Typography>
                        )}
                      </Box>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={filteredConversations.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={(event, newPage) => setPage(newPage)}
                        onRowsPerPageChange={(event) => {
                          setRowsPerPage(parseInt(event.target.value, 10));
                          setPage(0);
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* Filter Menu */}
              <Menu
                anchorEl={filterAnchorEl}
                open={Boolean(filterAnchorEl)}
                onClose={handleFilterClose}
              >
                <MenuItem 
                  onClick={() => handleFilterSelect('all')}
                  selected={selectedFilter === 'all'}
                >
                  All time
                </MenuItem>
                <MenuItem 
                  onClick={() => handleFilterSelect('today')}
                  selected={selectedFilter === 'today'}
                >
                  Today
                </MenuItem>
                <MenuItem 
                  onClick={() => handleFilterSelect('7d')}
                  selected={selectedFilter === '7d'}
                >
                  Last 7 days
                </MenuItem>
                <MenuItem 
                  onClick={() => handleFilterSelect('30d')}
                  selected={selectedFilter === '30d'}
                >
                  Last 30 days
                </MenuItem>
                <MenuItem 
                  onClick={() => handleFilterSelect('custom')}
                  selected={selectedFilter === 'custom'}
                >
                  Custom range
                </MenuItem>
              </Menu>

              {/* Custom Date Dialog */}
              <Dialog open={customDateDialog} onClose={handleCustomDateCancel}>
                <DialogTitle>Select Date Range</DialogTitle>
                <DialogContent>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3} sx={{ mt: 2 }}>
                      <DesktopDatePicker
                        label="Start Date"
                        value={startDate}
                        onChange={(date) => handleDateChange(date, 'start')}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            fullWidth
                          />
                        )}
                      />
                      <DesktopDatePicker
                        label="End Date"
                        value={endDate}
                        onChange={(date) => handleDateChange(date, 'end')}
                        minDate={startDate}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            fullWidth
                          />
                        )}
                      />
                    </Stack>
                  </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCustomDateCancel}>Cancel</Button>
                  <Button onClick={handleCustomDateConfirm} variant="contained">Apply</Button>
                </DialogActions>
              </Dialog>

              {/* Row Actions Menu */}
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
                <MenuItem onClick={handleMenuClose}>
                  <ListItemIcon>
                    <FileDownloadIcon fontSize="small" />
                  </ListItemIcon>
                  Export
                </MenuItem>
              </Menu>
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
