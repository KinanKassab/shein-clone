import { Link } from 'react-router-dom';
import { Card, Box, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        bgcolor: '#ffffff',
        borderRadius: 1.5, // 12px
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        border: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* Image Container - 80% of card height with 3:4 aspect ratio */}
      <Box
        component={Link}
        to={`/product/${product.id}`}
        sx={{
          position: 'relative',
          width: '100%',
          flex: '0 0 80%',
          overflow: 'hidden',
          textDecoration: 'none',
          display: 'block',
          bgcolor: '#F4F6F6',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          aspectRatio: '3/4',
        }}
      >
        <Box
          component="img"
          src={product.images[0]}
          alt={product.name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>

      {/* Content Section - 20% of card height */}
      <Box
        sx={{
          flex: '0 0 20%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 1.5,
          gap: 0.5,
        }}
      >
        {/* Price - Bold and prominent */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1rem', sm: '1.125rem' },
            color: '#022B30',
            lineHeight: 1.2,
          }}
        >
          {product.price.toLocaleString()} SYP
        </Typography>

        {/* Product Title - Short, single line, truncated */}
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '0.8125rem', sm: '0.875rem' },
            color: '#022B30',
            lineHeight: 1.3,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {product.name}
        </Typography>
      </Box>
    </Card>
  );
};

export default ProductCard;

