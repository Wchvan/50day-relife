import React from 'react';

const achievements = [
  {
    id: 1,
    name: '坚持达人',
    progress: 70,
    icon: '🏆'
  },
  {
    id: 2,
    name: '早起冠军',
    progress: 45,
    icon: '🌅'
  },
  {
    id: 3,
    name: '阅读专家',
    progress: 90,
    icon: '📚'
  },
  {
    id: 4,
    name: '健身达人',
    progress: 20,
    icon: '💪'
  }
];

const AchievementProgress: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
      <h3 className="font-medium text-gray-800 mb-4">成就解锁进度</h3>
      <div className="space-y-4">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-xl">
                  {achievement.icon}
                </div>
                <span className="text-sm text-gray-700 ml-3">{achievement.name}</span>
              </div>
              <span className="text-xs font-medium text-purple-600">{achievement.progress}%</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-600 rounded-full" 
                style={{ width: `${achievement.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementProgress;