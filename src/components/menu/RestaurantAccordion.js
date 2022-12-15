import { useState } from 'react';
import SocialMediaLink from '../ui/SocialMediaLink';

import classes from './RestaurantAccordion.module.css';
import logo from '../../assets/images/logo.png';

function RestaurantAccordion(props) {
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
            alt={`Logo de ${props.data.name}`}
          />
          <p className={classes['restaurant-rating']}>
            {(Math.floor(props.data.rating[0] * 100) / 100).toFixed(1)}{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classes['rating-icon']}
            >
              <path
                fillRule='evenodd'
                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                clipRule='evenodd'
              />
            </svg>
          </p>
        </div>
        <h2 className='heading-secondary' style={{ color: '#fff' }}>
          {`${props.data.name} : ${props.data.type}`}
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
            <h3 className='heading-ternary'>¿Quiénes somos?</h3>
            <p>{props.data.description}</p>

            <h3 className='heading-ternary'>¿Dónde nos encuentras?</h3>
            <address>{props.data.address}</address>
            <div className={classes['contact-info']}>
              <p>Correo Electrónico: {props.data.email}</p>
              <p>Tel: {props.data.cellphone}</p>
            </div>
          </div>
          <div
            className={classes['restaurant-img-cntr']}
            style={{ backgroundImage: `url(${props.data.photo})` }}
          ></div>
          {props.data.social.length > 0 && (
            <div className={classes['social-links']}>
              {props.data.social
                .filter((link) => link.url !== '')
                .map((link, index) => (
                  <SocialMediaLink key={index} {...link} />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RestaurantAccordion;
