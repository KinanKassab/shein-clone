import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InstallPrompt from './components/InstallPrompt';
import PageTransition from './components/PageTransition';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import CategoryPage from './pages/CategoryPage';
import SheinOrderPage from './pages/SheinOrderPage';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';

// Advanced "Soft UI" Theme with Neumorphism-lite aesthetic
// Neutral palette: creams, charcoal, slate with high-contrast accent
const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a', // Charcoal accent for high contrast
      light: '#4a4a4a',
      dark: '#0a0a0a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6b7280', // Slate
      light: '#9ca3af',
      dark: '#4b5563',
      contrastText: '#ffffff',
    },
    background: {
      default: '#faf9f7', // Cream background
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a', // Charcoal
      secondary: '#6b7280', // Slate
    },
    error: {
      main: '#dc2626',
    },
    success: {
      main: '#16a34a',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.08)',
    '0px 8px 16px rgba(0,0,0,0.1)',
    '0px 12px 24px rgba(0,0,0,0.12)',
    '0px 16px 32px rgba(0,0,0,0.14)',
    ...Array(19).fill('0px 16px 32px rgba(0,0,0,0.14)'),
  ],
  components: {
    // Pill-shaped buttons with no elevation, soft hover states
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50, // Pill shape
          padding: '10px 24px',
          fontSize: '0.95rem',
          boxShadow: 'none', // No elevation
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        contained: {
          '&:hover': {
            boxShadow: 'none',
            transform: 'translateY(-2px)',
            backgroundColor: 'primary.dark',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    // Cards with subtle border, no shadow
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: 'none', // Remove default shadows
          border: '1px solid rgba(0, 0, 0, 0.08)', // Subtle border
        },
      },
    },
  },
});

function AppContent() {
  const location = useLocation();
  
  return (
    <ProductProvider>
      <CartProvider>
        {/* Sticky Footer Layout: Flex container with minHeight 100vh */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            // PWA safe areas
            paddingTop: { xs: 'env(safe-area-inset-top)', md: 0 },
            paddingBottom: { xs: 'env(safe-area-inset-bottom)', md: 0 },
            paddingLeft: { xs: 'env(safe-area-inset-left)', md: 0 },
            paddingRight: { xs: 'env(safe-area-inset-right)', md: 0 },
          }}
        >
          <Navbar />
          {/* Main content area with flexGrow to push footer down */}
          <Box sx={{ flexGrow: 1 }}>
            <PageTransition key={location.pathname}>
              <Routes location={location}>
                <Route path="/" element={<Homepage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/shein-order" element={<SheinOrderPage />} />
                <Route path="/category/:category/:subcategory" element={<CategoryPage />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/search" element={<Homepage />} />
              </Routes>
            </PageTransition>
          </Box>
          <Footer />
          <InstallPrompt />
        </Box>
      </CartProvider>
    </ProductProvider>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
