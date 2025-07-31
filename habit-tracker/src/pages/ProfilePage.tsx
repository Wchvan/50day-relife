import React from 'react';
import Header from '../components/profile/Header';
import UserCard from '../components/profile/UserCard';
import BadgeWall from '../components/profile/BadgeWall';
import DataOverview from '../components/profile/DataOverview';
import FeatureList from '../components/profile/FeatureList';
import CommunitySharing from '../components/profile/CommunitySharing';
import BottomNav from '@/components/common/BottomNav';
import { useUserStore } from '../stores/UserStore';

const ProfilePage: React.FC = () => {
  const { userInfo } = useUserStore();

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50">
      <div className="w-full max-w-[768px] pb-16">
        <Header title="个人中心" />
        
        <div className="px-4">
          <UserCard 
            avatarUrl={userInfo.avatarUrl}
            motto={userInfo.motto}
            badge={userInfo.badge}
            settingsUrl="https://cdn.qboost.woa.com/files/llmcode/788ece/bd7a39.png"
          />
          
          <BadgeWall />
          
          <DataOverview 
            completedPlans={12}
            totalCheckinDays={86}
            longestStreak={15}
          />
          
          <FeatureList />
          
          <CommunitySharing />
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default ProfilePage;