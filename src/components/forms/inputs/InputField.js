import { useEffect, useState } from 'react';
import useInput from '../../../hooks/useInput';
import { EditButton } from '../../ui/RadiusButton';
import classes from './InputField.module.css';

function InputField(props) {
  const { value, isValid, valueChangeHandler, inputBlurHandler, errorMessage } =
    useInput(
      props.initialValue || '',
      props.canBeEmpty ? false : true,
      props.validation || []
    );

  useEffect(() => {
    if (props.getValidatedValue)
      props.getValidatedValue(isValid ? value : null);
  });

  const [disableInput, setDisableInput] = useState(
    props.editable ? true : false
  );

  function toggleDisabledStateHandler() {
    setDisableInput((currentState) => !currentState);
  }

  return (
    <div className={classes['input-container']} style={props.style}>
      {props.label && (
        <label htmlFor={props.id} className={classes['input-label']}>
          {props.label}
        </label>
      )}
      <div className={classes['input-body']}>
        {!props.textarea && (
          <input
            {...props.inputConfiguration}
            id={props.id}
            name={props.id}
            disabled={disableInput}
            className={
              errorMessage
                ? `${classes['input-box']} ${classes['input-box--error']}`
                : classes['input-box']
            }
            value={value}
            onChange={valueChangeHandler}
            onBlur={inputBlurHandler}
          />
        )}

        {props.textarea && (
          <textarea
            {...props.inputConfiguration}
            id={props.id}
            name={props.id}
            disabled={disableInput}
            className={
              errorMessage
                ? `${classes['input-box']} ${classes['input-box--error']}`
                : classes['input-box']
            }
            value={value}
            onChange={valueChangeHandler}
            onBlur={inputBlurHandler}
          />
        )}

        {props.editable && (
          <EditButton
            style={{ borderRadius: '7px' }}
            isActivated={!disableInput}
            onClick={toggleDisabledStateHandler}
          />
        )}
      </div>

      <p className={classes['input-error']}>{errorMessage}</p>
    </div>
  );
}

export default InputField;
