import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  IconButton,
  Box,
    Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SearchIcon from '../assets/icons/SearchIcon';
import CartIcon from '../assets/icons/CartIcon';
import MenuIcon from '../assets/icons/MenuIcon';
import { useCart } from '../contexts/CartContext';
import { useProducts } from '../contexts/ProductContext';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItemCount } = useCart();
  const { setSearchQuery: setProductSearchQuery } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync search query with URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    setSearchQuery(query);
    setProductSearchQuery(query);
  }, [location.search, setProductSearchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    // Update ProductContext immediately for real-time search
    setProductSearchQuery(value);
    // Update URL for bookmarkability
    if (value.trim()) {
      navigate(`/search?q=${encodeURIComponent(value)}`, { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        bgcolor: '#000', 
        zIndex: 1300,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        {/* Logo */}
        <Link 
          to="/" 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              fontWeight: 'bold', 
              letterSpacing: 2,
              background: 'linear-gradient(45deg, #fff 30%, #ff6b6b 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            K-Store
          </Typography>
        </Link>

        {/* Search Bar - Desktop */}
        {!isMobile && (
          <Box
            component="form"
            onSubmit={handleSearch}
            sx={{
              position: 'relative',
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              width: '40%',
              maxWidth: 600,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(255, 107, 107, 0.2)',
              },
              '&:focus-within': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 16px rgba(255, 107, 107, 0.3)',
              },
            }}
          >
            <InputBase
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{
                color: 'inherit',
                width: '100%',
                pl: 3,
                pr: 1,
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            />
            <IconButton
              type="submit"
              sx={{ 
                color: 'inherit', 
                position: 'absolute', 
                right: 0,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1) rotate(5deg)',
                },
              }}
            >
              <SearchIcon color="white" />
            </IconButton>
          </Box>
        )}

        {/* Right Side Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              onClick={() => setMobileMenuOpen(true)}
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'rotate(90deg)',
                },
              }}
            >
              <MenuIcon color="white" />
            </IconButton>
          )}

          {/* Cart Icon */}
          <IconButton 
            color="inherit" 
            component={Link} 
            to="/cart"
            sx={{
              position: 'relative',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                '& svg': {
                  animation: 'pulse 0.6s ease-in-out',
                },
              },
            }}
          >
            <Badge 
              badgeContent={cartItemCount} 
              color="error"
              sx={{
                '& .MuiBadge-badge': {
                  animation: cartItemCount > 0 ? 'pulse 2s ease-in-out infinite' : 'none',
                },
              }}
            >
              <CartIcon color="white" />
            </Badge>
          </IconButton>

        </Box>
      </Toolbar>

      {/* Mobile Search */}
      {isMobile && (
        <Box sx={{ px: 2, pb: 1, animation: 'fadeIn 0.5s ease-out' }}>
          <Box
            component="form"
            onSubmit={handleSearch}
            sx={{
              position: 'relative',
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              width: '100%',
              transition: 'all 0.3s ease',
              '&:focus-within': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 12px rgba(255, 107, 107, 0.2)',
              },
            }}
          >
            <InputBase
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{
                color: 'inherit',
                width: '100%',
                pl: 3,
                pr: 1,
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            />
            <IconButton
              type="submit"
              sx={{ 
                color: 'inherit', 
                position: 'absolute', 
                right: 0,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <SearchIcon color="white" />
            </IconButton>
          </Box>
        </Box>
      )}

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          },
        }}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            {[
              { text: 'Home', to: '/' },
              { text: 'Women', to: '/category/women' },
              { text: 'Men', to: '/category/men' },
              { text: 'Kids', to: '/category/kids' },
              { text: 'Sale', to: '/category/sale' },
              { text: 'Contact', to: '/contact' },
            ].map((item, index) => (
              <ListItem
                key={item.text}
                button
                component={Link}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  animation: `slideIn 0.3s ease-out ${index * 0.1}s both`,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateX(10px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    sx: { fontWeight: 500 },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;

