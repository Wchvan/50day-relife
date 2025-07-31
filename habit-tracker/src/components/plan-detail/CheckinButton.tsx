import React from 'react';

interface CheckinButtonProps {
  onCheckin: () => void;
  isCheckedToday: boolean;
}

const CheckinButton: React.FC<CheckinButtonProps> = ({ onCheckin, isCheckedToday }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[85px] bg-white border-t border-gray-200 flex items-center justify-center px-4 z-10">
      <button 
        className={`w-full h-[52px] ${isCheckedToday ? 'bg-gray-300' : 'bg-green-500'} text-white font-medium text-lg rounded-full shadow-sm`}
        onClick={isCheckedToday ? undefined : onCheckin}
        disabled={isCheckedToday}
        aria-label={isCheckedToday ? '今日已打卡' : '立即打卡'}
      >
        {isCheckedToday ? '今日已打卡' : '立即打卡'}
      </button>
    </div>
  );
};

export default CheckinButton;