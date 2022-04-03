import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity : 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingIndex = state.products.findIndex((item) => item._id === action.payload._id);
      if(existingIndex >= 0){
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          quantity : state.products[existingIndex].quantity + 1};
      }
      else{
      let tempProduct = {...action.payload, quantity:1};
      state.products.push(tempProduct);
      console.log(state.products);
      }
      // state.quantity += 1;
      // state.products.push(action.payload);
      // state.total += action.payload.price * action.payload.quantity;
    },
    decreaseCart: (state,action) => {
      const itemIndex = state.products.findIndex((item) => item._id === action.payload._id);

      if(state.products[itemIndex].quantity > 1){
        state.products[itemIndex].quantity -= 1;
      }
      else if(state.products[itemIndex].quantity === 1){
        const nextproducts = state.products.filter(
          (item) => item._id !== action.payload._id
        );
        state.products = nextproducts;
      }
    },
    increaseCart: (state,action) => {
      const itemIndex = state.products.findIndex((item) => item._id === action.payload._id);

      if(state.products[itemIndex].quantity >= 1){
        state.products[itemIndex].quantity += 1;
      }
      state.total = 0;
    },
    getTotals : (state,action) => {
      let { cartTotal, cartQuantity } = state.products.reduce(
        (Total, products) => {
          const { price, quantity } = products;
          const itemTotal = price * quantity;

          Total.cartTotal += itemTotal;
          Total.cartQuantity += quantity;

          return Total;
        },
        {
          cartTotal: 0,
          cartQuantity: 0,
        }
      );
      cartTotal = parseFloat(cartTotal.toFixed(2));
      state.quantity = cartQuantity;
      state.total = cartTotal;
    },
    clearCart(state, action) {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, decreaseCart, increaseCart, getTotals, clearCart } = cartSlice.actions;
export default cartSlice.reducer;