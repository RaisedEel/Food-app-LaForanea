import { Fragment } from 'react';
import Banner from '../ui/Banner';
import InputField from './inputs/InputField';
import classes from './Form.module.css';

import owners from '../../assets/images/forms/form-restaurant.jpg';

function RestaurantForm(props) {
  return (
    <Fragment>
      <Banner
        style={{ backgroundColor: '#4263eb', color: '#fff', height: '43rem' }}
        title='Dale más exposición a tu negocio'
        text='¿Cansado de que los otros restaurantes tengan la ventaja solo por tener página web? Ahora te damos la oportunidad de tener tu propio espacio en la web y sin tener que pagar precios exorbitantes. Te damos 1 mes de prueba gratis al crear tu cuenta ahora mismo y ¡con todos los platillos que desees agregar! Ahora tu también estaras a la vanguardia.'
        image={owners}
      />
      <form className={classes.form}>
        <fieldset className={classes['form-fieldset']}>
          <h2 className='heading-secondary'>Información del Usuario</h2>
          <InputField label='Nombre Completo' />
          <InputField label='Correo Eléctronico' />
          <InputField label='Contraseña (entre 4 y 8 caracteres)' />
        </fieldset>
        <fieldset className={classes['form-fieldset']}>
          <h2 className='heading-secondary'>
            Información Básica del Restaurante
          </h2>
          <InputField label='Nombre del Restaurante' />
          <InputField
            label='Tipo de Restaurante (No más de 50 caracteres)'
            placeholder='Restaurante para toda la familia, Pasteleria, Marisqueria, etc...'
          />
          <InputField label='Descripción Completa' textarea='true' />
          <InputField label='Dirección Física' />
          <InputField label='Correo Eléctronico' />
          <InputField label='Telefono (10 digitos)' />
        </fieldset>
        <fieldset className={classes['form-fieldset']}>
          <h2 className='heading-secondary'>Redes Sociales (Opcionales)</h2>
          <InputField label='Facebook' />
          <InputField label='Twitter' />
          <InputField label='Whatsapp' />
          <InputField label='Instagram' />
        </fieldset>
        <button className={classes['form-button']}>Crear Nueva Cuenta</button>
      </form>
    </Fragment>
  );
}

export default RestaurantForm;
