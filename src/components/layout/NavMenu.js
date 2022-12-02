import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { authenticationActions } from '../../context/authentication-slice';
import classes from './NavMenu.module.css';

function NavMenu(props) {
  const dispatch = useDispatch();

  return (
    <nav className={classes.nav}>
      <ul className={classes['nav-links']}>
        <li>
          <button
            className={classes['nav-link']}
            onClick={(event) => {
              dispatch(authenticationActions.toggleLogin());
              props.closeMenu();
            }}
          >
            Ingresar
          </button>
        </li>
        <li>
          <Link className={classes['nav-link']} to='/'>
            Crear Cuenta
          </Link>
        </li>
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
        <li>
          <Link className={classes['nav-link']} to='/'>
            Opciones de Cuenta
          </Link>
        </li>
        <li>
          <button className={classes['nav-link']}>Cerrar Sesión</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
