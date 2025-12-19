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
  Button,
  Container,
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
  const [scrolled, setScrolled] = useState(false);

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setProductSearchQuery(value);
    if (value.trim()) {
      navigate(`/search?q=${encodeURIComponent(value)}`, { replace: true });
    } else {
      navigate('/', { replace: true });
    }
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

  return (
    <AppBar 
      position="sticky" 
      elevation={scrolled ? 4 : 0}
      sx={{ 
        bgcolor: '#FFFFFF',
        color: '#2b0000',
        zIndex: 1300,
        borderBottom: scrolled ? 'none' : '1px solid rgba(84, 29, 34, 0.1)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0px 4px 20px rgba(84, 29, 34, 0.1)' : 'none',
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
                background: 'linear-gradient(135deg, #541d22 0%, #7a3a3f 100%)',
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
              looky
            </Typography>
          </Link>

          {/* Desktop Navigation Links */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flex: 1, justifyContent: 'center', mx: 4 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.text}
                  component={Link}
                  to={link.to}
                  sx={{
                    color: location.pathname.includes(link.to) ? 'primary.main' : 'text.primary',
                    fontWeight: location.pathname.includes(link.to) ? 600 : 500,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: 'rgba(84, 29, 34, 0.08)',
                      color: 'primary.main',
                    },
                  }}
                >
                  {link.text}
                </Button>
              ))}
            </Box>
          )}

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
                  backgroundColor: '#f5eded',
                  border: '1px solid rgba(84, 29, 34, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    borderColor: 'primary.light',
                  },
                  '&:focus-within': {
                    backgroundColor: '#FFFFFF',
                    borderColor: 'primary.main',
                    boxShadow: '0px 0px 0px 3px rgba(84, 29, 34, 0.1)',
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
                    pr: 4,
                    py: 1,
                    fontSize: '0.95rem',
                    '&::placeholder': {
                      color: 'text.secondary',
                      opacity: 0.7,
                    },
                  }}
                />
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
            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={() => setMobileMenuOpen(true)}
                sx={{
                  color: 'text.primary',
                  transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'rotate(90deg)',
                  bgcolor: 'rgba(84, 29, 34, 0.08)',
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
                    bgcolor: 'rgba(84, 29, 34, 0.08)',
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
                backgroundColor: '#f5eded',
                border: '1px solid rgba(84, 29, 34, 0.2)',
                transition: 'all 0.3s ease',
                '&:focus-within': {
                  backgroundColor: '#FFFFFF',
                  borderColor: 'primary.main',
                  boxShadow: '0px 0px 0px 3px rgba(84, 29, 34, 0.1)',
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
                  pr: 4,
                  py: 1,
                  '&::placeholder': {
                    color: 'text.secondary',
                    opacity: 0.7,
                  },
                }}
              />
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
            borderLeft: '1px solid rgba(84, 29, 34, 0.1)',
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
                bgcolor: 'rgba(233, 30, 99, 0.08)',
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
                  bgcolor: 'rgba(84, 29, 34, 0.08)',
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
                bgcolor: 'rgba(233, 30, 99, 0.08)',
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
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
