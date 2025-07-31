import React from 'react';

interface UserCardProps {
  avatarUrl: string;
  motto: string;
  badge: string;
  settingsUrl: string;
}

const UserCard: React.FC<UserCardProps> = ({ avatarUrl, motto, badge, settingsUrl }) => {
  return (
    <div className="mt-16 mb-5 rounded-xl overflow-hidden">
      <div className="w-full h-[124px] bg-gradient-to-r from-green-400 to-purple-400 p-5">
        <div className="flex items-center">
          <div className="w-20 h-20">
            <img 
              src={avatarUrl} 
              alt="用户头像" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          
          <div className="flex-1 ml-4">
            <p className="text-left text-white opacity-90 text-sm mb-2">{motto}</p>
            <div className="flex items-center">
              <span className="px-3 py-1 bg-white/30 text-white text-xs rounded-full">
                {badge}
              </span>
            </div>
          </div>
          
          <button className="w-8 h-8">
            <img 
              src={settingsUrl} 
              alt="设置" 
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;