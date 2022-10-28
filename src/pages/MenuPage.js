import { useEffect, useState } from 'react';
import Cart from '../components/cart/Cart';
import Menu from '../components/menu/Menu';
import RestaurantAccordion from '../components/menu/RestaurantAccordion';

function MenuPage() {
  const [showCart, setShowCart] = useState(window.innerWidth > 992);

  function showCartHandler() {
    setShowCart(window.innerWidth > 992);
  }

  useEffect(() => {
    window.addEventListener('resize', showCartHandler);
    return () => {
      window.removeEventListener('resize', showCartHandler);
    };
  }, []);

  return (
    <div className='container'>
      <RestaurantAccordion />
      <div className='grid grid--menu'>
        <Menu />
        {showCart && <Cart />}
      </div>
    </div>
  );
}

export default MenuPage;
