import React from 'react';
import Header from '../components/stats/Header';
import BottomNav from '../components/common/BottomNav';
import CompletionRate from '../components/stats/CompletionRate';
import CompletionTrend from '../components/stats/CompletionTrend';
import HabitAnalysis from '../components/stats/HabitAnalysis';
import AchievementProgress from '../components/stats/AchievementProgress';

const StatsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <Header />
      <div className="pt-16 px-4 pb-20 max-w-[768px] mx-auto">
        <CompletionRate />
        <CompletionTrend />
        <HabitAnalysis />
        <AchievementProgress />
      </div>
      <BottomNav />
    </div>
  );
};

export default StatsPage;