import React from 'react';
import { CheckinIcon } from './icons/CheckinIcon';

interface CheckinButtonProps {
  onCheckin: () => void;
  isSubmitting?: boolean;
}

const CheckinButton: React.FC<CheckinButtonProps> = ({ onCheckin, isSubmitting = false }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[85px] bg-white border-t border-gray-200 flex items-center justify-center px-4 z-10">
      <button
        className="w-full h-[52px] bg-green-500 text-white font-medium text-lg rounded-full shadow-sm flex items-center justify-center"
        onClick={onCheckin}
        disabled={isSubmitting}
      >
        <CheckinIcon 
          className="w-4 h-4.5 mr-1.5 text-white"
        />
        {isSubmitting ? '提交中...' : '完成打卡'}
      </button>
    </div>
  );
};

export default CheckinButton;