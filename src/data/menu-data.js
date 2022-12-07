import hamburgerImg from '../assets/images/hamburger.jpg';
import tacosImg from '../assets/images/tacos.jpg';
import pizzaImg from '../assets/images/pizza.jpg';
import hotdogImg from '../assets/images/hot-dog.jpg';
import sodasImg from '../assets/images/sodas.jpg';

const menu = [
  {
    id: 1,
    category: 'Hamburguesa',
    name: 'Hamburguesa con Queso',
    price: 50,
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum. Quisque vitae turpis tincidunt, ultricies velit eu, aliquam turpis.Quisque vitae turpis tincidunt, ultricies velit eu, aliquam turpis.',
    image: hamburgerImg,
  },
  {
    id: 2,
    category: 'Hamburguesa',
    name: 'Hamburguesa Pequeña',
    price: 30,
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum. Quisque vitae turpis tincidunt, ultricies velit eu, aliquam turpis.',
    image: hamburgerImg,
  },
  {
    id: 3,
    category: 'Hamburguesa',
    name: 'Hamburguesa Tres Carnes',
    price: 70,
    description: 'Suspendisse mollis turpis eu sapien sagittis tristique.',
    image: hamburgerImg,
  },
  {
    id: 4,
    category: 'Hamburguesa',
    name: 'Hamburguesa con Tocino',
    price: 60,
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
    image: hamburgerImg,
  },
  {
    id: 5,
    category: 'Hamburguesa',
    name: 'Hamburguesa Mega',
    price: 80,
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
    image: hamburgerImg,
  },
  {
    id: 6,
    category: 'Tacos',
    name: 'Barbacoa',
    price: 30,
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
    image: tacosImg,
  },
  {
    id: 7,
    category: 'Tacos',
    name: 'Al pastor',
    price: 30,
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
    image: tacosImg,
  },
  {
    id: 8,
    category: 'Tacos',
    name: 'Dorados',
    price: 25,
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
    image: tacosImg,
  },
  {
    id: 9,
    category: 'Pizzas',
    name: 'Peperoni',
    price: 150,
    description: 'Suspendisse mollis turpis eu sapien sagittis tristique.',
    image: pizzaImg,
  },
  {
    id: 10,
    category: 'Pizzas',
    name: 'Hawaiana',
    price: 150,
    description:
      'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
    image: pizzaImg,
  },
  {
    id: 11,
    category: 'Pizzas',
    name: 'Vegetariana',
    price: 140,
    description: 'Suspendisse mollis turpis eu sapien sagittis tristique.',
    image: pizzaImg,
  },
  {
    id: 12,
    category: 'Pizzas',
    name: 'Mixta',
    price: 200,
    description: 'Suspendisse mollis turpis eu sapien sagittis tristique.',
    image: pizzaImg,
  },
  {
    id: 13,
    category: 'Bebidas',
    name: 'Refrescos',
    price: 20,
    description: 'Suspendisse mollis turpis eu sapien sagittis tristique.',
    image: sodasImg,
  },
  {
    id: 14,
    category: 'Bebidas',
    name: 'Aguas frescas',
    price: 15,
    description: 'Suspendisse mollis turpis eu sapien sagittis tristique.',
    image: sodasImg,
  },
  {
    id: 15,
    category: 'Hot dogs',
    name: 'Normal',
    price: 30,
    description: 'Suspendisse mollis turpis eu sapien sagittis tristique.',
    image: hotdogImg,
  },
  {
    id: 16,
    category: 'Hot dogs',
    name: 'Doble',
    price: 50,
    description: 'Suspendisse mollis turpis eu sapien sagittis tristique.',
    image: hotdogImg,
  },
];

function createMenu(numberOfItems) {
  if (numberOfItems < 0) numberOfItems = 0;
  if (numberOfItems >= menu.length) numberOfItems = menu.length - 1;

  return menu.slice(numberOfItems);
}

export { createMenu };
export default menu;
