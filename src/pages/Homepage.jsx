import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Chip,
  Button,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ExpandMore, FilterList } from '@mui/icons-material';
import { useProducts } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';
import { banners, categories } from '../data/mockData';

const Homepage = () => {
  const location = useLocation();
  const { products, featuredProducts, filters, setFilters, sortBy, setSortBy, searchQuery, setSearchQuery } = useProducts();
  const { addToCart } = useCart();
  const [displayedProducts, setDisplayedProducts] = useState(12);
  const [showFilters, setShowFilters] = useState(false);
  const observerRef = useRef(null);

  // Sync search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    setSearchQuery(query);
  }, [location.search, setSearchQuery]);

  const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '24', '26', '28', '30', '32', '34', '36'];
  const allColors = ['Pink', 'Blue', 'White', 'Black', 'Gray', 'Yellow', 'Navy', 'Red', 'Beige'];

  useEffect(() => {
    // Reset displayed products when filters change
    setDisplayedProducts(12);
  }, [filters, sortBy]);

  useEffect(() => {
    // Infinite scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayedProducts < products.length) {
          setDisplayedProducts((prev) => Math.min(prev + 12, products.length));
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [displayedProducts, products.length]);

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    addToCart(product, defaultSize, defaultColor, 1);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleSizeToggle = (size) => {
    setFilters((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const handleColorToggle = (color) => {
    setFilters((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  return (
    <Box>
        {/* Banner Carousel */}
      <Box sx={{ mb: 4, animation: 'fadeIn 0.8s ease-out' }}>
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            gap: 2,
            pb: 2,
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { height: 8 },
            '&::-webkit-scrollbar-thumb': { 
              bgcolor: 'grey.300', 
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'grey.400',
              },
            },
          }}
        >
          {banners.map((banner, index) => (
            <Box
              key={banner.id}
              component={Link}
              to={banner.link}
              sx={{
                minWidth: '100%',
                height: 300,
                backgroundImage: `url(${banner.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textDecoration: 'none',
                scrollSnapAlign: 'start',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                animation: `fadeIn 0.8s ease-out ${index * 0.2}s both`,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: 'rgba(0,0,0,0.4)',
                  transition: 'background-color 0.3s ease',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transition: 'left 0.5s ease',
                },
                '&:hover': {
                  transform: 'scale(1.02)',
                  '&::before': {
                    bgcolor: 'rgba(0,0,0,0.3)',
                  },
                  '&::after': {
                    left: '100%',
                  },
                  '& > *': {
                    transform: 'scale(1.05)',
                  },
                },
                '& > *': { 
                  position: 'relative', 
                  zIndex: 1,
                  transition: 'transform 0.3s ease',
                },
              }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 1,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                {banner.title}
              </Typography>
              <Typography 
                variant="h5"
                sx={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                }}
              >
                {banner.subtitle}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Container>
        {/* Categories */}
        <Box sx={{ mb: 4, animation: 'fadeIn 0.6s ease-out' }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            Shop by Category
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              overflowX: 'auto',
              pb: 2,
              scrollBehavior: 'smooth',
              '&::-webkit-scrollbar': { height: 8 },
              '&::-webkit-scrollbar-thumb': { 
                bgcolor: 'grey.300', 
                borderRadius: 1,
                '&:hover': {
                  bgcolor: 'grey.400',
                },
              },
            }}
          >
            {categories.map((category, index) => (
              <Box
                key={category.id}
                component={Link}
                to={`/category/${category.name.toLowerCase()}`}
                sx={{
                  minWidth: 120,
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                  animation: `scaleIn 0.5s ease-out ${index * 0.1}s both`,
                  '&:hover': { 
                    transform: 'translateY(-8px) scale(1.05)',
                    '& .category-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                    },
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Box
                  className="category-icon"
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    bgcolor: 'grey.100',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 40,
                    mb: 1,
                    mx: 'auto',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                  }}
                >
                  {category.icon}
                </Box>
                <Typography 
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {category.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Featured Products - Only show if not searching */}
        {!searchQuery && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Featured Products
            </Typography>
            <Grid container spacing={3}>
              {featuredProducts.slice(0, 4).map((product, index) => (
                <Grid 
                  item 
                  xs={6} 
                  sm={4} 
                  md={3} 
                  key={product.id}
                  sx={{
                    animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      '&:hover': {
                        transform: 'translateY(-12px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                        '& .product-image': {
                          transform: 'scale(1.1)',
                        },
                        '& .quick-add-btn': {
                          opacity: 1,
                          transform: 'translateY(0)',
                        },
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="250"
                        image={product.images[0]}
                        alt={product.name}
                        className="product-image"
                        sx={{ 
                          objectFit: 'cover',
                          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          bgcolor: 'rgba(255, 107, 107, 0.9)',
                          color: 'white',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          animation: 'pulse 2s ease-in-out infinite',
                        }}
                      >
                        FEATURED
                      </Box>
                    </Box>
                    <CardActionArea component={Link} to={`/product/${product.id}`}>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography 
                          variant="body2" 
                          noWrap 
                          sx={{ 
                            mb: 1,
                            fontWeight: 500,
                            transition: 'color 0.3s ease',
                            '&:hover': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          {product.name}
                        </Typography>
                        <Chip
                          label={product.category}
                          size="small"
                          sx={{ 
                            mb: 1, 
                            fontSize: '0.7rem', 
                            height: 20,
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontWeight: 500,
                          }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <Typography 
                            variant="h6" 
                            color="primary" 
                            sx={{ 
                              fontWeight: 'bold',
                              fontSize: '1.1rem',
                            }}
                          >
                            ${product.price}
                          </Typography>
                          {product.originalPrice && (
                            <Typography
                              variant="body2"
                              sx={{ 
                                textDecoration: 'line-through', 
                                color: 'grey.500',
                                fontSize: '0.85rem',
                              }}
                            >
                              ${product.originalPrice}
                            </Typography>
                          )}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
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
                      className="quick-add-btn"
                      sx={{ 
                        borderRadius: 0,
                        bgcolor: 'primary.main',
                        fontWeight: 'bold',
                        py: 1.5,
                        transition: 'all 0.3s ease',
                        opacity: 0.9,
                        '&:hover': {
                          bgcolor: 'primary.dark',
                          transform: 'scale(1.02)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        },
                      }}
                      onClick={(e) => handleQuickAdd(product, e)}
                    >
                      Quick Add
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Filter and Sort Section */}
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<FilterList />}
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
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

        {/* Filters Accordion */}
        {showFilters && (
          <Accordion defaultExpanded sx={{ mb: 3 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Filters</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                      value={filters.category}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      label="Category"
                    >
                      <MenuItem value="All">All</MenuItem>
                      {categories.map((cat) => (
                        <MenuItem key={cat.id} value={cat.name}>
                          {cat.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Min Price"
                    type="number"
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange('minPrice', Number(e.target.value))}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Max Price"
                    type="number"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      Sizes
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {allSizes.map((size) => (
                        <Chip
                          key={size}
                          label={size}
                          onClick={() => handleSizeToggle(size)}
                          color={filters.sizes.includes(size) ? 'primary' : 'default'}
                          size="small"
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      Colors
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {allColors.map((color) => (
                        <Chip
                          key={color}
                          label={color}
                          onClick={() => handleColorToggle(color)}
                          color={filters.colors.includes(color) ? 'primary' : 'default'}
                          size="small"
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        )}

        {/* All Products */}
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
          {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
        </Typography>
        {products.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              No products found
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {searchQuery ? 'Try a different search term' : 'Try adjusting your filters'}
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {products.slice(0, displayedProducts).map((product, index) => (
              <Grid 
                item 
                xs={6} 
                sm={4} 
                md={3} 
                key={product.id}
                sx={{
                  animation: `fadeIn 0.6s ease-out ${(index % 12) * 0.05}s both`,
                }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                      '& .product-image': {
                        transform: 'scale(1.1)',
                      },
                      '& .quick-add-btn': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={product.images[0]}
                      alt={product.name}
                      className="product-image"
                      sx={{ 
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                    {product.featured && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          bgcolor: 'rgba(255, 107, 107, 0.9)',
                          color: 'white',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          animation: 'pulse 2s ease-in-out infinite',
                        }}
                      >
                        FEATURED
                      </Box>
                    )}
                  </Box>
                  <CardActionArea component={Link} to={`/product/${product.id}`}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography 
                        variant="body2" 
                        noWrap 
                        sx={{ 
                          mb: 1,
                          fontWeight: 500,
                          transition: 'color 0.3s ease',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Chip
                        label={product.category}
                        size="small"
                        sx={{ 
                          mb: 1, 
                          fontSize: '0.7rem', 
                          height: 20,
                          bgcolor: 'primary.main',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Typography 
                          variant="h6" 
                          color="primary" 
                          sx={{ 
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                          }}
                        >
                          ${product.price}
                        </Typography>
                        {product.originalPrice && (
                          <Typography
                            variant="body2"
                            sx={{ 
                              textDecoration: 'line-through', 
                              color: 'grey.500',
                              fontSize: '0.85rem',
                            }}
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
                    className="quick-add-btn"
                    sx={{ 
                      borderRadius: 0,
                      bgcolor: 'primary.main',
                      fontWeight: 'bold',
                      py: 1.5,
                      transition: 'all 0.3s ease',
                      opacity: 0.9,
                      '&:hover': {
                        bgcolor: 'primary.dark',
                        transform: 'scale(1.02)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      },
                    }}
                    onClick={(e) => handleQuickAdd(product, e)}
                  >
                    Quick Add
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Infinite Scroll Trigger */}
        {displayedProducts < products.length && (
          <Box ref={observerRef} sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Homepage;

