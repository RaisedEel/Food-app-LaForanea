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
        <Modal
          title='Mi Orden'
          onClose={closeModalHandler}
          preferredSize='80rem'
        >
          <Cart />
        </Modal>
      )}
      <MenuPage />
    </Fragment>
  );
}

export default App;
