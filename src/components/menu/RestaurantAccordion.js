import { useState } from 'react';
import classes from './RestaurantAccordion.module.css';

import SocialMediaLink from '../ui/SocialMediaLink';

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
            src={props.data.logo}
            alt={`Logo de ${props.data.name}`}
          />
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
          <div className={classes['social-links']}>
            {props.data.social.map((link, index) => (
              <SocialMediaLink key={index} {...link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantAccordion;
