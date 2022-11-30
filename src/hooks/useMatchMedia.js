import { useEffect, useState } from 'react';

function useMatchMedia(mediaQuery) {
  const [isMatching, setIsMatching] = useState(
    window.matchMedia(mediaQuery).matches
  );

  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery);

    const mediaQueryListener = (matcher) => setIsMatching(matcher.matches);

    watcher.addEventListener('change', mediaQueryListener);

    return () => {
      watcher.removeEventListener('change', mediaQueryListener);
    };
  }, [mediaQuery]);

  return isMatching;
}

export default useMatchMedia;
