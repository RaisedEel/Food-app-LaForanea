import { useDispatch } from 'react-redux';
import { menuActions } from '../../context/menu-slice';
import classes from './CategoryMenu.module.css';

function CategoryMenu(props) {
  const dispatch = useDispatch();

  function changeCategoryHandler(event) {
    dispatch(menuActions.setCategory(event.target.value));
  }

  return (
    <div className={classes['categories-container']}>
      <label htmlFor='categories'>Categorías: </label>
      <select
        className={classes.categories}
        id='categories'
        onChange={changeCategoryHandler}
      >
        {props.data.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryMenu;
