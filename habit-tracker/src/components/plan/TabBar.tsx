import React from 'react';

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'all', name: '全部' },
    { id: 'inProgress', name: '进行中' },
    { id: 'completed', name: '已完成' },
    { id: 'abandoned', name: '已放弃' },
  ];

  return (
    <div className="overflow-x-auto px-4 py-3 mt-[60px]">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-1 py-1.5 text-base ${
              activeTab === tab.id
                ? 'text-green-500 font-medium border-b-2 border-green-500'
                : 'text-gray-500'
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabBar;