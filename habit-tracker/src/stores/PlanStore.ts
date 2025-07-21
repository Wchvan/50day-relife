import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

export enum PlanStatus {
  InProgress = 'inProgress',
  Completed = 'completed'
}

interface Plan {
  id: string;
  title: string;
  startDate: string;
  current: number;
  total: number;
  iconUrl: string;
  checked: boolean;
  status: PlanStatus;
}

class PlanStore {
  plans: Plan[] = [
    { 
      id: '1', 
      title: '每日阅读计划', 
      startDate: '2023-10-01',
      current: 15, 
      total: 50, 
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/2a9ce1/173e1d.png',
      checked: false,
      status: PlanStatus.InProgress
    },
    { 
      id: '2', 
      title: '晨跑锻炼计划', 
      startDate: '2023-09-24',
      current: 22, 
      total: 50, 
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/2a9ce1/d609ca.png',
      checked: true,
      status: PlanStatus.InProgress
    },
    { 
      id: '3', 
      title: '戒糖饮食计划', 
      startDate: '2023-08-15',
      current: 50, 
      total: 50, 
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/2a9ce1/3bde81.png',
      checked: false,
      status: PlanStatus.Completed
    },
    { 
      id: '4', 
      title: '冥想放松计划', 
      startDate: '2023-10-08',
      current: 8, 
      total: 50, 
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/2a9ce1/3bde81.png',
      checked: false,
      status: PlanStatus.InProgress
    }
  ];

  constructor() {
    makeAutoObservable(this);
  }

  checkTask(planId: string) {
    this.plans = this.plans.map(plan => {
      if (plan.id === planId && !plan.checked) {
        return {
          ...plan,
          checked: true,
          current: plan.current + 1
        };
      }
      return plan;
    });
  }

  get unfinishedTasks() {
    return this.plans.filter(plan => plan.status === PlanStatus.InProgress);
  }

  getFilteredPlans = (activeTab: string) => {
    return activeTab === 'all' 
      ? this.plans 
      : this.plans.filter(plan => {
          if (activeTab === 'inProgress') return plan.status === PlanStatus.InProgress;
          if (activeTab === 'completed') return plan.status === PlanStatus.Completed;
          return false;
        });
  }
}

const PlanStoreContext = createContext<PlanStore>(new PlanStore());

export const usePlanStore = () => useContext(PlanStoreContext);

export default PlanStore;