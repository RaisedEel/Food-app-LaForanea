import { configureStore } from '@reduxjs/toolkit';
import authenticationSlice from './authentication-slice';
import cartSlice from './cart-slice';
import menuSlice from './menu-slice';
import restaurantsSlice from './restaurants-slice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    menu: menuSlice.reducer,
    restaurants: restaurantsSlice.reducer,
    authentication: authenticationSlice.reducer,
  },
});

export default store;
