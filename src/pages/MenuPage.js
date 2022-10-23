import { Fragment } from 'react';
import Cart from '../components/cart/Cart';
import Menu from '../components/menu/Menu';

function MenuPage() {
  return (
    <Fragment>
      <div
        className='container grid'
        style={{ gridTemplateColumns: '1fr 40rem' }}
      >
        <Menu />
        <Cart />
      </div>
    </Fragment>
  );
}

export default MenuPage;
