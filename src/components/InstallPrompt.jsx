import { useState, useEffect } from 'react';
import { Box, Button, Card, Typography, IconButton, Slide, Avatar, useTheme, useMediaQuery } from '@mui/material';
import { Close, GetApp, Storefront } from '@mui/icons-material'; // Added Storefront for placeholder icon

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // 1. Check if app is in standalone mode (already installed)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // 2. Check if user recently dismissed the prompt
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed, 10);
      const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed < 7) return; // Wait 7 days before showing again
    }

    // 3. Capture the event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Add a small delay for better UX (don't pop up immediately on load)
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // 4. Double check installation status
    setTimeout(() => {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true);
        setShowPrompt(false);
      }
    }, 1000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  if (isInstalled || !showPrompt) return null;

  return (
    <Slide direction="up" in={showPrompt} mountOnEnter unmountOnExit>
      <Card
        elevation={0}
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 32 },
          left: { xs: 16, md: 32 },
          // Constrain width but allow it to breathe
          width: 'calc(100% - 32px)',
          maxWidth: 420,
          zIndex: 1300,
          overflow: 'visible', // For the close button if we wanted it floating
          borderRadius: 4,
          // Glassmorphism effect
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
        }}
      >
        <Box sx={{ p: 2.5 }}>
          {/* Header Section: Icon + Text + Close */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
            
            {/* App Icon / Logo Placeholder */}
            <Avatar
              variant="rounded"
              sx={{
                width: 56,
                height: 56,
                bgcolor: 'primary.main',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                borderRadius: 2.5
              }}
            >
               {/* Replace this Icon with <img src="/logo.png" /> */}
              <Storefront fontSize="large" sx={{ color: 'white' }} /> 
            </Avatar>

            <Box sx={{ flex: 1, mt: 0.5 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 800, 
                  lineHeight: 1.2,
                  color: 'text.primary',
                  mb: 0.5
                }}
              >
                Get LookyStore
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary', 
                  lineHeight: 1.5,
                  fontWeight: 500
                }}
              >
                Add to home screen for faster access and a fullscreen experience.
              </Typography>
            </Box>

            <IconButton
              size="small"
              onClick={handleDismiss}
              sx={{
                color: 'text.disabled',
                transform: 'translate(4px, -4px)',
                '&:hover': { color: 'text.primary', bgcolor: 'rgba(0,0,0,0.05)' }
              }}
            >
              <Close fontSize="small" />
            </IconButton>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleDismiss}
              sx={{
                borderRadius: 2.5,
                textTransform: 'none',
                fontWeight: 600,
                color: 'text.secondary',
                borderColor: 'divider',
                '&:hover': {
                  borderColor: 'text.secondary',
                  bgcolor: 'transparent'
                }
              }}
            >
              Not now
            </Button>
            <Button
              fullWidth
              variant="contained"
              disableElevation
              startIcon={<GetApp />}
              onClick={handleInstall}
              sx={{
                borderRadius: 2.5,
                textTransform: 'none',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #007FFF 0%, #0059B2 100%)', // Customize your brand color here
                boxShadow: '0 4px 14px rgba(0, 127, 255, 0.4)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(0, 127, 255, 0.6)',
                }
              }}
            >
              Install
            </Button>
          </Box>
        </Box>
      </Card>
    </Slide>
  );
};

export default InstallPrompt;