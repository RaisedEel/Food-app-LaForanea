import restaurants from '../data/restaurants-data';
import Carousel from '../components/landing/Carousel';
import PreviewList from '../components/restaurant/PreviewList';
import Banner from '../components/ui/Banner';
import carousel1 from '../assets/images/carousel/carousel-1.jpg';
import carousel2 from '../assets/images/carousel/carousel-2.png';
import carousel3 from '../assets/images/carousel/carousel-3.jpg';
import CallToAction from '../components/landing/CallToAction';

function LandingPage() {
  return (
    <div
      className='container'
      style={{ display: 'flex', flexDirection: 'column', gap: '9.6rem' }}
    >
      <Carousel>
        <Banner
          style={{ backgroundColor: '#37b24d', color: '#fff' }}
          title='Disfruta nuestro gran sazón'
          text='La Foránea te trae todo el sazón de Zihuatanejo a tu alcance con un solo click. Te traemos nuestra selección de lo mejor para tu proxima comida.'
          image={carousel1}
          link={{
            type: 'ext',
            href: 'https://www.google.com',
            message: 'Ve nuestro catalogo completo',
          }}
        />
        <Banner
          backwards
          style={{ color: '#333' }}
          title='Cientos de elecciones!'
          text='Nuestra selección no es suficiente? No te quedes con las ganas. Usa la barra de busqueda y empieza a explorar miles de sabores diferentes.'
          image={carousel2}
        />
        <Banner
          style={{ backgroundColor: '#e03131', color: '#fff' }}
          title='Tambien puedes ser parte!'
          text='Unete ahora por el mejor precio posible y hasta con 1 mes de prueba. Tu propio restaurante virtual con platillos ilimitados!'
          image={carousel3}
          link={{
            type: 'int',
            href: '/restaurant/101',
            message: '¿Que estas esperando?',
          }}
        />
      </Carousel>

      <PreviewList title='Restaurantes de la Semana' data={restaurants} />

      <PreviewList title='Lo Más Nuevo' data={restaurants.slice().reverse()} />

      <PreviewList
        title='Lo Mejor de lo Mejor'
        data={restaurants
          .slice()
          .sort((first, second) => second.rating[0] - first.rating[0])}
      />

      <CallToAction />
    </div>
  );
}

export default LandingPage;
