import React from 'react';

interface Badge {
  id: number;
  iconUrl: string;
  title: string;
  unlocked: boolean;
}

const badges: Badge[] = [
  {
    id: 1,
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/cee289.png",
    title: "连续7天",
    unlocked: true
  },
  {
    id: 2,
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/09219a.png",
    title: "首个计划",
    unlocked: true
  },
  {
    id: 3,
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/c146cc.png",
    title: "达成10次",
    unlocked: true
  },
  {
    id: 4,
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/276461.png",
    title: "坚持30天",
    unlocked: true
  },
  {
    id: 5,
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/df877a.png",
    title: "高效达人",
    unlocked: true
  },
  {
    id: 6,
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/2e5c02.png",
    title: "阅读家",
    unlocked: false
  },
  {
    id: 7,
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/97baa1.png",
    title: "健身达人",
    unlocked: false
  },
  {
    id: 8,
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/b30390.png",
    title: "更多徽章",
    unlocked: false
  }
];

const BadgeWall: React.FC = () => {
  return (
    <div className="mb-5 p-4 bg-white rounded-xl shadow-sm">
      <h3 className="text-base font-medium text-gray-800 mb-3">成就徽章墙</h3>
      
      <div className="grid grid-cols-4 gap-2">
        {badges.map((badge) => (
          <div key={badge.id} className="flex flex-col items-center">
            <div className="w-14 h-14 mb-1">
              <img 
                src={badge.iconUrl} 
                alt={badge.title} 
                className="w-full h-full"
              />
            </div>
            <p className={`text-xs ${badge.unlocked ? 'text-gray-700' : 'text-gray-400'}`}>
              {badge.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeWall;