import { useDispatch, useSelector } from 'react-redux';

import { menuActions } from '../../context/menu-slice';
import classes from './DishPage.module.css';

function DishPagination() {
  const { currentPage } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  return (
    <div className={classes.pagination}>
      <button
        className='btn'
        onClick={() => {
          dispatch(menuActions.goToPage(1));
        }}
      >
        Inicio
      </button>
      <button
        className='btn'
        onClick={() => {
          dispatch(menuActions.decreasePage());
        }}
      >
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
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </button>
      <span className={classes.page}>
        {currentPage < 10 ? `0${currentPage}` : currentPage}
      </span>
      <button
        className='btn'
        onClick={() => {
          dispatch(menuActions.increasePage());
        }}
      >
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
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </button>
      <button
        className='btn'
        onClick={() => {
          dispatch(menuActions.goToPage(1000));
        }}
      >
        Final
      </button>
    </div>
  );
}

export default DishPagination;
