import React from 'react';

const Header: React.FC = () => {
  // 获取当前日期
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const formattedDate = `${year}年${month}月${day}日`;

  return (
    <div className="fixed top-0 left-0 right-0 h-[60px] bg-gradient-to-r from-green-400 to-green-600 shadow-sm flex items-center justify-between px-4 z-10">
      <h1 className="text-lg font-medium text-white">50天重启人生</h1>
      <div className="text-white flex items-center">
        <img 
          src="https://cdn.qboost.woa.com/files/llmcode/82bd4d/954ae1.png" 
          alt="日历图标" 
          className="w-3 h-3.5 mr-2"
        />
        <span className="text-sm">{formattedDate}</span>
      </div>
    </div>
  );
};

export default Header;