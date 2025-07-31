import React, { useState } from 'react';

interface CalendarProps {
  year: number;
  month: number;
  checkedDays: string[]; // 修改为日期字符串数组
  currentDay: number;
}

const Calendar: React.FC<CalendarProps> = ({ 
  year, 
  month, 
  checkedDays, 
  currentDay 
}) => {
  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(year);
  
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  
  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  
  // 获取当月第一天是星期几
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month - 1, 1).getDay();
  };
  
  // 获取当月天数
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };
  
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  
  // 生成日历数据
  const generateCalendarDays = () => {
    const days = [];
    
    // 添加上个月的占位天数
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    // 添加当月的天数
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  
  // 修改 getDayStatus 方法
  const getDayStatus = (day: number | null) => {
    if (day === null) return 'empty';
    
    const dateStr = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const isToday = day === currentDay && currentMonth === month && currentYear === year;
    const isChecked = checkedDays.includes(dateStr);
    const isPast = currentYear < year || (currentYear === year && currentMonth < month) || 
                  (currentYear === year && currentMonth === month && day < currentDay);
    const isFuture = !isPast && !isToday;
    
    if (isChecked) return 'checked';
    if (isToday) return 'today';
    if (isPast) return 'past';
    if (isFuture) return 'future';
    
    return 'normal';
  };
  
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm w-full">
      <h3 className="font-medium text-gray-800 mb-4">打卡日历</h3>
      
      <div className="flex items-center justify-between mb-4">
        <button 
          className="text-gray-500" 
          onClick={handlePrevMonth}
        >
          <img 
            src="https://cdn.qboost.woa.com/files/llmcode/ba14d7/f08c86.png" 
            alt="上个月" 
            className="w-2.5 h-4"
          />
        </button>
        <h4 className="font-medium text-gray-700">{currentYear}年{currentMonth}月</h4>
        <button 
          className="text-gray-500" 
          onClick={handleNextMonth}
        >
          <img 
            src="https://cdn.qboost.woa.com/files/llmcode/ba14d7/d16e71.png" 
            alt="下个月" 
            className="w-2.5 h-4"
          />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-0">
        {weekdays.map((day, index) => (
          <div key={index} className="text-xs text-gray-500 h-6 flex items-center justify-center">
            {day}
          </div>
        ))}
        
        {calendarDays.map((day, index) => {
          const status = getDayStatus(day);
          
          if (day === null) {
            return <div key={`empty-${index}`} className="h-8 py-1"></div>;
          }
          
          if (status === 'checked') {
            return (
              <div key={`day-${day}`} className="flex items-center justify-center py-1">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-xs text-white">{day}</span>
                </div>
              </div>
            );
          }
          
          if (status === 'today') {
            return (
              <div key={`day-${day}`} className="flex items-center justify-center py-1">
                <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-purple-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-purple-600">{day}</span>
                </div>
              </div>
            );
          }
          
          if (status === 'past') {
            return (
              <div key={`day-${day}`} className="flex items-center justify-center py-1">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs text-gray-500">{day}</span>
                </div>
              </div>
            );
          }
          
          return (
            <div key={`day-${day}`} className="flex items-center justify-center py-1">
              <span className="text-xs text-gray-400">{day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;