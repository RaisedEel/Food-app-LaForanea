import DishList from './dishes/DishList';
import CategoryMenu from './CategoryMenu';
import DishPage from './DishPage';

import classes from './Menu.module.css';

function Menu() {
  return (
    <div className={classes.menu}>
      <CategoryMenu />
      <DishList />
      <DishPage />
    </div>
  );
}

export default Menu;
