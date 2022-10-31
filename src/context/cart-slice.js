import { createSlice } from '@reduxjs/toolkit';

const initialCart = {
  restaurantKey: '',
  cartContent: [],
  amountOfItems: 0,
  totalOfCart: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCart,
  reducers: {
    resetCart(state) {
      state = initialCart;
    },
    addItemsToCart(state, action) {
      const itemInCart = state.cartContent.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.amount = itemInCart.amount + action.payload.amount;
        itemInCart.itemTotal =
          itemInCart.itemTotal + action.payload.amount * action.payload.price;
      } else {
        state.cartContent.push({
          ...action.payload,
          itemTotal: action.payload.price,
        });
      }
      state.amountOfItems += action.payload.amount;
      state.totalOfCart += action.payload.amount * action.payload.price;
    },
    removeItemFromCart(state, action) {
      const itemInCart = state.cartContent.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart.amount === 1) {
        state.cartContent = state.cartContent.filter(
          (item) => item.id !== action.payload.id
        );
      }

      itemInCart.amount--;
      itemInCart.itemTotal -= action.payload.price;
      state.amountOfItems--;
      state.totalOfCart -= action.payload.price;
    },
    removeAllItemsFromCart(state, action) {
      state.cartContent = state.cartContent.filter(
        (item) => item.id !== action.payload.id
      );
      state.amountOfItems -= action.payload.amount;
      state.totalOfCart -= action.payload.itemTotal;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
