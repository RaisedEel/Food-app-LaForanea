import CartItem from './CartItem';
import classes from './CartList.module.css';

import { Fragment } from 'react';
import { useSelector } from 'react-redux';

function CartList() {
  const { cartContent, amountOfItems } = useSelector((state) => state.cart);

  return (
    <Fragment>
      <ul className={classes['cart-list']}>
        {cartContent.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}
      </ul>
      <p className={classes['total-items']}>
        {amountOfItems} items en el carro
      </p>
    </Fragment>
  );
}

export default CartList;
