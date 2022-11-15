import { useDispatch, useSelector } from 'react-redux';
import RestaurantList from '../components/restaurant/RestaurantList';
import ArrowLink from '../components/ui/ArrowLink';
import { restaurantsActions } from '../context/restaurants-slice';

function RestaurantListPage() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants);

  function resetRestaurantsHandler() {
    dispatch(restaurantsActions.reset());
  }

  return (
    <div
      className='container'
      style={{ display: 'flex', flexDirection: 'column', gap: '2.4rem' }}
    >
      <ArrowLink to='/' onClick={resetRestaurantsHandler}>
        Regresar
      </ArrowLink>
      <h2 className='heading-secondary'>
        Restaurantes ({restaurants.size} resultados)
      </h2>
      <RestaurantList data={restaurants.elements} />
    </div>
  );
}

export default RestaurantListPage;
