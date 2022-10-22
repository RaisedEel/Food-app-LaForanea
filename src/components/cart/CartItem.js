import classes from './CartItem.module.css';

function CartItem(props) {
  return (
    <li>
      <article className={classes['cart-item']}>
        <div className={classes['cart-img-container']}>
          <img
            className={classes['cart-img']}
            src={props.src}
            alt={props.name}
          />
        </div>
        <div className={classes['cart-content']}>
          <p className={classes['cart-title']}>{props.name}</p>
          <div className={classes['cart-data']}>
            <p className={classes['cart-qty']}>{props.quantity}</p>
            <p className={classes['cart-total']}>{props.total}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default CartItem;
