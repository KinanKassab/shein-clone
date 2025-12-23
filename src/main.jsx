import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerServiceWorker, isStandalone } from './utils/pwaUtils.js'

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    registerServiceWorker();
  });
}

// Add standalone class to body if app is installed
if (isStandalone()) {
  document.body.classList.add('pwa-standalone');
  document.documentElement.classList.add('pwa-standalone');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
