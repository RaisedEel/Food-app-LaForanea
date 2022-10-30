import classes from './SearchBar.module.css';

function SearchBar(props) {
  return (
    <div className={`${classes.searchbar} ${props.className}`}>
      <button className={classes['search-btn']}>
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
      />
    </div>
  );
}

export default SearchBar;
