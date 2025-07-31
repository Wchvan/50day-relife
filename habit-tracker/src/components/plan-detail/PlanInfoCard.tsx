import React from 'react';

interface PlanInfoCardProps {
  category: string;
  startDate: string;
  endDate: string;
  onEdit: () => void;
  onRemind: () => void;
}

const PlanInfoCard: React.FC<PlanInfoCardProps> = ({
  category,
  startDate,
  endDate,
  onEdit,
  onRemind
}) => {
  return (
    <div className="w-full bg-gradient-to-r from-green-50 to-purple-50 rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <img 
              src="https://cdn.qboost.woa.com/files/llmcode/ba14d7/23aed9.png" 
              alt="类别" 
              className="w-3 h-3.5"
            />
            <span>{category}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            className="w-8 h-8 bg-white rounded-md shadow-sm flex items-center justify-center"
            onClick={onEdit}
          >
            <img 
              src="https://cdn.qboost.woa.com/files/llmcode/ba14d7/87d4a6.png" 
              alt="编辑" 
              className="w-6 h-6"
            />
          </button>
          <button 
            className="w-8 h-8 bg-white rounded-md shadow-sm flex items-center justify-center"
            onClick={onRemind}
          >
            <img 
              src="https://cdn.qboost.woa.com/files/llmcode/ba14d7/9705ba.png" 
              alt="提醒" 
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
      
      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-1">
          <img 
            src="https://cdn.qboost.woa.com/files/llmcode/ba14d7/d100e1.png" 
            alt="开始日期" 
            className="w-3 h-3.5"
          />
          <span className="text-sm">开始: {startDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <img 
            src="https://cdn.qboost.woa.com/files/llmcode/ba14d7/3ffb97.png" 
            alt="结束日期" 
            className="w-3 h-3.5"
          />
          <span className="text-sm">结束: {endDate}</span>
        </div>
      </div>
    </div>
  );
};

export default PlanInfoCard;