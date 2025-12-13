import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Rating,
  Divider,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { ArrowBack, ArrowForward, Close as CloseIcon } from '@mui/icons-material';
import { useProducts } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0]);
      setSelectedColor(foundProduct.colors[0]);
    }
  }, [id, getProductById]);

  if (!product) {
    return (
      <Container sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h5">Product not found</Typography>
        <Button onClick={() => navigate('/')} sx={{ mt: 2 }}>
          Go Back Home
        </Button>
      </Container>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    alert('Added to cart!');
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        Back
      </Button>

      <Grid container spacing={4}>
        {/* Image Gallery */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative' }}>
            <Box
              component="img"
              src={product.images[selectedImageIndex]}
              alt={product.name}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                objectFit: 'cover',
              }}
            />
            {product.images.length > 1 && (
              <>
                <IconButton
                  onClick={handlePrevImage}
                  sx={{
                    position: 'absolute',
                    left: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.8)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                  }}
                >
                  <ArrowBack />
                </IconButton>
                <IconButton
                  onClick={handleNextImage}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.8)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                  }}
                >
                  <ArrowForward />
                </IconButton>
              </>
            )}
          </Box>

          {/* Thumbnail Images */}
          {product.images.length > 1 && (
            <Box sx={{ display: 'flex', gap: 1, mt: 2, overflowX: 'auto' }}>
              {product.images.map((img, index) => (
                <Box
                  key={index}
                  component="img"
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  onClick={() => setSelectedImageIndex(index)}
                  sx={{
                    width: 80,
                    height: 80,
                    objectFit: 'cover',
                    borderRadius: 1,
                    cursor: 'pointer',
                    border: selectedImageIndex === index ? 2 : 0,
                    borderColor: 'primary.main',
                    opacity: selectedImageIndex === index ? 1 : 0.7,
                    '&:hover': { opacity: 1 },
                  }}
                />
              ))}
            </Box>
          )}
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            {product.name}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Rating value={product.rating} readOnly precision={0.5} />
            <Typography variant="body2" color="text.secondary">
              ({product.reviews} reviews)
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
              {product.price} SYP
            </Typography>
            {product.originalPrice && (
              <Typography
                variant="h6"
                sx={{ textDecoration: 'line-through', color: 'grey.500' }}
              >
                {product.originalPrice} SYP
              </Typography>
            )}
            {product.originalPrice && (
              <Chip
                label={`${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF`}
                color="error"
                size="small"
              />
            )}
          </Box>

          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            {product.description}
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Size Selection */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Size
              </Typography>
              <Button size="small" onClick={() => setShowSizeGuide(true)}>
                Size Guide
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {product.sizes.map((size) => (
                <Chip
                  key={size}
                  label={size}
                  onClick={() => setSelectedSize(size)}
                  color={selectedSize === size ? 'primary' : 'default'}
                  sx={{ minWidth: 60 }}
                />
              ))}
            </Box>
          </Box>

          {/* Color Selection */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Color
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {product.colors.map((color) => (
                <Chip
                  key={color}
                  label={color}
                  onClick={() => setSelectedColor(color)}
                  color={selectedColor === color ? 'primary' : 'default'}
                />
              ))}
            </Box>
          </Box>

          {/* Quantity */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Quantity
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="outlined"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </Button>
              <Typography variant="h6">{quantity}</Typography>
              <Button
                variant="outlined"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </Button>
            </Box>
          </Box>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleAddToCart}
            disabled={!selectedSize || !selectedColor}
            sx={{ py: 1.5, mb: 2 }}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>

      {/* Size Guide Dialog */}
      <Dialog open={showSizeGuide} onClose={() => setShowSizeGuide(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          Size Guide
          <IconButton
            onClick={() => setShowSizeGuide(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="h6" sx={{ mb: 2 }}>
              How to Measure
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              • Chest: Measure around the fullest part of your chest
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              • Waist: Measure around your natural waistline
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              • Hips: Measure around the fullest part of your hips
            </Typography>
            <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
              Size Chart
            </Typography>
            <Typography variant="body2">
              Please refer to our detailed size chart for accurate measurements. If you're between
              sizes, we recommend sizing up for a more comfortable fit.
            </Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ProductPage;

