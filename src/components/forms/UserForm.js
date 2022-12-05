import { Fragment } from 'react';

import InputField from './inputs/InputField';
import Banner from '../ui/Banner';
import classes from './Form.module.css';

import costumer from '../../assets/images/forms/form-user.jpg';

function UserForm(props) {
  return (
    <Fragment>
      <Banner
        style={{ backgroundColor: '#de7607', color: '#fff', height: '43rem' }}
        title='Crea tu Cuenta Gratis'
        text='Podras interactuar con los diferentes restaurantes de una forma más sencilla y personalizada y ¡todo totalmente gratis! Escoge tus favoritos y califica a cada restaurante que te topes y mucho más. Se acabaron los días de tener que memorizarte tus restaurantes favoritos.'
        image={costumer}
      />
      <form className={classes.form}>
        <fieldset className={classes['form-fieldset']}>
          <h2 className='heading-secondary'>Información del Usuario</h2>
          <InputField label='Nombre Completo' editable='true' disabled='true' />
          <InputField label='Correo Eléctronico' />
          <InputField label='Contraseña (entre 4 y 8 caracteres)' />
        </fieldset>
        <button className={classes['form-button']}>Crear Nueva Cuenta</button>
      </form>
    </Fragment>
  );
}

export default UserForm;
