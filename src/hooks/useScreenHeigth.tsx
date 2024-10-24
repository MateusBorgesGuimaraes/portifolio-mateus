import React from 'react';

export const useScreenHeight = () => {
  const getScreenHeight = () => window.innerHeight;
  const getSiteHeight = () => document.body.scrollHeight;

  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [scrollPercentage, setScrollPercentage] = React.useState(0);

  const handleScroll = React.useCallback(() => {
    const position = window.scrollY;
    const screenHeight = getScreenHeight();
    const siteHeight = getSiteHeight();

    setScrollPosition(position);

    const percentage = (position / (siteHeight - screenHeight)) * 100;
    setScrollPercentage(percentage);
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { scrollPosition, scrollPercentage };
};
