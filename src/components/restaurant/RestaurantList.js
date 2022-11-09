import RestaurantItem from './RestaurantItem';

import classes from './RestaurantList.module.css';

function RestaurantList(props) {
  return (
    <ul className={classes.restaurants}>
      {props.data.map(() => (
        <RestaurantItem />
      ))}
    </ul>
  );
}

export default RestaurantList;
