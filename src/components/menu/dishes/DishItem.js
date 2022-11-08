import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../../context/cart-slice';
import classes from './DishItem.module.css';

function DishItem(props) {
  const dispatch = useDispatch();
  const [itemAmount, setItemAmount] = useState(1);

  function itemAmountInputChangeHandler(event) {
    setItemAmount(event.target.value);
  }

  function addItemsToCartHandler() {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: itemAmount,
      image: props.image,
    };

    dispatch(cartActions.addItemsToCart(item));
  }

  return (
    <li>
      <article className={classes.dish}>
        <div className={classes['dish-img-container']}>
          <img
            className={classes['dish-img']}
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className={classes['dish-header']}>
          <p className={classes['dish-title']}>{props.name}</p>
          <span className={classes['dish-price']}>${props.price}</span>
        </div>
        <p className={classes['dish-description']}>{props.description}</p>
        <div className={`${classes['dish-controls']} grid grid--2-cols`}>
          <input
            className={classes['dish-input']}
            type='number'
            value={itemAmount}
            min='1'
            max='99'
            step='1'
            onChange={itemAmountInputChangeHandler}
          />
          <button className='btn' onClick={addItemsToCartHandler}>
            Agregar
          </button>
        </div>
      </article>
    </li>
  );
}

export default DishItem;
