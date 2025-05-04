import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-black';

  return (
    <div className="relative inline-block">
      <div className="overflow-hidden rounded-full p-[2px] bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500">
        <div className={`flex items-center justify-center rounded-full w-10 h-10 bg-${variant === 'white' ? 'black' : 'white'}`}>
          <span className={`${textColor} font-bold tracking-wider text-sm`}>FEMA.</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;