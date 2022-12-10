import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authenticationActions } from '../../context/authentication-slice';
import InputField from './inputs/InputField';

import classes from './Login.module.css';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validatedEmail, setValidatedEmail] = useState(null);
  const [validatedPassword, setValidatedPassword] = useState(null);

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!validatedEmail || !validatedPassword) {
      return;
    }

    dispatch(
      authenticationActions.login({
        email: validatedEmail,
        password: validatedPassword,
      })
    );

    navigate('/user/feed');
  }

  return (
    <form className={classes.login} onSubmit={onSubmitHandler}>
      <p className={classes['login-create-account']}>
        No tienes cuenta aún?{' '}
        <Link
          className='link'
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
        getValidatedValue={setValidatedEmail}
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
        getValidatedValue={setValidatedPassword}
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
