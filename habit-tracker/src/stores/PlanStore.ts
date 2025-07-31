import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

export enum PlanStatus {
  InProgress = 'inProgress',
  Completed = 'completed'
}

export type MoodType = 'very-bad' | 'bad' | 'neutral' | 'good' | 'very-good';

export const MOOD_CONFIG = {
  'very-bad': {
    text: '很差',
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  'bad': {
    text: '较差',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  'neutral': {
    text: '一般',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  'good': {
    text: '较好',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  'very-good': {
    text: '很好',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  }
} as const;

export interface Plan {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  current: number;
  total: number;
  iconUrl: string;
  checked: boolean;
  status: PlanStatus;
  planType: string;
  reminderTime: string;
  description: string;
  category: string;
  checkedDays: string[]; // 修改为日期字符串数组
  year: number;
  month: number;
  currentDay: number;
  isAbandoned: boolean;
  records: Array<{
    date: string;
    time: string;
    mood: MoodType;
    content: string;
    tags?: string[];
    images?: Array<{
      url: string;
      width: number;
      height: number;
    }>;
  }>;
  statistics: {
    consecutiveDays: number;
    longestStreak: number;
    completionRate: number;
    weeklyData: number[];
  };
}

class PlanStore {
  plans: Plan[] = [
    { 
      id: '1', 
      title: '每日阅读计划', 
      startDate: '2025-07-01',
      endDate: '2025-08-20',
      current: 15, 
      total: 50, 
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/2a9ce1/173e1d.png',
      checked: false,
      status: PlanStatus.InProgress,
      planType: '学习计划',
      reminderTime: '08:00',
      description: '每天阅读30页，培养阅读习惯',
      category: '学习提升',
      checkedDays: Array.from({ length: 15 }, (_, i) => {
        const date = new Date('2025-07-01');
        date.setDate(date.getDate() + i);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      }),
      year: 2025,
      month: 7,
      currentDay: 17,
      isAbandoned: false,
      records: [
        {
          date: '7月15日',
          time: '20:30',
          mood: 'very-good',
          content: '今天读完了《原子习惯》第五章，收获很多。特别是关于如何建立新习惯的方法，准备明天尝试应用到生活中。',
          tags: ['阅读', '学习'],
          images: [
            {
              url: 'https://cdn.qboost.woa.com/files/llmcode/ba14d7/39ff39.png',
              width: 294,
              height: 80
            }
          ]
        },
        {
          date: '7月14日',
          time: '21:15',
          mood: 'good',
          content: '阅读了《原子习惯》第四章，关于如何通过微小改变带来巨大成果的内容很有启发。',
          tags: ['阅读']
        },
        {
          date: '7月13日',
          time: '19:45',
          mood: 'neutral',
          content: '今天开始阅读《原子习惯》，第三章讲述了习惯养成的科学原理，非常实用。',
          tags: ['阅读', '习惯'],
          images: [
            {
              url: 'https://cdn.qboost.woa.com/files/llmcode/ba14d7/3cd118.png',
              width: 93,
              height: 80
            },
            {
              url: 'https://cdn.qboost.woa.com/files/llmcode/ba14d7/ec933f.png',
              width: 93,
              height: 80
            }
          ]
        },
        {
          date: '7月12日',
          time: '18:30',
          mood: 'bad',
          content: '今天工作太忙，只读了10页书，没有完成目标。',
          tags: ['阅读']
        },
        {
          date: '7月11日',
          time: '22:00',
          mood: 'very-bad',
          content: '今天完全忘记了读书计划，明天一定要补上。',
          tags: ['阅读']
        }
      ],
      statistics: {
        consecutiveDays: 7,
        longestStreak: 9,
        completionRate: 30,
        weeklyData: [5, 6, 4]
      }
    },
    {
      id: '2',
      title: '每日运动计划',
      startDate: '2025-02-15',
      endDate: '2025-04-05',
      current: 50,
      total: 50,
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/843a2e/8a1f41.png',
      checked: true,
      status: PlanStatus.Completed,
      planType: '健康习惯',
      reminderTime: '07:00',
      description: '每天运动30分钟，保持健康',
      category: '健康生活',
      checkedDays: Array.from({ length: 50 }, (_, i) => {
        const date = new Date('2025-02-15');
        date.setDate(date.getDate() + i);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      }),
      year: 2025,
      month: 4,
      currentDay: 5,
      isAbandoned: false,
      records: [
        {
          date: '4月5日',
          time: '07:30',
          mood: 'good',
          content: '完成了今天的晨跑，感觉非常好。',
          tags: ['运动', '健康']
        }
      ],
      statistics: {
        consecutiveDays: 50,
        longestStreak: 50,
        completionRate: 100,
        weeklyData: [7, 7, 7, 7, 7, 7, 2]
      }
    },
    {
      id: '3',
      title: '编程学习计划',
      startDate: '2025-05-01',
      endDate: '2025-06-20',
      current: 35,
      total: 50,
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/843a2e/463f28.png',
      checked: false,
      status: PlanStatus.InProgress,
      planType: '学习计划',
      reminderTime: '20:00',
      description: '每天学习编程2小时',
      category: '技能提升',
      checkedDays: Array.from({ length: 35 }, (_, i) => {
        const date = new Date('2025-05-01');
        date.setDate(date.getDate() + i);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      }),
      year: 2025,
      month: 6,
      currentDay: 20,
      isAbandoned: true,
      records: [
        {
          date: '6月20日',
          time: '20:30',
          mood: 'good',
          content: '学习了React高级特性，收获很大。',
          tags: ['编程', 'React']
        }
      ],
      statistics: {
        consecutiveDays: 35,
        longestStreak: 35,
        completionRate: 70,
        weeklyData: [7, 7, 7, 7, 7]
      }
    },
    {
      id: '4',
      title: '冥想练习',
      startDate: '2025-04-15',
      endDate: '2025-06-04',
      current: 40,
      total: 50,
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/843a2e/2ef193.png',
      checked: false,
      status: PlanStatus.InProgress,
      planType: '健康习惯',
      reminderTime: '06:30',
      description: '每天冥想15分钟',
      category: '身心健康',
      checkedDays: Array.from({ length: 40 }, (_, i) => {
        const date = new Date('2025-04-15');
        date.setDate(date.getDate() + i);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      }),
      year: 2025,
      month: 6,
      currentDay: 4,
      isAbandoned: true,
      records: [
        {
          date: '6月4日',
          time: '06:45',
          mood: 'neutral',
          content: '完成了最后一次冥想练习，感觉非常平静。',
          tags: ['冥想', '放松']
        }
      ],
      statistics: {
        consecutiveDays: 40,
        longestStreak: 40,
        completionRate: 80,
        weeklyData: [7, 7, 7, 7, 7, 5]
      }
    },
    {
      id: '5',
      title: '写作练习',
      startDate: '2025-07-15',
      endDate: '2025-09-03',
      current: 15,
      total: 50,
      iconUrl: 'https://cdn.qboost.woa.com/files/llmcode/843a2e/8a1f41.png',
      checked: false,
      status: PlanStatus.InProgress,
      planType: '兴趣爱好',
      reminderTime: '09:00',
      description: '每天写作500字',
      category: '创意表达',
      checkedDays: Array.from({ length: 15 }, (_, i) => {
        const date = new Date('2025-07-15');
        date.setDate(date.getDate() + i);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      }),
      year: 2025,
      month: 7,
      currentDay: 30,
      isAbandoned: false,
      records: [
        {
          date: '7月29日',
          time: '09:30',
          mood: 'good',
          content: '今天写了一个短篇小说的开头，灵感很好。',
          tags: ['写作', '创意']
        }
      ],
      statistics: {
        consecutiveDays: 15,
        longestStreak: 15,
        completionRate: 30,
        weeklyData: [7, 7, 1]
      }
    }
  ];

  constructor() {
    makeAutoObservable(this);
  }

  checkTask(planId: string, newRecord?: Partial<Plan['records'][0]>) {
    this.plans = this.plans.map(plan => {
      if (plan.id === planId && !plan.checked) {
        const today = new Date();
        const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        
        const updatedPlan = {
          ...plan,
          checked: true,
          current: plan.current + 1,
          checkedDays: [...plan.checkedDays, dateStr]
        };
        
        if (newRecord) {
          updatedPlan.records = [...plan.records, {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            mood: newRecord.mood || 'neutral',
            content: newRecord.content || '',
            tags: newRecord.tags || [],
            images: newRecord.images || []
          }];
        }
        
        return updatedPlan;
      }
      return plan;
    });
  }

  isCheckedToday(planId: string): boolean {
    const plan = this.plans.find(p => p.id === planId);
    if (!plan) return false;

    return plan.checked;
  }

  addPlan(plan: Omit<Plan, 'id' | 'checked' | 'status' | 'current' | 'isAbandoned'>) {
    if (!plan.title || !plan.planType || !plan.iconUrl || !plan.startDate || !plan.total || !plan.reminderTime || !plan.description) {
      throw new Error('所有字段均为必填项');
    }

    const newPlan: Plan = {
      ...plan,
      id: Date.now().toString(),
      checked: false,
      status: PlanStatus.InProgress,
      current: 0,
      isAbandoned: false
    };
    this.plans.push(newPlan);
  }

  get unfinishedTasks() {
    return this.plans.filter(plan => plan.status === PlanStatus.InProgress && !plan.isAbandoned);
  }

  getFilteredPlans = (activeTab: string) => {
    return activeTab === 'all' 
      ? this.plans 
      : this.plans.filter(plan => {
          if (activeTab === 'inProgress') return plan.status === PlanStatus.InProgress && !plan.isAbandoned;
          if (activeTab === 'completed') return plan.status === PlanStatus.Completed;
          if (activeTab === 'abandoned') return plan.isAbandoned;
          return false;
        });
  }
}

const PlanStoreContext = createContext<PlanStore>(new PlanStore());

export const usePlanStore = () => useContext(PlanStoreContext);

export default PlanStore;