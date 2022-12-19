import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { restaurantsActions } from '../../context/restaurants-slice';

import InputField from './inputs/InputField';
import classes from './Form.module.css';
import { menuActions } from '../../context/menu-slice';

function CategoryForm(props) {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.menu.categories);
  const [validatedCategory, setValidatedCategory] = useState(null);

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!validatedCategory) return;

    if (props.initialValue) {
      dispatch(
        restaurantsActions.updateCategory({
          id: props.restaurantId,
          oldCategory: props.initialValue,
          newCategory: validatedCategory,
        })
      );
      dispatch(menuActions.setCategory(validatedCategory));
    } else {
      dispatch(
        restaurantsActions.addCategory({
          id: props.restaurantId,
          category: validatedCategory,
        })
      );
    }

    props.onClose();
  }

  function deleteCategoryHandler() {
    dispatch(
      restaurantsActions.removeCategory({
        id: props.restaurantId,
        category: validatedCategory,
      })
    );
    dispatch(menuActions.setCategory(0));
    props.onClose();
  }

  return (
    <form
      className={classes.form}
      style={{ marginTop: '3.2rem' }}
      onSubmit={onSubmitHandler}
    >
      <fieldset className={classes['form-fieldset']}>
        {props.initialValue && (
          <p>
            <strong>Info:</strong> Eliminar una categoría con platillos
            eliminará también a todos sus platillos.
          </p>
        )}
        <InputField
          id='category-input'
          inputConfiguration={{ placeholder: 'Nombre de la Categoría' }}
          getValidatedValue={setValidatedCategory}
          validation={[
            {
              condition: (value) => value.trim().length <= 60,
              errorMessage: 'Este campo acepta un máximo de 60 caracteres',
            },
            {
              condition: (value) =>
                !categories.includes(value) || props.initialValue === value,
              errorMessage: 'Existe otra categoría con el mismo nombre',
            },
          ]}
          initialValue={props.initialValue}
        />

        {props.initialValue && (
          <button
            className={`${classes['form-button']} ${classes['delete-button']}`}
            type='button'
            onClick={deleteCategoryHandler}
            disabled={categories.length === 1}
          >
            Eliminar Categoría
          </button>
        )}
      </fieldset>
      <button className={classes['form-button']} disabled={!validatedCategory}>
        {props.initialValue ? 'Actualizar Categoría' : 'Agregar Categoría'}
      </button>
    </form>
  );
}

export default CategoryForm;
