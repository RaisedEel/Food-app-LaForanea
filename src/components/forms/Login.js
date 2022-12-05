import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { authenticationActions } from '../../context/authentication-slice';
import InputField from './inputs/InputField';

import classes from './Login.module.css';

function Login() {
  const dispatch = useDispatch();
  const {
    value: emailValue,
    isValid: emailIsValid,
    errorMessage: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(true, [
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
  } = useInput(true, [
    {
      condition: (value) =>
        value.trim().length <= 8 && value.trim().length >= 4,
      errorMessage: 'La contraseña debe contener entre 4 y 8 caracteres',
    },
  ]);

  function loginHandler(event) {
    event.preventDefault();

    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    dispatch(
      authenticationActions.login({
        email: emailValue,
        password: passwordValue,
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

      <InputField
        id='login-email'
        label='Correo Eléctronico'
        type='email'
        value={emailValue}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        error-message={emailError}
      />

      <InputField
        id='login-password'
        label='Contraseña'
        type='password'
        value={passwordValue}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
        error-message={passwordError}
      />

      <button className={classes['login-button']}>Iniciar Sesión</button>
    </form>
  );
}

export default Login;
