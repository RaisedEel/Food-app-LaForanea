import classes from './DishItem.module.css';

function DishItem(props) {
  return (
    <li>
      <article className={classes.dish}>
        <img
          className={classes['dish-img']}
          src={props.image}
          alt={props.name}
        />
        <div className={classes['dish-header']}>
          <p className={classes['dish-title']}>{props.name}</p>
          <span className={classes['dish-price']}>{props.price}</span>
        </div>
        <p className={classes['dish-description']}>{props.description}</p>
        <form className={classes['dish-form']} action='#'>
          <input type='number' />
          <button>Ordenar!</button>
        </form>
      </article>
    </li>
  );
}

export default DishItem;
