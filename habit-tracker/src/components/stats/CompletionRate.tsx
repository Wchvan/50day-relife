import React from 'react';

const CompletionRate: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
      <div className="flex h-[43px] border-b border-gray-100 mb-4">
        <button className="flex-1 h-[42px] flex items-center justify-center border-b-2 border-green-500">
          <span className="text-green-500 font-medium">周</span>
        </button>
        <button className="flex-1 h-[42px] flex items-center justify-center">
          <span className="text-gray-500">月</span>
        </button>
        <button className="flex-1 h-[42px] flex items-center justify-center">
          <span className="text-gray-500">总计</span>
        </button>
      </div>
      <div className="flex justify-center items-center h-[240px]">
        <div className="relative w-[192px] h-[192px]">
          <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500">76%</div>
              <p className="text-sm text-gray-600">总体完成率</p>
            </div>
          </div>
          <svg className="absolute top-0 left-0" width="192" height="192" viewBox="0 0 192 192">
            <circle
              cx="96"
              cy="96"
              r="90"
              fill="none"
              stroke="#22C55E"
              strokeWidth="12"
              strokeDasharray="565.48"
              strokeDashoffset="135.72"
              strokeLinecap="round"
              transform="rotate(-90 96 96)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CompletionRate;