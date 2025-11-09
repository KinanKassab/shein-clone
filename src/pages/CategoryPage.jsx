import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useProducts } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';

const CategoryPage = () => {
  const { category } = useParams();
  const { products, filters, setFilters, sortBy, setSortBy } = useProducts();
  const { addToCart } = useCart();

  const categoryName = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All';

  useEffect(() => {
    if (category && category !== 'all') {
      setFilters({ ...filters, category: categoryName });
    } else {
      setFilters({ ...filters, category: 'All' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    addToCart(product, defaultSize, defaultColor, 1);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        {categoryName} Products
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Sort By</InputLabel>
          <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)} label="Sort By">
            <MenuItem value="popular">Popular</MenuItem>
            <MenuItem value="price-low">Price: Low to High</MenuItem>
            <MenuItem value="price-high">Price: High to Low</MenuItem>
            <MenuItem value="newest">Newest</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {products.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            No products found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Try adjusting your filters or browse other categories
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={6} sm={4} md={3} key={product.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea component={Link} to={`/product/${product.id}`}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={product.images[0]}
                    alt={product.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" noWrap sx={{ mb: 1 }}>
                      {product.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                        ${product.price}
                      </Typography>
                      {product.originalPrice && (
                        <Typography
                          variant="body2"
                          sx={{ textDecoration: 'line-through', color: 'grey.500' }}
                        >
                          ${product.originalPrice}
                        </Typography>
                      )}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Typography variant="caption" color="text.secondary">
                        ⭐ {product.rating}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        ({product.reviews})
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ borderRadius: 0 }}
                  onClick={(e) => handleQuickAdd(product, e)}
                >
                  Quick Add
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default CategoryPage;

