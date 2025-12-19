# Shein Clone - E-commerce Website

A modern, feature-rich e-commerce website clone inspired by Shein, built with React and Material UI.

## Features

### Core Features
- ✅ **Homepage** with product categories, featured products, banners, and infinite scroll
- ✅ **Product Page** with image gallery, product details, size/color selection, and reviews
- ✅ **Shopping Cart** with quantity management and dynamic totals
- ✅ **Checkout Flow** with shipping form, payment options, and order confirmation
- ✅ **Contact Page** for customer inquiries and messages
- ✅ **Authentication** (mock) with login/signup functionality
- ✅ **Product Filtering & Sorting** by category, price, size, and color
- ✅ **Responsive Design** optimized for both mobile and desktop

### Additional Features
- Product search functionality
- Category-based browsing
- Shopping cart persistence (localStorage)
- User authentication persistence (localStorage)
- Order history tracking
- Product reviews and ratings
- Size guide modal
- Quick add to cart from product listings

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **UI Framework**: Material UI (MUI)
- **Routing**: React Router DOM
- **State Management**: Context API
- **Icons**: Material UI Icons
- **HTTP Client**: Axios (available but using mock data)

## Project Structure

```
LookyStore/
├── src/
│   ├── components/       # Reusable components
│   │   └── Navbar.jsx
│   ├── contexts/         # Context API providers
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   └── ProductContext.jsx
│   ├── data/            # Mock data
│   │   └── mockData.js
│   ├── pages/           # Page components
│   │   ├── Homepage.jsx
│   │   ├── ProductPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── CheckoutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── CategoryPage.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn


## Usage

### Authentication
- Use any email and password to login/signup (mock authentication)
- User data is stored in localStorage

### Shopping
1. Browse products on the homepage
2. Use filters to find specific products
3. Click on a product to view details
4. Select size and color, then add to cart
5. View cart and proceed to checkout
6. Fill in shipping details and complete the order

### Cart Management
- Items persist in localStorage
- Update quantities directly from the cart
- Remove items easily
- Free shipping on orders over 50 SYP

## Mock Data

The application uses mock data stored in `src/data/mockData.js`:
- 12 sample products across different categories
- Product images from Unsplash
- Sample reviews and ratings
- Promotional banners

## Data Persistence

The following data is stored in localStorage:
- **Cart Items**: Shopping cart contents
- **User Session**: Authentication state
- **Orders**: Order history
- **Contact Messages**: Contact form submissions

## Future Enhancements

- [ ] Backend API integration
- [ ] Real payment gateway integration (Stripe/PayPal)
- [ ] Real user authentication
- [ ] Admin panel for product management
- [ ] User profile page with order history
- [ ] Wishlist functionality
- [ ] Product recommendations
- [ ] Advanced search with filters
- [ ] Email notifications
- [ ] Product image zoom

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes only.

## Contributing

This is a clone project for learning purposes. Feel free to fork and modify as needed.

## Contact

For questions or feedback, use the Contact page in the application or reach out through the provided contact information.
