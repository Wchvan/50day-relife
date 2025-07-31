import React from 'react';

interface StatisticsProps {
  consecutiveDays: number;
  longestStreak: number;
  completionRate: number;
  weeklyData: number[];
}

const Statistics: React.FC<StatisticsProps> = ({
  consecutiveDays,
  longestStreak,
  completionRate,
  weeklyData
}) => {
  // 计算每周数据的最大值，用于确定图表高度比例
  const maxWeeklyValue = Math.max(...weeklyData, 7);
  
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm w-full">
      <h3 className="font-medium text-gray-800 mb-4">数据统计</h3>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 text-center mb-1">连续打卡</p>
          <p className="text-center">
            <span className="text-xl font-bold text-purple-600">{consecutiveDays}</span>
            <span className="text-sm text-gray-500">天</span>
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 text-center mb-1">最长连续</p>
          <p className="text-center">
            <span className="text-xl font-bold text-purple-600">{longestStreak}</span>
            <span className="text-sm text-gray-500">天</span>
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 text-center mb-1">打卡率</p>
          <p className="text-center">
            <span className="text-xl font-bold text-green-500">{completionRate}</span>
            <span className="text-sm text-gray-500">%</span>
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-3">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-sm font-medium text-gray-700">每周打卡情况</h4>
          <span className="text-xs text-gray-500">过去4周</span>
        </div>
        
        <div className="h-24 flex items-end justify-between">
          {weeklyData.map((value, index) => {
            // 计算柱状图高度比例
            const heightPercentage = (value / maxWeeklyValue) * 100;
            const weekLabel = index === weeklyData.length - 1 ? '本周' : `第${index + 1}周`;
            
            return (
              <div key={index} className="flex flex-col items-center justify-end h-full">
                <div 
                  className="w-8 bg-purple-500 rounded-t-sm"
                  style={{ height: `${heightPercentage}%` }}
                ></div>
                <span className="text-xs text-gray-500 mt-1 text-center">{weekLabel}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Statistics;