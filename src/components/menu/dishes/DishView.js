import classes from './DishView.module.css';

function DishView(props) {
  return (
    <figure className={classes['dish-view']}>
      <img src={props.image} alt={props.name} />
      <figcaption>{props.description}</figcaption>
    </figure>
  );
}

export default DishView;
