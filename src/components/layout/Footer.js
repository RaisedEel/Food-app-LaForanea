import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authenticationActions } from '../../context/authentication-slice';
import logo from '../../assets/images/la-foranea-logo.png';
import SocialMediaLink from '../ui/SocialMediaLink';
import classes from './Footer.module.css';

function Footer() {
  const dispatch = useDispatch();

  return (
    <footer className={classes.footer}>
      <div className={`grid grid--2-cols ${classes['footer-grid']}`}>
        <div className={classes['footer-section']}>
          <div className='social-info'>
            <Link to='/'>
              <img src={logo} alt='Logo de La Foránea ' />
            </Link>
            <p className={classes.slogan}>"Nuestra diferencia es el sazón"</p>
            <div className={classes['footer-social-links']}>
              <SocialMediaLink type='FB' url='/' />
              <SocialMediaLink type='TW' url='/' />
              <SocialMediaLink type='WH' url='/' />
              <SocialMediaLink type='IG' url='/' />
            </div>
          </div>
          <div className='contact-info'>
            <p className={`heading ${classes['footer-heading']}`}>
              Contactanos
            </p>
            <address className={classes['footer-address']}>
              <p className={classes['address-paragraph']}>
                Ceiba 2, El Hujal, 40880 Zihuatanejo, Gro.
              </p>
              <p>755 109 3025</p>
              <p>www.onixtrobotica.com</p>
            </address>
          </div>
        </div>
        <div className={classes['footer-section']}>
          <div>
            <p className={`heading ${classes['footer-heading']}`}>Cuenta</p>
            <ul className={classes['footer-actions']}>
              <li>
                <button
                  className={classes['footer-action']}
                  onClick={() => {
                    dispatch(authenticationActions.toggleLogin());
                  }}
                >
                  Ingresar
                </button>
              </li>
              <li>
                <Link className={classes['footer-action']} to='/new/user'>
                  Crear Cuenta (Cliente)
                </Link>
              </li>
              <li>
                <Link className={classes['footer-action']} to='/new/restaurant'>
                  Crear Cuenta (Restaurante)
                </Link>
              </li>
              <li>
                <Link className={classes['footer-action']} to='/'>
                  Aplicación Android
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={`heading ${classes['footer-heading']}`}>Recursos</p>
            <ul className={classes['footer-actions']}>
              <li>
                <Link className={classes['footer-action']} to='/catalogue'>
                  Catálogo Completo
                </Link>
              </li>
              <li>
                <a
                  className={classes['footer-action']}
                  href='/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Documentación
                </a>
              </li>
              <li>
                <a
                  className={classes['footer-action']}
                  href='https://github.com/RaisedEel/Food-app-LaForanea'
                  target='_blank'
                  rel='noreferrer'
                >
                  Repositorio de GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={classes['footer-copyright']}>
        Copyright © {new Date().getFullYear()} by Onixt Robotics. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
