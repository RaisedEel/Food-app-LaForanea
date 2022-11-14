import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import logoImg from '../assets/images/logo.png';
import photo from '../assets/images/restaurant.jpg';

import { menuActions } from '../context/menu-slice';
import Cart from '../components/cart/Cart';
import Menu from '../components/menu/Menu';
import RestaurantAccordion from '../components/menu/RestaurantAccordion';
import menu from '../data/menu-data';
import ArrowLink from '../components/ui/ArrowLink';

const restaurant = {
  id: 'a1',
  name: 'El Clásico',
  type: 'Restaurante de Comida Rápida',
  description:
    'Etiam velit turpis, tristique in urna at, commodo semper ex. Nullam diam felis, dignissim in rhoncus eu, convallis blandit lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel fermentum magna. Integer sem nisi, gravida vel odio non, elementum sagittis est.',
  categories: ['Hamburgers', 'Hot dogs', 'Pizzas', 'Tacos', 'Drinks'],
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
    dispatch(menuActions.setMenu(menu));
    dispatch(menuActions.setCategory(restaurant.categories[0]));
  }, [dispatch]);

  return (
    <div className='container'>
      <ArrowLink to='/' style={{ marginBottom: '2.4rem' }}>
        Regresar
      </ArrowLink>
      <RestaurantAccordion data={restaurant} />
      <div className='grid grid--menu'>
        <Menu categories={restaurant.categories} />
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
