import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useMatchMedia from '../hooks/useMatchMedia';

import { menuActions } from '../context/menu-slice';
import Cart from '../components/cart/Cart';
import Menu from '../components/menu/Menu';
import RestaurantAccordion from '../components/menu/RestaurantAccordion';
import menu from '../data/menu-data';
import ArrowLink from '../components/ui/ArrowLink';
import FavoriteButton from '../components/ui/FavoriteButton';
import { authenticationActions } from '../context/authentication-slice';
import SelectField from '../components/forms/inputs/SelectField';
import { restaurantsActions } from '../context/restaurants-slice';

function MenuPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { restaurantCode } = useParams();
  const showCart = useMatchMedia('(min-width: 62em)');

  const { allRestaurants } = useSelector((state) => state.restaurants);
  const {
    isAuthenticated,
    profiles,
    currentProfile: currentIndex,
  } = useSelector((state) => state.authentication);

  const restaurant = allRestaurants.find(
    (restaurant) => restaurant.id === restaurantCode
  );

  let review;
  if (isAuthenticated) {
    review = profiles[currentIndex].reviewed.find(
      (review) => review.id === restaurantCode
    );
  }

  useEffect(() => {
    if (restaurant) {
      dispatch(
        menuActions.setMenu({ menu, categories: restaurant.categories })
      );
      dispatch(menuActions.setCategory(0));
    }
  }, [dispatch, restaurant]);

  function rateRestaurantHandler(event) {
    dispatch(
      restaurantsActions.updateRating({
        id: restaurantCode,
        oldRating: review ? review.rating : 0,
        newRating: +event.target.value,
      })
    );

    dispatch(
      authenticationActions.updateReviews({
        id: restaurantCode,
        rating: +event.target.value,
      })
    );
  }

  function toggleFavoriteHandler() {
    dispatch(authenticationActions.toggleFavoriteRestaurant(restaurantCode));
  }

  return (
    <div className='container'>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '1.6rem',
          marginBottom: '2.4rem',
        }}
      >
        <ArrowLink
          onClick={() => {
            navigate(-1);
          }}
        >
          Regresar
        </ArrowLink>
        {restaurant && isAuthenticated && (
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              gap: '2.4rem',
            }}
          >
            <SelectField
              defaultValue={review ? review.rating : 0}
              options={[
                'Sin calificación',
                '1 Estrella',
                '2 Estrellas',
                '3 Estrellas',
                '4 Estrellas',
                '5 Estrellas',
              ]}
              onChange={rateRestaurantHandler}
            />
            <FavoriteButton
              style={{ position: 'static', padding: '1.2rem' }}
              isActivated={profiles[currentIndex].favored.includes(
                restaurantCode
              )}
              onClick={toggleFavoriteHandler}
            />
          </div>
        )}
      </div>
      {restaurant && (
        <Fragment>
          <RestaurantAccordion data={restaurant} />
          <div className='grid grid--menu'>
            <Menu categories={restaurant.categories} />
            {showCart && (
              <Cart
                style={{
                  paddingRight: '0',
                  borderLeft: 'border-left: 2px solid #f97474',
                }}
              />
            )}
          </div>
        </Fragment>
      )}
      {!restaurant && (
        <h2 className='heading-secondary' style={{ textAlign: 'center' }}>
          El restaurante con el código "{restaurantCode}" no existe
        </h2>
      )}
    </div>
  );
}

export default MenuPage;
