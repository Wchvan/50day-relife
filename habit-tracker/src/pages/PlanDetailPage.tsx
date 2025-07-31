import React from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePlanStore, PlanStatus } from '../stores/PlanStore';
import Header from '../components/plan-detail/Header';
import PlanInfoCard from '../components/plan-detail/PlanInfoCard';
import ProgressCircle from '../components/plan-detail/ProgressCircle';
import Calendar from '../components/plan-detail/Calendar';
import CheckinRecord from '../components/plan-detail/CheckinRecord';
import Statistics from '../components/plan-detail/Statistics';
import CheckinButton from '../components/plan-detail/CheckinButton';

const PlanDetailPage: React.FC = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const planId = searchParams.get('id');
  const planStore = usePlanStore();
  const planData = planStore.plans.find(plan => plan.id === planId);

  if (!planData) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">计划不存在</div>;
  }

  // 处理事件
  const handleBack = () => {
    navigate(-1); // 使用react-router-dom的返回功能
  };

  const handleShare = () => {
    console.log('分享计划');
  };

  const handleEdit = () => {
    console.log('编辑计划');
  };

  const handleRemind = () => {
    console.log('设置提醒');
  };

  const handleViewMore = () => {
    console.log('查看更多记录');
  };

  const handleCheckin = () => {
    if (planId) {
      navigate(`/check-in?id=${planId}`);
    }
  };

  const isCheckedToday = planId ? planStore.isCheckedToday(planId) : false;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* 头部导航 */}
      <Header onBack={handleBack} onShare={handleShare} />
      
      {/* 内容区域 */}
      <div className="max-w-[768px] mx-auto px-4 pt-16">
        <div className="space-y-4 mt-4">
          {/* 计划信息卡片 */}
          <PlanInfoCard 
            category={planData.category}
            startDate={planData.startDate}
            endDate={planData.endDate}
            onEdit={handleEdit}
            onRemind={handleRemind}
          />
          
          {/* 进度圆环 */}
          <ProgressCircle 
            current={planData.current} 
            total={planData.total} 
          />
          
          {/* 打卡日历 */}
          <Calendar 
            year={planData.year}
            month={planData.month}
            checkedDays={planData.checkedDays}
            currentDay={planData.currentDay}
          />
          
          {/* 打卡记录 */}
          <CheckinRecord 
            records={planData.records}
            onViewMore={handleViewMore}
          />
          
          {/* 数据统计 */}
          <Statistics 
            consecutiveDays={planData.statistics.consecutiveDays}
            longestStreak={planData.statistics.longestStreak}
            completionRate={planData.statistics.completionRate}
            weeklyData={planData.statistics.weeklyData}
          />
        </div>
      </div>
      
      {/* 底部打卡按钮 */}
      <CheckinButton 
        onCheckin={handleCheckin} 
        isCheckedToday={isCheckedToday} 
        isCompleted={planData.status === PlanStatus.Completed}
        isAbandoned={planData.isAbandoned}
      />
    </div>
  );
});

export default PlanDetailPage;