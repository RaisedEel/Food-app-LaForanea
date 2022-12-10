import classes from './SelectField.module.css';

function SelectField(props) {
  return (
    <div className={classes['select-container']}>
      {props.label && (
        <label htmlFor={props.id} className={classes['select-label']}>
          {props.label}
        </label>
      )}
      <select
        className={classes['select-input']}
        id={props.id}
        name={props.id}
        onChange={props.onChange}
      >
        {props.options &&
          props.options.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
      </select>
    </div>
  );
}

export default SelectField;
