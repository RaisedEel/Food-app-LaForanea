import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SelectField from '../components/forms/inputs/SelectField';

function CataloguePage() {
  const { allRestaurants } = useSelector((state) => state.restaurants);
  const [sortBy, setSortBy] = useState(0);
  const [orderBy, setOrderBy] = useState(0);

  function sortByHandler(event) {
    setSortBy(+event.target.value);
  }

  function orderByHandler(event) {
    setOrderBy(+event.target.value);
  }

  let catalogue = allRestaurants.slice();

  if (sortBy === 0)
    catalogue.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));

  if (sortBy === 1)
    catalogue.sort((a, b) => (a.type > b.type ? 1 : a.type < b.type ? -1 : 0));

  if (sortBy === 2) catalogue.sort((a, b) => b.rating[0] - a.rating[0]);

  if (sortBy === 3) catalogue.sort((a, b) => b.rating[1] - a.rating[1]);

  if (orderBy === 1) catalogue.reverse();

  return (
    <div className='container'>
      <div
        style={{
          marginBottom: '2.4rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
          gap: '2.4rem',
        }}
      >
        <SelectField
          label='Ordenar por: '
          options={['Nombres', 'Tipos', 'Calificación', 'Num. de Reviews']}
          onChange={sortByHandler}
        />
        <SelectField
          label='En orden: '
          options={['Descendiente', 'Ascendiente']}
          onChange={orderByHandler}
        />
      </div>
      <h2 className='heading-secondary' style={{ marginBottom: '4.8rem' }}>
        Catálogo ({catalogue.length} Restaurantes)
      </h2>
      <ul
        style={{
          listStyle: 'inside',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.4rem',
        }}
      >
        {catalogue.map((restaurant) => (
          <li key={restaurant.id}>
            <Link
              to={`/restaurant/${restaurant.id}`}
              className='link'
              style={{ fontSize: '1.8rem', lineHeight: '1.6' }}
            >
              {restaurant.name} : {restaurant.type} ({restaurant.rating[0]} con{' '}
              {restaurant.rating[1]} reviews)
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CataloguePage;
