import { useSelector } from 'react-redux';
import UserForm from '../components/forms/UserForm';
import RestaurantForm from '../components/forms/RestaurantForm';

function SettingsPage() {
  const { currentProfile } = useSelector((state) => state.authentication);

  return (
    <div className='container'>
      {currentProfile.type === 'client' && <UserForm editable />}
      {currentProfile.type === 'owner' && <RestaurantForm editable />}
    </div>
  );
}

export default SettingsPage;
