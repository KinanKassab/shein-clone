import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  InputAdornment,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Email,
} from '@mui/icons-material';

/**
 * Professional Footer Component
 * Responsive 4-column grid layout with:
 * - Brand section (logo, mission, social icons)
 * - Shop links
 * - Company links
 * - Newsletter subscription
 */
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        mt: 'auto', // Push to bottom in flex layout
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Column 1: Brand */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}
            >
              looky
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3, lineHeight: 1.7 }}
            >
              Your destination for premium fashion and lifestyle products.
              Discover the latest trends with quality you can trust.
            </Typography>
            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                size="small"
                sx={{
                  borderRadius: '50%',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  borderRadius: '50%',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  borderRadius: '50%',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Twitter fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  borderRadius: '50%',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <YouTube fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 2: Shop */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}
            >
              Shop
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link
                to="/category/new"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  New Arrivals
                </Typography>
              </Link>
              <Link
                to="/category/bestsellers"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  Best Sellers
                </Typography>
              </Link>
              <Link
                to="/category/sale"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  Sale
                </Typography>
              </Link>
            </Box>
          </Grid>

          {/* Column 3: Company */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}
            >
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link
                to="/about"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  About Us
                </Typography>
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  Contact
                </Typography>
              </Link>
              <Link
                to="/careers"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  Careers
                </Typography>
              </Link>
            </Box>
          </Grid>

          {/* Column 4: Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}
            >
              Newsletter
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2, lineHeight: 1.7 }}
            >
              Subscribe to get updates on new products and exclusive offers.
            </Typography>
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
              }}
            >
              <TextField
                placeholder="Enter your email"
                size="small"
                type="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: 'text.secondary', fontSize: 20 }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    bgcolor: 'background.default',
                    '&:hover': {
                      borderColor: 'primary.main',
                    },
                    '&.Mui-focused': {
                      borderColor: 'primary.main',
                      bgcolor: 'background.paper',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 50, // Pill shape matching theme
                  py: 1.2,
                  textTransform: 'none',
                  fontWeight: 600,
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Divider & Copyright */}
        <Divider sx={{ my: 4, borderColor: 'rgba(0, 0, 0, 0.08)' }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} looky. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography
              variant="body2"
              component={Link}
              to="/privacy"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="body2"
              component={Link}
              to="/terms"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Terms of Service
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

