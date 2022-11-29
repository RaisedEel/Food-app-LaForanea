import { useState } from 'react';
import { useDispatch } from 'react-redux';
import restaurants from '../../data/restaurants-data';
import { restaurantsActions } from '../../context/restaurants-slice';
import classes from './SearchBar.module.css';
import { useNavigate } from 'react-router-dom';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function updateTermHandler(event) {
    setSearchTerm(event.target.value);
  }

  function searchTermHandler() {
    const correctedSearchTerm = searchTerm.toLowerCase().trim();

    if (correctedSearchTerm.length === 0) return;

    const foundRestaurants = restaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(correctedSearchTerm) ||
        restaurant.type.toLowerCase().includes(correctedSearchTerm)
    );

    setSearchTerm('');
    dispatch(
      restaurantsActions.setRestaurants({
        code: correctedSearchTerm,
        name: `"${searchTerm}"`,
        elements: foundRestaurants,
      })
    );
    navigate(`/search/${correctedSearchTerm}`);
  }

  return (
    <div className={`${classes.searchbar} ${props.className}`}>
      <button className={classes['search-btn']} onClick={searchTermHandler}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={classes['search-icon']}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </button>
      <input
        className={classes['search-input']}
        type='text'
        placeholder={props.placeholder}
        value={searchTerm}
        onChange={updateTermHandler}
        onKeyDown={(event) => {
          if (event.key === 'Enter') searchTermHandler();
        }}
      />
    </div>
  );
}

export default SearchBar;
