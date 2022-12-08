import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InputField from './inputs/InputField';
import Banner from '../ui/Banner';
import classes from './Form.module.css';

import costumer from '../../assets/images/forms/form-user.jpg';
import { authenticationActions } from '../../context/authentication-slice';
import { useNavigate } from 'react-router-dom';

function UserForm(props) {
  const { initialValues } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profiles } = useSelector((state) => state.authentication);
  const [validatedName, setValidatedName] = useState(null);
  const [validatedEmail, setValidatedEmail] = useState(null);
  const [validatedPassword, setValidatedPassword] = useState(null);

  const formIsValid = validatedName && validatedEmail && validatedPassword;

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!formIsValid) return;

    const valuesToSubmit = {
      id: Date.now().toString(36) + Math.random().toString(36),
      name: validatedName,
      email: validatedEmail,
      password: validatedPassword,
    };

    if (props.initialValues)
      dispatch(
        authenticationActions.updateProfile({
          id: initialValues.id,
          values: valuesToSubmit,
        })
      );

    if (!props.initialValues)
      dispatch(
        authenticationActions.addProfile({
          ...valuesToSubmit,
          type: 'client',
          restaurants: [],
        })
      );

    navigate('/');
  }

  return (
    <Fragment>
      {!props.editable && (
        <Banner
          style={{
            backgroundColor: '#de7607',
            color: '#fff',
            marginBottom: '9.6rem',
          }}
          title='Crea tu Cuenta Gratis'
          text='Podras interactuar con los diferentes restaurantes de una forma más sencilla y personalizada y ¡todo totalmente gratis! Escoge tus favoritos y califica a cada restaurante que te topes y mucho más. Se acabaron los días de tener que memorizarte tus restaurantes favoritos.'
          image={costumer}
        />
      )}

      <form className={classes.form} onSubmit={onSubmitHandler}>
        <fieldset className={classes['form-fieldset']}>
          <h2 className='heading-secondary'>Información del Usuario</h2>
          <InputField
            id='name-input'
            label='Nombre Completo*'
            getValidatedValue={setValidatedName}
            validation={[
              {
                condition: (value) => value.trim().length <= 60,
                errorMessage: 'Este campo acepta un máximo de 60 caracteres',
              },
            ]}
            editable={props.editable ? true : false}
            initialValue={initialValues ? initialValues.name : null}
          />

          <InputField
            id='email-input'
            label='Correo Electrónico*'
            inputConfiguration={{ type: 'email' }}
            getValidatedValue={setValidatedEmail}
            validation={[
              {
                condition: (value) =>
                  value.trim().match(/(.+)@(.+){2,}\.(.+){2,}/),
                errorMessage: 'El correo dado no es válido',
              },
              {
                condition: (value) =>
                  !profiles.some((profile) => profile.email === value) ||
                  (initialValues && initialValues.email === value),
                errorMessage: 'El correo ya se encuentra en uso',
              },
            ]}
            editable={props.editable ? true : false}
            initialValue={initialValues ? initialValues.email : null}
          />

          <InputField
            id='password-input'
            label='Contraseña (entre 4 y 12 caracteres)*'
            inputConfiguration={{ type: 'password' }}
            getValidatedValue={setValidatedPassword}
            validation={[
              {
                condition: (value) =>
                  value.trim().length <= 12 && value.trim().length >= 4,
                errorMessage:
                  'La contraseña debe contener entre 4 y 12 caracteres',
              },
            ]}
            editable={props.editable ? true : false}
            initialValue={initialValues ? initialValues.password : null}
          />
        </fieldset>
        <button className={classes['form-button']} disabled={!formIsValid}>
          {props.editable ? 'Guardar Cambios' : 'Crear Nueva Cuenta'}
        </button>
      </form>
    </Fragment>
  );
}

export default UserForm;
