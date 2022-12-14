import { useSelector } from 'react-redux';
import UserForm from '../components/forms/UserForm';
import RestaurantForm from '../components/forms/RestaurantForm';
import { selectCurrentProfile } from '../context/authentication-slice';

function SettingsPage() {
  const currentProfile = useSelector(selectCurrentProfile);
  const allRestaurants = useSelector(
    (state) => state.restaurants.allRestaurants
  );

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
