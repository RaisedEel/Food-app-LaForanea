import { useSelector } from 'react-redux';
import UserForm from '../components/forms/UserForm';
import RestaurantForm from '../components/forms/RestaurantForm';
import { selectCurrentProfile } from '../context/authentication-slice';
import { selectRestaurantByOwner } from '../context/restaurants-slice';

function SettingsPage() {
  const currentProfile = useSelector(selectCurrentProfile);
  const ownedRestaurant = useSelector((state) =>
    selectRestaurantByOwner(state, currentProfile.id)
  );

  const {
    id: userId,
    name: userName,
    email: userEmail,
    password,
  } = currentProfile;

  let currentRestaurant = null;
  if (ownedRestaurant) {
    const { social } = ownedRestaurant;
    currentRestaurant = {
      ...social,
      ...ownedRestaurant,
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
