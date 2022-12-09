import { useSelector } from 'react-redux';
import RestaurantList from '../components/restaurant/RestaurantList';

function FavoritesPage() {
  const { profiles, currentProfile: currentIndex } = useSelector(
    (state) => state.authentication
  );
  const { allRestaurants } = useSelector((state) => state.restaurants);

  const favorites = allRestaurants.filter((restaurant) =>
    profiles[currentIndex].restaurants.includes(restaurant.id)
  );

  return (
    <div className='container'>
      <h2 className='heading-secondary' style={{ marginBottom: '3.2rem' }}>
        Mis Favoritos
      </h2>
      <RestaurantList data={favorites} />
    </div>
  );
}

export default FavoritesPage;
