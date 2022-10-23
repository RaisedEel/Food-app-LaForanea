import CartItem from './CartItem';
import classes from './CartList.module.css';

import imgHam from '../../assets/hamburger.jpg';

const cartContent = [
  {
    name: 'Cart Item 1',
    src: imgHam,
    quantity: 3,
    total: 100,
  },
  { name: 'Cart Item 2', src: imgHam, quantity: 4, total: 200 },
  { name: 'Cart Item 3', src: imgHam, quantity: 10, total: 50 },
  { name: 'Cart Item 4', src: imgHam, quantity: 20, total: 200 },
  { name: 'Cart Item 5', src: imgHam, quantity: 1, total: 50 },
];

function CartList() {
  return (
    <ul className={classes['cart-list']}>
      {cartContent.map((item, index) => (
        <CartItem {...item} key={index} />
      ))}
    </ul>
  );
}

export default CartList;
