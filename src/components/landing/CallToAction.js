import { Link } from 'react-router-dom';
import classes from './CallToAction.module.css';

function CardCTA(props) {
  return (
    <div className={classes['cta-card']}>
      <div className={classes['cta-icon-cntr']}>{props.icon}</div>
      <p className={`heading ${classes['cta-card-header']}`}>{props.title}</p>
      <p className={classes['cta-description']}>{props.description}</p>
      {props.link && <div className={classes['cta-link']}>{props.link}</div>}
    </div>
  );
}

function CallToAction() {
  return (
    <section className='section-cta'>
      <div className='grid grid--3-cols'>
        <h2 className={`heading-secondary ${classes['cta-heading']}`}>
          ¿Te gusta nuestra página? Apoyanos si eres...
        </h2>
        <CardCTA
          title='Cliente usual?'
          description='Crea tu cuenta ahora mismo totalmente gratis. Guarda a tus restaurantes favoritos y haz conocer tus opiniones por medio de reviews.'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={classes['cta-icon']}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
              />
            </svg>
          }
          link={<Link to='/'>Crear mi cuenta &rarr;</Link>}
        />
        <CardCTA
          title='Dueño de restaurante?'
          description='Crea tu menu digital ahora mismo. Te dejamos agregar cuantos platillos quieras bajo un precio accesible y con 1 mes de prueba.'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={classes['cta-icon']}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z'
              />
            </svg>
          }
          link={<Link to='/'>Crear mi restaurante &rarr;</Link>}
        />
        <CardCTA
          title='Programador?'
          description='¿Interesado en tener tu propio sitio como este? o ¿Quieres reportar un bug? Checa nuestro repositorio con el código fuente.'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={classes['cta-icon']}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z'
              />
            </svg>
          }
          link={
            <a
              href='https://github.com/RaisedEel/Food-app-LaForanea'
              target='_blank'
              rel='noreferrer'
            >
              Ver código &rarr;
            </a>
          }
        />
      </div>
    </section>
  );
}

export default CallToAction;
