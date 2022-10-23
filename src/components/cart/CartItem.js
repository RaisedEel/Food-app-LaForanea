import classes from './CartItem.module.css';

function CartItem(props) {
  return (
    <li>
      <article className={classes['cart-item']}>
        <div className={classes['cart-item-img-cntr']}>
          <img
            className={classes['cart-item-img']}
            src={props.src}
            alt={props.name}
          />
        </div>
        <div className={classes['cart-item-content']}>
          <p className={classes['cart-item-title']}>{props.name}</p>
          <div className={classes['cart-item-data']}>
            <button className={classes['btn-icon']}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className={`${classes.icon} ${classes['icon--pink']}`}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
            <p className={classes['cart-item-qty']}>{props.quantity}</p>
            <button className={classes['btn-icon']}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className={`${classes.icon} ${classes['icon--green']}`}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
            <p className={classes['cart-item-total']}>$ {props.total}</p>
          </div>
        </div>
        <button
          className={`${classes['btn-icon']} ${classes['btn-icon--close']}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={`${classes.icon} ${classes['icon--pink']}`}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </button>
      </article>
    </li>
  );
}

export default CartItem;
