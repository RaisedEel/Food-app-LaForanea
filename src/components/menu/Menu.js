import { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DishList from './dishes/DishList';
import DishPagination from './DishPagination';
import SelectField from '../forms/inputs/SelectField';
import Modal from '../ui/Modal';
import DishForm from '../forms/DishForm';
import { EditButton } from '../ui/RadiusButton';

import { menuActions } from '../../context/menu-slice';
import { selectCurrentProfile } from '../../context/authentication-slice';

import classes from './Menu.module.css';
import CategoryForm from '../forms/CategoryForm';

function Menu(props) {
  const dishListEl = useRef(null);
  const dispatch = useDispatch();

  const restaurantId = useSelector((state) => state.menu.id);
  const restaurantOwner = useSelector((state) => state.menu.restaurantOwner);
  const currentCategory = useSelector((state) => state.menu.currentCategory);
  const dishFormState = useSelector((state) => state.menu.dishFormState);
  const currentProfile = useSelector(selectCurrentProfile);

  const [categoryFormState, setCategoryFormState] = useState({
    show: false,
    initialValue: null,
  });
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
    dispatch(menuActions.openDishForm(null));
  }

  function closeDishFormHandler() {
    dispatch(menuActions.closeDishForm());
  }

  function openCategoryFormHandler(initialValue) {
    setCategoryFormState({ show: true, initialValue });
  }

  function closeCategoryFormHandler() {
    setCategoryFormState({ show: false, initialValue: null });
  }

  return (
    <Fragment>
      {dishFormState.show && (
        <Modal
          title='Platillo'
          preferredWidth='80rem'
          onClose={closeDishFormHandler}
        >
          <DishForm
            restaurantId={restaurantId}
            category={currentCategory}
            initialValues={dishFormState.values ? dishFormState.values : null}
            onClose={closeDishFormHandler}
          />
        </Modal>
      )}
      {categoryFormState.show && (
        <Modal
          title='Categorías'
          preferredWidth='80rem'
          onClose={closeCategoryFormHandler}
        >
          <CategoryForm
            restaurantId={restaurantId}
            initialValue={categoryFormState.initialValue}
            onClose={closeCategoryFormHandler}
          />
        </Modal>
      )}
      <div className={classes.menu}>
        <div className={classes['categories']}>
          <SelectField
            id='category-select'
            label='Categorías'
            options={props.categories}
            onChange={changeCategoryHandler}
            style={{ flex: '1' }}
          />

          {currentProfile &&
            currentProfile.type === 'owner' &&
            currentProfile.id === restaurantOwner && (
              <EditButton
                onClick={openCategoryFormHandler.bind(null, currentCategory)}
              />
            )}
        </div>
        {currentProfile &&
          currentProfile.type === 'owner' &&
          currentProfile.id === restaurantOwner && (
            <div className={classes.controls}>
              <button
                className='btn'
                onClick={openCategoryFormHandler.bind(null, null)}
              >
                Agregar Categoría
              </button>
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
