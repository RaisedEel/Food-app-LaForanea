import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { authenticationActions } from '../../context/authentication-slice';
import classes from './NavMenu.module.css';

function NavMenu(props) {
  const dispatch = useDispatch();
  const { isAuthenticated, currentProfile } = useSelector(
    (state) => state.authentication
  );

  return (
    <nav className={classes.nav} onClick={props.closeMenu}>
      <ul className={classes['nav-links']}>
        {!isAuthenticated && (
          <Fragment>
            <li>
              <button
                className={classes['nav-link']}
                onClick={() => {
                  dispatch(authenticationActions.toggleLogin());
                }}
              >
                Ingresar
              </button>
            </li>

            <li>
              <Link className={classes['nav-link']} to='/new'>
                Crear Cuenta
              </Link>
            </li>
          </Fragment>
        )}
        {isAuthenticated && (
          <Fragment>
            <li>
              <Link className={classes['nav-link']} to='/'>
                Feed
              </Link>
            </li>
            <li>
              <Link className={classes['nav-link']} to='/'>
                Favoritos
              </Link>
            </li>
          </Fragment>
        )}
        {isAuthenticated && currentProfile.type === 'owner' && (
          <li>
            <Link className={classes['nav-link']} to='/'>
              Mi Restaurante
            </Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link className={classes['nav-link']} to='/user/settings'>
              Opciones de Cuenta
            </Link>
          </li>
        )}
        {isAuthenticated && currentProfile.type === 'owner' && (
          <li>
            <Link
              className={classes['nav-link']}
              to='/user/settings#restaurant'
            >
              Opciones del Restaurante
            </Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <button
              className={classes['nav-link']}
              onClick={() => {
                dispatch(authenticationActions.logout());
              }}
            >
              Cerrar Sesión
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavMenu;
