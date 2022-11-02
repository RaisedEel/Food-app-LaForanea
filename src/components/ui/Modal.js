import { useEffect } from 'react';
import classes from './Modal.module.css';

function Modal(props) {
  useEffect(() => {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.classList.add('body--fixed');
    return () => {
      const scrollY = document.body.style.top;
      document.body.classList.remove('body--fixed');
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <button className={classes['btn--close']} onClick={props.onClose}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={classes.icon}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <h2 className='heading-secondary'>{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
