import { useSelector } from 'react-redux';
import UserForm from '../components/forms/UserForm';
import RestaurantForm from '../components/forms/RestaurantForm';

function SettingsPage() {
  const { currentProfile } = useSelector((state) => state.authentication);
  const { allRestaurants } = useSelector((state) => state.restaurants);

  let currentRestaurant = {};
  if (currentProfile.type === 'owner') {
    currentRestaurant = allRestaurants.find(
      (restaurant) => restaurant.id === currentProfile.id
    );

    const { social } = currentRestaurant;
    const { name: userName, email: userEmail, password } = currentProfile;

    currentRestaurant = {
      ...social,
      ...currentRestaurant,
      userName,
      userEmail,
      password,
    };
  }

  return (
    <div className='container'>
      {currentProfile.type === 'client' && (
        <UserForm editable initialValues={currentProfile} />
      )}
      {currentProfile.type === 'owner' && (
        <RestaurantForm editable initialValues={currentRestaurant} />
      )}
    </div>
  );
}

export default SettingsPage;
