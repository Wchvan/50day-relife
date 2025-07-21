import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import homeIcon from '@/assets/icons/home.png';
import homeActiveIcon from '@/assets/icons/home.active.png';
import planIcon from '@/assets/icons/plan.png';
import planActiveIcon from '@/assets/icons/plan.active.png';
import statsIcon from '@/assets/icons/stats.png';
import statsActiveIcon from '@/assets/icons/stats.active.png';
import profileIcon from '@/assets/icons/profile.png';
import profileActiveIcon from '@/assets/icons/profile.active.png';

interface NavItem {
  id: string;
  label: string;
  iconUrl: string;
  activeIconUrl: string;
  path: string;
}

class NavStore {
  activeNav: string;

  navItems: NavItem[] = [
    { 
      id: 'home', 
      label: '首页', 
      iconUrl: homeIcon,
      activeIconUrl: homeActiveIcon,
      path: '/'
    },
    { 
      id: 'plan', 
      label: '计划', 
      iconUrl: planIcon,
      activeIconUrl: planActiveIcon,
      path: '/plan'
    },
    { 
      id: 'stats', 
      label: '统计', 
      iconUrl: statsIcon,
      activeIconUrl: statsActiveIcon,
      path: '/stats'
    },
    { 
      id: 'profile', 
      label: '我的', 
      iconUrl: profileIcon,
      activeIconUrl: profileActiveIcon,
      path: '/profile'
    }
  ];

  constructor() {
    // 优先从当前路由路径匹配导航项
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
    const matchedNav = this.navItems.find(item => item.path === currentPath);
    this.activeNav = matchedNav?.id || 'home';
    
    makeAutoObservable(this);
  }

  setActiveNav = (navId: string) => {
    this.activeNav = navId;
  };
}

const NavStoreContext = createContext<NavStore>(new NavStore());

export const useNavStore = () => useContext(NavStoreContext);

export default NavStore;