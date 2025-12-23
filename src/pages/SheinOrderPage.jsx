import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  CircularProgress,
  Snackbar,
  InputAdornment,
} from '@mui/material';
import { Link as LinkIcon, ShoppingCart } from '@mui/icons-material';
import axios from 'axios';

const SheinOrderPage = () => {
  const [formData, setFormData] = useState({
    productUrl: '',
    quantity: 1,
    fullName: '',
    phone: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (field) => (e) => {
    let value = e.target.value;
    
    // Format phone number for Syrian format (09XXXXXXXX)
    if (field === 'phone') {
      // Remove all non-digit characters
      value = value.replace(/\D/g, '');
      // Limit to 10 digits
      if (value.length > 10) {
        value = value.slice(0, 10);
      }
      // Format as 09XXXXXXXX
      if (value.length > 0 && !value.startsWith('09')) {
        if (value.length <= 9) {
          value = '09' + value;
        } else {
          value = '09' + value.slice(2);
        }
      }
    }
    
    // Handle quantity - ensure it's a positive integer
    if (field === 'quantity') {
      value = parseInt(value) || 1;
      if (value < 1) value = 1;
      if (value > 999) value = 999;
    }
    
    setFormData({ ...formData, [field]: value });
  };

  const validateSheinUrl = (url) => {
    if (!url.trim()) return false;
    // Check if URL contains shein.com
    const sheinPattern = /shein\.(com|us|eu|ru|ca|au|jp|kr|sg|my|ph|th|vn|id|in|br|mx|ar|cl|co|pe|za|ae|sa|eg|tr|fr|de|es|it|uk|nl|pl|cz|se|no|dk|fi|ie|pt|be|at|ch|gr|ro|hu|bg|hr|sk|si|lt|lv|ee|lu|mt|cy)/i;
    return sheinPattern.test(url);
  };

  const handleSubmitOrder = async () => {
    // Validate form
    if (!formData.productUrl.trim()) {
      setSnackbar({
        open: true,
        message: 'Please enter a SHEIN product URL',
        severity: 'error',
      });
      return;
    }

    if (!validateSheinUrl(formData.productUrl)) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid SHEIN product URL',
        severity: 'error',
      });
      return;
    }

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields',
        severity: 'error',
      });
      return;
    }

    // Validate Syrian phone number format
    if (!/^09\d{8}$/.test(formData.phone)) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid Syrian phone number (09XXXXXXXX)',
        severity: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const orderPayload = {
        type: 'shein',
        customer: {
          fullName: formData.fullName.trim(),
          phone: formData.phone.trim(),
          address: formData.address.trim(),
        },
        product: {
          url: formData.productUrl.trim(),
          quantity: parseInt(formData.quantity),
        },
        orderNumber: `SHEIN-${Date.now()}`,
        date: new Date().toISOString(),
      };

      // Send order to backend API
      const response = await axios.post('/api/submit-shein-order', orderPayload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        // Show success message
        setSnackbar({
          open: true,
          message: `Order submitted successfully! Order Number: ${orderPayload.orderNumber}`,
          severity: 'success',
        });

        // Reset form
        setFormData({
          productUrl: '',
          quantity: 1,
          fullName: '',
          phone: '',
          address: '',
        });
      } else {
        throw new Error(response.data.error || 'Failed to submit order');
      }
    } catch (error) {
      console.error('Order submission error:', error);
      setSnackbar({
        open: true,
        message: error.response?.data?.error || error.message || 'Failed to submit order. Please try again.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container 
      sx={{ 
        py: 6,
        animation: 'fadeIn 0.6s ease-out',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            mb: 2, 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #000 30%, #ff6b6b 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Order from SHEIN
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ maxWidth: '600px', mx: 'auto' }}
        >
          Fill out the form below to place your order. We'll process it and get back to you soon!
        </Typography>
      </Box>

      <Box sx={{ maxWidth: '700px', mx: 'auto' }}>
        <Paper 
          sx={{ 
            p: 4,
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            '&:hover': {
              boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <ShoppingCart sx={{ fontSize: 32, mr: 2, color: 'primary.main' }} />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Order Details
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* SHEIN Product URL */}
            <TextField
              fullWidth
              label="SHEIN Product URL"
              placeholder="https://www.shein.com/..."
              required
              value={formData.productUrl}
              onChange={handleChange('productUrl')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkIcon color="action" />
                  </InputAdornment>
                ),
              }}
              helperText="Paste the link to the SHEIN product you want to order"
              sx={{
                '& .MuiOutlinedInput-root': {
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                  '&.Mui-focused': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  },
                },
              }}
            />

            {/* Quantity */}
            <TextField
              fullWidth
              label="Quantity"
              type="number"
              required
              value={formData.quantity}
              onChange={handleChange('quantity')}
              inputProps={{ min: 1, max: 999 }}
              helperText="Enter the quantity you want to order"
              sx={{
                '& .MuiOutlinedInput-root': {
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                  '&.Mui-focused': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  },
                },
              }}
            />

            {/* Full Name */}
            <TextField
              fullWidth
              label="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange('fullName')}
              sx={{
                '& .MuiOutlinedInput-root': {
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                  '&.Mui-focused': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  },
                },
              }}
            />

            {/* Phone Number */}
            <TextField
              fullWidth
              label="Phone Number (Syrian)"
              placeholder="09XXXXXXXX"
              required
              value={formData.phone}
              onChange={handleChange('phone')}
              helperText="Format: 09XXXXXXXX"
              sx={{
                '& .MuiOutlinedInput-root': {
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                  '&.Mui-focused': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  },
                },
              }}
            />

            {/* City / Address */}
            <TextField
              fullWidth
              label="City / Address"
              required
              multiline
              rows={3}
              value={formData.address}
              onChange={handleChange('address')}
              placeholder="Enter your city and full address"
              sx={{
                '& .MuiOutlinedInput-root': {
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                  '&.Mui-focused': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  },
                },
              }}
            />

            {/* Submit Button */}
            <Button 
              variant="contained" 
              fullWidth 
              size="large" 
              onClick={handleSubmitOrder}
              disabled={isSubmitting}
              startIcon={isSubmitting ? <CircularProgress size={20} sx={{ color: 'white' }} /> : <ShoppingCart />}
              sx={{
                background: 'linear-gradient(45deg, #000 30%, #ff6b6b 90%)',
                fontWeight: 'bold',
                py: 1.5,
                mt: 2,
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                  background: 'linear-gradient(45deg, #ff6b6b 30%, #000 90%)',
                },
                '&:disabled': {
                  background: '#ccc',
                },
              }}
            >
              {isSubmitting ? 'Submitting Order...' : 'Submit Order'}
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SheinOrderPage;


