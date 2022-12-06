import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authenticationActions } from '../../context/authentication-slice';
import InputField from './inputs/InputField';

import classes from './Login.module.css';

function Login() {
  const dispatch = useDispatch();
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    dispatch(
      authenticationActions.login({
        email: emailIsValid,
        password: passwordIsValid,
      })
    );
  }

  return (
    <form className={classes.login} onSubmit={onSubmitHandler}>
      <p className={classes['login-create-account']}>
        No tienes cuenta aún?{' '}
        <Link
          className={classes['login-link']}
          to='/new/user'
          onClick={() => {
            dispatch(authenticationActions.toggleLogin());
          }}
        >
          Crea tu Cuenta Aquí
        </Link>
      </p>

      <InputField
        id='login-email'
        label='Correo Electrónico'
        inputConfiguration={{ type: 'email' }}
        isValid={setEmailIsValid}
        validation={[
          {
            condition: (value) => value.trim().match(/(.+)@(.+){2,}\.(.+){2,}/),
            errorMessage: 'El correo dado no es válido',
          },
        ]}
      />

      <InputField
        id='login-password'
        label='Contraseña'
        inputConfiguration={{ type: 'password' }}
        isValid={setPasswordIsValid}
        validation={[
          {
            condition: (value) =>
              value.trim().length <= 12 && value.trim().length >= 4,
            errorMessage: 'La contraseña debe contener entre 4 y 12 caracteres',
          },
        ]}
      />

      <button className={classes['login-button']}>Iniciar Sesión</button>
    </form>
  );
}

export default Login;
