import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { cartActions } from './context/cart-slice';
import { authenticationActions } from './context/authentication-slice';
import Cart from './components/cart/Cart';
import Modal from './components/ui/Modal';
import MenuPage from './pages/MenuPage';
import LandingPage from './pages/LandingPage';
import RestaurantListPage from './pages/RestaurantListPage';
import Login from './components/forms/Login';

function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  const showLogin = useSelector((state) => state.authentication.showLogin);
  const dispatch = useDispatch();

  function closeCartHandler() {
    dispatch(cartActions.toggleCart());
  }

  function closeLoginHandler() {
    dispatch(authenticationActions.toggleLogin());
  }

  return (
    <Fragment>
      {showCart && (
        <Modal
          title='Mi Orden'
          onClose={closeCartHandler}
          preferredWidth='80rem'
        >
          <Cart />
        </Modal>
      )}
      {showLogin && (
        <Modal
          title='Inicio de Sesión'
          onClose={closeLoginHandler}
          preferredWidth='60rem'
        >
          <Login />
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
