import DishItem from './DishItem';
import classes from './DishList.module.css';

const dishes = [
  {
    id: 1,
    name: 'Hamburguesa 1',
    price: '$50',
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum. Quisque vitae turpis tincidunt, ultricies velit eu, aliquam turpis.Quisque vitae turpis tincidunt, ultricies velit eu, aliquam turpis.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg',
  },
  {
    id: 2,
    name: 'Hamburguesa 2',
    price: '$100',
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum. Quisque vitae turpis tincidunt, ultricies velit eu, aliquam turpis.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg',
  },
  {
    id: 3,
    name: 'Hamburguesa 3',
    price: '$25',
    description: 'Suspendisse mollis turpis eu sapien sagittis tristique.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg',
  },
  {
    id: 4,
    name: 'Hamburguesa 4',
    price: '$50',
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
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
