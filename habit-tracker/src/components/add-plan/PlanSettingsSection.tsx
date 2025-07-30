import React from 'react';
import CalendarIcon from './icons/CalendarIcon';
import ClockIcon from './icons/ClockIcon';
import MinusIcon from './icons/MinusIcon';
import PlusIcon from './icons/PlusIcon';

interface PlanSettingsSectionProps {
  startDate: string;
  setStartDate: (date: string) => void;
  planDays: number;
  setPlanDays: (days: number) => void;
  reminderTime: string;
  setReminderTime: (time: string) => void;
}

const PlanSettingsSection: React.FC<PlanSettingsSectionProps> = ({
  startDate,
  setStartDate,
  planDays,
  setPlanDays,
  reminderTime,
  setReminderTime
}) => {
  const handleDecreaseDays = () => {
    if (planDays > 1) {
      setPlanDays(planDays - 1);
    }
  };
  
  const handleIncreaseDays = () => {
    setPlanDays(planDays + 1);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      {/* 开始日期 */}
      <div className="mb-5">
        <label className="block text-sm text-gray-700 mb-2">开始日期</label>
        <div className="relative">
          <input
            type="date"
            className="w-full h-[50px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <CalendarIcon className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* 计划天数 */}
      <div className="mb-5">
        <label className="block text-sm text-gray-700 mb-2">计划天数</label>
        <div className="flex items-center h-10">
          <button 
            className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center"
            onClick={handleDecreaseDays}
          >
            <MinusIcon className="h-5 w-5 text-gray-500" />
          </button>
          
          <div className="flex-1 flex items-center justify-center">
            <span className="text-xl font-medium text-gray-800">{planDays}</span>
            <span className="text-gray-500 ml-1">天</span>
          </div>
          
          <button 
            className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center"
            onClick={handleIncreaseDays}
          >
            <PlusIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
      
      {/* 每日提醒时间 */}
      <div className="mb-2">
        <label className="block text-sm text-gray-700 mb-2">每日提醒时间</label>
        <div className="relative">
          <input
            type="time"
            className="w-full h-[50px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <ClockIcon className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSettingsSection;