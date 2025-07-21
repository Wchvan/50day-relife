import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

interface Badge {
  id: string;
  title: string;
  iconUrl: string;
  unlocked: boolean;
}

class AchievementStore {
  badges: Badge[] = [
    { 
      id: '1', 
      title: '连续打卡7天', 
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/2a9ce1/f5f5a8.png', 
      unlocked: true 
    },
    { 
      id: '2', 
      title: '完成首个计划', 
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/2a9ce1/a065b0.png', 
      unlocked: true 
    },
    { 
      id: '3', 
      title: '达成10次目标', 
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/2a9ce1/210436.png', 
      unlocked: true 
    },
    { 
      id: '4', 
      title: '坚持30天', 
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/2a9ce1/a4d6ed.png', 
      unlocked: true 
    },
    { 
      id: '5', 
      title: '待解锁', 
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/2a9ce1/22ee8e.png', 
      unlocked: false 
    },
    { 
      id: '6', 
      title: '待解锁', 
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/2a9ce1/22ee8e.png', 
      unlocked: false 
    }
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const AchievementStoreContext = createContext<AchievementStore>(new AchievementStore());

export const useAchievementStore = () => useContext(AchievementStoreContext);

export default AchievementStore;