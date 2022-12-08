import { Outlet } from 'react-router-dom';
import TabNav from '../components/layout/TabNav';

function HomePage() {
  return (
    <div className='container'>
      <TabNav
        data={[
          { id: 'feed', title: 'Feed' },
          { id: 'favorites', title: 'Favoritos' },
        ]}
      />

      <Outlet />
    </div>
  );
}

export default HomePage;
