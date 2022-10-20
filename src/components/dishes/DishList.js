import DishItem from './DishItem';
import classes from './DishList.module.css';

const dishes = [
  {
    id: 1,
    name: 'Hamburguesa 1',
    price: '$50',
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum. Quisque vitae turpis tincidunt, ultricies velit eu, aliquam turpis.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg',
  },
];

function DishList() {
  return (
    <ul className={classes['dish-list']}>
      {dishes.map((dish) => (
        <DishItem {...dish} key={dish.id} />
      ))}
    </ul>
  );
}

export default DishList;
