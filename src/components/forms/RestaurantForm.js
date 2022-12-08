import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticationActions } from '../../context/authentication-slice';
import { restaurantsActions } from '../../context/restaurants-slice';
import Banner from '../ui/Banner';
import InputField from './inputs/InputField';
import classes from './Form.module.css';

import placeholder from '../../assets/images/placeholders/restaurant-photo.jpg';
import owners from '../../assets/images/forms/form-restaurant.jpg';

function RestaurantForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profiles } = useSelector((state) => state.authentication);
  const [validatedName, setValidatedName] = useState(null);
  const [validatedEmail, setValidatedEmail] = useState(null);
  const [validatedPassword, setValidatedPassword] = useState(null);
  const [validatedResName, setValidatedResName] = useState(null);
  const [validatedType, setValidatedType] = useState(null);
  const [validatedDescription, setValidatedDescription] = useState(null);
  const [validatedPhoto, setValidatedPhoto] = useState(null);
  const [submitPlaceholder, setSubmitPlaceholder] = useState(false);
  const [validatedAddress, setValidatedAddress] = useState(null);
  const [validatedResEmail, setValidatedResEmail] = useState(null);
  const [validatedCellphone, setValidatedCellphone] = useState(null);
  const [validatedFB, setValidatedFB] = useState(null);
  const [validatedTW, setValidatedTW] = useState(null);
  const [validatedWH, setValidatedWH] = useState(null);
  const [validatedIG, setValidatedIG] = useState(null);

  const formIsValid =
    validatedName &&
    validatedEmail &&
    validatedPassword &&
    validatedResName &&
    validatedType &&
    validatedDescription &&
    validatedAddress &&
    validatedResEmail &&
    validatedCellphone;

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!formIsValid) return;

    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    dispatch(
      authenticationActions.addProfile({
        id,
        name: validatedName,
        email: validatedEmail,
        password: validatedPassword,
        type: 'owner',
        restaurants: [],
      })
    );

    const social = [];
    if (validatedFB) social.push({ type: 'FB', url: validatedFB });
    if (validatedTW) social.push({ type: 'TW', url: validatedTW });
    if (validatedWH) social.push({ type: 'WH', url: validatedWH });
    if (validatedIG) social.push({ type: 'IG', url: validatedIG });

    dispatch(
      restaurantsActions.addRestaurant({
        id,
        restaurantOwner: id,
        name: validatedResName,
        type: validatedType,
        rating: [0, 0],
        photo:
          submitPlaceholder || !validatedPhoto ? placeholder : validatedPhoto,
        description: validatedDescription,
        address: validatedAddress,
        email: validatedResEmail,
        cellphone: validatedCellphone,
        social,
        categories: ['Base'],
        menu: [],
      })
    );

    navigate('/');
  }

  return (
    <Fragment>
      {!props.editable && (
        <Banner
          style={{
            backgroundColor: '#4263eb',
            color: '#fff',
            marginBottom: '9.6rem',
          }}
          title='Dale más exposición a tu negocio!'
          text='¿Cansado de que los otros restaurantes tengan la ventaja solo por tener página web? Ahora te damos la oportunidad de tener tu propio espacio en la web y sin tener que pagar precios exorbitantes. Te damos 1 mes de prueba gratis al crear tu cuenta ahora mismo y ¡con todos los platillos que desees agregar! Ahora tu también estaras a la vanguardia.'
          image={owners}
        />
      )}

      <form className={classes.form} onSubmit={onSubmitHandler}>
        <fieldset className={classes['form-fieldset']}>
          <h2 className='heading-secondary'>Información del Usuario</h2>

          <InputField
            id='name-input'
            label='Nombre Completo*'
            getValidatedValue={setValidatedName}
            validation={[
              {
                condition: (value) => value.trim().length <= 60,
                errorMessage: 'Este campo acepta un máximo de 60 caracteres',
              },
            ]}
            editable={props.editable ? true : false}
          />

          <InputField
            id='email-input'
            label='Correo Eléctronico*'
            inputConfiguration={{ type: 'email' }}
            getValidatedValue={setValidatedEmail}
            validation={[
              {
                condition: (value) =>
                  value.trim().match(/(.+)@(.+){2,}\.(.+){2,}/),
                errorMessage: 'El correo dado no es válido',
              },
              {
                condition: (value) =>
                  !profiles.some((profile) => profile.email === value),
                errorMessage: 'El correo ya se encuentra en uso',
              },
            ]}
            editable={props.editable ? true : false}
          />

          <InputField
            id='password-input '
            label='Contraseña (entre 4 y 12 caracteres)*'
            inputConfiguration={{ type: 'password' }}
            getValidatedValue={setValidatedPassword}
            validation={[
              {
                condition: (value) =>
                  value.trim().length <= 12 && value.trim().length >= 4,
                errorMessage:
                  'La contraseña debe contener entre 4 y 12 caracteres',
              },
            ]}
            editable={props.editable ? true : false}
          />
        </fieldset>
        <fieldset className={classes['form-fieldset']}>
          <h2 className='heading-secondary'>
            Información Básica del Restaurante
          </h2>

          <InputField
            id='res-name-input'
            label='Nombre del Restaurante*'
            getValidatedValue={setValidatedResName}
            validation={[
              {
                condition: (value) => value.trim().length <= 60,
                errorMessage: 'Este campo acepta un máximo de 60 caracteres',
              },
            ]}
            editable={props.editable ? true : false}
          />

          <InputField
            id='type-input'
            label='Tipo de Restaurante*'
            inputConfiguration={{
              placeholder:
                'Restaurante para toda la familia, Pasteleria, Marisquería, etc...',
            }}
            getValidatedValue={setValidatedType}
            validation={[
              {
                condition: (value) => value.trim().length <= 60,
                errorMessage: 'Este campo acepta un máximo de 60 caracteres',
              },
            ]}
            editable={props.editable ? true : false}
          />

          <InputField
            id='description-input'
            label='Descripción Completa*'
            getValidatedValue={setValidatedDescription}
            textarea='true'
            editable={props.editable ? true : false}
          />

          <InputField
            id='photo-input'
            label='Fotografía del Restaurante (Enlace)'
            inputConfiguration={{ type: 'url' }}
            getValidatedValue={setValidatedPhoto}
            editable={props.editable ? true : false}
            canBeEmpty
          />

          {validatedPhoto && (
            <div className={classes['form-img-ctnr']}>
              <img
                className={classes['form-img']}
                src={validatedPhoto}
                alt='&nbsp;Error: La imagen escogida no pudo ser encontrada. Revise que el enlace este correcto.'
                onError={() => {
                  setSubmitPlaceholder(true);
                }}
              />
            </div>
          )}

          <InputField
            id='address-input'
            label='Dirección Física del Establecimiento*'
            getValidatedValue={setValidatedAddress}
            editable={props.editable ? true : false}
          />

          <InputField
            id='res-email-input'
            label='Correo Electrónico*'
            inputConfiguration={{ type: 'email' }}
            getValidatedValue={setValidatedResEmail}
            validation={[
              {
                condition: (value) =>
                  value.trim().match(/(.+)@(.+){2,}\.(.+){2,}/),
                errorMessage: 'El correo dado no es válido',
              },
            ]}
            editable={props.editable ? true : false}
          />

          <InputField
            id='cellphone-input'
            label='Teléfono (10 digitos)*'
            inputConfiguration={{ type: 'tel' }}
            getValidatedValue={setValidatedCellphone}
            validation={[
              {
                condition: (value) => value.trim().match(/\d/g).length === 10,
                errorMessage: 'El télefono no es valido',
              },
            ]}
            editable={props.editable ? true : false}
          />
        </fieldset>
        <fieldset className={classes['form-fieldset']}>
          <h2 className='heading-secondary'>Redes Sociales (Opcionales)</h2>

          <InputField
            id='fb-input'
            label='Facebook'
            inputConfiguration={{ type: 'url' }}
            getValidatedValue={setValidatedFB}
            editable={props.editable ? true : false}
            canBeEmpty
          />

          <InputField
            id='tw-input'
            label='Twitter'
            inputConfiguration={{ type: 'url' }}
            getValidatedValue={setValidatedTW}
            editable={props.editable ? true : false}
            canBeEmpty
          />

          <InputField
            id='wh-input'
            label='Whatsapp'
            inputConfiguration={{ type: 'url' }}
            getValidatedValue={setValidatedWH}
            editable={props.editable ? true : false}
            canBeEmpty
          />

          <InputField
            id='ig-input'
            label='Instagram'
            inputConfiguration={{ type: 'url' }}
            getValidatedValue={setValidatedIG}
            editable={props.editable ? true : false}
            canBeEmpty
          />
        </fieldset>
        <button className={classes['form-button']} disabled={!formIsValid}>
          {props.editable ? 'Guardar Cambios' : 'Crear Nueva Cuenta'}
        </button>
      </form>
    </Fragment>
  );
}

export default RestaurantForm;
