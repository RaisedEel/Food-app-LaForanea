import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { cartActions } from './context/cart-slice';
import {
  authenticationActions,
  selectCurrentProfile,
} from './context/authentication-slice';
import Cart from './components/cart/Cart';
import Modal from './components/ui/Modal';
import PrivateRoutes from './components/layout/PrivateRoutes';
import LandingPage from './pages/LandingPage';
import CreateAccountPage from './pages/CreateAccountPage';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import MenuPage from './pages/MenuPage';
import RestaurantListPage from './pages/RestaurantListPage';
import Login from './components/forms/Login';
import UserForm from './components/forms/UserForm';
import RestaurantForm from './components/forms/RestaurantForm';
import FavoritesPage from './pages/FavoritesPage';
import CataloguePage from './pages/CataloguePage';

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const showLogin = useSelector((state) => state.authentication.showLogin);
  const currentProfile = useSelector(selectCurrentProfile);

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
        <Route path='*' element={<Navigate replace to='/' />} />
        <Route path='/search/:term' element={<RestaurantListPage />} />
        <Route path='/restaurant/:restaurantCode' element={<MenuPage />} />
        <Route path='/catalogue' element={<CataloguePage />} />
        <Route
          path='/'
          element={
            <PrivateRoutes
              accessOn={!currentProfile}
              redirectPath='/user/home'
            />
          }
        >
          <Route index element={<Navigate replace to='welcome' />} />
          <Route path='welcome' element={<LandingPage />} />
          <Route path='new' element={<CreateAccountPage />}>
            <Route index element={<Navigate replace to='user' />} />
            <Route path='user' element={<UserForm />} />
            <Route path='restaurant' element={<RestaurantForm />} />
            <Route path='*' element={<Navigate replace to='user' />} />
          </Route>
        </Route>
        <Route
          path='/user'
          element={
            <PrivateRoutes accessOn={currentProfile} redirectPath='/welcome' />
          }
        >
          <Route index path='home' element={<HomePage />} />
          <Route path='favorites' element={<FavoritesPage />} />
          <Route path='settings' element={<SettingsPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
