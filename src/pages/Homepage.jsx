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
  Skeleton,
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
import { ExpandMore, FilterList, ArrowForwardIos } from '@mui/icons-material';
import { useProducts } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';
import { banners, categories } from '../data/mockData';

const Homepage = () => {
  const location = useLocation();
  const { products, featuredProducts, filters, setFilters, sortBy, setSortBy, searchQuery, setSearchQuery } = useProducts();
  const { addToCart } = useCart();
  const [displayedProducts, setDisplayedProducts] = useState(12);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef(null);

  // Simulate loading state for skeleton demonstration
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="xl">
        {/* Modern Bento-Grid Hero Section */}
        {/* Asymmetrical grid: Left 66% (Desktop), Right 33% (Desktop) */}
        {!searchQuery && (
          <Box sx={{ mb: 6, mt: 4 }}>
            <Grid container spacing={2} sx={{ height: { xs: 'auto', md: 500 } }}>
              {/* Left: Large Hero Image (66% on desktop, full width on mobile) */}
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 300, md: '100%' },
                    borderRadius: 3,
                    overflow: 'hidden',
                    backgroundImage: `url(${banners[0]?.image || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(107, 114, 128, 0.4) 100%)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        fontSize: { xs: '2rem', md: '3rem' },
                        textShadow: '2px 2px 12px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {banners[0]?.title || 'Summer Sale'}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 3,
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        textShadow: '1px 1px 6px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {banners[0]?.subtitle || 'Up to 50% OFF'}
                    </Typography>
                    <Button
                      component={Link}
                      to={banners[0]?.link || '/category/sale'}
                      variant="contained"
                      size="large"
                      sx={{
                        borderRadius: 50,
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: 'none',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                        },
                      }}
                    >
                      Shop Now
                    </Button>
                  </Box>
                </Box>
              </Grid>

              {/* Right: Vertical Stack of Two Feature Cards (33% on desktop, full width on mobile) */}
              <Grid 
                item 
                xs={12} 
                md={4}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Grid container spacing={2} sx={{ height: '100%' }}>
                  {/* New Arrivals Card */}
                  <Grid item xs={12} sx={{ flex: 1 }}>
                    <Card
                      component={Link}
                      to="/category/new"
                      sx={{
                        height: '100%',
                        position: 'relative',
                        borderRadius: 3,
                        overflow: 'hidden',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        backgroundImage: `url(${banners[1]?.image || 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        p: 3,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(to top, rgba(26, 26, 26, 0.7) 0%, transparent 100%)',
                        },
                      }}
                    >
                      <Box sx={{ position: 'relative', zIndex: 1, color: 'white' }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                          {banners[1]?.title || 'New Arrivals'}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          {banners[1]?.subtitle || 'Latest Fashion Trends'}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>

                  {/* Flash Sale Card */}
                  <Grid item xs={12} sx={{ flex: 1 }}>
                    <Card
                      component={Link}
                      to="/category/sale"
                      sx={{
                        height: '100%',
                        position: 'relative',
                        borderRadius: 3,
                        overflow: 'hidden',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        backgroundImage: `url(${banners[2]?.image || 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        p: 3,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(to top, rgba(26, 26, 26, 0.7) 0%, transparent 100%)',
                        },
                      }}
                    >
                      <Box sx={{ position: 'relative', zIndex: 1, color: 'white' }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                          {banners[2]?.title || 'Flash Sale'}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          {banners[2]?.subtitle || 'Limited Time Offer'}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* Categories */}
        <Box sx={{ mb: 6, animation: 'fadeIn 0.6s ease-out' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', mb: 2 }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Shop by Category
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Curated collections for every style and occasion.
              </Typography>
            </Box>
            <Button
              component={Link}
              to="/category/all"
              size="small"
              variant="outlined"
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              View all
            </Button>
          </Box>

          <Box
            sx={{
              p: { xs: 2, md: 3 },
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'grey.200',
              background: 'linear-gradient(145deg, #ffffff 0%, #f5f7fa 50%, #eef2f7 100%)',
              boxShadow: '0 16px 40px rgba(0,0,0,0.06)',
              position: 'relative',
              overflow: 'hidden',
              '&::after': {
                content: '""',
                position: 'absolute',
                right: -120,
                top: -120,
                width: 260,
                height: 260,
                borderRadius: '50%',
                background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.12), transparent 60%)',
                pointerEvents: 'none',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: { xs: 'nowrap', md: 'wrap' },
                gap: 2,
                overflowX: 'auto',
                pb: 1,
                scrollBehavior: 'smooth',
                '&::-webkit-scrollbar': { height: 8 },
                '&::-webkit-scrollbar-thumb': {
                  bgcolor: 'grey.300',
                  borderRadius: 1,
                  '&:hover': { bgcolor: 'grey.400' },
                },
              }}
            >
              {categories.map((category, index) => {
                const previewSubcategories = category.subcategories?.slice(0, 3).join(' • ');

                return (
                  <Box
                    key={category.id}
                    sx={{
                      minWidth: { xs: 220, sm: 200 },
                      flex: { 
                        xs: '0 0 auto', 
                        md: '1 0 calc(25% - 16px)',
                        lg: '1 0 calc(20% - 16px)',
                        xl: '1 0 calc(16.666% - 16px)'
                      },
                      position: 'relative',
                      animation: `scaleIn 0.5s ease-out ${index * 0.08}s both`,
                    }}
                  >
                    <Box
                      component={Link}
                      to={`/category/${category.name.toLowerCase()}`}
                      sx={{
                        display: 'block',
                        height: '100%',
                        textDecoration: 'none',
                        color: 'inherit',
                        borderRadius: 3,
                        p: 2.5,
                        border: '1px solid',
                        borderColor: 'grey.100',
                        background: 'linear-gradient(160deg, #ffffff, #f8fafc)',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.06)',
                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(120deg, rgba(99,102,241,0.08), transparent 45%)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                        },
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          borderColor: 'primary.light',
                          boxShadow: '0 18px 45px rgba(15,23,42,0.12)',
                          '&::before': { opacity: 1 },
                          '& .category-icon': {
                            transform: 'scale(1.08) rotate(4deg)',
                            boxShadow: '0 12px 25px rgba(99,102,241,0.25)',
                          },
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                        <Box
                          className="category-icon"
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 26,
                            background: 'linear-gradient(145deg, #eef2ff, #e0e7ff)',
                            color: '#1e1b4b',
                            boxShadow: '0 6px 14px rgba(79,70,229,0.18)',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {category.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                            {category.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {category.subcategories?.length ? `${category.subcategories.length} subcategories` : 'Explore products'}
                          </Typography>
                        </Box>
                      </Box>

                      {previewSubcategories && (
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {previewSubcategories}
                        </Typography>
                      )}

                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 1,
                          mt: 1,
                          px: 1.5,
                          py: 0.75,
                          borderRadius: 999,
                          background: 'linear-gradient(120deg, #6366f1, #22d3ee)',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          boxShadow: '0 12px 24px rgba(99, 102, 241, 0.25)',
                          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                          '&:hover': {
                            transform: 'translateY(-2px) scale(1.02)',
                            boxShadow: '0 16px 32px rgba(99, 102, 241, 0.28)',
                          },
                        }}
                      >
                        <Box component="span">Shop now</Box>
                        <ArrowForwardIos sx={{ fontSize: 14, opacity: 0.9 }} />
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        {/* Featured Products - Only show if not searching */}
        {!searchQuery && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Featured Products
            </Typography>
            {isLoading ? (
              <Grid container spacing={3}>
                {[...Array(4)].map((_, index) => (
                  <Grid item xs={6} sm={4} md={3} key={index}>
                    <Skeleton variant="rectangular" height={250} sx={{ borderRadius: 2, mb: 1 }} />
                    <Skeleton variant="text" width="80%" height={24} sx={{ mb: 1 }} />
                    <Skeleton variant="text" width="40%" height={20} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Grid container spacing={3}>
                {featuredProducts.slice(0, 4).map((product, index) => (
                  <Grid 
                    item 
                    xs={6} 
                    sm={4} 
                    md={3}
                    lg={3}
                    xl={3}
                    key={product.id}
                    sx={{
                      animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Glassmorphism Product Card */}
                    <Card 
                      sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column',
                        overflow: 'hidden',
                        // Glassmorphism: transparent background, subtle border, no shadow
                        bgcolor: 'rgba(255, 255, 255, 0.7)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        boxShadow: 'none',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          borderColor: 'rgba(0, 0, 0, 0.12)',
                          '& .product-image': {
                            transform: 'scale(1.05)',
                          },
                          '& .quick-add-btn': {
                            opacity: 1,
                            maxHeight: '60px',
                            paddingTop: '12px',
                            paddingBottom: '12px',
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
                              bgcolor: 'rgba(26, 26, 26, 0.9)',
                              color: 'white',
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 2,
                              fontSize: '0.75rem',
                              fontWeight: 'bold',
                            }}
                          >
                            FEATURED
                          </Box>
                        )}
                      </Box>
                      <CardActionArea component={Link} to={`/product/${product.id}`}>
                        <CardContent sx={{ flexGrow: 1, bgcolor: 'transparent' }}>
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
                              {product.price} SYP
                            </Typography>
                            {product.originalPrice && (
                              <Typography
                                variant="body2"
                                sx={{ 
                                  textDecoration: 'line-through', 
                                  color: 'text.secondary',
                                  fontSize: '0.85rem',
                                }}
                              >
                                {product.originalPrice} SYP
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
                      {/* Quick Add Button - Hidden by default, shows on hover */}
                      <Button
                        variant="contained"
                        className="quick-add-btn"
                        onClick={(e) => handleQuickAdd(product, e)}
                        fullWidth
                        sx={{
                          borderRadius: 50,
                          py: 1.5,
                          mt: 'auto',
                          boxShadow: 'none',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          opacity: 0,
                          maxHeight: 0,
                          overflow: 'hidden',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            boxShadow: 'none',
                            transform: 'translateY(-2px)',
                            backgroundColor: 'primary.dark',
                          },
                        }}
                      >
                        Quick Add
                      </Button>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
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
                      onChange={(e) => {
                        handleFilterChange('category', e.target.value);
                        handleFilterChange('subcategory', 'All');
                      }}
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
                  <FormControl fullWidth>
                    <InputLabel>Subcategory</InputLabel>
                    <Select
                      value={filters.subcategory || 'All'}
                      onChange={(e) => handleFilterChange('subcategory', e.target.value)}
                      label="Subcategory"
                      disabled={filters.category === 'All' || !categories.find(c => c.name === filters.category)?.subcategories?.length}
                    >
                      <MenuItem value="All">All</MenuItem>
                      {categories
                        .find(c => c.name === filters.category)
                        ?.subcategories?.map((subcat) => (
                          <MenuItem key={subcat} value={subcat}>
                            {subcat}
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
        ) : isLoading ? (
          // Skeleton Loading State - Mirrors exact grid structure
          <Grid container spacing={3}>
            {[...Array(8)].map((_, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Skeleton 
                  variant="rectangular" 
                  height={250} 
                  sx={{ 
                    borderRadius: 2, 
                    mb: 1,
                    bgcolor: 'rgba(0, 0, 0, 0.05)',
                  }} 
                />
                <Skeleton 
                  variant="text" 
                  width="80%" 
                  height={24} 
                  sx={{ mb: 1 }} 
                />
                <Skeleton 
                  variant="text" 
                  width="60%" 
                  height={20} 
                  sx={{ mb: 0.5 }} 
                />
                <Skeleton 
                  variant="text" 
                  width="40%" 
                  height={18} 
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {products.slice(0, displayedProducts).map((product, index) => (
              <Grid 
                item 
                xs={6} 
                sm={4} 
                md={3}
                lg={2}
                xl={2}
                key={product.id}
                sx={{
                  animation: `fadeIn 0.6s ease-out ${(index % 12) * 0.05}s both`,
                  // Custom width for large screens (lg) to show 5 columns instead of 6
                  '@media (min-width: 1200px) and (max-width: 1535px)': {
                    flexBasis: 'calc(20% - 19.2px) !important',
                    maxWidth: 'calc(20% - 19.2px) !important',
                  },
                }}
              >
                {/* Glassmorphism Product Card */}
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    overflow: 'hidden',
                    // Glassmorphism: transparent background, subtle border, no shadow
                    bgcolor: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'rgba(0, 0, 0, 0.12)',
                      '& .product-image': {
                        transform: 'scale(1.05)',
                      },
                      '& .quick-add-btn': {
                        opacity: 1,
                        maxHeight: '60px',
                        paddingTop: '12px',
                        paddingBottom: '12px',
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
                          bgcolor: 'rgba(26, 26, 26, 0.9)',
                          color: 'white',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                        }}
                      >
                        FEATURED
                      </Box>
                    )}
                  </Box>
                  <CardActionArea component={Link} to={`/product/${product.id}`}>
                    <CardContent sx={{ flexGrow: 1, bgcolor: 'transparent' }}>
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
                          {product.price} SYP
                        </Typography>
                        {product.originalPrice && (
                          <Typography
                            variant="body2"
                            sx={{ 
                              textDecoration: 'line-through', 
                              color: 'text.secondary',
                              fontSize: '0.85rem',
                            }}
                          >
                            {product.originalPrice} SYP
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
                  {/* Quick Add Button - Hidden by default, shows on hover */}
                  <Button
                    variant="contained"
                    className="quick-add-btn"
                    onClick={(e) => handleQuickAdd(product, e)}
                    fullWidth
                    sx={{
                      borderRadius: 50,
                      py: 1.5,
                      mt: 'auto',
                      boxShadow: 'none',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      opacity: 0,
                      maxHeight: 0,
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        boxShadow: 'none',
                        transform: 'translateY(-2px)',
                        backgroundColor: 'primary.dark',
                      },
                    }}
                  >
                    Quick Add
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Infinite Scroll Trigger - Using Skeleton instead of CircularProgress */}
        {displayedProducts < products.length && (
          <Box ref={observerRef} sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <Grid container spacing={3}>
              {[...Array(4)].map((_, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Skeleton 
                    variant="rectangular" 
                    height={250} 
                    sx={{ 
                      borderRadius: 2, 
                      mb: 1,
                      bgcolor: 'rgba(0, 0, 0, 0.05)',
                    }} 
                  />
                  <Skeleton 
                    variant="text" 
                    width="80%" 
                    height={24} 
                    sx={{ mb: 1 }} 
                  />
                  <Skeleton 
                    variant="text" 
                    width="60%" 
                    height={20} 
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Homepage;

