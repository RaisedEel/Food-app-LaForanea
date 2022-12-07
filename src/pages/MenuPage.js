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

function MenuPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { restaurantCode } = useParams();
  const showCart = useMatchMedia('(min-width: 62em)');
  const { allRestaurants } = useSelector((state) => state.restaurants);

  const restaurant = allRestaurants.find(
    (restaurant) => restaurant.id === restaurantCode
  );

  useEffect(() => {
    if (restaurant) {
      dispatch(menuActions.setMenu(menu));
      dispatch(menuActions.setCategory(restaurant.categories[0]));
    }
  }, [dispatch, restaurant]);

  return (
    <div className='container'>
      <ArrowLink
        onClick={() => {
          navigate(-1);
        }}
        style={{ marginBottom: '2.4rem' }}
      >
        Regresar
      </ArrowLink>
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
