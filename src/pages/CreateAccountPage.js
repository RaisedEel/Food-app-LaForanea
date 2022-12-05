import { Outlet } from 'react-router-dom';
import TabNav from '../components/layout/TabNav';

function CreateAccountPage() {
  return (
    <section className='create-account container'>
      <TabNav
        data={[
          { id: 'user', title: 'Usuario' },
          { id: 'restaurant', title: 'Restaurante' },
        ]}
      />
      <Outlet />
    </section>
  );
}

export default CreateAccountPage;
