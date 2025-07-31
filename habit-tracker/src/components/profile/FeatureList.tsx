import React from 'react';

interface Feature {
  id: number;
  iconUrl: string;
  title: string;
  arrowUrl: string;
}

const features: Feature[] = [
  {
    id: 1,
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/ba9072.png",
    title: "我的收藏",
    arrowUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/e6cfea.png"
  },
  {
    id: 2,
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/f44ff8.png",
    title: "计划模板",
    arrowUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/e6cfea.png"
  },
  {
    id: 3,
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/6e77da.png",
    title: "数据导出",
    arrowUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/e6cfea.png"
  },
  {
    id: 4,
    iconUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/d9bf12.png",
    title: "提醒设置",
    arrowUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/e6cfea.png"
  }
];

const FeatureList: React.FC = () => {
  return (
    <div className="mb-5 p-4 bg-white rounded-xl shadow-sm">
      <h3 className="text-base font-medium text-gray-800 mb-3">功能列表</h3>
      
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div 
            key={feature.id} 
            className={`flex items-center justify-between py-3 ${
              index < features.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 mr-3">
                <img 
                  src={feature.iconUrl} 
                  alt={feature.title} 
                  className="w-full h-full"
                />
              </div>
              <span className="text-gray-700">{feature.title}</span>
            </div>
            <img 
              src={feature.arrowUrl} 
              alt="箭头" 
              className="w-[10px] h-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;