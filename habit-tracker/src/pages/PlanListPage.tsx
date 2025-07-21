import React, { useState } from 'react';
import SearchBar from '@/components/plan/SearchBar';
import TabBar from '@/components/plan/TabBar';
import PlanCard from '@/components/plan/PlanCard';
import BottomNav from '@/components/common/BottomNav';
import AddButton from '@/components/common/AddButton';
import { usePlanStore } from '@/stores/PlanStore';

const PlanListPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { getFilteredPlans } = usePlanStore();
  
  const filteredPlans = getFilteredPlans(activeTab);
  
  return (
    <div className="pb-12 h-min-screen bg-gray-50">
      <SearchBar />
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="px-4 py-2 space-y-4">
        {filteredPlans.map(plan => (
          <PlanCard
            key={plan.id}
            title={plan.title}
            startDate={plan.startDate}
            current={plan.current}
            total={plan.total}
            status={plan.status}
          />
        ))}
      </div>
      
      <AddButton />
      <BottomNav />
    </div>
  );
};

export default PlanListPage;