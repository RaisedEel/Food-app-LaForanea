import { useSelector } from 'react-redux';

import classes from './Cart.module.css';
import CartForm from './CartForm';
import CartList from './CartList';
import EmptyCart from './EmptyCart';

function Cart(props) {
  const cartContent = useSelector((state) => state.cart.cartContent);
  const amountOfItems = useSelector((state) => state.cart.amountOfItems);

  return (
    <div className={classes.cart} style={props.style}>
      {amountOfItems === 0 && <EmptyCart />}
      {amountOfItems > 0 && (
        <CartList items={cartContent} amountOfItems={amountOfItems} />
      )}
      {amountOfItems > 0 && <CartForm />}
    </div>
  );
}

export default Cart;
