import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import RestaurantList from '../components/restaurant/RestaurantList';
import ArrowLink from '../components/ui/ArrowLink';

function RestaurantListPage() {
  const navigate = useNavigate();
  const { term } = useParams();

  const restaurantsHistory = useSelector((state) => state.restaurants.history);
  const restaurants = restaurantsHistory.find((record) => record.code === term);

  function returnToPreviousPageHandler() {
    navigate(-1);
  }

  return (
    <div
      className='container'
      style={{ display: 'flex', flexDirection: 'column', gap: '3.2rem' }}
    >
      <ArrowLink onClick={returnToPreviousPageHandler}>Regresar</ArrowLink>
      <h2 className='heading-secondary'>
        {restaurants.name} ({restaurants.elements.length} resultados)
      </h2>
      <RestaurantList data={restaurants.elements} />
    </div>
  );
}

export default RestaurantListPage;
