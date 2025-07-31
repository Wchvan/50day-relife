import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/check-in/Header';
import MoodSelector from '../components/check-in/MoodSelector';
import JournalInput from '../components/check-in/JournalInput';
import ImageUploader from '../components/check-in/ImageUploader';
import TagSelector from '../components/check-in/TagSelector';
import CheckinButton from '../components/check-in/CheckinButton';
import { usePlanStore } from '../stores/PlanStore';
import { MoodType } from '../stores/PlanStore';

const CheckinPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const planId = searchParams.get('id');
  const planStore = usePlanStore();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mood, setMood] = useState<MoodType>('good');
  const [content, setContent] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const handleCheckin = () => {
    if (!planId) return;
    
    setIsSubmitting(true);
    
    planStore.checkTask(planId, {
      mood: mood,
      content,
      tags
    });
    
    // 模拟 API 请求
    setTimeout(() => {
      setIsSubmitting(false);
      navigate(-1); // 返回上一页
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-[100px]">
      <Header />
      
      <main className="max-w-[768px] mx-auto px-4 pt-[76px] pb-4 flex flex-col gap-4">
        <section aria-labelledby="mood-selection">
          <MoodSelector onMoodChange={setMood} />
        </section>
        <section aria-labelledby="journal-section">
          <JournalInput onContentChange={setContent} />
        </section>
        <section aria-labelledby="image-upload-label">
          <ImageUploader />
        </section>
        <section aria-labelledby="tag-selection">
          <TagSelector onTagsChange={setTags} />
        </section>
      </main>
      
      <CheckinButton onCheckin={handleCheckin} isSubmitting={isSubmitting} />
    </div>
  );
};

export default CheckinPage;