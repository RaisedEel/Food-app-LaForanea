import { useSelector } from 'react-redux';

import classes from './Cart.module.css';
import CartForm from './CartForm';
import CartList from './CartList';
import EmptyCart from './EmptyCart';

function Cart(props) {
  const cart = useSelector((state) => state.cart);

  return (
    <div className={classes.cart} style={props.style}>
      {cart.amountOfItems === 0 && <EmptyCart />}
      {cart.amountOfItems > 0 && (
        <CartList items={cart.cartContent} amountOfItems={cart.amountOfItems} />
      )}
      {cart.amountOfItems > 0 && <CartForm />}
    </div>
  );
}

export default Cart;
