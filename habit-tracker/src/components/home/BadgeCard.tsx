import React from 'react';

interface BadgeCardProps {
  title: string;
  iconUrl: string;
  unlocked: boolean;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ title, iconUrl, unlocked }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-3 w-[120px] h-[96px] ${!unlocked ? 'opacity-50' : ''}`}>
      <img src={iconUrl} alt={title} className="w-12 h-12 mb-2" />
      <p className="text-xs text-gray-700 text-center m-0">{title}</p>
    </div>
  );
};

export default BadgeCard;