import classes from './Cart.module.css';
import CartForm from './CartForm';
import CartList from './CartList';

function Cart(props) {
  return (
    <div className={classes.cart} style={props.style}>
      <CartList />
      <CartForm />
    </div>
  );
}

export default Cart;
