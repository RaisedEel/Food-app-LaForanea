import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { cartActions } from './context/cart-slice';
import Cart from './components/cart/Cart';
import Modal from './components/ui/Modal';
import MenuPage from './pages/MenuPage';
import LandingPage from './pages/LandingPage';
import RestaurantListPage from './pages/RestaurantListPage';

function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  const dispatch = useDispatch();

  function closeModalHandler() {
    dispatch(cartActions.toggleCart());
  }

  return (
    <Fragment>
      {showCart && (
        <Modal
          title='Mi Orden'
          onClose={closeModalHandler}
          preferredWidth='80rem'
        >
          <Cart />
        </Modal>
      )}
      <Routes>
        <Route path='*' element={<Navigate replace to='/welcome' />} />
        <Route path='/welcome' element={<LandingPage />} />
        <Route path='/search/:term' element={<RestaurantListPage />} />
        <Route path='/restaurant/:restaurantCode' element={<MenuPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
