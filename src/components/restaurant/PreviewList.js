import ArrowLink from '../ui/ArrowLink';
import RestaurantList from './RestaurantList';

import classes from './PreviewList.module.css';

function PreviewList(props) {
  return (
    <div className={classes.preview}>
      <h2 className='heading-secondary'>{props.title}</h2>
      <RestaurantList data={props.data.slice(0, 6)} />
      {props.data.length > 6 && (
        <ArrowLink className={classes['preview-link']} right>
          Ver Todos
        </ArrowLink>
      )}
    </div>
  );
}

export default PreviewList;
