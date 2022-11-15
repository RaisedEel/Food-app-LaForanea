import ArrowLink from '../ui/ArrowLink';
import RestaurantList from './RestaurantList';

import classes from './PreviewList.module.css';
import { useDispatch } from 'react-redux';
import { restaurantsActions } from '../../context/restaurants-slice';

function PreviewList(props) {
  const dispatch = useDispatch();

  function setRestaurantsHandler() {
    dispatch(restaurantsActions.setRestaurants(props.data));
  }

  return (
    <div className={classes.preview}>
      <h2 className='heading-secondary'>{props.title}</h2>
      <RestaurantList data={props.data.slice(0, 6)} />
      {props.data.length > 6 && (
        <ArrowLink
          to='results'
          className={classes['preview-link']}
          onClick={setRestaurantsHandler}
          right
        >
          Ver Todos
        </ArrowLink>
      )}
    </div>
  );
}

export default PreviewList;
