import React from 'react';

interface ProgressCircleProps {
  current: number;
  total: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm w-full">
      <div className="flex justify-center">
        <div className="relative w-40 h-40">
          <div className="w-full h-full rounded-full bg-purple-100 flex items-center justify-center">
            <div className="text-center">
              <div>
                <span className="text-3xl font-bold text-purple-600">{current}</span>
                <span className="text-lg text-gray-500">/{total}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">天</p>
            </div>
          </div>
          <img 
            src="https://cdn.qboost.woa.com/files/llmcode/ba14d7/721aff.png" 
            alt="进度环" 
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
      <p className="text-purple-600 font-medium text-center mt-4">已完成{percentage}%</p>
    </div>
  );
};

export default ProgressCircle;