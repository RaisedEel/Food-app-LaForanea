import RestaurantItem from './RestaurantItem';

import classes from './RestaurantList.module.css';

function RestaurantList(props) {
  return (
    <ul className={`${classes.restaurants} grid grid--3-cols`}>
      {props.data.map((restaurant) => (
        <RestaurantItem {...restaurant} key={restaurant.id} />
      ))}
    </ul>
  );
}

export default RestaurantList;
