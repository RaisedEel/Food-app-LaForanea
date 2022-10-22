import { Fragment } from 'react';
import Cart from '../components/cart/Cart';
import Menu from '../components/menu/Menu';

function MenuPage() {
  return (
    <Fragment>
      <div className='container grid grid--3-cols'>
        <Menu />
        <Cart />
      </div>
    </Fragment>
  );
}

export default MenuPage;
