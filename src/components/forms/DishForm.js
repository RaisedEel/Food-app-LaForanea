import { useState } from 'react';

import InputField from './inputs/InputField';
import classes from './Form.module.css';

import placeholder from '../../assets/images/placeholders/dish-photo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantsActions } from '../../context/restaurants-slice';

function DishForm(props) {
  const dispatch = useDispatch();
  const menuSlice = useSelector((state) => state.menu.slice);
  const [validatedName, setValidatedName] = useState(null);
  const [validatedPrice, setValidatedPrice] = useState(null);
  const [validatedPhoto, setValidatedPhoto] = useState(null);
  const [submitPlaceholder, setSubmitPlaceholder] = useState(false);
  const [validatedDescription, setValidatedDescription] = useState(null);

  const formIsValid = validatedName && validatedPrice && validatedDescription;

  function onSubmitHandler(event) {
    event.preventDefault();

    const valuesToSubmit = {
      id: props.initialValues && props.initialValues.id,
      category: props.category,
      name: validatedName,
      price: +validatedPrice,
      image:
        submitPlaceholder || !validatedPhoto ? placeholder : validatedPhoto,
      description: validatedDescription,
    };

    if (props.initialValues) {
      dispatch(
        restaurantsActions.updateDish({
          id: props.restaurantId,
          dish: valuesToSubmit,
        })
      );
    } else {
      dispatch(
        restaurantsActions.addDish({
          id: props.restaurantId,
          dish: valuesToSubmit,
        })
      );
    }

    props.onClose();
  }

  return (
    <form
      className={classes.form}
      onSubmit={onSubmitHandler}
      style={{ marginTop: '3.2rem' }}
    >
      <fieldset className={classes['form-fieldset']}>
        <h3
          className='heading'
          style={{ fontSize: '2.4rem', marginBottom: '1.2rem', color: '#555' }}
        >
          Categoría: {props.category}
        </h3>

        <InputField
          inputConfiguration={{ placeholder: 'Nombre del Platillo' }}
          getValidatedValue={setValidatedName}
          validation={[
            {
              condition: (value) =>
                !menuSlice.some((dish) => dish.name === value) ||
                (props.initialValues && props.initialValues.name === value),
              errorMessage:
                'Otro platillo de la categoría contiene el mismo nombre',
            },
            {
              condition: (value) => value.trim().length <= 40,
              errorMessage: 'Este campo acepta un máximo de 40 caracteres',
            },
          ]}
          initialValue={props.initialValues ? props.initialValues.name : ''}
        />

        <InputField
          inputConfiguration={{
            type: 'number',
            placeholder: 'Precio del Platillo',
          }}
          getValidatedValue={setValidatedPrice}
          validation={[
            {
              condition: (value) => value > 0 && value < 10000,
              errorMessage:
                'El precio tiene que ser mayor que 0 y menor que 10000',
            },
          ]}
          initialValue={
            props.initialValues ? props.initialValues.price.toString() : ''
          }
        />

        <InputField
          inputConfiguration={{
            placeholder: 'Enlace hacia una Foto del Platillo',
          }}
          getValidatedValue={setValidatedPhoto}
          initialValue={props.initialValues ? props.initialValues.image : ''}
          canBeEmpty
        />

        {validatedPhoto && (
          <div className={classes['form-img-ctnr']}>
            <img
              className={classes['form-img']}
              src={validatedPhoto}
              alt='&nbsp;Error: La imagen escogida no pudo ser encontrada. Revise que el enlace este correcto.'
              onLoad={() => {
                setSubmitPlaceholder(false);
              }}
              onError={() => {
                setSubmitPlaceholder(true);
              }}
            />
          </div>
        )}

        <InputField
          inputConfiguration={{ placeholder: 'Descripción del Platillo' }}
          getValidatedValue={setValidatedDescription}
          initialValue={
            props.initialValues ? props.initialValues.description : ''
          }
          textarea
        />

        {props.initialValues && (
          <button
            className={`${classes['form-button']} ${classes['delete-button']}`}
            type='button'
            onClick={() => {
              dispatch(
                restaurantsActions.removeDish({
                  id: props.restaurantId,
                  dishId: props.initialValues.id,
                })
              );
              props.onClose();
            }}
          >
            Eliminar Platillo
          </button>
        )}
      </fieldset>
      <button className={classes['form-button']} disabled={!formIsValid}>
        {props.initialValues ? 'Actualizar Platillo' : 'Agregar Platillo'}
      </button>
    </form>
  );
}

export default DishForm;
