import React from 'react';

interface SubmitButtonProps {
  days: number;
  onSubmit: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ days, onSubmit }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[85px] bg-white border-t border-gray-200 flex items-center justify-center px-4 max-w-[768px] mx-auto">
      <button 
        className="w-full h-[52px] bg-green-500 text-white text-lg font-medium rounded-full shadow-sm"
        onClick={onSubmit}
      >
        开始{days}天重启之旅
      </button>
    </div>
  );
};

export default SubmitButton;