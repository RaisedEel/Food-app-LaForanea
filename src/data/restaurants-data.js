import restaurant from '../assets/images/restaurant.jpg';

const restaurants = [
  {
    id: '101',
    name: 'El Clásico',
    type: 'Restaurante de Comida Rápida',
    rating: [4.5, 1035],
    photo: restaurant,
    description:
      'Restaurante para toda la familia con toda clase de platillos desde las deliciosas hamburguesas hasta los clásicos tacos. Prometemos un servicio rápido y atento.',
  },
  {
    id: '106',
    name: 'Little China',
    type: 'Restaurante Tradicional Chino',
    rating: [4.7, 5061],
    photo: restaurant,
    description:
      'Pequeño restaurante donde se sirve comida china. Tambien tenemos buffet.',
  },
  {
    id: '107',
    name: 'El Noa Noa',
    type: 'Bar y Karaoke',
    rating: [2, 102],
    photo: restaurant,
    description:
      'Se hacen bebidas de todo tipo, ambiente relajado con la música más moderna. Lunes, Miercoles y Viernes se organizan noches de karaoke.',
  },
  {
    id: '202',
    name: 'Moka',
    type: 'Cafeteria',
    rating: [3.8, 380],
    photo: restaurant,
    description:
      'Cafe rápido y caliente a domicilio. Checa nuestro menú para ver nuestra gran variedad.',
  },
  {
    id: '221',
    name: 'Florinda',
    type: 'Fonda Mexicana',
    rating: [4, 642],
    photo: restaurant,
    description: 'Fonda de antojitos mexicanos. Servicio todos los días.',
  },
  {
    id: '351',
    name: 'América',
    type: 'Pastelería',
    rating: [5, 123],
    photo: restaurant,
    description: 'Los mejores diseños y sabores. Cobramos por sabor.',
  },
  {
    id: '382',
    name: 'Cafetería',
    type: 'Pasteleria',
    rating: [3.6, 6242],
    photo: restaurant,
    description: 'Cafe importado. La mejor calidad de grano y postres.',
  },
];

export default restaurants;
