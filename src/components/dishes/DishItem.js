import classes from './DishItem.module.css';

function DishItem(props) {
  return (
    <li>
      <article className={classes.dish}>
        <div className={classes['dish-img-container']}>
          <img
            className={classes['dish-img']}
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className={classes['dish-header']}>
          <p className={classes['dish-title']}>{props.name}</p>
          <span className={classes['dish-price']}>{props.price}</span>
        </div>
        <p className={classes['dish-description']}>{props.description}</p>
        <form
          className={`${classes['dish-form']} grid grid--2-cols`}
          action='#'
        >
          <input
            className={classes['dish-input']}
            type='number'
            defaultValue='1'
            min='1'
            max='99'
            step='1'
          />
          <button className='btn'>Agregar</button>
        </form>
      </article>
    </li>
  );
}

export default DishItem;
