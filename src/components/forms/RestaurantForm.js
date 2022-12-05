import { Fragment } from 'react';
import useInput from '../../hooks/useInput';
import Banner from '../ui/Banner';
import InputField from './inputs/InputField';
import classes from './Form.module.css';

import owners from '../../assets/images/forms/form-restaurant.jpg';

function RestaurantForm(props) {
  const {
    value: nameValue,
    isValid: nameIsValid,
    errorMessage: nameError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput('', true, [
    {
      condition: (value) => value.trim().length <= 60,
      errorMessage: 'Este campo acepta un máximo de 60 caracteres',
    },
  ]);

  const {
    value: emailValue,
    isValid: emailIsValid,
    errorMessage: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput('', true, [
    {
      condition: (value) => value.trim().match(/(.+)@(.+){2,}\.(.+){2,}/),
      errorMessage: 'El correo dado no es válido',
    },
  ]);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    errorMessage: passwordError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput('', true, [
    {
      condition: (value) =>
        value.trim().length <= 12 && value.trim().length >= 4,
      errorMessage: 'La contraseña debe contener entre 4 y 12 caracteres',
    },
  ]);

  const {
    value: resNameValue,
    isValid: resNameIsValid,
    errorMessage: resNameError,
    valueChangeHandler: resNameChangeHandler,
    inputBlurHandler: resNameBlurHandler,
  } = useInput('', true, [
    {
      condition: (value) => value.trim().length <= 60,
      errorMessage: 'Este campo acepta un máximo de 60 caracteres',
    },
  ]);

  const {
    value: typeValue,
    isValid: typeIsValid,
    errorMessage: typeError,
    valueChangeHandler: typeChangeHandler,
    inputBlurHandler: typeBlurHandler,
  } = useInput('', true, [
    {
      condition: (value) => value.trim().length <= 60,
      errorMessage: 'Este campo acepta un máximo de 60 caracteres',
    },
  ]);

  const {
    value: descriptionValue,
    isValid: descriptionIsValid,
    errorMessage: descriptionError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
  } = useInput('', true);

  const {
    value: addressValue,
    isValid: addressIsValid,
    errorMessage: addressError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
  } = useInput('', true);

  const {
    value: resEmailValue,
    isValid: resEmailIsValid,
    errorMessage: resEmailError,
    valueChangeHandler: resEmailChangeHandler,
    inputBlurHandler: resEmailBlurHandler,
  } = useInput('', true);

  const {
    value: cellphoneValue,
    isValid: cellphoneIsValid,
    errorMessage: cellphoneError,
    valueChangeHandler: cellphoneChangeHandler,
    inputBlurHandler: cellphoneBlurHandler,
  } = useInput('', true, [
    {
      condition: (value) => value.trim().match(/\d/g).length === 10,
      errorMessage: 'El télefono no es valido',
    },
  ]);

  const {
    value: fbAccountValue,
    isValid: fbAccountIsValid,
    errorMessage: fbAccountError,
    valueChangeHandler: fbAccountChangeHandler,
    inputBlurHandler: fbAccountBlurHandler,
  } = useInput('');

  const {
    value: twAccountValue,
    isValid: twAccountIsValid,
    errorMessage: twAccountError,
    valueChangeHandler: twAccountChangeHandler,
    inputBlurHandler: twAccountBlurHandler,
  } = useInput('');

  const {
    value: whAccountValue,
    isValid: whAccountIsValid,
    errorMessage: whAccountError,
    valueChangeHandler: whAccountChangeHandler,
    inputBlurHandler: whAccountBlurHandler,
  } = useInput('');

  const {
    value: igAccountValue,
    isValid: igAccountIsValid,
    errorMessage: igAccountError,
    valueChangeHandler: igAccountChangeHandler,
    inputBlurHandler: igAccountBlurHandler,
  } = useInput('');

  const formIsValid =
    nameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    resNameIsValid &&
    typeIsValid &&
    descriptionIsValid &&
    addressIsValid &&
    resEmailIsValid &&
    cellphoneIsValid &&
    fbAccountIsValid &&
    twAccountIsValid &&
    whAccountIsValid &&
    igAccountIsValid;

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!formIsValid) return;

    alert('Exito');
  }

  return (
    <Fragment>
      <Banner
        style={{
          backgroundColor: '#4263eb',
          color: '#fff',
          height: '43rem',
          marginBottom: '9.6rem',
        }}
        title='Dale más exposición a tu negocio'
        text='¿Cansado de que los otros restaurantes tengan la ventaja solo por tener página web? Ahora te damos la oportunidad de tener tu propio espacio en la web y sin tener que pagar precios exorbitantes. Te damos 1 mes de prueba gratis al crear tu cuenta ahora mismo y ¡con todos los platillos que desees agregar! Ahora tu también estaras a la vanguardia.'
        image={owners}
      />
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <fieldset className={classes['form-fieldset']}>
          <h2 className='heading-secondary'>Información del Usuario</h2>
          <InputField
            id='name-input'
            label='Nombre Completo'
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            error-message={nameError}
          />

          <InputField
            id='email-input'
            label='Correo Eléctronico'
            type='email'
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            error-message={emailError}
          />

          <InputField
            id='password-input '
            label='Contraseña (entre 4 y 12 caracteres)'
            type='password'
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            error-message={passwordError}
          />
        </fieldset>
        <fieldset className={classes['form-fieldset']}>
          <h2 className='heading-secondary'>
            Información Básica del Restaurante
          </h2>
          <InputField
            id='res-name-input'
            label='Nombre del Restaurante'
            value={resNameValue}
            onChange={resNameChangeHandler}
            onBlur={resNameBlurHandler}
            error-message={resNameError}
          />

          <InputField
            id='type-input'
            label='Tipo de Restaurante (No más de 60 caracteres)'
            placeholder='Restaurante para toda la familia, Pasteleria, Marisqueria, etc...'
            value={typeValue}
            onChange={typeChangeHandler}
            onBlur={typeBlurHandler}
            error-message={typeError}
          />

          <InputField
            id='description-input'
            label='Descripción Completa'
            value={descriptionValue}
            onChange={descriptionChangeHandler}
            onBlur={descriptionBlurHandler}
            error-message={descriptionError}
            textarea='true'
          />

          <InputField
            id='address-input'
            label='Dirección Física del Establecimiento'
            value={addressValue}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
            error-message={addressError}
          />

          <InputField
            id='res-email-input'
            label='Correo Electrónico'
            type='email'
            value={resEmailValue}
            onChange={resEmailChangeHandler}
            onBlur={resEmailBlurHandler}
            error-message={resEmailError}
          />

          <InputField
            id='cellphone-input'
            label='Telefono (10 digitos)'
            type='tel'
            value={cellphoneValue}
            onChange={cellphoneChangeHandler}
            onBlur={cellphoneBlurHandler}
            error-message={cellphoneError}
          />
        </fieldset>
        <fieldset className={classes['form-fieldset']}>
          <h2 className='heading-secondary'>Redes Sociales (Opcionales)</h2>
          <InputField
            id='fb-input'
            label='Facebook'
            type='url'
            value={fbAccountValue}
            onChange={fbAccountChangeHandler}
            onBlur={fbAccountBlurHandler}
            error-message={fbAccountError}
          />
          <InputField
            id='tw-input'
            label='Twitter'
            type='url'
            value={twAccountValue}
            onChange={twAccountChangeHandler}
            onBlur={twAccountBlurHandler}
            error-message={twAccountError}
          />
          <InputField
            id='wh-input'
            label='Whatsapp'
            type='url'
            value={whAccountValue}
            onChange={whAccountChangeHandler}
            onBlur={whAccountBlurHandler}
            error-message={whAccountError}
          />
          <InputField
            id='ig-input'
            label='Instagram'
            type='url'
            value={igAccountValue}
            onChange={igAccountChangeHandler}
            onBlur={igAccountBlurHandler}
            error-message={igAccountError}
          />
        </fieldset>
        <button className={classes['form-button']}>Crear Nueva Cuenta</button>
      </form>
    </Fragment>
  );
}

export default RestaurantForm;
