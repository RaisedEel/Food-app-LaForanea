import { useSelector } from 'react-redux';
import UserForm from '../components/forms/UserForm';
import RestaurantForm from '../components/forms/RestaurantForm';

function SettingsPage() {
  const { profiles, currentProfile: currentIndex } = useSelector(
    (state) => state.authentication
  );
  const { allRestaurants } = useSelector((state) => state.restaurants);
  const currentProfile = profiles[currentIndex];

  let currentRestaurant = {};
  if (currentProfile.type === 'owner') {
    currentRestaurant = allRestaurants.find(
      (restaurant) => restaurant.restaurantOwner === currentProfile.id
    );

    const { social } = currentRestaurant;

    const {
      id: userId,
      name: userName,
      email: userEmail,
      password,
    } = currentProfile;

    currentRestaurant = {
      ...social,
      ...currentRestaurant,
      userId,
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
