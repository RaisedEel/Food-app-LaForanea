import classes from './RadiusButton.module.css';

function RadiusButton(props) {
  return (
    <button
      type='button'
      className={
        props.isActivated
          ? `${classes.btn} ${classes['btn--active']}`
          : classes.btn
      }
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export const FavoriteButton = (props) => {
  return (
    <RadiusButton
      style={{ ...props.style, color: '#f97474' }}
      isActivated={props.isActivated}
      onClick={props.onClick}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        style={{ width: '3.2rem', height: '3.2rem' }}
      >
        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
      </svg>
    </RadiusButton>
  );
};

export const EditButton = (props) => {
  return (
    <RadiusButton
      style={{ ...props.style, color: '#44911b' }}
      isActivated={props.isActivated}
      onClick={props.onClick}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-6 h-6'
      >
        <path d='M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z' />
        <path d='M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z' />
      </svg>
    </RadiusButton>
  );
};

export default RadiusButton;
