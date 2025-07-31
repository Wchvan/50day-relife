import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/add-plan/Header';
import PlanInfoSection from '../components/add-plan/PlanInfoSection';
import PlanSettingsSection from '../components/add-plan/PlanSettingsSection';
import PlanDescriptionSection from '../components/add-plan/PlanDescriptionSection';
import RecommendedTemplatesSection from '../components/add-plan/RecommendedTemplatesSection';
import SubmitButton from '../components/add-plan/SubmitButton';
import { usePlanStore } from '../stores/PlanStore';
import { Plan } from '../stores/PlanStore';

type Template = Pick<Plan, 'title' | 'planType' | 'iconUrl' | 'startDate' | 'total' | 'reminderTime' | 'description'>;

const CreatePlanPage: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [planType, setPlanType] = useState('健康习惯');
  const [iconUrl, setIconUrl] = useState('');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [total, setTotal] = useState(50);
  const [reminderTime, setReminderTime] = useState('08:00');
  const [description, setDescription] = useState('');

  const planStore = usePlanStore();
  
  const handleTemplateSelect = (template: Template) => {
    setTitle(template.title);
    setPlanType(template.planType);
    setIconUrl(template.iconUrl);
    setStartDate(new Date().toISOString().split('T')[0]);
    setTotal(50); // 默认30天
    setReminderTime(template.reminderTime);
    setDescription(template.description);
  };
  
  const handleSubmit = () => {
    try {
      planStore.addPlan({
        title,
        planType,
        iconUrl,
        startDate,
        total,
        reminderTime,
        description,
        category: '默认分类',  // 补充缺失的必需属性
        endDate: new Date(Date.now() + total * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 默认30天后结束
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        currentDay: new Date().getDate(),
        checkedDays: [],
        records: [],
        statistics: {
          consecutiveDays: 0,
          longestStreak: 0,
          completionRate: 0,
          weeklyData: [0, 0, 0, 0, 0, 0, 0]
        }
      });
      console.log('计划已保存');
      navigate(-1); // 添加返回逻辑
    } catch (error: any) {
      console.error(error.message);
    }
  };
  
  return (
    <div className="min-h-screen pb-24">
      <Header />
      
      <div className="px-4 py-3 pt-16">
        <PlanInfoSection 
          title={title}
          setTitle={setTitle}
          planType={planType}
          setPlanType={setPlanType}
          iconUrl={iconUrl}
          setIconUrl={setIconUrl}
        />
        
        <div className="h-5"></div>
        
        <PlanSettingsSection 
          startDate={startDate}
          setStartDate={setStartDate}
          planDays={total}
          setPlanDays={setTotal}
          reminderTime={reminderTime}
          setReminderTime={setReminderTime}
        />
        
        <div className="h-5"></div>
        
        <PlanDescriptionSection 
          description={description}
          setDescription={setDescription}
        />
        
        <div className="h-5"></div>
        
        <RecommendedTemplatesSection onTemplateClick={handleTemplateSelect} />
      </div>
      
      <SubmitButton days={total} onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePlanPage;