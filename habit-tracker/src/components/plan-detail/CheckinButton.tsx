import React from 'react';

interface CheckinButtonProps {
  onCheckin: () => void;
  isCheckedToday: boolean;
  isCompleted: boolean;
  isAbandoned: boolean;
}

const CheckinButton: React.FC<CheckinButtonProps> = ({ 
  onCheckin, 
  isCheckedToday, 
  isCompleted, 
  isAbandoned 
}) => {
  const getButtonState = () => {
    if (isCompleted) return { text: '已完成', disabled: true };
    if (isAbandoned) return { text: '已放弃', disabled: true };
    if (isCheckedToday) return { text: '今日已打卡', disabled: true };
    return { text: '立即打卡', disabled: false };
  };

  const { text, disabled } = getButtonState();

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[85px] bg-white border-t border-gray-200 flex items-center justify-center px-4 z-10">
      <button 
        className={`w-full h-[52px] ${disabled ? 'bg-gray-300' : 'bg-green-500'} text-white font-medium text-lg rounded-full shadow-sm`}
        onClick={disabled ? undefined : onCheckin}
        disabled={disabled}
        aria-label={text}
      >
        {text}
      </button>
    </div>
  );
};

export default CheckinButton;