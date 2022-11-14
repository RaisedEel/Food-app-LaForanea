import { Link } from 'react-router-dom';
import Rating from './Rating';
import classes from './RestaurantItem.module.css';

function RestaurantItem(props) {
  return (
    <li>
      <article className={classes['restaurant-item']}>
        <div className={classes['restaurant-photo-cntr']}>
          <img
            className={classes['restaurant-photo']}
            src={props.photo}
            alt={`${props.type}: ${props.name}`}
          />
        </div>

        <p className={classes['restaurant-subheading']}>{props.type}</p>
        <p className={`heading ${classes['restaurant-heading']}`}>
          {props.name}
        </p>
        <Rating rating={props.rating[0] - 1} reviews={props.rating[1]} />
        <p className={classes['restaurant-description']}>{props.description}</p>
        <Link className='btn' to='/menu'>
          Ver Menú
        </Link>
      </article>
    </li>
  );
}

export default RestaurantItem;
