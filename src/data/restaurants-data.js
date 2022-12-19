import { createMenu } from './menu-data';

const restaurants = [
  {
    id: '1',
    restaurantOwner: 'abcd102',
    name: 'El Clásico',
    type: 'Restaurante de Comida Rápida',
    rating: [4.8, 1235],
    photo:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'Comidas clásicas y rápidas. Ambiente para toda la familia y servicio rápido.',

    address: '560 N KINGSLEY DR 111 LOS ANGELES CA 90004-1919',
    email: 'restaurant@gmail.com',
    cellphone: '755-555-6666',
    social: [
      { type: 'FB', url: 'https://www.facebook.com' },
      { type: 'TW', url: 'https://twitter.com' },
      { type: 'WH', url: 'https://www.whatsapp.com' },
      { type: 'IG', url: '' },
    ],
    categories: ['Hamburguesas', 'Carnes', 'Bebidas'],
    menu: createMenu(['Hamburguesas', 'Carnes', 'Bebidas']),
  },
  {
    id: '2',
    restaurantOwner: 'abcd1013',
    name: 'Little China',
    type: 'Restaurante Tradicional Chino',
    rating: [4.7, 5061],
    photo:
      'https://images.pexels.com/photos/1628020/pexels-photo-1628020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'Pequeño restaurante donde se sirve comida china. Tambien tenemos buffet y diferentes sopas.',
    address: '560 N KINGSLEY DR 111 LOS ANGELES CA 90004-1919',
    email: 'restaurant@gmail.com',
    cellphone: '755-555-6666',
    social: [
      { type: 'FB', url: '' },
      { type: 'TW', url: '' },
      { type: 'WH', url: '' },
      { type: 'IG', url: '' },
    ],
    categories: ['Sopas', 'Carnes', 'Bebidas'],
    menu: createMenu(['Sopas', 'Carnes', 'Bebidas']),
  },
  {
    id: '3',
    restaurantOwner: 'abcf101',
    name: 'El Noa Noa',
    type: 'Bar y Karaoke',
    rating: [2, 102],
    photo:
      'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'Se hacen bebidas de todo tipo, ambiente relajado con la música más moderna. Lunes, Miercoles y Viernes se organizan noches de karaoke.',
    address: '560 N KINGSLEY DR 111 LOS ANGELES CA 90004-1919',
    email: 'restaurant@gmail.com',
    cellphone: '755-555-6666',
    social: [
      { type: 'FB', url: '' },
      { type: 'TW', url: '' },
      { type: 'WH', url: '' },
      { type: 'IG', url: '' },
    ],
    categories: ['Bebidas', 'Cafés'],
    menu: createMenu(['Bebidas', 'Cafés']),
  },
  {
    id: '4',
    restaurantOwner: 'abcd1016',
    name: 'Moka',
    type: 'Cafeteria',
    rating: [3.8, 380],
    photo:
      'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'Cafe rápido y caliente a domicilio. Checa nuestro menú para ver nuestra gran variedad.',
    address: '560 N KINGSLEY DR 111 LOS ANGELES CA 90004-1919',
    email: 'restaurant@gmail.com',
    cellphone: '755-555-6666',
    social: [
      { type: 'FB', url: '' },
      { type: 'TW', url: '' },
      { type: 'WH', url: '' },
      { type: 'IG', url: '' },
    ],
    categories: ['Cafés', 'Postres'],
    menu: createMenu(['Cafés', 'Postres']),
  },
  {
    id: '5',
    restaurantOwner: 'adfa101',
    name: 'Florinda',
    type: 'Fonda Mexicana',
    rating: [4, 642],
    photo:
      'https://images.pexels.com/photos/1560657/pexels-photo-1560657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fonda de antojitos mexicanos. Servicio todos los días.',
    address: '560 N KINGSLEY DR 111 LOS ANGELES CA 90004-1919',
    email: 'restaurant@gmail.com',
    cellphone: '755-555-6666',
    social: [
      { type: 'FB', url: '' },
      { type: 'TW', url: '' },
      { type: 'WH', url: '' },
      { type: 'IG', url: '' },
    ],
    categories: ['Tacos', 'Sopas', 'Salsas'],
    menu: createMenu(['Tacos', 'Sopas', 'Salsas']),
  },
  {
    id: '6',
    restaurantOwner: 'gfrh101',
    name: 'América',
    type: 'Pastelería',
    rating: [5, 123],
    photo:
      'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Los mejores diseños y sabores. Cobramos por sabor.',
    address: '560 N KINGSLEY DR 111 LOS ANGELES CA 90004-1919',
    email: 'restaurant@gmail.com',
    cellphone: '755-555-6666',
    social: [
      { type: 'FB', url: '' },
      { type: 'TW', url: '' },
      { type: 'WH', url: '' },
      { type: 'IG', url: '' },
    ],
    categories: ['Postres'],
    menu: createMenu(['Postres']),
  },
  {
    id: '7',
    restaurantOwner: 'ab1f0f1',
    name: 'Ciber café',
    type: 'Pasteleria',
    rating: [3.6, 6242],
    photo:
      'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Cafe importado. La mejor calidad de grano y postres.',
    address: '560 N KINGSLEY DR 111 LOS ANGELES CA 90004-1919',
    email: 'restaurant@gmail.com',
    cellphone: '755-555-6666',
    social: [
      { type: 'FB', url: '' },
      { type: 'TW', url: '' },
      { type: 'WH', url: '' },
      { type: 'IG', url: '' },
    ],
    categories: ['Cafés', 'Postres'],
    menu: createMenu(['Cafés', 'Postres']),
  },
];

export default restaurants;
