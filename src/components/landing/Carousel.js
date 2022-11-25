import React, { Fragment, useCallback, useEffect, useState } from 'react';
import classes from './Carousel.module.css';

function Carousel(props) {
  const slides = React.Children.toArray(props.children);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pauseCarousel, setPauseCarousel] = useState(false);

  function moveSlideTo(numberOfSlide) {
    if (numberOfSlide < 0) return;
    if (numberOfSlide >= slides.length) numberOfSlide = slides.length - 1;
    setCurrentSlide(numberOfSlide);
  }

  const moveSlideForward = useCallback(
    (goForward) => {
      setCurrentSlide((currentSlide) => {
        const newSlide = goForward ? currentSlide + 1 : currentSlide - 1;

        if (newSlide === slides.length) {
          return 0;
        }

        if (newSlide < 0) {
          return slides.length - 1;
        }
        return newSlide;
      });
    },
    [slides.length]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (pauseCarousel) return;
      moveSlideForward(true);
    }, 30000);
    return () => clearInterval(interval);
  }, [pauseCarousel, slides.length, moveSlideForward]);

  return (
    <Fragment>
      <div className={classes.carousel}>
        <button
          className={`${classes['btn--carousel']} ${classes['btn--carousel--left']}`}
          onClick={moveSlideForward.bind(null, false)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={classes['arrow-icon']}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5'
            />
          </svg>
        </button>
        <div className={classes['carousel-content']}>
          <div
            className={classes['carousel-slides']}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onMouseEnter={() => {
              setPauseCarousel(true);
            }}
            onMouseLeave={() => {
              setPauseCarousel(false);
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className={classes.slide}>
                {slide}
              </div>
            ))}
          </div>
        </div>
        <button
          className={`${classes['btn--carousel']} ${classes['btn--carousel--right']}`}
          onClick={moveSlideForward.bind(null, true)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={classes['arrow-icon']}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>
      <div className={classes['carousel-counter']}>
        {slides.map((value, index) => (
          <button
            key={index}
            className={
              index === currentSlide
                ? `${classes['counter-dot']} ${classes['counter-dot--current']}`
                : classes['counter-dot']
            }
            onClick={() => {
              moveSlideTo(index);
            }}
          ></button>
        ))}
      </div>
    </Fragment>
  );
}

export default Carousel;
