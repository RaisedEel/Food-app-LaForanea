import { createSlice } from '@reduxjs/toolkit';

const initialMenu = {
  restaurantId: '',
  menu: [],
  currentPage: 1,
  amountOfDishes: 0,
  amountPerPage: 4,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialMenu,
  reducers: {
    setMenu(state, action) {
      state.menu = action.payload;
      state.amountOfDishes = action.payload.length;
    },
    increasePage(state) {
      if (state.currentPage >= state.amountOfDishes / state.amountPerPage) {
        return;
      }

      state.currentPage++;
    },
    decreasePage(state) {
      if (state.currentPage === 1) {
        return;
      }

      state.currentPage--;
    },
    goToPage(state, action) {
      if (action.payload <= state.amountOfDishes / state.amountPerPage) {
        state.currentPage = action.payload;
        return;
      }

      state.currentPage = Math.ceil(state.amountOfDishes / state.amountPerPage);
    },
  },
});

export default menuSlice;
export const menuActions = menuSlice.actions;
