import React from 'react';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import Chart from 'react-apexcharts';
import SupportIcon from '@mui/icons-material/Support';

const SupportQueriesCard = ({ sx }) => {
  const theme = useTheme();
  
  // Sample data - replace with actual data in production
  const completedQueries = 75;
  const outstandingQueries = 25;

  const chartOptions = {
    chart: {
      type: 'donut',
      height: 200,
    },
    labels: ['Completed', 'Outstanding'],
    colors: [theme.palette.primary.main, theme.palette.grey[300]],
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              color: theme.palette.text.primary,
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              }
            }
          }
        }
      }
    },
    legend: {
      position: 'bottom',
      offsetY: 0,
      labels: {
        colors: theme.palette.text.primary
      },
      formatter: function(seriesName, opts) {
        return seriesName + ": " + opts.w.globals.series[opts.seriesIndex]
      }
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
      style: {
        fontSize: '14px',
        fontFamily: theme.typography.fontFamily,
      },
      custom: ({series, seriesIndex, dataPointIndex, w}) => {
        return '<div style="padding: 8px; background: #000000; color: #ffffff;">' +
               w.globals.labels[seriesIndex] + ': ' + series[seriesIndex] + '%</div>';
      }
    }
  };

  const series = [completedQueries, outstandingQueries];

  return (
    <Card sx={sx}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <SupportIcon color="primary" sx={{ width: 40, height: 40, mr: 2 }} />
          <Typography variant="h5">Support Queries</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Chart
            options={chartOptions}
            series={series}
            type="donut"
            height={300}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SupportQueriesCard;