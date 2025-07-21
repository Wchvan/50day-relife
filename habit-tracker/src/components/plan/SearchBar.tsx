import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
      <div className="relative px-4 py-3">
        <div className="relative w-full h-[38px] bg-gray-100 rounded-full flex items-center px-4">
          <img 
            src="https://cdn.qboost.woa.com/files/llmcode/e25326/8a0bed.png" 
            alt="搜索" 
            className="w-4 h-4 mr-3"
          />
          <input 
            type="text" 
            placeholder="搜索计划" 
            className="w-full bg-transparent outline-none text-sm"
          />
          <img 
            src="https://cdn.qboost.woa.com/files/llmcode/e25326/42116e.png" 
            alt="清除" 
            className="w-4 h-4 absolute right-8"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;