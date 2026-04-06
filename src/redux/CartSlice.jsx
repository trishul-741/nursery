import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart or increase quantity if exists
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalQuantity++;
      state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
    },

    // Remove item from cart
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(item => item.id !== id);
        state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      }
    },

    // Increase quantity of specific item
    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state.totalQuantity++;
        state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      }
    },

    // Decrease quantity of specific item
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state.totalQuantity--;
        state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      }
    },

    // Clear entire cart
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice.reducer;
