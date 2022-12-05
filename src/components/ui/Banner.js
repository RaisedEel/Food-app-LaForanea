import { Link } from 'react-router-dom';
import classes from './Banner.module.css';

function Banner(props) {
  return (
    <div
      className={`grid grid--2-cols ${classes.banner} ${
        props.backwards ? classes['banner-backwards'] : ''
      }`}
      style={props.style ? props.style : {}}
    >
      <div className={classes['text-container']}>
        <h2 className={`heading-secondary ${classes['banner-header']}`}>
          {props.title}
        </h2>
        <p className={classes['banner-text']}>{props.text}</p>
        {props.link && props.link.type === 'ext' && (
          <a
            className={classes['banner-link']}
            href={props.link.href}
            target='_blank'
            rel='noreferrer'
          >
            {props.link.message}
          </a>
        )}
        {props.link && props.link.type === 'int' && (
          <Link className={classes['banner-link']} to={props.link.href}>
            {props.link.message}
          </Link>
        )}
      </div>
      <div className={classes['image-container']}>
        <img src={props.image} alt={props.title} />
      </div>
    </div>
  );
}

export default Banner;
