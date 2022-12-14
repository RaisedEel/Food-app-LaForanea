import InputField from './inputs/InputField';
import classes from './Form.module.css';

function DishForm(props) {
  function onSubmitHandler() {}

  return (
    <form
      className={classes.form}
      onSubmit={onSubmitHandler}
      style={{ marginTop: '3.2rem' }}
    >
      <InputField inputConfiguration={{ placeholder: 'Nombre del Platillo' }} />

      <InputField
        inputConfiguration={{
          type: 'url',
          placeholder: 'Enlace hacia una Foto del Platillo',
        }}
      />

      <InputField
        inputConfiguration={{ placeholder: 'Descripción del Platillo' }}
        textarea
      />
      <button className={classes['form-button']}>Arreglar Datos</button>
    </form>
  );
}

export default DishForm;
