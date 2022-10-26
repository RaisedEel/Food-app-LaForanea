import classes from './SocialMediaLink.module.css';

function SocialMediaLink(props) {
  let icon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='192'
      height='192'
      fill='#000000'
      viewBox='0 0 256 256'
      className={classes.icon}
    >
      <rect width='256' height='256' fill='none'></rect>
      <circle
        cx='128'
        cy='128'
        r='40'
        fill='none'
        stroke='#000000'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
      ></circle>
      <path
        d='M181.1,208A96,96,0,1,1,224,128c0,22.1-8,40-28,40s-28-17.9-28-40V88'
        fill='none'
        stroke='#000000'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
      ></path>
    </svg>
  );

  switch (props.type) {
    case 'FB':
      icon = (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='192'
          height='192'
          fill='#000000'
          viewBox='0 0 256 256'
          className={classes.icon}
        >
          <rect width='256' height='256' fill='none'></rect>
          <circle
            cx='128'
            cy='128'
            r='96'
            fill='none'
            stroke='#000000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='16'
          ></circle>
          <path
            d='M168,88H152a23.9,23.9,0,0,0-24,24V224'
            fill='none'
            stroke='#000000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='16'
          ></path>
          <line
            x1='96'
            y1='144'
            x2='160'
            y2='144'
            fill='none'
            stroke='#000000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='16'
          ></line>
        </svg>
      );
      break;

    case 'TW':
      icon = (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='192'
          height='192'
          fill='#000000'
          viewBox='0 0 256 256'
          className={classes.icon}
        >
          <rect width='256' height='256' fill='none'></rect>
          <path
            d='M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z'
            fill='none'
            stroke='#000000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='16'
          ></path>
        </svg>
      );
      break;

    case 'WH':
      icon = (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='192'
          height='192'
          fill='#000000'
          viewBox='0 0 256 256'
          className={classes.icon}
        >
          <rect width='256' height='256' fill='none'></rect>
          <path
            d='M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z'
            fill='none'
            stroke='#000000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='16'
          ></path>
          <path
            d='M152.1,184A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6h0A28.1,28.1,0,0,1,152.1,184Z'
            fill='none'
            stroke='#000000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='16'
          ></path>
        </svg>
      );
      break;

    case 'IG':
      icon = (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='192'
          height='192'
          fill='#000000'
          viewBox='0 0 256 256'
          className={classes.icon}
        >
          <rect width='256' height='256' fill='none'></rect>
          <circle
            cx='128'
            cy='128'
            r='40'
            fill='none'
            stroke='#000000'
            stroke-miterlimit='10'
            stroke-width='16'
          ></circle>
          <rect
            x='36'
            y='36'
            width='184'
            height='184'
            rx='48'
            fill='none'
            stroke='#000000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='16'
          ></rect>
          <circle cx='180' cy='76' r='12'></circle>
        </svg>
      );
      break;
    default:
  }

  return (
    <a className='' href={props.url}>
      {icon}
    </a>
  );
}

export default SocialMediaLink;
