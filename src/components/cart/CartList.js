import CartItem from './CartItem';
import classes from './CartList.module.css';

import { Fragment } from 'react';
import { useSelector } from 'react-redux';

// const cartContent = [
//   {
//     name: 'Cart Item 1',
//     src: imgHam,
//     quantity: 3,
//     total: 100,
//   },
//   { name: 'Cart Item 2', src: imgHam, quantity: 4, total: 200 },
//   { name: 'Cart Item 3', src: imgHam, quantity: 10, total: 9999 },
//   { name: 'Cart Item 4', src: imgHam, quantity: 20, total: 2000 },
//   { name: 'Cart Item 5', src: imgHam, quantity: 1, total: 50 },
// ];

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
