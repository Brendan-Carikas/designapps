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
import ImageIcon from '@mui/icons-material/Image';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import artoIcon from '../../assets/images/arto-icon-crop.png';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAIAssistants } from '../../contexts/AIAssistantsContext';

const Settings = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { assistants, deleteAssistant } = useAIAssistants();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState('');
  const [drawerTitle, setDrawerTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [copyTooltip, setCopyTooltip] = useState('Copy');
  const [activeTab, setActiveTab] = useState(0);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedAssistant, setSelectedAssistant] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [activeAssistant, setActiveAssistant] = useState(null);
  const [files, setFiles] = useState(() => {
    const savedFiles = localStorage.getItem('uploadedFiles');
    return savedFiles ? JSON.parse(savedFiles) : [];
  });
  const contentRef = useRef(null);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab !== null) {
      setActiveTab(parseInt(tab));
    }
  }, [searchParams]);

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
        // setLogo(e.target.result);
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
    if (activeAssistant && activeAssistant.id) {
      navigate(`/app/settings/ai-assistant?id=${activeAssistant.id}`);
    }
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

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" sx={{ mb: 3, ml: 1.2 }}>
        Settings
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
       
      </Box>

      {/* AI Assistants Tab */}
      {activeTab === 0 && (
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
