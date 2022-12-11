import { useDispatch } from 'react-redux';

import DishList from './dishes/DishList';
import DishPagination from './DishPagination';
import SelectField from '../forms/inputs/SelectField';
import { menuActions } from '../../context/menu-slice';

import classes from './Menu.module.css';
import { useEffect, useRef, useState } from 'react';

function Menu(props) {
  const dishListEl = useRef(null);
  const dispatch = useDispatch();
  const [scrollToPagination, setScrollToPagination] = useState(false);

  useEffect(() => {
    if (scrollToPagination) {
      dishListEl.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setScrollToPagination(false);
  }, [scrollToPagination]);

  function changeCategoryHandler(event) {
    dispatch(menuActions.setCategory(+event.target.value));
  }

  function scrollToPaginationHandler() {
    setScrollToPagination(true);
  }

  return (
    <div className={classes.menu}>
      <SelectField
        label='Categorías'
        options={props.categories}
        onChange={changeCategoryHandler}
      />
      <DishList ref={dishListEl} />
      <DishPagination onChange={scrollToPaginationHandler} />
    </div>
  );
}

export default Menu;
