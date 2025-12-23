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
import { categories } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const { products, filters, setFilters, sortBy, setSortBy } = useProducts();
  const { addToCart } = useCart();

  const categoryName = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All';
  const subcategoryName = subcategory 
    ? subcategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : null;

  useEffect(() => {
    if (category && category !== 'all') {
      const newFilters = { ...filters, category: categoryName };
      if (subcategoryName) {
        newFilters.subcategory = subcategoryName;
      } else {
        newFilters.subcategory = 'All';
      }
      setFilters(newFilters);
    } else {
      setFilters({ ...filters, category: 'All', subcategory: 'All' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, subcategory]);

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    addToCart(product, defaultSize, defaultColor, 1);
  };

  const currentCategory = categories.find(c => c.name === categoryName);
  const displayTitle = subcategoryName 
    ? `${categoryName} - ${subcategoryName}` 
    : categoryName;

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
        {displayTitle} Products
      </Typography>
      
      {/* Subcategory Navigation */}
      {currentCategory && currentCategory.subcategories && currentCategory.subcategories.length > 0 && (
        <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Button
            component={Link}
            to={`/category/${category.toLowerCase()}`}
            variant={!subcategoryName ? 'contained' : 'outlined'}
            size="small"
          >
            All
          </Button>
          {currentCategory.subcategories.map((subcat) => {
            const subcatSlug = subcat.toLowerCase().replace(/\s+/g, '-');
            return (
              <Button
                key={subcat}
                component={Link}
                to={`/category/${category.toLowerCase()}/${subcatSlug}`}
                variant={subcategoryName === subcat ? 'contained' : 'outlined'}
                size="small"
              >
                {subcat}
              </Button>
            );
          })}
        </Box>
      )}

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
        <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
          {products.map((product) => (
            <Grid item xs={6} sm={4} md={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default CategoryPage;

