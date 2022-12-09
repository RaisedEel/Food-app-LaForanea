import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { authenticationActions } from '../../context/authentication-slice';
import classes from './NavMenu.module.css';

function NavMenu(props) {
  const dispatch = useDispatch();
  const {
    isAuthenticated,
    profiles,
    currentProfile: currentIndex,
  } = useSelector((state) => state.authentication);
  const currentProfile = profiles[currentIndex];
  const { allRestaurants } = useSelector((state) => state.restaurants);
  let myRestaurant = {};

  if (isAuthenticated && currentProfile.type === 'owner') {
    myRestaurant = allRestaurants.find(
      (restaurant) => restaurant.restaurantOwner === currentProfile.id
    );
  }

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
              <Link className={classes['nav-link']} to='/user/home'>
                Feed
              </Link>
            </li>
            <li>
              <Link className={classes['nav-link']} to='/user/favorites'>
                Favoritos
              </Link>
            </li>
          </Fragment>
        )}
        {isAuthenticated && currentProfile.type === 'owner' && (
          <li>
            <Link
              className={classes['nav-link']}
              to={`/restaurant/${myRestaurant.id}`}
            >
              Mi Restaurante
            </Link>
          </li>
        )}
        {isAuthenticated && (
          <Fragment>
            <li>
              <Link className={classes['nav-link']} to='/user/settings'>
                Opciones de Cuenta
              </Link>
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
