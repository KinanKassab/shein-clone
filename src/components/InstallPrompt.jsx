import { useState, useEffect } from 'react';
import { Box, Button, Card, Typography, IconButton, Slide } from '@mui/material';
import { Close, GetApp } from '@mui/icons-material';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Check if already dismissed
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed, 10);
      const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      // Show again after 7 days
      if (daysSinceDismissed < 7) {
        return;
      }
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if app is installed after a delay
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
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      setIsInstalled(true);
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  if (isInstalled || !showPrompt) {
    return null;
  }

  return (
    <Slide direction="up" in={showPrompt} mountOnEnter unmountOnExit>
      <Card
        sx={{
          position: 'fixed',
          bottom: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
          right: { xs: 16, md: 'auto' },
          maxWidth: { xs: 'calc(100% - 32px)', md: 400 },
          zIndex: 1300,
          p: 2,
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          borderRadius: 3,
          background: 'linear-gradient(145deg, #ffffff, #F4F6F6)',
          border: '1px solid rgba(0, 79, 89, 0.2)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
              Install LookyStore
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
              Install our app for a better experience! Get quick access, offline browsing, and faster loading.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                startIcon={<GetApp />}
                onClick={handleInstall}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  px: 2,
                }}
              >
                Install Now
              </Button>
              <Button
                variant="outlined"
                onClick={handleDismiss}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                }}
              >
                Maybe Later
              </Button>
            </Box>
          </Box>
          <IconButton
            size="small"
            onClick={handleDismiss}
            sx={{
              mt: -1,
              mr: -1,
            }}
          >
            <Close fontSize="small" />
          </IconButton>
        </Box>
      </Card>
    </Slide>
  );
};

export default InstallPrompt;


