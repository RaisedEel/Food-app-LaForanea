import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../context/cart-slice';
import classes from './MainHeader.module.css';
import logo from '../../assets/la-foranea-logo.png';
import SearchBar from '../ui/SearchBar';

function MainHeader() {
  const { amountOfItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function openCartHandler() {
    dispatch(cartActions.toggleCart());
  }

  return (
    <header className={classes.header}>
      <img className={classes['header-img']} src={logo} alt='La Foránea Logo' />
      <h2 className={classes['header-heading']}>La Foránea</h2>
      <SearchBar
        className={classes['header-searchbar']}
        placeholder='Busca un restaurant'
      />
      <div className={classes['btn-cart-cntr']}>
        <button className={classes['btn--header']} onClick={openCartHandler}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={classes.icon}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
            />
          </svg>
          {amountOfItems > 0 && (
            <p className={classes.amount}>{amountOfItems}</p>
          )}
        </button>
      </div>
      <button className={classes['btn--header']}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={classes.icon}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </button>
    </header>
  );
}

export default MainHeader;
