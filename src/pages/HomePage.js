import { useState } from 'react';
import { useSelector } from 'react-redux';
import PreviewList from '../components/restaurant/PreviewList';

function HomePage() {
  const { allRestaurants } = useSelector((state) => state.restaurants);
  const { profiles, currentProfile: currentIndex } = useSelector(
    (state) => state.authentication
  );
  const currentProfile = profiles[currentIndex];
  const [recommended] = useState(
    allRestaurants
      .slice()
      .sort(() => 0.5 - Math.random())
      .slice(0, 6)
  );

  return (
    <div
      className='container'
      style={{ display: 'flex', flexDirection: 'column', gap: '9.6rem' }}
    >
      <h2 className='heading-secondary' style={{ color: '#e18420' }}>
        ¡Bienvenid@ {currentProfile.name}. List@ para pedir?
      </h2>

      <PreviewList title='Te recomendamos...' data={recommended} />

      <PreviewList
        title='Lo Más Nuevo'
        data={allRestaurants.slice().reverse()}
      />

      <PreviewList
        title='Lo Mejor de lo Mejor'
        data={allRestaurants
          .slice()
          .sort((first, second) => second.rating[0] - first.rating[0])}
      />
    </div>
  );
}

export default HomePage;
