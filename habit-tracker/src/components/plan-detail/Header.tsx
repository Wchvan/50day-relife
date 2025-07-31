import React from 'react';

interface HeaderProps {
  onBack: () => void;
  onShare: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBack, onShare }) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-[52px] bg-white shadow-sm z-10 flex items-center justify-between px-4">
      <button 
        className="text-gray-700" 
        onClick={onBack}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <h1 className="text-lg font-medium text-gray-800">计划详情</h1>
      <button 
        className="text-green-500 font-medium"
        onClick={onShare}
      >
        分享
      </button>
    </div>
  );
};

export default Header;