import React, { useRef, useEffect } from 'react';
import CloseIcon from './icons/CloseIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';
import { useTypeSelector } from '../../hooks/useTypeSelector';

interface PlanInfoSectionProps {
  title: string;
  setTitle: (name: string) => void;
  planType: string;
  setPlanType: (type: string) => void;
  iconUrl: string;
  setIconUrl: (icon: string) => void;
}

const PlanInfoSection: React.FC<PlanInfoSectionProps> = ({
  title,
  setTitle,
  planType,
  setPlanType,
  iconUrl,
  setIconUrl
}) => {
  // 模拟图标选择
  const icons = [
    { id: 1, url: 'https://cdn.qboost.woa.com/files/llmcode/843a2e/8a1f41.png' },
    { id: 2, url: 'https://cdn.qboost.woa.com/files/llmcode/843a2e/463f28.png' },
    { id: 3, url: 'https://cdn.qboost.woa.com/files/llmcode/843a2e/2ef193.png' },
  ];
  
  const typeOptions = [
    { label: '健康习惯', value: '健康习惯' },
    { label: '学习计划', value: '学习计划' },
    { label: '工作目标', value: '工作目标' },
    { label: '兴趣爱好', value: '兴趣爱好' },
    { label: '其他', value: '其他' }
  ];
  
  const typeSelector = useTypeSelector(planType, typeOptions);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        typeSelector.close();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [typeSelector]);
  
  const handleSelectType = (value: string) => {
    setPlanType(value);
    typeSelector.select(value);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      {/* 计划名称 */}
      <div className="mb-5">
        <label className="block text-sm text-gray-700 mb-2">计划名称</label>
        <div className="relative">
          <input
            type="text"
            className="w-full h-[50px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="输入计划名称"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {title && (
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={() => setTitle('')}
            >
              <CloseIcon className="h-4 w-4 text-gray-400" />
            </button>
          )}
        </div>
      </div>
      
      {/* 计划类型 */}
      <div className="mb-5">
        <label className="block text-sm text-gray-700 mb-2">计划类型</label>
        <div className="relative" ref={dropdownRef}>
          <div 
            className="w-full h-[50px] px-4 border border-gray-200 rounded-lg flex items-center justify-between cursor-pointer"
            onClick={typeSelector.toggle}
          >
            <span className="text-gray-700">{typeSelector.selectedLabel}</span>
            <ChevronDownIcon className={`h-4 w-4 text-gray-400 transition-transform ${typeSelector.isOpen ? 'transform rotate-180' : ''}`} />
          </div>
          
          {typeSelector.isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {typeSelector.options.map(option => (
                <div 
                  key={option.value}
                  className={`px-4 py-3 cursor-pointer hover:bg-gray-50 ${option.value === typeSelector.selectedValue ? 'bg-gray-50 text-green-500' : 'text-gray-700'}`}
                  onClick={() => handleSelectType(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* 计划图标 */}
      <div className="mb-2">
        <label className="block text-sm text-gray-700 mb-2">计划图标</label>
        <div className="grid grid-cols-3 gap-4">
          {icons.map((icon) => (
            <div 
              key={icon.id}
              className={`w-full aspect-square rounded-lg border-2 flex items-center justify-center cursor-pointer ${
                iconUrl === icon.url ? 'border-green-500' : 'border-gray-200'
              }`}
              onClick={() => setIconUrl(icon.url)}
            >
              <img src={icon.url} alt="icon" className="w-10 h-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanInfoSection;