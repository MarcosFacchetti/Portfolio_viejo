import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

const AnimatedArrow = () => {
  return (
    <div
      className="text-[30px] md:mt-32"
      style={{
        animation: 'bounce 1s infinite',
        '@keyframes bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }}
    >
      <AiOutlineArrowDown />
    </div>
  );
};

export default AnimatedArrow;


