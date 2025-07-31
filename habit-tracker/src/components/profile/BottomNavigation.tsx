import React from 'react';

interface BottomNavigationProps {
  activeTab: string;
}

interface NavItem {
  id: string;
  iconUrl: string;
  activeIconUrl: string;
  label: string;
}

const navItems: NavItem[] = [
  {
    id: 'home',
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/884da9.png",
    activeIconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/884da9.png",
    label: "首页"
  },
  {
    id: 'plans',
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/c58d23.png",
    activeIconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/c58d23.png",
    label: "计划"
  },
  {
    id: 'stats',
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/f194bb.png",
    activeIconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/f194bb.png",
    label: "统计"
  },
  {
    id: 'profile',
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/9641be.png",
    activeIconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/9641be.png",
    label: "我的"
  }
];

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex justify-around items-center">
      {navItems.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <img 
            src={item.iconUrl} 
            alt={item.label} 
            className="w-5 h-5 mb-1"
          />
          <span 
            className={`text-xs ${
              activeTab === item.id ? 'text-green-500 font-medium' : 'text-gray-400'
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;