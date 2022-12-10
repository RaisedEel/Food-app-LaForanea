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
      {favorites.length > 0 && <RestaurantList data={favorites} />}
      {favorites.length === 0 && (
        <p style={{ fontSize: '1.8rem', fontWeight: '600', lineHeight: '1.6' }}>
          Oops...no tienes favoritos. Empiece a agregar favoritos usando el
          botón con el &#9829;.
        </p>
      )}
    </div>
  );
}

export default FavoritesPage;
