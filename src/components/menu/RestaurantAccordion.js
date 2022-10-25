import classes from './RestaurantAccordion.module.css';

function RestaurantAccordion() {
  return (
    <div className={classes.accordion}>
      <h2 className='heading-secondary'>
        Restaurant 'El Típico Default' : Restaurante de Comida Rápida
      </h2>
      <button className={classes['accordion-btn']}>
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
  );
}

export default RestaurantAccordion;
