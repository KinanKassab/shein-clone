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
import ProductCard from '../components/ProductCard';

const Homepage = () => {
  const location = useLocation();
  const { products, recommendedProducts, filters, setFilters, sortBy, setSortBy, searchQuery, setSearchQuery } = useProducts();
  const { addToCart } = useCart();
  const [displayedProducts, setDisplayedProducts] = useState(12);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iconErrors, setIconErrors] = useState({});
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


  useEffect(() => {
    // Reset displayed products when filters change
    setDisplayedProducts(12);
  }, [filters, sortBy]);

  useEffect(() => {
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


  return (
    <Box sx={{ 
      bgcolor: 'background.default', 
      minHeight: '100vh',
      pb: { xs: 3, md: 4 }, // Mobile padding
    }}>
      <Container 
        maxWidth="xl"
        sx={{
          px: { xs: 1.5, sm: 2, md: 3 }, // Mobile-first padding
        }}
      >
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
                      background: 'linear-gradient(135deg, rgba(2, 43, 48, 0.6) 0%, rgba(0, 79, 89, 0.4) 100%)',
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
                          background: 'linear-gradient(to top, rgba(2, 43, 48, 0.7) 0%, transparent 100%)',
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
                          background: 'linear-gradient(to top, rgba(2, 43, 48, 0.7) 0%, transparent 100%)',
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
        <Box sx={{ mb: { xs: 4, md: 6 }, animation: 'fadeIn 0.6s ease-out' }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: { xs: 'flex-start', sm: 'flex-end' }, 
            justifyContent: 'space-between', 
            mb: 2,
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1, sm: 0 },
          }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                Shop by Category
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                Curated collections for every style and occasion.
              </Typography>
            </Box>
            <Button
              component={Link}
              to="/category/all"
              size="small"
              variant="outlined"
              sx={{ 
                display: { xs: 'none', sm: 'inline-flex' },
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
              }}
            >
              View all
            </Button>
          </Box>

          <Box
            sx={{
              p: { xs: 1.5, sm: 2, md: 3 },
              borderRadius: { xs: 2, md: 3 },
              border: '1px solid',
              borderColor: 'grey.200',
              background: 'linear-gradient(145deg, #ffffff 0%, #f5f7fa 50%, #eef2f7 100%)',
              boxShadow: { xs: '0 4px 12px rgba(0,0,0,0.06)', md: '0 16px 40px rgba(0,0,0,0.06)' },
              position: 'relative',
              overflow: 'hidden',
              '&::after': {
                content: '""',
                position: 'absolute',
                right: { xs: -60, md: -120 },
                top: { xs: -60, md: -120 },
                width: { xs: 130, md: 260 },
                height: { xs: 130, md: 260 },
                borderRadius: '50%',
                background: 'radial-gradient(circle at center, rgba(0, 79, 89, 0.12), transparent 60%)',
                pointerEvents: 'none',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: { xs: 'nowrap', md: 'wrap' },
                gap: { xs: 1.5, md: 2 },
                overflowX: 'auto',
                overflowY: 'hidden',
                pb: 1,
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
                '&::-webkit-scrollbar': { 
                  height: { xs: 6, md: 8 },
                  display: { xs: 'block', md: 'block' },
                },
                '&::-webkit-scrollbar-thumb': {
                  bgcolor: 'grey.300',
                  borderRadius: 1,
                  '&:hover': { bgcolor: 'grey.400' },
                },
              }}
            >
              {categories.map((category, index) => {
                const previewSubcategories = category.subcategories?.slice(0, 3).join(' • ');
                const iconError = iconErrors[category.id] || false;

                return (
                  <Box
                    key={category.id}
                    sx={{
                      minWidth: { xs: 180, sm: 200 },
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
                        borderRadius: { xs: 2, md: 3 },
                        p: { xs: 2, md: 2.5 },
                        border: '1px solid',
                        borderColor: 'grey.100',
                        background: 'linear-gradient(160deg, #ffffff, #F4F6F6)',
                        boxShadow: { xs: '0 4px 12px rgba(0,0,0,0.06)', md: '0 12px 30px rgba(0,0,0,0.06)' },
                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        touchAction: 'manipulation',
                        '&:active': {
                          transform: { xs: 'scale(0.98)', md: 'none' },
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(120deg, rgba(0, 79, 89, 0.08), transparent 45%)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                        },
                        '&:hover': {
                          transform: { xs: 'none', md: 'translateY(-6px)' },
                          borderColor: 'primary.light',
                          boxShadow: { xs: '0 4px 12px rgba(0,0,0,0.06)', md: '0 18px 45px rgba(15,23,42,0.12)' },
                          '&::before': { opacity: 1 },
                          '& .category-icon': {
                            transform: { xs: 'scale(1.02)', md: 'scale(1.08) rotate(4deg)' },
                            boxShadow: { xs: '0 6px 14px rgba(0, 79, 89, 0.18)', md: '0 12px 25px rgba(0, 79, 89, 0.25)' },
                          },
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                        <Box
                          className="category-icon"
                          sx={{
                            width: { xs: 44, md: 48 },
                            height: { xs: 44, md: 48 },
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'linear-gradient(145deg, #eef2ff, #e0e7ff)',
                            boxShadow: '0 6px 14px rgba(79,70,229,0.18)',
                            transition: 'all 0.3s ease',
                            overflow: 'hidden',
                            p: 0.5,
                            fontSize: { xs: 24, md: 26 },
                            color: '#1e1b4b',
                          }}
                        >
                          {!iconError ? (
                            <img 
                              src={category.icon} 
                              alt={category.name}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                              }}
                              onError={() => setIconErrors(prev => ({ ...prev, [category.id]: true }))}
                            />
                          ) : (
                            <Box component="span" sx={{ fontSize: 'inherit' }}>
                              {category.fallbackIcon || '📦'}
                            </Box>
                          )}
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
                          background: 'linear-gradient(120deg, #004F59, #7BC0B6)',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          boxShadow: '0 12px 24px rgba(0, 79, 89, 0.25)',
                          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                          '&:hover': {
                            transform: 'translateY(-2px) scale(1.02)',
                            boxShadow: '0 16px 32px rgba(0, 79, 89, 0.28)',
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
              </Grid>
            </AccordionDetails>
          </Accordion>
        )}

        {/* Featured Products */}
        {!searchQuery && (
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
            Featured Products
          </Typography>
        )}
        {searchQuery && (
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
            Search Results for "{searchQuery}"
          </Typography>
        )}
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
          <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
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
                <ProductCard product={product} />
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

