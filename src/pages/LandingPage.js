import RestaurantList from '../components/restaurant/RestaurantList';
import restaurant from '../assets/images/restaurant.jpg';

const restaurants = [
  {
    id: '101',
    name: 'El Clásico',
    type: 'Restaurante de Comida Rápida',
    photo: restaurant,
    description:
      'Restaurante para toda la familia con toda clase de platillos desde las deliciosas hamburguesas hasta los clásicos tacos. Prometemos un servicio rápido y atento.',
  },
  {
    id: '106',
    name: 'Little China',
    type: 'Restaurante Tradicional Chino',
    photo: restaurant,
    description:
      'Pequeño restaurante donde se sirve comida china. Tambien tenemos buffet.',
  },
  {
    id: '107',
    name: 'El Noa Noa',
    type: 'Bar y Karaoke',
    photo: restaurant,
    description:
      'Se hacen bebidas de todo tipo, ambiente relajado con la música más moderna. Lunes, Miercoles y Viernes se organizan noches de karaoke.',
  },
  {
    id: '202',
    name: 'Moka',
    type: 'Cafeteria',
    photo: restaurant,
    description:
      'Cafe rápido y caliente a domicilio. Checa nuestro menú para ver nuestra gran variedad.',
  },
];

function LandingPage() {
  return (
    <div className='container'>
      <h2 className='heading-secondary' style={{ marginBottom: '3.6rem' }}>
        Restaurantes
      </h2>
      <RestaurantList data={restaurants} />
    </div>
  );
}

export default LandingPage;
