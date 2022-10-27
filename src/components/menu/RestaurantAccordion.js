import { useState } from 'react';
import classes from './RestaurantAccordion.module.css';

import logo from '../../assets/logo.png';
import rest from '../../assets/restaurant.jpg';
import SocialMediaLink from '../ui/SocialMediaLink';

function RestaurantAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen((currentState) => !currentState);
  };

  return (
    <div className={classes.accordion}>
      <div className={classes['accordion-header']}>
        <div>
          <img
            className={classes['logo-img']}
            src={logo}
            alt='Logo de Restaurant'
          />
        </div>
        <h2 className='heading-secondary'>
          Restaurant 'El Típico Default' : Restaurante de Comida Rápida
        </h2>
        <button
          className={
            isOpen
              ? `${classes['accordion-btn--close']} ${classes['accordion-btn']}`
              : classes['accordion-btn']
          }
          onClick={isOpenHandler}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={classes['accordion-arrow']}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5'
            />
          </svg>
        </button>
      </div>
      <div
        className={
          isOpen
            ? `${classes['accordion-content--open']} ${classes['accordion-content']}`
            : classes['accordion-content']
        }
      >
        <div className={classes['content-box']}>
          <div className={classes['restaurant-info']}>
            <h4 className='heading-quaternary'>¿Quiénes somos?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
              amet risus sagittis, fermentum dolor id, fermentum nunc.
              Pellentesque lacinia orci non neque aliquet blandit. Cras
              vestibulum iaculis sollicitudin. Suspendisse maximus nisi id
              luctus aliquet. Nullam fringilla accumsan maximus. Maecenas sed
              tincidunt mauris, vitae sodales mauris. Nam facilisis vehicula est
              sodales faucibus. Curabitur sollicitudin leo justo, vitae viverra
              risus dignissim quis.
            </p>

            <h4 className='heading-quaternary'>¿Dónde nos encuentras?</h4>
            <address>
              Nunc ut rutrum libero, id semper quam. Nulla rutrum justo risus,
              ut bibendum massa finibus vel. Ut sed pharetra justo. Mauris justo
              lacus, rhoncus ut dolor at, tempor dictum urna.{' '}
            </address>
            <div className={classes['contact-info']}>
              <p>Correo Electrónico: www.default.com</p>
              <p>Tel: 755-555-5555</p>
            </div>
          </div>
          <div
            className={classes['restaurant-img-cntr']}
            style={{ backgroundImage: `url(${rest})` }}
          ></div>
          <div className={classes['social-links']}>
            <SocialMediaLink type='FB' url='#' />
            <SocialMediaLink type='TW' url='#' />
            <SocialMediaLink type='WH' url='#' />
            <SocialMediaLink type='IG' url='#' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantAccordion;
