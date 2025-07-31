import React from 'react';

interface DataOverviewProps {
  completedPlans: number;
  totalCheckinDays: number;
  longestStreak: number;
}

const DataOverview: React.FC<DataOverviewProps> = ({ 
  completedPlans, 
  totalCheckinDays, 
  longestStreak 
}) => {
  return (
    <div className="mb-5 p-4 bg-white rounded-xl shadow-sm">
      <h3 className="text-base font-medium text-gray-800 mb-3">数据概览</h3>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center">
          <p className="text-2xl font-bold text-purple-600 mb-1">{completedPlans}</p>
          <p className="text-xs text-gray-500">已完成计划数</p>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center">
          <p className="text-2xl font-bold text-green-500 mb-1">{totalCheckinDays}</p>
          <p className="text-xs text-gray-500">总打卡天数</p>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center">
          <p className="text-2xl font-bold text-pink-500 mb-1">{longestStreak}</p>
          <p className="text-xs text-gray-500">连续最长天数</p>
        </div>
      </div>
    </div>
  );
};

export default DataOverview;