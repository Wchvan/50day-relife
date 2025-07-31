import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between w-full h-14 px-4 bg-white shadow-sm">
      <h1 className="text-lg font-medium text-gray-800">{title}</h1>
      <button className="w-8 h-8">
        <img 
          src="https://cdn.qboost.woa.com/files/llmcode/788ece/a0752c.png" 
          alt="设置" 
          className="w-full h-full"
        />
      </button>
    </header>
  );
};

export default Header;