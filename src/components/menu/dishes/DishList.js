import DishItem from './DishItem';
import classes from './DishList.module.css';
import hamImg from '../../../assets/hamburger.jpg';

const dishes = [
  {
    id: 1,
    name: 'Hamburguesa con Queso y Tomate',
    price: 500,
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum. Quisque vitae turpis tincidunt, ultricies velit eu, aliquam turpis.Quisque vitae turpis tincidunt, ultricies velit eu, aliquam turpis.',
    image: hamImg,
  },
  {
    id: 2,
    name: 'Hamburguesa 2',
    price: 1999,
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum. Quisque vitae turpis tincidunt, ultricies velit eu, aliquam turpis.',
    image: hamImg,
  },
  {
    id: 3,
    name: 'Hamburguesa 3',
    price: 4567,
    description: 'Suspendisse mollis turpis eu sapien sagittis tristique.',
    image: hamImg,
  },
  {
    id: 4,
    name: 'Hamburguesa 4',
    price: 2002,
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
    image: hamImg,
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
