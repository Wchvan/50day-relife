import React from 'react';
import { observer } from 'mobx-react-lite';
import Header from '@/components/home/Header';
import PlanCard from '@/components/home/PlanCard';
import TaskCard from '@/components/home/TaskCard';
import BadgeCard from '@/components/home/BadgeCard';
import BottomNav from '@/components/common/BottomNav';
import AddButton from '@/components/common/AddButton';
import SectionHeader from '@/components/home/SectionHeader';
import { usePlanStore } from '@/stores/PlanStore';
import { useAchievementStore } from '@/stores/AchievementStore';

const HomePage: React.FC = () => {
  const planStore = usePlanStore();
  const achievementStore = useAchievementStore();

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen pt-[80px] px-4 pb-[80px]">
        <section className="mb-6">
          <SectionHeader
            title='我的计划'
            showViewAll
            onViewAllClick={() => console.log('查看全部计划')}
          />
          <div className="overflow-x-auto -mx-4 px-4 flex gap-4 [&::-webkit-scrollbar]:hidden">
            {planStore.plans.map((plan) => (
              <PlanCard
                key={plan.id}
                title={plan.title}
                current={plan.current}
                total={plan.total}
                iconUrl={plan.iconUrl}
              />
            ))}
          </div>
        </section>

        <section className="mb-6">
          <SectionHeader title='今日任务' />
          <div>
            {planStore.unfinishedTasks.map((plan) => (
              <TaskCard
                key={plan.id}
                title={plan.title}
                checked={plan.checked}
                onCheck={() => planStore.checkTask(plan.id)}
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
};

export default observer(HomePage);