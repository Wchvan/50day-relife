import React from 'react';

interface PlanDescriptionSectionProps {
  description: string;
  setDescription: (desc: string) => void;
}

const PlanDescriptionSection: React.FC<PlanDescriptionSectionProps> = ({
  description,
  setDescription
}) => {
  const maxLength = 200;
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setDescription(value);
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <label className="block text-sm text-gray-700 mb-2">计划详情描述</label>
      
      <textarea
        className="w-full h-[122px] p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-green-500"
        placeholder="请输入计划详情描述..."
        value={description}
        onChange={handleChange}
      ></textarea>
      
      <div className="text-right mt-2">
        <span className="text-xs text-gray-400">{description.length}/{maxLength}</span>
      </div>
    </div>
  );
};

export default PlanDescriptionSection;