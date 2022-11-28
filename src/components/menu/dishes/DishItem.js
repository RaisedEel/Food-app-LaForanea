import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../../context/cart-slice';
import Modal from '../../ui/Modal';
import classes from './DishItem.module.css';
import DishView from './DishView';

function DishItem(props) {
  const dispatch = useDispatch();
  const [itemAmount, setItemAmount] = useState(1);
  const [showViewModal, setShowViewModal] = useState(false);

  function itemAmountInputChangeHandler(event) {
    setItemAmount(event.target.value);
  }

  function showViewHandler() {
    setShowViewModal((currentState) => !currentState);
  }

  function addItemsToCartHandler() {
    const item = {
      id: props.id,
      name: props.name,
      price: +props.price,
      amount: +itemAmount,
      image: props.image,
    };

    dispatch(cartActions.addItemsToCart(item));
  }

  return (
    <Fragment>
      {showViewModal && (
        <Modal
          title={props.name}
          onClose={showViewHandler}
          preferredWidth='80rem'
        >
          <DishView
            name={props.name}
            image={props.image}
            description={props.description}
          />
        </Modal>
      )}
      <li>
        <article className={classes.dish}>
          <div className={classes['dish-img-container']}>
            <img
              className={classes['dish-img']}
              src={props.image}
              alt={props.name}
            />
            <button
              className={classes['view-button']}
              onClick={showViewHandler}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className={classes['view-icon']}
              >
                <path d='M6 3a3 3 0 00-3 3v1.5a.75.75 0 001.5 0V6A1.5 1.5 0 016 4.5h1.5a.75.75 0 000-1.5H6zM16.5 3a.75.75 0 000 1.5H18A1.5 1.5 0 0119.5 6v1.5a.75.75 0 001.5 0V6a3 3 0 00-3-3h-1.5zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM4.5 16.5a.75.75 0 00-1.5 0V18a3 3 0 003 3h1.5a.75.75 0 000-1.5H6A1.5 1.5 0 014.5 18v-1.5zM21 16.5a.75.75 0 00-1.5 0V18a1.5 1.5 0 01-1.5 1.5h-1.5a.75.75 0 000 1.5H18a3 3 0 003-3v-1.5z' />
              </svg>
            </button>
          </div>
          <div className={classes['dish-header']}>
            <p className={classes['dish-title']}>{props.name}</p>
            <span className={classes['dish-price']}>${props.price}</span>
          </div>
          <p className={classes['dish-description']}>{props.description}</p>
          <div className={`${classes['dish-controls']} grid`}>
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
    </Fragment>
  );
}

export default DishItem;
