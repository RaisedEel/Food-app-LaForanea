import RestaurantList from '../components/restaurant/RestaurantList';
// import logo from '../assets/images/logo.png';

function LandingPage() {
  return (
    <div className='container'>
      <h2 className='heading-secondary'>Restaurantes</h2>
      <RestaurantList data={['', '', '', '']} />
    </div>
  );
}

export default LandingPage;
