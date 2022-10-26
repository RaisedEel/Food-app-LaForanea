import Cart from '../components/cart/Cart';
import Menu from '../components/menu/Menu';
import RestaurantAccordion from '../components/menu/RestaurantAccordion';

function MenuPage() {
  return (
    <div className='container'>
      <RestaurantAccordion />
      <div className='grid' style={{ gridTemplateColumns: '1fr 45rem' }}>
        <Menu />
        <Cart />
      </div>
    </div>
  );
}

export default MenuPage;
