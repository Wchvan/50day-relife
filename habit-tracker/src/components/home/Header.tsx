import React from 'react';
import { useUserStore } from '@/stores/UserStore';

const Header = () => {
  const { userInfo } = useUserStore();
  const today = new Date();
  const formattedDate = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-gradient-to-b from-green-100 to-white z-100">
      <div className="flex justify-between p-3 px-4">
        <div className="flex items-center">
          <img src={userInfo.avatarUrl} alt={userInfo.userName} className="w-10 h-10 rounded-full mr-3" />
          <div className="flex flex-col justify-center">
            <h2 className="font-medium text-base leading-6 text-gray-800 m-0">{userInfo.userName}</h2>
            <p className="text-xs text-gray-500 m-0">{userInfo.motto}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-medium text-sm leading-5 text-gray-800 m-0">{formattedDate}</p>
          <p className="text-xs leading-4 text-green-600 m-0">今日加油！</p>
        </div>
      </div>
    </header>
  );
};

export default Header;