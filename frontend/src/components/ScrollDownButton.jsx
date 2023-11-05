import React, { useState, useEffect } from 'react';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

const ScrollDownButton = () => {
  const [showButton, setShowButton] = useState(true);
  const [targetPosition, setTargetPosition] = useState(0);

  let timeoutId;

  useEffect(() => {
    const targetElement = document.getElementById('gallery');
    if (targetElement) {
      setTargetPosition(targetElement.offsetTop);
    }
  }, []);

  const handleScroll = () => {
    setShowButton(false);
    clearTimeout(timeoutId);
  };

  const handleScrollUp = () => {
    if (window.pageYOffset < targetPosition) {
      setShowButton(true);
    }
  };

  const handleMouseMove = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setShowButton(false);
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollUp);
    window.addEventListener('mousemove', handleMouseMove);
    timeoutId = setTimeout(() => {
      setShowButton(false);
    }, 2000);
    return () => {
      window.removeEventListener('scroll', handleScrollUp);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [targetPosition]);

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-5 right-1/2 transform translate-x-1/2 z-50
           focus:outline-none"
          onClick={() => {
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth',
            });
            handleScroll();
          }}
        >
          <HiOutlineChevronDoubleDown className="text-5xl text-gray-500" />
        </button>
      )}
    </>
  );
};

export default ScrollDownButton;
