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
      price: props.price,
      amount: itemAmount,
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
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className={classes['view-icon']}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
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
