import React from 'react';
import { MOOD_CONFIG } from '../../stores/PlanStore';
import type { MoodType } from '../../stores/PlanStore';

interface CheckinImage {
  url: string;
  width?: number;
  height?: number;
}

interface CheckinRecordItem {
  date: string;
  time: string;
  mood: MoodType;
  content: string;
  tags?: string[];
  images?: CheckinImage[];
}

interface CheckinRecordProps {
  records: CheckinRecordItem[];
  onViewMore: () => void;
}

const CheckinRecord: React.FC<CheckinRecordProps> = ({ records, onViewMore }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm w-full">
      <h3 className="font-medium text-gray-800 mb-4">打卡记录</h3>
      
      <div className="relative border-l-2 border-purple-200 pl-6 ml-2">
        {records.map((record, index) => (
          <div key={index} className="mb-6 relative">
            {/* 时间线上的圆点 */}
            <div className="absolute -left-[26px] top-0">
              <img 
                src="https://cdn.qboost.woa.com/files/llmcode/ba14d7/f7c6b0.png" 
                alt="时间点" 
                className="w-4 h-4"
              />
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3 text-left">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-800">{record.date}</h4>
                  <p className="text-xs text-gray-500 mt-1">{record.time} 打卡</p>
                </div>
                
                <span className={`px-2 py-1 rounded-full text-xs ${MOOD_CONFIG[record.mood].bgColor} ${MOOD_CONFIG[record.mood].color}`}>
                  {MOOD_CONFIG[record.mood].text}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mt-2">{record.content}</p>
              
              {record.tags && record.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {record.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 rounded-full text-xs bg-gray-200 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {record.images && record.images.length > 0 && (
                <div className="mt-2 flex gap-2">
                  {record.images.map((image, imgIndex) => (
                    <img 
                      key={imgIndex}
                      src={image.url} 
                      alt={`打卡图片 ${imgIndex + 1}`} 
                      className="rounded-md"
                      style={{
                        width: image.width || 'auto',
                        height: image.height || 80
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="w-full h-9 text-purple-500 font-medium mt-2"
        onClick={onViewMore}
      >
        查看更多记录
      </button>
    </div>
  );
};

export default CheckinRecord;