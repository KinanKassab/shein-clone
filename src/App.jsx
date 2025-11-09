import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import CategoryPage from './pages/CategoryPage';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ff6b6b',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ProductProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/search" element={<Homepage />} />
            </Routes>
          </CartProvider>
        </ProductProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
