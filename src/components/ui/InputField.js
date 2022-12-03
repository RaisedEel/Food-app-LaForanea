import classes from './InputField.module.css';

function InputField(props) {
  return (
    <div className={classes['input-container']}>
      {props.label && (
        <label htmlFor={props.id} className={classes['input-label']}>
          {props.label}
        </label>
      )}
      <input
        {...props}
        name={props.id}
        className={
          props['error-message']
            ? `${classes['input-box']} ${classes['input-box--error']}`
            : classes['input-box']
        }
      />
      <p className={classes['input-error']}>{props['error-message']}</p>
    </div>
  );
}

export default InputField;
