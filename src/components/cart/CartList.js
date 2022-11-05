import { Fragment } from 'react';

import CartItem from './CartItem';
import classes from './CartList.module.css';

function CartList(props) {
  return (
    <Fragment>
      <ul className={classes['cart-list']}>
        {props.items.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}
      </ul>
      <p className={classes['total-items']}>
        {props.amountOfItems} items en la bolsa
      </p>
    </Fragment>
  );
}

export default CartList;
