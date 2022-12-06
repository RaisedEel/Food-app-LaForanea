import { Fragment, useState } from 'react';
import Banner from '../ui/Banner';
import InputField from './inputs/InputField';
import classes from './Form.module.css';

import owners from '../../assets/images/forms/form-restaurant.jpg';

function RestaurantForm(props) {
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [resNameIsValid, setResNameIsValid] = useState(false);
  const [typeIsValid, setTypeIsValid] = useState(false);
  const [descriptionIsValid, setDescriptionIsValid] = useState(false);
  const [addressIsValid, setAddressIsValid] = useState(false);
  const [resEmailIsValid, setResEmailIsValid] = useState(false);
  const [cellphoneIsValid, setCellphoneIsValid] = useState(false);

  const formIsValid =
    nameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    resNameIsValid &&
    typeIsValid &&
    descriptionIsValid &&
    addressIsValid &&
    resEmailIsValid &&
    cellphoneIsValid;

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!formIsValid) return;

    alert('Exito');
  }

  return (
    <Fragment>
      <Banner
        style={{
          backgroundColor: '#4263eb',
          color: '#fff',
          marginBottom: '9.6rem',
        }}
        title='Dale más exposición a tu negocio!'
        text='¿Cansado de que los otros restaurantes tengan la ventaja solo por tener página web? Ahora te damos la oportunidad de tener tu propio espacio en la web y sin tener que pagar precios exorbitantes. Te damos 1 mes de prueba gratis al crear tu cuenta ahora mismo y ¡con todos los platillos que desees agregar! Ahora tu también estaras a la vanguardia.'
        image={owners}
      />

      <form className={classes.form} onSubmit={onSubmitHandler}>
        <fieldset className={classes['form-fieldset']}>
          <h2 className='heading-secondary'>Información del Usuario</h2>

          <InputField
            id='name-input'
            label='Nombre Completo*'
            isValid={setNameIsValid}
            validation={[
              {
                condition: (value) => value.trim().length <= 60,
                errorMessage: 'Este campo acepta un máximo de 60 caracteres',
              },
            ]}
          />

          <InputField
            id='email-input'
            label='Correo Eléctronico*'
            inputConfiguration={{ type: 'email' }}
            isValid={setEmailIsValid}
            validation={[
              {
                condition: (value) =>
                  value.trim().match(/(.+)@(.+){2,}\.(.+){2,}/),
                errorMessage: 'El correo dado no es válido',
              },
            ]}
          />

          <InputField
            id='password-input '
            label='Contraseña (entre 4 y 12 caracteres)*'
            inputConfiguration={{ type: 'password' }}
            isValid={setPasswordIsValid}
            validation={[
              {
                condition: (value) =>
                  value.trim().length <= 12 && value.trim().length >= 4,
                errorMessage:
                  'La contraseña debe contener entre 4 y 12 caracteres',
              },
            ]}
          />
        </fieldset>
        <fieldset className={classes['form-fieldset']}>
          <h2 className='heading-secondary'>
            Información Básica del Restaurante
          </h2>

          <InputField
            id='res-name-input'
            label='Nombre del Restaurante*'
            isValid={setResNameIsValid}
            validation={[
              {
                condition: (value) => value.trim().length <= 60,
                errorMessage: 'Este campo acepta un máximo de 60 caracteres',
              },
            ]}
          />

          <InputField
            id='type-input'
            label='Tipo de Restaurante*'
            inputConfiguration={{
              placeholder:
                'Restaurante para toda la familia, Pasteleria, Marisquería, etc...',
            }}
            isValid={setTypeIsValid}
            validation={[
              {
                condition: (value) => value.trim().length <= 60,
                errorMessage: 'Este campo acepta un máximo de 60 caracteres',
              },
            ]}
          />

          <InputField
            id='description-input'
            label='Descripción Completa*'
            isValid={setDescriptionIsValid}
            textarea='true'
          />

          <InputField
            id='address-input'
            label='Dirección Física del Establecimiento*'
            isValid={setAddressIsValid}
          />

          <InputField
            id='res-email-input'
            label='Correo Electrónico*'
            inputConfiguration={{ type: 'email' }}
            isValid={setResEmailIsValid}
            validation={[
              {
                condition: (value) =>
                  value.trim().match(/(.+)@(.+){2,}\.(.+){2,}/),
                errorMessage: 'El correo dado no es válido',
              },
            ]}
          />

          <InputField
            id='cellphone-input'
            label='Teléfono (10 digitos)*'
            inputConfiguration={{ type: 'tel' }}
            isValid={setCellphoneIsValid}
            validation={[
              {
                condition: (value) => value.trim().match(/\d/g).length === 10,
                errorMessage: 'El télefono no es valido',
              },
            ]}
          />
        </fieldset>
        <fieldset className={classes['form-fieldset']}>
          <h2 className='heading-secondary'>Redes Sociales (Opcionales)</h2>

          <InputField
            id='fb-input'
            label='Facebook'
            inputConfiguration={{ type: 'url' }}
            canBeEmpty
          />

          <InputField
            id='tw-input'
            label='Twitter'
            inputConfiguration={{ type: 'url' }}
            canBeEmpty
          />

          <InputField
            id='wh-input'
            label='Whatsapp'
            inputConfiguration={{ type: 'url' }}
            canBeEmpty
          />

          <InputField
            id='ig-input'
            label='Instagram'
            inputConfiguration={{ type: 'url' }}
            canBeEmpty
          />
        </fieldset>
        <button className={classes['form-button']} disabled={!formIsValid}>
          Crear Nueva Cuenta
        </button>
      </form>
    </Fragment>
  );
}

export default RestaurantForm;
