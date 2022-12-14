import { useDispatch, useSelector } from 'react-redux';

import { menuActions } from '../../context/menu-slice';
import classes from './DishPagination.module.css';

function DishPagination(props) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.menu.currentPage);
  const numberOfPages = useSelector((state) => state.menu.numberOfPages);

  return (
    <div className={classes.pagination}>
      <button
        className={currentPage === 1 ? 'btn btn--disabled' : 'btn'}
        onClick={() => {
          dispatch(menuActions.goToPage(1));
          props.onChange();
        }}
      >
        Inicio
      </button>
      <button
        className={currentPage === 1 ? 'btn btn--disabled' : 'btn'}
        onClick={() => {
          dispatch(menuActions.decreasePage());
          props.onChange();
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
        className={currentPage === numberOfPages ? 'btn btn--disabled' : 'btn'}
        onClick={() => {
          dispatch(menuActions.increasePage());
          props.onChange();
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
        className={currentPage === numberOfPages ? 'btn btn--disabled' : 'btn'}
        onClick={() => {
          dispatch(menuActions.goToPage(1000));
          props.onChange();
        }}
      >
        Final
      </button>
    </div>
  );
}

export default DishPagination;
