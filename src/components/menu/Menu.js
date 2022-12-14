import { useDispatch, useSelector } from 'react-redux';

import DishList from './dishes/DishList';
import DishPagination from './DishPagination';
import SelectField from '../forms/inputs/SelectField';
import { menuActions } from '../../context/menu-slice';

import classes from './Menu.module.css';
import { Fragment, useEffect, useRef, useState } from 'react';
import Modal from '../ui/Modal';
import DishForm from '../forms/DishForm';
import { EditButton } from '../ui/RadiusButton';
import { selectCurrentProfile } from '../../context/authentication-slice';

function Menu(props) {
  const dishListEl = useRef(null);
  const dispatch = useDispatch();

  const restaurantOwner = useSelector((state) => state.menu.restaurantOwner);
  const showDishForm = useSelector((state) => state.menu.showDishForm);
  const currentProfile = useSelector(selectCurrentProfile);

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

  function openDishFormHandler() {
    dispatch(menuActions.openDishForm());
  }

  function closeDishFormHandler() {
    dispatch(menuActions.closeDishForm());
  }

  return (
    <Fragment>
      {showDishForm && (
        <Modal
          title='Agregar Platillo'
          preferredWidth='80rem'
          onClose={closeDishFormHandler}
        >
          <DishForm />
        </Modal>
      )}
      <div className={classes.menu}>
        <div className={classes['categories']}>
          <SelectField
            label='Categorías'
            options={props.categories}
            onChange={changeCategoryHandler}
            style={{ flex: '1' }}
          />
          {currentProfile &&
            currentProfile.type === 'owner' &&
            currentProfile.id === restaurantOwner && <EditButton />}
        </div>
        {currentProfile &&
          currentProfile.type === 'owner' &&
          currentProfile.id === restaurantOwner && (
            <div className={classes.controls}>
              <button className='btn'>Agregar Categoría</button>
              <button className='btn' onClick={openDishFormHandler}>
                Agregar Platillo
              </button>
            </div>
          )}
        <DishList ref={dishListEl} />
        <DishPagination onChange={scrollToPaginationHandler} />
      </div>
    </Fragment>
  );
}

export default Menu;
