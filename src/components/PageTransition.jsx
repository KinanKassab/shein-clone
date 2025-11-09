import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        animation: isVisible ? 'fadeIn 0.6s ease-out' : 'none',
      }}
    >
      {children}
    </Box>
  );
};

export default PageTransition;

