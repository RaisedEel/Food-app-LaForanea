import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from './context/cart-slice';
import Cart from './components/cart/Cart';
import Modal from './components/ui/Modal';
import MenuPage from './pages/MenuPage';

function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  const dispatch = useDispatch();

  function closeModalHandler() {
    dispatch(cartActions.toggleCart());
  }

  return (
    <Fragment>
      {showCart && (
        <Modal title='Carrito' onClose={closeModalHandler}>
          <Cart />
        </Modal>
      )}
      <MenuPage />
    </Fragment>
  );
}

export default App;
