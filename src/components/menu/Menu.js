import { useDispatch } from 'react-redux';

import DishList from './dishes/DishList';
import DishPagination from './DishPagination';
import SelectField from '../forms/inputs/SelectField';
import { menuActions } from '../../context/menu-slice';

import classes from './Menu.module.css';

function Menu(props) {
  const dispatch = useDispatch();

  function changeCategoryHandler(event) {
    dispatch(menuActions.setCategory(event.target.value));
  }

  return (
    <div className={classes.menu}>
      <SelectField
        label='Categorías'
        options={props.categories}
        onChange={changeCategoryHandler}
      />
      <DishList />
      <DishPagination />
    </div>
  );
}

export default Menu;
