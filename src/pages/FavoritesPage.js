import { useSelector } from 'react-redux';
import RestaurantList from '../components/restaurant/RestaurantList';
import SelectField from '../components/forms/inputs/SelectField';
import { Fragment, useState } from 'react';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { selectCurrentProfile } from '../context/authentication-slice';

function FavoritesPage() {
  const currentProfile = useSelector(selectCurrentProfile);
  const allRestaurants = useSelector(
    (state) => state.restaurants.allRestaurants
  );
  const [searchParams, setSearchParams] = useSearchParams({});
  const [listShowed, setListShowed] = useState(
    searchParams.get('reviewed') ? 1 : 0
  );

  let list = [];
  if (listShowed === 0) {
    list = allRestaurants.filter((restaurant) =>
      currentProfile.favored.includes(restaurant.id)
    );
  }

  if (listShowed === 1) {
    list = allRestaurants.filter((restaurant) =>
      currentProfile.reviewed.some((review) => review.id === restaurant.id)
    );
  }

  function changeListHandler(event) {
    if (+event.target.value === 0) {
      setSearchParams(searchParams.delete('reviewed'));
    } else {
      setSearchParams(createSearchParams({ reviewed: 'true' }));
    }
    setListShowed(+event.target.value);
  }

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
          id='favored-select'
          label='Mostrar'
          defaultValue={searchParams.get('reviewed') ? 1 : 0}
          options={['Favoritos', 'Calificados']}
          onChange={changeListHandler}
        />
      </div>
      <h2 className='heading-secondary' style={{ marginBottom: '4.8rem' }}>
        {listShowed === 0 ? 'Mis Favoritos' : 'Calificados Anteriormente'}
      </h2>
      {list.length > 0 && <RestaurantList data={list} />}
      {list.length === 0 && (
        <p style={{ fontSize: '1.8rem', fontWeight: '600', lineHeight: '1.6' }}>
          {listShowed === 0 ? (
            <Fragment>
              Oops...no tienes favoritos. Empiece a agregar favoritos usando el
              botón con el &#9829;.
            </Fragment>
          ) : (
            <Fragment>
              Oops...no has calificado ningún restaurante. Busca el botón para
              calificar justo al tope del menú, al lado del &#9829;.
            </Fragment>
          )}
        </p>
      )}
    </div>
  );
}

export default FavoritesPage;
