import React from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/home/Header';
import PlanCard from '@/components/home/PlanCard';
import TaskCard from '@/components/home/TaskCard';
import BadgeCard from '@/components/home/BadgeCard';
import BottomNav from '@/components/common/BottomNav';
import AddButton from '@/components/common/AddButton';
import SectionHeader from '@/components/home/SectionHeader';
import { usePlanStore } from '@/stores/PlanStore';
import { useAchievementStore } from '@/stores/AchievementStore';

const HomePage: React.FC = observer(() => {
  const navigate = useNavigate();
  const planStore = usePlanStore();
  const achievementStore = useAchievementStore();

  const handlePlanClick = (id: string) => {
    navigate(`/plan-detail?id=${id}`);
  };

  const handleTaskClick = (id: string) => {
    navigate(`/plan-detail?id=${id}`);
  };

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen pt-[80px] px-4 pb-[80px]">
        <section className="mb-6">
          <SectionHeader
            title='我的计划'
            showViewAll
            onViewAllClick={() => navigate('/plan')}
          />
          <div className="overflow-x-auto -mx-4 px-4 flex gap-4 [&::-webkit-scrollbar]:hidden">
            {planStore.plans.slice(0, 3).map((plan) => (
              <PlanCard
                key={plan.id}
                title={plan.title}
                current={plan.current}
                total={plan.total}
                iconUrl={plan.iconUrl}
                onClick={() => handlePlanClick(plan.id)}
              />
            ))}
          </div>
        </section>

        <section className="mb-6">
          <SectionHeader title='今日任务' />
          <div>
            {planStore.unfinishedTasks.map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                checked={task.checked}
                onCheck={() => planStore.checkTask(task.id)}
                onClick={() => handleTaskClick(task.id)}
              />
            ))}
          </div>
        </section>

        <section className="mb-6">
          <SectionHeader title='成就徽章' />
          <div className="grid grid-cols-3 gap-3">
            {achievementStore.badges.map((badge) => (
              <BadgeCard
                key={badge.id}
                title={badge.title}
                iconUrl={badge.iconUrl}
                unlocked={badge.unlocked}
              />
            ))}
          </div>
        </section>
      </main>

      <AddButton/>

      <BottomNav/>
    </>
  );
});

export default HomePage;