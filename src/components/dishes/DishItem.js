import classes from './DishItem.module.css';

function DishItem(props) {
  return (
    <li>
      <article>
        <img
          className={classes['dish-img']}
          src={props.image}
          alt={props.name}
        />
        <div>
          <p>{props.name}</p>
          <span>{props.price}</span>
        </div>
        <p>{props.description}</p>
        <form action='#'>
          <input type='number' />
          <button>Ordenar!</button>
        </form>
      </article>
    </li>
  );
}

export default DishItem;
