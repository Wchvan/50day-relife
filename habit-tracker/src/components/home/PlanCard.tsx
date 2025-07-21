import React from 'react';

interface PlanCardProps {
  title: string;
  current: number;
  total: number;
  iconUrl?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, current, total, iconUrl }) => {
  const progressPercentage = (current / total) * 100;
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-[200px] h-[102px] border border-gray-100 flex-shrink-0">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium text-base text-gray-800 m-0">{title}</h3>
        {iconUrl && <img src={iconUrl} alt="" className="w-3.5 h-4" />}
      </div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-600">进度</span>
        <span className="font-medium text-sm text-purple-600">{current}/{total}天</span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-purple-500 rounded-full" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PlanCard;