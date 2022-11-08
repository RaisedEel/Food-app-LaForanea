import { useSelector } from 'react-redux';

import DishItem from './DishItem';
import classes from './DishList.module.css';

function DishList() {
  const { slice, currentPage, amountPerPage } = useSelector(
    (state) => state.menu
  );

  return (
    <ul className={classes['dish-list']}>
      {slice
        .slice((currentPage - 1) * amountPerPage, amountPerPage * currentPage)
        .map((dish) => (
          <DishItem {...dish} key={dish.id} />
        ))}
    </ul>
  );
}

export default DishList;
