import { Fragment } from 'react';

import InputField from './inputs/InputField';
import Banner from '../ui/Banner';
import classes from './Form.module.css';

import costumer from '../../assets/images/forms/form-user.jpg';
import useInput from '../../hooks/useInput';

function UserForm(props) {
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

  const formIsValid = nameIsValid && emailIsValid && passwordIsValid;

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!formIsValid) return;

    // Send to feed
    alert('Cuenta creada!');
  }

  return (
    <Fragment>
      <Banner
        style={{
          backgroundColor: '#de7607',
          color: '#fff',
          height: '43rem',
          marginBottom: '9.6rem',
        }}
        title='Crea tu Cuenta Gratis'
        text='Podras interactuar con los diferentes restaurantes de una forma más sencilla y personalizada y ¡todo totalmente gratis! Escoge tus favoritos y califica a cada restaurante que te topes y mucho más. Se acabaron los días de tener que memorizarte tus restaurantes favoritos.'
        image={costumer}
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
            label='Correo Electrónico'
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
        <button className={classes['form-button']}>Crear Nueva Cuenta</button>
      </form>
    </Fragment>
  );
}

export default UserForm;
