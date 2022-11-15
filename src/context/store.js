import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import menuSlice from './menu-slice';
import restaurantsSlice from './restaurants-slice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    menu: menuSlice.reducer,
    restaurants: restaurantsSlice.reducer,
  },
});

export default store;
