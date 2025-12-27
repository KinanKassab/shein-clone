import { useState, useEffect, useRef, useCallback } from 'react';
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
  Button,
  Container,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import SearchIcon from '../assets/icons/SearchIcon';
import CartIcon from '../assets/icons/CartIcon';
import MenuIcon from '../assets/icons/MenuIcon';
import SheinIcon from '../assets/icons/SheinIcon';
import { useCart } from '../contexts/CartContext';
import { useProducts } from '../contexts/ProductContext';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItemCount } = useCart();
  const { setSearchQuery: setProductSearchQuery, setFilters } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const debounceTimerRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync search query with URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    setSearchQuery(query);
    setProductSearchQuery(query);
  }, [location.search, setProductSearchQuery]);

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setFilters((prev) => ({
        ...prev,
        category: 'All',
        subcategory: 'All',
      }));
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Debounce the actual search
    debounceTimerRef.current = setTimeout(() => {
      setProductSearchQuery(value);
      if (value.trim()) {
        setFilters((prev) => ({
          ...prev,
          category: 'All',
          subcategory: 'All',
        }));
        navigate(`/search?q=${encodeURIComponent(value.trim())}`, { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    }, 300);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setProductSearchQuery('');
    setFilters((prev) => ({
      ...prev,
      category: 'All',
      subcategory: 'All',
    }));
    navigate('/', { replace: true });
  };

  const navLinks = [
    { text: 'Men', to: '/category/men' },
    { text: 'Women', to: '/category/women' },
    { text: 'Children', to: '/category/children' },
    { text: 'Baby', to: '/category/baby' },
    { text: 'Electronics', to: '/category/electronics' },
    { text: 'Cars', to: '/category/cars' },
    { text: 'Home', to: '/category/home' },
  ];

  const specialLinks = [
    { text: 'Order from SHEIN', to: '/shein-order', highlight: true },
  ];

  return (
    <AppBar 
      position="sticky" 
      elevation={scrolled ? 4 : 0}
      sx={{ 
        bgcolor: '#FFFFFF',
        color: '#022B30',
        zIndex: 1300,
        borderBottom: scrolled ? 'none' : '1px solid rgba(0, 79, 89, 0.1)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0px 4px 20px rgba(0, 79, 89, 0.1)' : 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          sx={{ 
            justifyContent: 'space-between', 
            py: 1.5,
            minHeight: { xs: 64, md: 72 },
          }}
        >
          {/* Logo */}
          <Link 
            to="/" 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                background: 'linear-gradient(135deg, #004F59 0%, #7BC0B6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transition: 'transform 0.3s ease',
                letterSpacing: '-0.02em',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              LookyStore
            </Typography>
          </Link>

          {/* Search Bar - Desktop */}
          {!isMobile && (
            <Box
              component="form"
              onSubmit={handleSearch}
              sx={{
                position: 'relative',
                flex: 1,
                maxWidth: 500,
                mx: 3,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  backgroundColor: '#F4F6F6',
                  border: '1px solid rgba(0, 79, 89, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    borderColor: 'primary.light',
                  },
                  '&:focus-within': {
                    backgroundColor: '#FFFFFF',
                    borderColor: 'primary.main',
                    boxShadow: '0px 0px 0px 3px rgba(0, 79, 89, 0.1)',
                  },
                }}
              >
                <InputBase
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  sx={{
                    color: 'text.primary',
                    width: '100%',
                    pl: 3,
                    pr: searchQuery ? 10 : 4,
                    py: 1,
                    fontSize: '0.95rem',
                    '&::placeholder': {
                      color: 'text.secondary',
                      opacity: 0.7,
                    },
                  }}
                />
                {searchQuery && (
                  <IconButton
                    onClick={handleClearSearch}
                    sx={{
                      color: 'text.secondary',
                      position: 'absolute',
                      right: 40,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      p: 1,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: 'error.main',
                        transform: 'translateY(-50%) scale(1.1)',
                      },
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                )}
                <IconButton
                  type="submit"
                  sx={{
                    color: 'text.secondary',
                    position: 'absolute',
                    right: 4,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    p: 1,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateY(-50%) scale(1.1)',
                    },
                  }}
                >
                  <SearchIcon color="currentColor" />
                </IconButton>
              </Box>
            </Box>
          )}

          {/* Right Side Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Desktop: Order from Shein Button */}
            {!isMobile && (
              <Button
                component={Link}
                to="/shein-order"
                variant="contained"
                sx={{
                  color: 'white',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  bgcolor: 'accent.main',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: 'accent.dark',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <SheinIcon color="white" width={70} height={20} />
              </Button>
            )}
            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={() => setMobileMenuOpen(true)}
                sx={{
                  color: 'text.primary',
                  transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'rotate(90deg)',
                  bgcolor: 'rgba(0, 79, 89, 0.08)',
                },
                }}
              >
                <MenuIcon color="currentColor" />
              </IconButton>
            )}

            {/* Cart Icon */}
            <IconButton 
              component={Link} 
              to="/cart"
              sx={{
                position: 'relative',
                color: 'text.primary',
                transition: 'all 0.3s ease',
                p: 1.5,
                  '&:hover': {
                    bgcolor: 'rgba(0, 79, 89, 0.08)',
                    transform: 'scale(1.1)',
                  },
              }}
            >
              <Badge 
                badgeContent={cartItemCount} 
                color="error"
                sx={{
                  '& .MuiBadge-badge': {
                    fontWeight: 600,
                    fontSize: '0.7rem',
                    minWidth: 20,
                    height: 20,
                    animation: cartItemCount > 0 ? 'pulse 2s ease-in-out infinite' : 'none',
                  },
                }}
              >
                <CartIcon color="currentColor" />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>

        {/* Mobile Search */}
        {isMobile && (
          <Box sx={{ px: 2, pb: 2 }}>
            <Box
              component="form"
              onSubmit={handleSearch}
              sx={{
                position: 'relative',
                borderRadius: 3,
                backgroundColor: '#F4F6F6',
                border: '1px solid rgba(0, 79, 89, 0.2)',
                transition: 'all 0.3s ease',
                '&:focus-within': {
                  backgroundColor: '#FFFFFF',
                  borderColor: 'primary.main',
                  boxShadow: '0px 0px 0px 3px rgba(0, 79, 89, 0.1)',
                },
              }}
            >
              <InputBase
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{
                  color: 'text.primary',
                  width: '100%',
                  pl: 2,
                  pr: searchQuery ? 10 : 4,
                  py: 1,
                  '&::placeholder': {
                    color: 'text.secondary',
                    opacity: 0.7,
                  },
                }}
              />
              {searchQuery && (
                <IconButton
                  onClick={handleClearSearch}
                  sx={{
                    color: 'text.secondary',
                    position: 'absolute',
                    right: 40,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    p: 1,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'error.main',
                    },
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              )}
              <IconButton
                type="submit"
                sx={{
                  color: 'text.secondary',
                  position: 'absolute',
                  right: 4,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  p: 1,
                }}
              >
                <SearchIcon color="currentColor" />
              </IconButton>
            </Box>
          </Box>
        )}
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: '#FFFFFF',
            pt: 2,
            borderLeft: '1px solid rgba(0, 79, 89, 0.1)',
          },
        }}
      >
          <Box sx={{ px: 2, py: 1, borderBottom: '1px solid rgba(84, 29, 34, 0.1)', mb: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
              Menu
            </Typography>
          </Box>
        <List>
          <ListItem
            button
            component={Link}
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            sx={{
              py: 1.5,
              '&:hover': {
                bgcolor: 'rgba(0, 79, 89, 0.08)',
              },
            }}
          >
            <ListItemText 
              primary="Home"
              primaryTypographyProps={{
                sx: { fontWeight: 500 },
              }}
            />
          </ListItem>
          {navLinks.map((item) => (
            <ListItem
              key={item.text}
              button
              component={Link}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              sx={{
                py: 1.5,
                '&:hover': {
                  bgcolor: 'rgba(0, 79, 89, 0.08)',
                },
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
          <ListItem
            button
            component={Link}
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            sx={{
              py: 1.5,
              '&:hover': {
                bgcolor: 'rgba(0, 79, 89, 0.08)',
              },
            }}
          >
            <ListItemText 
              primary="Contact"
              primaryTypographyProps={{
                sx: { fontWeight: 500 },
              }}
            />
          </ListItem>
          {specialLinks.map((item) => (
            <ListItem
              key={item.text}
              button
              component={Link}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              sx={{
                py: 1.5,
                  bgcolor: item.highlight ? 'accent.main' : 'transparent',
                  color: item.highlight ? 'white' : 'inherit',
                  '&:hover': {
                    bgcolor: item.highlight ? 'accent.dark' : 'rgba(0, 79, 89, 0.08)',
                  },
              }}
            >
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  sx: { fontWeight: item.highlight ? 600 : 500 },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
