import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { restaurantsActions } from '../../context/restaurants-slice';

import InputField from './inputs/InputField';
import classes from './Form.module.css';

function CategoryForm(props) {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.menu.categories);
  const [validatedCategory, setValidatedCategory] = useState(null);

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!validatedCategory) return;

    if (props.initialValue.value) {
      dispatch(
        restaurantsActions.updateCategory({
          id: props.initialValue.id,
          oldCategory: props.initialValue.value,
          newCategory: validatedCategory,
        })
      );
      props.onClose();
      return;
    }

    dispatch(
      restaurantsActions.addCategory({
        id: props.initialValue.id,
        category: validatedCategory,
      })
    );

    props.onClose();
  }

  function deleteCategoryHandler() {
    dispatch(
      restaurantsActions.removeCategory({
        id: props.initialValue.id,
        category: validatedCategory,
      })
    );
    props.onClose();
  }

  return (
    <form
      className={classes.form}
      style={{ marginTop: '3.2rem' }}
      onSubmit={onSubmitHandler}
    >
      <fieldset className={classes['form-fieldset']}>
        {props.initialValue.value && (
          <p>
            <strong>Info:</strong> Eliminar una categoría con platillos
            eliminará también todos sus platillos.
          </p>
        )}
        <InputField
          id='category-input'
          inputConfiguration={{ placeholder: 'Nombre de la Categoría' }}
          getValidatedValue={setValidatedCategory}
          validation={[
            {
              condition: (value) =>
                !categories.includes(value) ||
                props.initialValue.value === value,
              errorMessage: 'Existe otra categoría con el mismo nombre',
            },
          ]}
          initialValue={props.initialValue.value}
        />

        {props.initialValue.value && (
          <button
            className={`${classes['form-button']} ${classes['delete-button']}`}
            type='button'
            onClick={deleteCategoryHandler}
          >
            Eliminar Categoría
          </button>
        )}
      </fieldset>
      <button className={classes['form-button']} disabled={!validatedCategory}>
        {props.initialValue.value ? 'Actualizar Categoría' : 'Crear Categoría'}
      </button>
    </form>
  );
}

export default CategoryForm;
