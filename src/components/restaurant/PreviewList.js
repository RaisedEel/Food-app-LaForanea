import { useDispatch } from 'react-redux';
import useMatchMedia from '../../hooks/useMatchMedia';

import { restaurantsActions } from '../../context/restaurants-slice';
import ArrowLink from '../ui/ArrowLink';
import RestaurantList from './RestaurantList';
import classes from './PreviewList.module.css';

function PreviewList(props) {
  const dispatch = useDispatch();

  const reduceList = useMatchMedia('(max-width: 62em)');

  function setRestaurantsHandler() {
    dispatch(
      restaurantsActions.setRestaurants({
        code: props.title.toLowerCase(),
        name: props.title,
        elements: props.data,
      })
    );
  }

  return (
    <section className={classes['section-preview']}>
      <h2 className='heading-secondary'>{props.title}</h2>
      <RestaurantList
        data={reduceList ? props.data.slice(0, 4) : props.data.slice(0, 6)}
      />
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
