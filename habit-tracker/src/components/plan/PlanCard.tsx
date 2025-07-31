import React from 'react';
import { PlanStatus } from '@/stores/PlanStore';

interface PlanCardProps {
  title: string;
  startDate: string;
  current: number;
  total: number;
  status: PlanStatus;
  onClick: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  startDate,
  current,
  total,
  status,
  onClick
}) => {
  const progressPercent = Math.round((current / total) * 100);
  const remainingDays = total - current;
  const isCompleted = status === PlanStatus.Completed;
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick();
    }
  };
  
  return (
    <div 
      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 relative cursor-pointer"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label={`查看计划详情：${title}`}
    >
      {isCompleted && (
        <div className="absolute top-4 right-4 w-6 h-6">
          <img 
            src="https://cdn.qboost.woa.com/files/llmcode/e25326/f0ed3b.png" 
            alt="完成" 
            className="w-full h-full"
          />
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <h3 className="text-base font-medium text-gray-800">{title}</h3>
        <img 
          src="https://cdn.qboost.woa.com/files/llmcode/e25326/a8e327.png" 
          alt="更多" 
          className="w-2.5 h-4"
        />
      </div>
      
      <div className="flex items-center mt-2">
        <img 
          src="https://cdn.qboost.woa.com/files/llmcode/e25326/2844ae.png" 
          alt="日历" 
          className="w-[11px] h-3 mr-1"
        />
        <span className="text-xs text-gray-500">开始于 {startDate}</span>
      </div>
      
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">进度</span>
          <span className="text-sm font-medium text-purple-600">{current}/{total}天</span>
        </div>
        
        <div className="h-2 w-full bg-gray-100 rounded-full mt-2 overflow-hidden">
          <div 
            className="h-full bg-purple-600 rounded-full" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>
      
      <div className="mt-2">
        <span className="text-sm font-medium text-green-500">
          {isCompleted ? ' 已完成 ' : ` 剩余${remainingDays}天 `}
        </span>
      </div>
    </div>
  );
};

export default PlanCard;