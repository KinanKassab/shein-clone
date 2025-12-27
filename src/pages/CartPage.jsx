import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Divider,
  Paper,
} from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../contexts/NotificationContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { showSuccess, showInfo } = useNotification();

  const shippingCost = cartTotal > 50 ? 0 : 5.99;
  const tax = cartTotal * 0.08; // 8% tax
  const grandTotal = cartTotal + shippingCost + tax;

  if (cartItems.length === 0) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Your cart is empty
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Start shopping to add items to your cart
        </Typography>
        <Button variant="contained" component={Link} to="/">
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
      </Typography>

      <Grid container spacing={4}>
        {/* Cart Items */}
        <Grid item xs={12} md={8}>
          {cartItems.map((item, index) => (
            <Card key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', p: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 1 }}
                  image={item.images[0]}
                  alt={item.name}
                />
                <Box sx={{ flexGrow: 1, ml: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Size: {item.selectedSize} | Color: {item.selectedColor}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {item.price} SYP
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', border: 1, borderColor: 'divider', borderRadius: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() =>
                          updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)
                        }
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ px: 2, minWidth: 40, textAlign: 'center' }}>
                        {item.quantity}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() =>
                          updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)
                        }
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {(item.price * item.quantity).toFixed(2)} SYP
                    </Typography>

                    <IconButton
                      color="error"
                      onClick={() => {
                        removeFromCart(item.id, item.selectedSize, item.selectedColor);
                        showInfo(`${item.name} removed from cart`);
                      }}
                      sx={{ ml: 'auto' }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Card>
          ))}

          <Button
            variant="outlined"
            onClick={() => {
              clearCart();
              showInfo('Cart cleared');
            }}
            sx={{ mt: 2 }}
          >
            Clear Cart
          </Button>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, position: 'sticky', top: 20 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Order Summary
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Subtotal</Typography>
                <Typography variant="body2">{cartTotal.toFixed(2)} SYP</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Shipping</Typography>
                <Typography variant="body2">
                  {shippingCost === 0 ? (
                    <Typography component="span" color="success.main">
                      FREE
                    </Typography>
                  ) : (
                    `${shippingCost.toFixed(2)} SYP`
                  )}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Tax</Typography>
                <Typography variant="body2">{tax.toFixed(2)} SYP</Typography>
              </Box>
              {cartTotal < 50 && (
                <Typography variant="caption" color="text.secondary">
                  Add {(50 - cartTotal).toFixed(2)} SYP more for free shipping!
                </Typography>
              )}
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
              onClick={() => navigate('/checkout')}
              sx={{ mb: 2 }}
            >
              Proceed to Checkout
            </Button>

            <Button variant="outlined" fullWidth component={Link} to="/">
              Continue Shopping
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;

