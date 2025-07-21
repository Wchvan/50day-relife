# 项目初始化与实现总结

## 1. 项目初始化
- 使用 `pnpm` 初始化项目：
  ```bash
  pnpm create vite@latest habit-tracker --template react-ts
  ```
- 安装依赖：
  ```bash
  pnpm install mobx mobx-react-lite antd-mobile recharts mobx-persist unocss postcss autoprefixer jest @testing-library/react @testing-library/jest-dom
  ```

## 2. 文件夹结构
生成以下目录结构：
```
src/
├── components/       # UI 组件
│   ├── PlanCard.tsx
│   ├── BadgeCard.tsx
│   ├── TaskCard.tsx
│   ├── BottomNav.tsx
│   ├── AddButton.tsx
│   ├── SectionHeader.tsx
│   └── Header.tsx
├── containers/       # 容器组件
│   ├── PlanContainer.tsx
│   └── StatsContainer.tsx
├── stores/           # 状态管理
│   ├── PlanStore.ts
│   ├── AchievementStore.ts
│   └── NavStore.ts
└── utils/            # 工具函数
    ├── useTimer.ts
    └── useLocalStorage.ts
```

## 3. 核心文件实现
### 状态管理 (`PlanStore.ts`)
- 使用 `MobX` 管理计划状态，包括添加计划、打卡记录和计算完成率。
- **功能**：
  - 管理计划列表 (`plans`)，支持任务打卡 (`checkTask`)。
  - 提供 `unfinishedTasks` 计算属性获取未完成任务。
  - 导出 `usePlanStore` Hook 供组件使用。

### 状态管理 (`NavStore.ts`)
- 使用 `MobX` 管理导航栏状态。
- **功能**：
  - 管理导航项列表 (`navItems`) 和当前激活导航 (`activeNav`)。
  - 支持导航切换 (`setActiveNav`)。
  - 导出 `useNavStore` Hook 供组件使用。

### 状态管理 (`AchievementStore.ts`)
- 使用 `MobX` 管理成就徽章状态。
- **功能**：
  - 管理成就徽章列表 (`badges`)，区分已解锁和未解锁状态。
  - 导出 `useAchievementStore` Hook 供组件使用。

### 组件实现
#### PlanCard
- **功能**：
  - 显示计划名称、进度条和图标
  - 计算并显示进度百分比
  - 使用 TailwindCSS 进行样式控制
- **Props**：
  - `title`: 计划名称
  - `current`: 当前完成天数
  - `total`: 总天数
  - `iconUrl`: 计划图标URL

#### BadgeCard
- **功能**：
  - 显示成就徽章图标和标题
  - 区分已解锁和未解锁状态
  - 使用 TailwindCSS 控制不同状态的样式
- **Props**：
  - `title`: 徽章标题
  - `iconUrl`: 徽章图标URL
  - `unlocked`: 是否已解锁

#### TaskCard
- **功能**：
  - 显示任务名称和打卡状态
  - 提供打卡按钮交互
  - 使用 TailwindCSS 区分已打卡和未打卡样式
- **Props**：
  - `title`: 任务名称
  - `checked`: 是否已完成
  - `onCheck`: 打卡回调函数

#### BottomNav
- **功能**：
  - 实现底部导航栏
  - 支持导航项切换和高亮
  - 使用 CSS Module 控制导航项样式
- **Props**：
  - `items`: 导航项数组
  - `activeId`: 当前激活的导航项ID
  - `onNavChange`: 导航切换回调函数

#### AddButton
- **功能**：
  - 浮动添加按钮
  - 点击触发回调函数
  - 使用 TailwindCSS 控制按钮样式
- **Props**：
  - `onClick`: 点击回调函数
  - `iconUrl`: 按钮图标URL

#### SectionHeader
- **功能**：
  - 区块标题组件
  - 可选显示"查看全部"链接
  - 使用 TailwindCSS 控制标题样式
- **Props**：
  - `title`: 区块标题
  - `showViewAll`: 是否显示"查看全部"
  - `onViewAllClick`: "查看全部"点击回调

#### Header
- **功能**：
  - 显示用户信息和日期
  - 包含头像、用户名、座右铭
  - 使用 TailwindCSS 控制布局和样式
- **Props**：
  - `userName`: 用户名
  - `motto`: 座右铭
  - `avatarUrl`: 头像URL

### 工具函数
- `useTimer.ts`：封装定时提醒逻辑。
- `useLocalStorage.ts`：封装本地存储逻辑。

## 4. 样式实现
- 使用 TailwindCSS 实现响应式布局
- 精确还原设计稿的间距和颜色
- 完全替代CSS Module，实现原子化样式管理
- 通过Tailwind的JIT模式实现按需生成样式
- 使用Tailwind配置扩展自定义颜色和间距

## 5. 技术选型
- React 18
- MobX 6
- TypeScript 4.9+
- Vite 4
- TailwindCSS
- Ant Design Mobile

## 6. 页面结构与功能

### 首页

#### 页面结构
- **顶部用户信息栏（Header）**：显示用户头像、名称、座右铭和日期。
- **计划卡片滚动区域**：展示用户的计划卡片，包括计划名称和进度条。
- **今日任务列表**：显示当前日期的任务状态和打卡按钮。
- **成就徽章展示区**：展示已解锁和未解锁的成就徽章。
- **底部导航栏（BottomNav）**：支持页面切换。
- **添加按钮（AddButton）**：浮动按钮，用于添加新计划。

#### 主要组件
- **Header**：
  - 显示用户头像、名称、座右铭和日期。
  - 使用 `UserStore` 获取用户数据。
- **PlanCard**：
  - 展示计划名称和进度条。
  - 支持打卡功能，点击后更新 `PlanStore` 中的状态。
- **TaskCard**：
  - 显示任务状态和打卡按钮。
  - 使用 `PlanStore` 管理任务状态。
- **BadgeCard**：
  - 展示成就徽章，区分已解锁和未解锁状态。
  - 使用 `AchievementStore` 管理徽章数据。
- **BottomNav**：
  - 底部导航栏，支持页面切换。
  - 使用路由状态管理当前页面。
- **AddButton**：
  - 浮动按钮，点击后打开添加新计划的模态框。
- **SectionHeader**：
  - 各区块的标题栏，显示区块名称和"查看全部"按钮。

### 交互功能
- **任务打卡功能**：点击打卡按钮后更新任务状态并重新计算完成率。
- **底部导航切换**：点击导航栏按钮切换页面。
- **"查看全部"和"添加"按钮点击事件"：
  - "查看全部"按钮跳转到对应页面。
  - "添加"按钮打开模态框。

#### 样式特点
- 使用 TailwindCSS 实现原子化样式管理
- 完全替代CSS Module，实现更简洁的样式控制
- 响应式设计，适配不同屏幕尺寸
- 通过Tailwind配置统一管理设计系统