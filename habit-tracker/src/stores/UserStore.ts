import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

interface UserInfo {
  userName: string;
  motto: string;
  avatarUrl: string;
  badge: string;
}

class UserStore {
  userInfo: UserInfo = {
    userName: '李明',
    motto: '坚持就是胜利',
    avatarUrl: 'https://cdn.qboost.woa.com/files/llmcode/2a9ce1/ebfad8.png',
    badge: '坚持达人'
  };

  constructor() {
    makeAutoObservable(this);
  }

  updateUserInfo(newInfo: Partial<UserInfo>) {
    this.userInfo = { ...this.userInfo, ...newInfo };
  }
}

const UserStoreContext = createContext<UserStore>(new UserStore());

export const useUserStore = () => useContext(UserStoreContext);

export default UserStore;