import React from 'react';

interface TaskCardProps {
  title: string;
  checked: boolean;
  onCheck: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, checked, onCheck }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm p-5 mb-3 flex justify-between items-center w-full h-[84px] ${checked ? 'border-l-4 border-green-100' : 'border-l-4 border-pink-300'}`}
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-medium text-base text-gray-800 m-0">{title}</h3>
        <span 
          className={`inline-block px-2 py-1 rounded-full text-xs ${checked ? 'bg-green-100 text-green-600' : 'bg-pink-100 text-pink-600'}`}
        >
          {checked ? '已打卡' : '未打卡'}
        </span>
      </div>
      {checked ? (
        <button 
          className="bg-gray-200 text-gray-500 rounded-full px-4 py-2 font-medium text-sm cursor-not-allowed" 
          disabled
        >
          已完成
        </button>
      ) : (
        <button 
          className="bg-green-500 text-white rounded-full px-4 py-2 font-medium text-sm cursor-pointer" 
          onClick={onCheck}
        >
          打卡
        </button>
      )}
    </div>
  );
};

export default TaskCard;