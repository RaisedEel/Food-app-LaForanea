import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authenticationActions } from '../../context/authentication-slice';

import classes from './Login.module.css';

function Login() {
  const dispatch = useDispatch();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  function loginHandler(event) {
    event.preventDefault();

    dispatch(
      authenticationActions.login({
        email: emailInput,
        password: passwordInput,
      })
    );
  }

  return (
    <form className={classes.login} action='/' onSubmit={loginHandler}>
      <p className={classes['login-create-account']}>
        No tienes cuenta aún?{' '}
        <Link className={classes['login-link']} to='/'>
          Crea tu Cuenta Aquí
        </Link>
      </p>

      <div className={classes['input-container']}>
        <label className={classes['input-label']}>Correo Eléctronico</label>
        <input
          className={classes['input-box']}
          type='text'
          value={emailInput}
          onChange={(event) => {
            setEmailInput(event.target.value);
          }}
        />
        <p className={classes['input-error']}>Error found!</p>
      </div>

      <div className={classes['input-container']}>
        <label className={classes['input-label']}>Contraseña</label>
        <input
          className={classes['input-box']}
          type='password'
          value={passwordInput}
          onChange={(event) => {
            setPasswordInput(event.target.value);
          }}
        />
        <p className={classes['input-error']}>Error found!</p>
      </div>

      <button className={classes['login-button']}>Iniciar Sesión</button>
    </form>
  );
}

export default Login;
