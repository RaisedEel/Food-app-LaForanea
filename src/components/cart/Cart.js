import classes from './Cart.module.css';
import CartList from './CartList';

function Cart() {
  return (
    <div className={classes.cart}>
      <CartList />
    </div>
  );
}

export default Cart;
