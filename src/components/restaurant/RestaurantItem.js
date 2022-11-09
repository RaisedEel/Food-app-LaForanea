import logo from '../../assets/images/logo.png';
import classes from './RestaurantItem.module.css';

function RestaurantItem() {
  return (
    <li>
      <article className={classes['restaurant-item']}>
        <img
          className={classes['restaurant-logo']}
          src={logo}
          alt='Logo de El Clásico'
        />

        <p>Restaurant de Comida Rápida</p>
        <p>El Clásico</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi
          nisl, hendrerit ut molestie et, cursus ac nisi. Nulla mattis euismod
          leo nec bibendum. Quisque lobortis volutpat magna.
        </p>
        <button className='btn'>Ver Menú</button>
      </article>
    </li>
  );
}

export default RestaurantItem;
