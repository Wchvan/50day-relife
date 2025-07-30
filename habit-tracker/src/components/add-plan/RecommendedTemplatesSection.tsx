import React from 'react';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface Template {
  id: number;
  iconUrl: string;
  title: string;
  description: string;
  planType: string;
  reminderTime: string;
  startDate: string;
  total: number;
}

interface RecommendedTemplatesSectionProps {
  onTemplateClick?: (template: Template) => void;
}

const RecommendedTemplatesSection: React.FC<RecommendedTemplatesSectionProps> = ({ onTemplateClick }) => {
  const templates: Template[] = [
    {
      id: 1,
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/843a2e/8a1f41.png',
      title: '早起习惯养成',
      description: '每天早起30分钟，培养高效晨间习惯',
      planType: '健康习惯',
      reminderTime: '06:00',
      startDate: new Date().toISOString().split('T')[0],
      total: 30
    },
    {
      id: 2,
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/843a2e/463f28.png',
      title: '健身计划',
      description: '每日30分钟锻炼，塑造健康体魄',
      planType: '健康习惯',
      reminderTime: '07:00',
      startDate: new Date().toISOString().split('T')[0],
      total: 30
    },
    {
      id: 3,
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/843a2e/2ef193.png',
      title: '每日阅读',
      description: '每天阅读30页，培养阅读习惯',
      planType: '学习计划',
      reminderTime: '20:00',
      startDate: new Date().toISOString().split('T')[0],
      total: 30
    }
  ];
  
  const handleTemplateClick = (template: Template) => {
    if (onTemplateClick) {
      onTemplateClick(template);
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800">推荐模板</h3>
        <button className="text-sm text-purple-500">查看全部</button>
      </div>
      
      <div className="space-y-3">
        {templates.map(template => (
          <div 
            key={template.id}
            className="border border-gray-200 rounded-lg p-3 flex items-center cursor-pointer hover:bg-gray-50"
            onClick={() => handleTemplateClick(template)}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleTemplateClick(template)}
            aria-label={`选择模板：${template.title}`}
          >
            <div className="w-10 h-10 flex-shrink-0">
              <img src={template.iconUrl} alt={template.title} className="w-full h-full" />
            </div>
            
            <div className="ml-3 flex-1">
              <h4 className="font-medium text-gray-800">{template.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{template.description}</p>
            </div>
            
            <ChevronRightIcon className="h-4 w-2.5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedTemplatesSection;