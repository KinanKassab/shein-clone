import { createContext, useContext, useState, useMemo } from 'react';
import { products } from '../data/mockData';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [allProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'All',
    subcategory: 'All',
    minPrice: 0,
    maxPrice: 1000,
    sizes: [],
    colors: [],
  });
  const [sortBy, setSortBy] = useState('popular');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (filters.category !== 'All') {
      filtered = filtered.filter((product) => product.category === filters.category);
    }

    // Filter by subcategory
    if (filters.subcategory !== 'All' && filters.subcategory) {
      filtered = filtered.filter((product) => 
        product.subcategory && product.subcategory === filters.subcategory
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) => product.price >= filters.minPrice && product.price <= filters.maxPrice
    );

    // Filter by sizes
    if (filters.sizes.length > 0) {
      filtered = filtered.filter((product) =>
        filters.sizes.some((size) => product.sizes.includes(size))
      );
    }

    // Filter by colors
    if (filters.colors.length > 0) {
      filtered = filtered.filter((product) =>
        filters.colors.some((color) => product.colors.includes(color))
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
      default:
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    return filtered;
  }, [allProducts, filters, sortBy, searchQuery]);

  const featuredProducts = useMemo(() => {
    return allProducts.filter((product) => product.featured);
  }, [allProducts]);

  // Recommendation logic: Show products with high ratings, featured products, and popular items
  const recommendedProducts = useMemo(() => {
    let recommended = [...allProducts];
    
    // Prioritize featured products, high ratings, and popular items
    recommended.sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;
      
      // Featured products get higher priority
      if (a.featured) scoreA += 10;
      if (b.featured) scoreB += 10;
      
      // Higher ratings get more points
      scoreA += a.rating * 2;
      scoreB += b.rating * 2;
      
      // More reviews indicate popularity
      scoreA += Math.min(a.reviews / 10, 5);
      scoreB += Math.min(b.reviews / 10, 5);
      
      // Newer products get slight boost
      scoreA += (a.id / 100);
      scoreB += (b.id / 100);
      
      return scoreB - scoreA;
    });
    
    return recommended;
  }, [allProducts]);

  const getProductById = (id) => {
    return allProducts.find((product) => product.id === parseInt(id));
  };

  const getProductsByCategory = (category) => {
    return allProducts.filter((product) => product.category === category);
  };

  return (
    <ProductContext.Provider
      value={{
        products: filteredAndSortedProducts,
        featuredProducts,
        recommendedProducts,
        filters,
        setFilters,
        sortBy,
        setSortBy,
        searchQuery,
        setSearchQuery,
        getProductById,
        getProductsByCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

