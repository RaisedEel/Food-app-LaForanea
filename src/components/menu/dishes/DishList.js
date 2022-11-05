import { useSelector } from 'react-redux';

import DishItem from './DishItem';
import classes from './DishList.module.css';

function DishList() {
  const { menu, currentPage, amountPerPage } = useSelector(
    (state) => state.menu
  );

  return (
    <ul className={classes['dish-list']}>
      {menu
        .slice((currentPage - 1) * amountPerPage, amountPerPage * currentPage)
        .map((dish) => (
          <DishItem {...dish} key={dish.id} />
        ))}
    </ul>
  );
}

export default DishList;
