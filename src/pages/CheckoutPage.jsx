import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Divider,
  CircularProgress,
} from '@mui/material';
import { useCart } from '../contexts/CartContext';
import { useNotification } from '../contexts/NotificationContext';
import axios from 'axios';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const { showSuccess, showError } = useNotification();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shippingCost = cartTotal > 50 ? 0 : 5.99;
  const tax = cartTotal * 0.08;
  const grandTotal = cartTotal + shippingCost + tax;

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
    
    setFormData({ ...formData, [field]: value });
  };

  const handlePlaceOrder = async () => {
    // Validate form
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      showError('Please fill in all required fields');
      return;
    }

    // Validate Syrian phone number format
    if (!/^09\d{8}$/.test(formData.phone)) {
      showError('Please enter a valid Syrian phone number (09XXXXXXXX)');
      return;
    }

    setIsSubmitting(true);

    try {
      // Build order payload with SHEIN product links from mock data
      const orderItems = cartItems.map((item) => ({
        name: item.name,
        link: item.link,
        quantity: item.quantity,
        price: item.price,
        size: item.selectedSize,
        color: item.selectedColor,
      }));

      const orderPayload = {
        customer: {
          fullName: formData.fullName.trim(),
          phone: formData.phone.trim(),
          address: formData.address.trim(),
          notes: formData.notes.trim() || null,
        },
        items: orderItems,
        totals: {
          subtotal: cartTotal,
          shipping: shippingCost,
          tax: tax,
          total: grandTotal,
        },
        orderNumber: `ORD-${Date.now()}`,
        date: new Date().toISOString(),
      };

      // Send order to backend API
      const response = await axios.post('/api/submit-order', orderPayload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        // Save order to localStorage for history
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push({
          ...orderPayload,
          telegramSent: true,
        });
        localStorage.setItem('orders', JSON.stringify(orders));

        // Clear cart
        clearCart();

        // Show success message
        showSuccess(`Order placed successfully! Order Number: ${orderPayload.orderNumber}`, { duration: 3000 });

        // Navigate home after a short delay
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        throw new Error(response.data.error || 'Failed to submit order');
      }
    } catch (error) {
      console.error('Order submission error:', error);
      showError(error.response?.data?.error || error.message || 'Failed to submit order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Your cart is empty
        </Typography>
        <Button variant="contained" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container 
      sx={{ 
        py: 4,
        animation: 'fadeIn 0.6s ease-out',
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 4, 
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #000 30%, #ff6b6b 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Checkout
      </Typography>

      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Paper 
            sx={{ 
              p: 3,
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              '&:hover': {
                boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
              },
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              Customer Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  required
                  multiline
                  rows={3}
                  value={formData.address}
                  onChange={handleChange('address')}
                  placeholder="Enter your full address or location"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Notes (Optional)"
                  multiline
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange('notes')}
                  placeholder="Any special instructions or notes for your order"
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
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <Paper 
            sx={{ 
              p: 3, 
              position: 'sticky', 
              top: 20,
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              '&:hover': {
                boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                transform: 'translateY(-4px)',
              },
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Order Summary
            </Typography>

            {cartItems.map((item) => (
              <Box key={`${item.id}-${item.selectedSize}`} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box
                    component="img"
                    src={item.images[0]}
                    alt={item.name}
                    sx={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 1 }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" noWrap>
                      {item.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.selectedSize} | {item.selectedColor} × {item.quantity}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {(item.price * item.quantity).toFixed(2)} SYP
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}

            <Divider sx={{ my: 2 }} />

            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Subtotal</Typography>
                <Typography variant="body2">{cartTotal.toFixed(2)} SYP</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Shipping</Typography>
                <Typography variant="body2">
                  {shippingCost === 0 ? 'FREE' : `${shippingCost.toFixed(2)} SYP`}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Tax</Typography>
                <Typography variant="body2">{tax.toFixed(2)} SYP</Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Total
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {grandTotal.toFixed(2)} SYP
              </Typography>
            </Box>

            <Button 
              variant="contained" 
              fullWidth 
              size="large" 
              onClick={handlePlaceOrder}
              disabled={isSubmitting}
              sx={{
                background: 'linear-gradient(45deg, #000 30%, #ff6b6b 90%)',
                fontWeight: 'bold',
                py: 1.5,
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
              {isSubmitting ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={20} sx={{ color: 'white' }} />
                  <span>Submitting...</span>
                </Box>
              ) : (
                'Confirm Order'
              )}
            </Button>
          </Paper>
        </Grid>
      </Grid>

    </Container>
  );
};

export default CheckoutPage;

