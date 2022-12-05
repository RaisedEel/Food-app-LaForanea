import { useState } from 'react';
import classes from './InputField.module.css';

function InputField(props) {
  const [disableInput, setDisableInput] = useState(
    props.editable ? true : false
  );

  function toggleDisabledStateHandler() {
    setDisableInput((currentState) => !currentState);
  }

  return (
    <div className={classes['input-container']}>
      {props.label && (
        <label htmlFor={props.id} className={classes['input-label']}>
          {props.label}
        </label>
      )}
      <div className={classes['input-body']}>
        {!props.textarea && (
          <input
            {...props}
            name={props.id}
            disabled={disableInput}
            className={
              props['error-message']
                ? `${classes['input-box']} ${classes['input-box--error']}`
                : classes['input-box']
            }
          />
        )}
        {props.textarea && (
          <textarea
            {...props}
            name={props.id}
            disabled={disableInput}
            className={
              props['error-message']
                ? `${classes['input-box']} ${classes['input-box--error']}`
                : classes['input-box']
            }
          />
        )}
        {props.editable && (
          <button
            type='button'
            className={
              !disableInput
                ? `${classes['edit--button']} ${classes['edit--button--active']}`
                : classes['edit--button']
            }
            onClick={toggleDisabledStateHandler}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={classes['edit-icon']}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
              />
            </svg>
          </button>
        )}
      </div>

      <p className={classes['input-error']}>{props['error-message']}</p>
    </div>
  );
}

export default InputField;
