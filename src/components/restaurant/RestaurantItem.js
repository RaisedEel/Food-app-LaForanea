import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authenticationActions } from '../../context/authentication-slice';
import Rating from './Rating';
import classes from './RestaurantItem.module.css';

function RestaurantItem(props) {
  const dispatch = useDispatch();
  const {
    isAuthenticated,
    profiles,
    currentProfile: currentIndex,
  } = useSelector((state) => state.authentication);
  const currentProfile = profiles[currentIndex];

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
          {isAuthenticated && (
            <button
              className={
                currentProfile.restaurants.includes(props.id)
                  ? `${classes['btn--favorite']} ${classes['btn--favorite--active']}`
                  : classes['btn--favorite']
              }
              onClickCapture={toggleFavoriteHandler}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className={classes['favorite-icon']}
              >
                <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
              </svg>
            </button>
          )}
        </article>
      </Link>
    </li>
  );
}

export default RestaurantItem;
