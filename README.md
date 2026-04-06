# Paradise Nursery - Online Plant Shop

## Project Overview

Paradise Nursery is a modern e-commerce web application designed for browsing and purchasing houseplants. Built with React and Redux, this application provides a seamless shopping experience with dynamic cart management, product categorization, and interactive features.

## Project Name
**Paradise Nursery**

## Project Description
An online plant shop where users can:
- Browse a curated collection of houseplants organized by category
- View detailed product information including images, names, descriptions, and prices
- Add plants to a shopping cart
- Manage cart items with quantity adjustments
- Calculate real-time total costs
- Proceed to checkout

## Key Features

### 1. Navigation System
- Responsive navigation bar with links to Home, Plants, and Cart pages
- Real-time cart item counter
- Seamless navigation across all pages

### 2. Product Listing Page
- Display of at least six unique houseplants per category
- Multiple plant categories (e.g., Succulents, Flowering Plants, Foliage Plants, etc.)
- Product thumbnails with name and price
- Interactive "Add to Cart" buttons with disabled state after adding
- Dynamic cart icon count updates

### 3. Shopping Cart Page
- Display all cart items with thumbnails, names, and unit prices
- Individual item total cost calculation
- Dynamic quantity controls (increase/decrease buttons)
- Delete buttons for item removal
- Overall cart total amount
- Checkout button (Coming Soon)
- Continue Shopping button to return to products

### 4. State Management
- Redux implementation with CartSlice for cart state management
- Global state for product quantity tracking
- Efficient cart operations without page refresh

## Technology Stack
- **Frontend**: React 18.2.0
- **State Management**: Redux with @reduxjs/toolkit
- **Routing**: React Router DOM v6
- **Styling**: CSS3
- **Build Tool**: Create React App

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│   └── AboutUs.jsx
├── pages/
├── redux/
│   └── CartSlice.jsx
├── assets/
├── App.jsx
├── App.css
└── index.js
```

## Installation & Setup

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## User Stories

### User Story 1: Browse Products
As a user, I want to browse plants organized by category so that I can find the plants I'm interested in.

### User Story 2: Add to Cart
As a user, I want to add plants to my cart with a single click so that I can purchase them later.

### User Story 3: Manage Cart
As a user, I want to adjust quantities and remove items from my cart so that I have full control over my purchase.

### User Story 4: Checkout
As a user, I want to proceed to checkout to complete my purchase (Coming Soon).

## Future Enhancements
- Payment gateway integration
- User authentication and profiles
- Order history
- Product reviews and ratings
- Search and filter functionality
- Wishlist feature
- Product recommendations

## Author
Course Project - Paradise Nursery E-Commerce Platform

## License
MIT
