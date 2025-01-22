import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  LinearProgress,
  Box,
  Button,
  Divider,
  useTheme,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  TextField,
  IconButton,
  useMediaQuery,
  Popover,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DownloadIcon from '@mui/icons-material/Download';
import BarChartIcon from '@mui/icons-material/BarChart';
import Chart from 'react-apexcharts';
import { format, subMonths, parseISO, addWeeks, addMonths, isBefore, isEqual } from 'date-fns';
import FilterListIcon from '@mui/icons-material/FilterList';
import CreditBundles from '../billing/CreditBundles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    padding: '24px',
  },
}));

const Usage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [exportAnchorEl, setExportAnchorEl] = useState(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [openBundles, setOpenBundles] = useState(false);
  const [timeFilter, setTimeFilter] = useState('month');
  const [startDate, setStartDate] = useState(format(subMonths(new Date(), 6), 'yyyy-MM-dd'));
  const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  
  // Calculate usage percentage
  const totalCredits = 500;
  const usedCredits = 120;
  const remainingCredits = totalCredits - usedCredits;
  const usagePercentage = (usedCredits / totalCredits) * 100;

  // Generate sample usage data based on date range
  const generateUsageData = () => {
    const start = parseISO(startDate);
    const end = parseISO(endDate);
    const periods = [];
    let current = start;
    
    while (isBefore(current, end) || isEqual(current, end)) {
      periods.push({
        period: format(current, timeFilter === 'week' ? 'MMM d' : 'MMM yyyy'),
        usage: Math.floor(Math.random() * 100) + 20
      });
      current = timeFilter === 'week' 
        ? addWeeks(current, 1)
        : addMonths(current, 1);
    }
    
    return periods;
  };

  const currentUsageData = generateUsageData();

  const chartOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      },
      background: 'transparent',
      fontFamily: theme.typography.fontFamily
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '60%',
      }
    },
    colors: [theme.palette.primary.main],
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: currentUsageData.map(data => data.period),
      labels: {
        style: {
          colors: theme.palette.text.secondary
        },
        rotate: -45,
        rotateAlways: true
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      },
      title: {
        text: 'Credits Used',
        style: {
          color: theme.palette.text.secondary
        }
      }
    },
    grid: {
      borderColor: theme.palette.divider
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = [{
    name: 'Credits Used',
    data: currentUsageData.map(data => data.usage)
  }];

  const handleExportClick = (event) => {
    setExportAnchorEl(event.currentTarget);
  };

  const handleExportClose = () => {
    setExportAnchorEl(null);
  };

  const handleExport = (format) => {
    // Implement export logic here based on format
    console.log(`Exporting usage data as ${format}`);
    handleExportClose();
  };

  const handleTimeFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setTimeFilter(newFilter);
    }
  };

  const handleDateChange = (event, dateType) => {
    const value = event.target.value;
    if (dateType === 'start') {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleOpenBundles = () => {
    setOpenBundles(true);
  };

  const handleCloseBundles = () => {
    setOpenBundles(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" sx={{ mb: 3, marginLeft:1.2 }}>
        Usage
      </Typography>
      
      <Grid container spacing={3}>
        {/* Billing Overview Card */}
        <Grid item xs={12}>
          <StyledCard sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2 }}>
          <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <CreditScoreIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
                <Typography variant="h5">Plan status</Typography>
              </Box>
              <Typography variant="body1" fontWeight={700} color="text.primary">
                Next plan refresh is scheduled for January 20, 2025 (in 10 days)
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Credits Usage Card */}

        <Grid item xs={12}>
          <StyledCard sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2 }}>
          <CardContent>
              <Box sx={{ mb: 3 }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <CreditScoreIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
                  <Typography variant="h5">Credits Usage</Typography>
                </Box>
                <Typography variant="body1" fontWeight={700} color="text.primary">
                  Usage period started December 20, 2024
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">
                    {usedCredits} of {totalCredits} credits used
                  </Typography>
                  <Typography variant="body1" color={remainingCredits < 50 ? 'error.main' : 'secondary.main'}>
                    {remainingCredits} credits remaining
                  </Typography>
                </Box>
                <BorderLinearProgress
                  variant="determinate"
                  value={usagePercentage}
                  sx={{
                    backgroundColor: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(0, 0, 0, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: remainingCredits < 50 
                        ? theme.palette.error.main 
                        : theme.palette.secondary.main,
                    },
                  }}
                />
              </Box>

              <Divider sx={{ 
                my: 2,
                borderColor: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.12)' 
                  : 'rgba(0, 0, 0, 0.12)',
              }} />

              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.primary" gutterBottom>
                  Note: Using this model costs one prompt credit per use.
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Once usage limits are reached, you'll need to purchase additional credits to continue using the service.
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenBundles}
              >
                Purchase additional credits
              </Button>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Monthly Usage Card */}
        <Grid item xs={12}>
          <StyledCard sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ mb: 3 }}>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                  <Box display="flex" alignItems="center">
                    <BarChartIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
                    <Typography variant="h5">Usage Over Time</Typography>
                  </Box>
                  {isMobile && (
                    <IconButton onClick={handleFilterClick}>
                      <FilterListIcon />
                    </IconButton>
                  )}
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 3 }}>
                <Box display="flex" gap={2}>
                  {!isMobile && (
                    <>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <TextField
                          label="Start Date"
                          type="date"
                          value={startDate}
                          onChange={(e) => handleDateChange(e, 'start')}
                          InputLabelProps={{ shrink: true }}
                          size="small"
                          sx={{
                            width: 150,
                            '& input::-webkit-calendar-picker-indicator': {
                              filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none'
                            }
                          }}
                          inputProps={{
                            max: endDate
                          }}
                        />
                        <TextField
                          label="End Date"
                          type="date"
                          value={endDate}
                          onChange={(e) => handleDateChange(e, 'end')}
                          InputLabelProps={{ shrink: true }}
                          size="small"
                          sx={{
                            width: 150,
                            '& input::-webkit-calendar-picker-indicator': {
                              filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none'
                            }
                          }}
                          inputProps={{
                            min: startDate,
                            max: format(new Date(), 'yyyy-MM-dd')
                          }}
                        />
                        <ToggleButtonGroup
                          value={timeFilter}
                          exclusive
                          onChange={handleTimeFilterChange}
                          size="small"
                        >
                          <ToggleButton value="week" sx={{ textTransform: 'none' }}>
                            Weekly
                          </ToggleButton>
                          <ToggleButton value="month" sx={{ textTransform: 'none' }}>
                            Monthly
                          </ToggleButton>
                        </ToggleButtonGroup>
                        <Button
                          variant="outlined"
                          startIcon={<DownloadIcon />}
                          onClick={handleExportClick}
                          sx={{ textTransform: 'none' }}
                        >
                          Export
                        </Button>
                      </Stack>
                    </>
                  )}
                </Box>
              </Box>
              
              <Box sx={{ height: 400 }}>
                <Chart
                  options={chartOptions}
                  series={chartSeries}
                  type="bar"
                  height="100%"
                />
              </Box>
              {isMobile && (
                <Box display="flex" justifyContent="flex-end" mt={2}>
                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    onClick={handleExportClick}
                    sx={{ textTransform: 'none' }}
                  >
                    Export
                  </Button>
                </Box>
              )}
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>

      {/* Export Menu */}
      <Menu
        anchorEl={exportAnchorEl}
        open={Boolean(exportAnchorEl)}
        onClose={handleExportClose}
      >
        <MenuItem onClick={() => handleExport('csv')}>Export as CSV</MenuItem>
        <MenuItem onClick={() => handleExport('pdf')}>Export as PDF</MenuItem>
        <MenuItem onClick={() => handleExport('excel')}>Export as Excel</MenuItem>
      </Menu>

      {/* Filter Menu */}
      <Popover
        open={Boolean(filterAnchorEl)}
        anchorEl={filterAnchorEl}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            p: 2,
            width: '300px',
          },
        }}
      >
        <Stack spacing={2}>
          <TextField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => handleDateChange(e, 'start')}
            InputLabelProps={{ shrink: true }}
            size="small"
            fullWidth
            sx={{
              '& input::-webkit-calendar-picker-indicator': {
                filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none'
              }
            }}
            inputProps={{
              max: endDate
            }}
          />
          <TextField
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => handleDateChange(e, 'end')}
            InputLabelProps={{ shrink: true }}
            size="small"
            fullWidth
            sx={{
              '& input::-webkit-calendar-picker-indicator': {
                filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none'
              }
            }}
            inputProps={{
              min: startDate,
              max: format(new Date(), 'yyyy-MM-dd')
            }}
          />
          <ToggleButtonGroup
            value={timeFilter}
            exclusive
            onChange={handleTimeFilterChange}
            size="small"
            fullWidth
          >
            <ToggleButton value="week" sx={{ textTransform: 'none' }}>
              Weekly
            </ToggleButton>
            <ToggleButton value="month" sx={{ textTransform: 'none' }}>
              Monthly
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Popover>
      <CreditBundles open={openBundles} onClose={handleCloseBundles} />
    </Container>
  );
};

export default Usage;
