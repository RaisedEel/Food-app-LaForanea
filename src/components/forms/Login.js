import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authenticationActions } from '../../context/authentication-slice';

import classes from './Login.module.css';

function Login() {
  const dispatch = useDispatch();

  function loginHandler(event) {
    event.preventDefault();

    dispatch(authenticationActions.login());
  }

  return (
    <form className={classes.login} action='/' onSubmit={loginHandler}>
      <p>
        No tienes cuenta aún?{' '}
        <Link className={classes['login-link']} to='/'>
          Crea tu Cuenta Aquí
        </Link>
      </p>

      <div className={classes['input-container']}>
        <label className={classes['input-label']}>Correo Eléctronico</label>
        <input className={classes['input-box']} type='text' />
        <p className={classes['input-error']}>Error found!</p>
      </div>

      <div className={classes['input-container']}>
        <label className={classes['input-label']}>Contraseña</label>
        <input className={classes['input-box']} type='password' />
        <p className={classes['input-error']}>Error found!</p>
      </div>

      <button className={classes['login-button']}>Iniciar Sesión</button>
    </form>
  );
}

export default Login;
