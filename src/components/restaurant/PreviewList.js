import ArrowLink from '../ui/ArrowLink';
import RestaurantList from './RestaurantList';

import classes from './PreviewList.module.css';
import { useDispatch } from 'react-redux';
import { restaurantsActions } from '../../context/restaurants-slice';

function PreviewList(props) {
  const dispatch = useDispatch();

  function setRestaurantsHandler() {
    dispatch(
      restaurantsActions.setRestaurants({
        name: props.title,
        elements: props.data,
      })
    );
  }

  return (
    <section className={classes.preview}>
      <h2 className='heading-secondary'>{props.title}</h2>
      <RestaurantList data={props.data.slice(0, 6)} />
      {props.data.length > 6 && (
        <ArrowLink
          to={`/search/${props.title.toLowerCase()}`}
          className={classes['preview-link']}
          onClick={setRestaurantsHandler}
          right
        >
          Ver Todos
        </ArrowLink>
      )}
    </section>
  );
}

export default PreviewList;
