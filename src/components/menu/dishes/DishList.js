import { forwardRef } from 'react';
import { useSelector } from 'react-redux';

import DishItem from './DishItem';
import classes from './DishList.module.css';

function DishList(props, ref) {
  const { slice, currentPage, amountPerPage } = useSelector(
    (state) => state.menu
  );

  return (
    <ul ref={ref} className={classes['dish-list']}>
      {slice
        .slice((currentPage - 1) * amountPerPage, amountPerPage * currentPage)
        .map((dish) => (
          <DishItem {...dish} key={dish.id} />
        ))}
    </ul>
  );
}

export default forwardRef(DishList);
