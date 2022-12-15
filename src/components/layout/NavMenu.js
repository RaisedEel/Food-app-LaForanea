import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  authenticationActions,
  selectCurrentProfile,
} from '../../context/authentication-slice';
import { selectRestaurantByOwner } from '../../context/restaurants-slice';
import classes from './NavMenu.module.css';

function NavMenu(props) {
  const dispatch = useDispatch();
  const currentProfile = useSelector(selectCurrentProfile);
  const ownedRestaurant = useSelector((state) =>
    selectRestaurantByOwner(state, currentProfile ? currentProfile.id : '')
  );

  return (
    <nav className={classes.nav} onClick={props.closeMenu}>
      <ul className={classes['nav-links']}>
        {!currentProfile && (
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
              <NavLink
                className={classes['nav-link']}
                to='/new'
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: '#f97474', color: '#fff' }
                    : undefined
                }
              >
                Crear Cuenta
              </NavLink>
            </li>
          </Fragment>
        )}
        {currentProfile && (
          <Fragment>
            <li>
              <NavLink
                className={classes['nav-link']}
                to='/user/home'
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: '#f97474', color: '#fff' }
                    : undefined
                }
              >
                Feed
              </NavLink>
            </li>
            <li>
              <NavLink
                className={classes['nav-link']}
                to='/user/favorites'
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: '#f97474', color: '#fff' }
                    : undefined
                }
              >
                Favoritos
              </NavLink>
            </li>
          </Fragment>
        )}
        {currentProfile && currentProfile.type === 'owner' && (
          <li>
            <NavLink
              className={classes['nav-link']}
              to={`/restaurant/${ownedRestaurant.id}`}
              style={({ isActive }) =>
                isActive
                  ? { backgroundColor: '#f97474', color: '#fff' }
                  : undefined
              }
            >
              Mi Restaurante
            </NavLink>
          </li>
        )}
        {currentProfile && (
          <Fragment>
            <li>
              <NavLink
                className={classes['nav-link']}
                to='/user/settings'
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: '#f97474', color: '#fff' }
                    : undefined
                }
              >
                Opciones de Cuenta
              </NavLink>
            </li>

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
          </Fragment>
        )}
      </ul>
    </nav>
  );
}

export default NavMenu;
