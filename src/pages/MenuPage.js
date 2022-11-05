import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import hamburgerImg from '../assets/hamburger.jpg';
import logoImg from '../assets/logo.png';
import photo from '../assets/restaurant.jpg';

import { menuActions } from '../context/menu-slice';
import Cart from '../components/cart/Cart';
import Menu from '../components/menu/Menu';
import RestaurantAccordion from '../components/menu/RestaurantAccordion';

const restaurant = {
  id: 'a1',
  name: 'El Clásico',
  type: 'Restaurante de Comida Rápida',
  description:
    'Etiam velit turpis, tristique in urna at, commodo semper ex. Nullam diam felis, dignissim in rhoncus eu, convallis blandit lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel fermentum magna. Integer sem nisi, gravida vel odio non, elementum sagittis est.',
  logo: logoImg,
  photo: photo,
  address: '560 N KINGSLEY DR 111 LOS ANGELES CA 90004-1919',
  email: 'www.elclasico.com',
  cellphone: '755-555-6666',
  social: [
    { type: 'FB', url: '#' },
    { type: 'TW', url: '#' },
    { type: 'WH', url: '#' },
    { type: 'IG', url: '#' },
  ],
};

function MenuPage() {
  const [showCart, setShowCart] = useState(window.innerWidth > 992);
  const dispatch = useDispatch();

  function showCartHandler() {
    setShowCart(window.innerWidth > 992);
  }

  useEffect(() => {
    window.addEventListener('resize', showCartHandler);
    return () => {
      window.removeEventListener('resize', showCartHandler);
    };
  }, []);

  useEffect(() => {
    dispatch(
      menuActions.setMenu([
        {
          id: 1,
          category: 'Hamburger',
          name: 'Hamburguesa con Queso y Tomate',
          price: 500,
          description:
            'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum. Quisque vitae turpis tincidunt, ultricies velit eu, aliquam turpis.Quisque vitae turpis tincidunt, ultricies velit eu, aliquam turpis.',
          image: hamburgerImg,
        },
        {
          id: 2,
          category: 'Hamburger',
          name: 'Hamburguesa 2',
          price: 1999,
          description:
            'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum. Quisque vitae turpis tincidunt, ultricies velit eu, aliquam turpis.',
          image: hamburgerImg,
        },
        {
          id: 3,
          category: 'Hamburger',
          name: 'Hamburguesa 3',
          price: 4567,
          description:
            'Suspendisse mollis turpis eu sapien sagittis tristique.',
          image: hamburgerImg,
        },
        {
          id: 4,
          category: 'Hamburger',
          name: 'Hamburguesa 4',
          price: 2002,
          description:
            'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
          image: hamburgerImg,
        },
        {
          id: 5,
          category: 'Hamburger',
          name: 'Hamburguesa 5',
          price: 2002,
          description:
            'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
          image: hamburgerImg,
        },
        {
          id: 6,
          category: 'Hamburger',
          name: 'Hamburguesa 6',
          price: 2002,
          description:
            'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
          image: hamburgerImg,
        },
        {
          id: 7,
          category: 'Hamburger',
          name: 'Hamburguesa 7',
          price: 2002,
          description:
            'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
          image: hamburgerImg,
        },
        {
          id: 8,
          category: 'Hamburger',
          name: 'Hamburguesa 8',
          price: 2002,
          description:
            'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
          image: hamburgerImg,
        },
        {
          id: 9,
          category: 'Hamburger',
          name: 'Hamburguesa 9',
          price: 2002,
          description:
            'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
          image: hamburgerImg,
        },
        {
          id: 10,
          category: 'Hamburger',
          name: 'Hamburguesa 10',
          price: 2002,
          description:
            'Suspendisse mollis turpis eu sapien sagittis tristique. In dictum ligula non dui sodales elementum.',
          image: hamburgerImg,
        },
      ])
    );
  }, [dispatch]);

  return (
    <div className='container'>
      <RestaurantAccordion data={restaurant} />
      <div className='grid grid--menu'>
        <Menu />
        {showCart && (
          <Cart
            style={{
              paddingRight: '0',
              borderLeft: 'border-left: 2px solid #f97474',
            }}
          />
        )}
      </div>
    </div>
  );
}

export default MenuPage;
