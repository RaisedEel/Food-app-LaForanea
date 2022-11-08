import DishList from './dishes/DishList';
import CategoryMenu from './CategoryMenu';
import DishPagination from './DishPagination';

import classes from './Menu.module.css';

function Menu(props) {
  return (
    <div className={classes.menu}>
      <CategoryMenu data={props.categories} />
      <DishList />
      <DishPagination dishesAmount='6' />
    </div>
  );
}

export default Menu;
