import { Link } from 'react-router-dom';
import classes from './RestaurantItem.module.css';

function RestaurantItem(props) {
  const rating = [];
  for (let i = 0; i < 5; i++) {
    rating.push(
      <svg
        key={i}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={classes['rating-icon']}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
        />
      </svg>
    );
  }

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
        <div className={classes['restaurant-rating']}>
          {rating}
          <p>(566 reviews)</p>
        </div>
        <p className={classes['restaurant-description']}>{props.description}</p>
        <Link className='btn' to='/menu'>
          Ver Menú
        </Link>
      </article>
    </li>
  );
}

export default RestaurantItem;
