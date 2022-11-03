import classes from './EmptyCart.module.css';

function EmptyCart() {
  return (
    <div className={classes['empty-cart']}>
      <p className={classes.header}>Bolsa Vacía</p>
      <p>Agrega elementos a tu bolsa para visualizarlos aquí</p>
      <svg
        width='201'
        height='156'
        viewBox='0 0 201 156'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M67.1663 3H133.833C138.253 3 142.493 4.75595 145.618 7.88155C148.744 11.0072 150.5 15.2464 150.5 19.6667V34.8333C150.5 41.3018 152.007 47.6813 154.9 53.4667L162.766 69.2C165.659 74.9854 167.166 81.3649 167.166 87.8333V136.333C167.166 140.754 165.41 144.993 162.285 148.118C159.159 151.244 154.92 153 150.5 153H50.4997C46.0794 153 41.8402 151.244 38.7146 148.118C35.589 144.993 33.833 140.754 33.833 136.333V87.8333C33.8334 81.3649 35.3399 74.9854 38.233 69.2L50.4997 44.6667V19.6667C50.4997 15.2464 52.2556 11.0072 55.3812 7.88155C58.5068 4.75595 62.7461 3 67.1663 3Z'
          stroke='#F97474'
          stroke-width='5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M117.167 119.667C126.371 119.667 133.833 112.205 133.833 103C133.833 93.7952 126.371 86.3333 117.167 86.3333C107.962 86.3333 100.5 93.7952 100.5 103C100.5 112.205 107.962 119.667 117.167 119.667Z'
          stroke='#F97474'
          stroke-width='5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M50.5 153C54.9203 153 59.1595 151.244 62.2851 148.118C65.4107 144.993 67.1667 140.754 67.1667 136.333V87.8333C67.1662 81.3648 65.6598 74.9853 62.7667 69.1999L50.5 44.6666M92.1667 36.3333H108.833'
          stroke='#F97474'
          strokeWidth='5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
}

export default EmptyCart;
