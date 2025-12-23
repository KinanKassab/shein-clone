// PWA Utility Functions

/**
 * Check if the app is running in standalone mode (installed as PWA)
 */
export const isStandalone = () => {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true ||
    document.referrer.includes('android-app://')
  );
};

/**
 * Check if device is iOS
 */
export const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

/**
 * Check if device is Android
 */
export const isAndroid = () => {
  return /Android/.test(navigator.userAgent);
};

/**
 * Check if device is mobile
 */
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Get safe area insets for notched devices
 */
export const getSafeAreaInsets = () => {
  return {
    top: parseInt(getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-top)') || '0', 10),
    bottom: parseInt(getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-bottom)') || '0', 10),
    left: parseInt(getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-left)') || '0', 10),
    right: parseInt(getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-right)') || '0', 10),
  };
};

/**
 * Check if service worker is supported
 */
export const isServiceWorkerSupported = () => {
  return 'serviceWorker' in navigator;
};

/**
 * Check if app can be installed
 */
export const canInstallApp = () => {
  return 'BeforeInstallPromptEvent' in window || isStandalone();
};

/**
 * Register service worker
 */
export const registerServiceWorker = async () => {
  if (!isServiceWorkerSupported()) {
    console.warn('Service Worker not supported');
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('Service Worker registered:', registration.scope);
    return registration;
  } catch (error) {
    console.error('Service Worker registration failed:', error);
    return null;
  }
};

/**
 * Unregister service worker (useful for development)
 */
export const unregisterServiceWorker = async () => {
  if (!isServiceWorkerSupported()) {
    return;
  }

  try {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration) {
      await registration.unregister();
      console.log('Service Worker unregistered');
    }
  } catch (error) {
    console.error('Service Worker unregistration failed:', error);
  }
};

/**
 * Clear all caches (useful for development)
 */
export const clearAllCaches = async () => {
  if ('caches' in window) {
    try {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map((name) => caches.delete(name)));
      console.log('All caches cleared');
    } catch (error) {
      console.error('Cache clearing failed:', error);
    }
  }
};


