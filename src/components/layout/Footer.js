import classes from './Footer.module.css';
import logo from '../../assets/images/la-foranea-logo.png';
import SocialMediaLink from '../ui/SocialMediaLink';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`grid grid--2-cols ${classes['footer-grid']}`}>
        <div className={classes['footer-section']}>
          <div className={classes['social-info']}>
            <img src={logo} alt='Logo de La Foránea ' />
            <p>"Nuestra diferencia es el sazón"</p>
            <div className={classes['footer-social-links']}>
              <SocialMediaLink type='FB' url='/' />
              <SocialMediaLink type='TW' url='/' />
              <SocialMediaLink type='WH' url='/' />
              <SocialMediaLink type='IG' url='/' />
            </div>
          </div>
          <div className={classes['contact-info']}>
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
                <Link className={classes['footer-action']} to='/'>
                  Ingresar
                </Link>
              </li>
              <li>
                <Link className={classes['footer-action']} to='/'>
                  Crear Cuenta (Cliente)
                </Link>
              </li>
              <li>
                <Link className={classes['footer-action']} to='/'>
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
                <Link className={classes['footer-action']} to='/'>
                  Ver Catálogo Completo
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
                  href='/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Repositorio de Github
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
