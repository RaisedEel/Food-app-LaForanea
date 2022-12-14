import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  authenticationActions,
  selectCurrentProfile,
} from '../../context/authentication-slice';
import { FavoriteButton } from '../ui/RadiusButton';
import Rating from './Rating';
import classes from './RestaurantItem.module.css';

function RestaurantItem(props) {
  const dispatch = useDispatch();
  const currentProfile = useSelector(selectCurrentProfile);

  function toggleFavoriteHandler(event) {
    event.preventDefault();
    dispatch(authenticationActions.toggleFavoriteRestaurant(props.id));
  }

  return (
    <li>
      <Link
        to={`/restaurant/${props.id}`}
        className={classes['restaurant-link']}
      >
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
          <p className={classes['restaurant-description']}>
            {props.description}
          </p>
          {currentProfile && (
            <FavoriteButton
              style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
              isActivated={currentProfile.favored.includes(props.id)}
              onClick={toggleFavoriteHandler}
            />
          )}
        </article>
      </Link>
    </li>
  );
}

export default RestaurantItem;
