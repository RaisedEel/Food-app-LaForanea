import classes from './Cart.module.css';
import CartForm from './CartForm';
import CartList from './CartList';

function Cart() {
  return (
    <div className={classes.cart}>
      <CartList />
      <CartForm />
    </div>
  );
}

export default Cart;
