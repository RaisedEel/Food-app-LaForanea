import DishList from './dishes/DishList';
import CategoryMenu from './CategoryMenu';
import DishPagination from './DishPagination';

import classes from './Menu.module.css';

function Menu() {
  return (
    <div className={classes.menu}>
      <CategoryMenu />
      <DishList />
      <DishPagination dishesAmount='6' />
    </div>
  );
}

export default Menu;
