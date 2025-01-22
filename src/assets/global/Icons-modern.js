const icons = {
  defaultProps: {
    // Default icon size
    fontSize: 'medium',
  },
  styleOverrides: {
    fontSizeLarge: {
      fontSize: '2rem',
    },
    fontSizeMedium: {
      fontSize: '1.5rem',
    },
    fontSizeSmall: {
      fontSize: '1.25rem',
    },
    root: {
      // Default icon color
      color: 'inherit',
      // Transition for hover effects
      transition: 'all 0.2s ease-in-out',
    },
  },
  variants: [
    {
      props: { color: 'primary' },
      style: {
        color: '#36ADA4', // Modern theme primary color
      },
    },
    {
      props: { color: 'secondary' },
      style: {
        color: '#7c3aed', // Modern purple
      },
    },
    {
      props: { color: 'success' },
      style: {
        color: '#10b981', // Modern green
      },
    },
    {
      props: { color: 'warning' },
      style: {
        color: '#f59e0b', // Modern amber
      },
    },
    {
      props: { color: 'error' },
      style: {
        color: '#ef4444', // Modern red
      },
    },
    {
      props: { color: 'info' },
      style: {
        color: '#36ADA4', // Modern light blue
      },
    },
    {
      props: { variant: 'cardtitle' },
      style: {
        color: '#36ADA4',
      },
    },
  ],
};

export default icons;
