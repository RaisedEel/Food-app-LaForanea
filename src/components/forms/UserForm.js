import { Fragment, useState } from 'react';

import InputField from './inputs/InputField';
import Banner from '../ui/Banner';
import classes from './Form.module.css';

import costumer from '../../assets/images/forms/form-user.jpg';

function UserForm(props) {
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

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
            label='Nombre Completo*'
            isValid={setNameIsValid}
            validation={[
              {
                condition: (value) => value.trim().length <= 60,
                errorMessage: 'Este campo acepta un máximo de 60 caracteres',
              },
            ]}
          />

          <InputField
            id='email-input'
            label='Correo Electrónico*'
            inputConfiguration={{ type: 'email' }}
            isValid={setEmailIsValid}
            validation={[
              {
                condition: (value) =>
                  value.trim().match(/(.+)@(.+){2,}\.(.+){2,}/),
                errorMessage: 'El correo dado no es válido',
              },
            ]}
          />

          <InputField
            id='password-input'
            label='Contraseña (entre 4 y 12 caracteres)*'
            inputConfiguration={{ type: 'password' }}
            isValid={setPasswordIsValid}
            validation={[
              {
                condition: (value) =>
                  value.trim().length <= 12 && value.trim().length >= 4,
                errorMessage:
                  'La contraseña debe contener entre 4 y 12 caracteres',
              },
            ]}
          />
        </fieldset>
        <button className={classes['form-button']} disabled={!formIsValid}>
          Crear Nueva Cuenta
        </button>
      </form>
    </Fragment>
  );
}

export default UserForm;
