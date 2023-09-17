import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        // Reset the animation when it completes
        setCurrentText('');
        setCurrentIndex(0);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
