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

type Template = Omit<Plan, 'id' | 'checked' | 'status' | 'current'>;

const CreatePlanPage: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [planType, setPlanType] = useState('健康习惯');
  const [iconUrl, setIconUrl] = useState('');
  const [startDate, setStartDate] = useState('2023-10-20');
  const [total, setTotal] = useState(50);
  const [reminderTime, setReminderTime] = useState('08:00');
  const [description, setDescription] = useState('');

  const planStore = usePlanStore();
  
  const handleTemplateSelect = (template: Template) => {
    setTitle(template.title);
    setPlanType(template.planType);
    setIconUrl(template.iconUrl);
    setStartDate(new Date().toISOString().split('T')[0]);
    setTotal(30); // 默认30天
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
        description
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