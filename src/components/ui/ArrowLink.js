import { Link } from 'react-router-dom';
import classes from './ArrowLink.module.css';

function ArrowLink(props) {
  return (
    <Link
      to={props.to}
      onClick={props.onClick}
      className={`${classes.link} ${props.className}`}
      style={props.style}
    >
      {props.right && props.children}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={
          props.right
            ? `${classes['arrow-icon']} ${classes['arrow-icon--right']}`
            : classes['arrow-icon']
        }
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5'
        />
      </svg>

      {!props.right && props.children}
    </Link>
  );
}

export default ArrowLink;
