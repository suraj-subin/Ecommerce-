const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeToCart(state, action) {
      const removeItem = state.filter(
        (cartItem) => cartItem.id !== action.payload);
      return removeItem;
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export const cartList = (state) => state.bcd;
export default cartSlice.reducer;
