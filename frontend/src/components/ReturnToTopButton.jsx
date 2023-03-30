import { useState, useEffect } from 'react';
import { HiOutlineArrowNarrowUp } from 'react-icons/hi';

function ReturnToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function that checks if user has scrolled down the page
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component is unmounted
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } fixed bottom-4 right-4 transition-opacity 
      duration-300 ease-in-out bg-gray-700
       hover:bg-gray-800 text-white rounded-full py-3 px-4 z-20`}
      onClick={handleClick}
    >
      <HiOutlineArrowNarrowUp className="h-6 w-6" />
    </button>
  );
}

export default ReturnToTopButton;
