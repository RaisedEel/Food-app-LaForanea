import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import RestaurantList from '../components/restaurant/RestaurantList';
import ArrowLink from '../components/ui/ArrowLink';
import { restaurantsActions } from '../context/restaurants-slice';

function RestaurantListPage() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants);
  const navigate = useNavigate();

  function returnToPreviousPageHandler() {
    dispatch(restaurantsActions.reset());
    navigate(-1);
  }

  return (
    <div
      className='container'
      style={{ display: 'flex', flexDirection: 'column', gap: '2.4rem' }}
    >
      <ArrowLink onClick={returnToPreviousPageHandler}>Regresar</ArrowLink>
      <h2 className='heading-secondary'>
        {restaurants.name} ({restaurants.size} resultados)
      </h2>
      <RestaurantList data={restaurants.elements} />
    </div>
  );
}

export default RestaurantListPage;
