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
│   ├── common/       # 通用组件
│   │   ├── BottomNav.tsx
│   │   ├── AddButton.tsx
│   │   └── Header.tsx
│   ├── plan/         # 计划相关组件
│   │   ├── PlanCard.tsx
│   │   └── SectionHeader.tsx
│   ├── plan-detail/  # 计划详情组件
│   │   ├── Header.tsx
│   │   ├── PlanInfoCard.tsx
│   │   ├── ProgressCircle.tsx
│   │   ├── Calendar.tsx
│   │   ├── CheckinRecord.tsx
│   │   ├── Statistics.tsx
│   │   └── CheckinButton.tsx
│   └── add-plan/     # 添加计划组件
│       ├── Header.tsx
│       ├── PlanInfoSection.tsx
│       ├── PlanSettingsSection.tsx
│       ├── PlanDescriptionSection.tsx
│       ├── RecommendedTemplatesSection.tsx
│       └── SubmitButton.tsx
├── containers/       # 容器组件
│   ├── PlanContainer.tsx
│   └── StatsContainer.tsx
├── pages/            # 页面组件
│   ├── HomePage.tsx
│   ├── PlanListPage.tsx
│   ├── CreatePlanPage.tsx
│   └── PlanDetailPage.tsx
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


#### add-plan目录
##### Header
- **功能**：
  - 显示页面标题
  - 提供返回按钮
  - 使用react-router-dom的navigate实现返回
- **Props**：无

##### PlanInfoSection
- **功能**：
  - 输入计划名称
  - 选择计划图标
  - 选择计划类型
- **Props**：
  - title: 计划名称
  - setTitle: 名称更新函数
  - planType: 计划类型
  - setPlanType: 类型更新函数
  - iconUrl: 图标URL
  - setIconUrl: 图标更新函数

##### PlanSettingsSection
- **功能**：
  - 设置开始日期
  - 设置计划天数
  - 设置提醒时间
- **Props**：
  - startDate: 开始日期
  - setStartDate: 日期更新函数
  - total: 计划天数
  - setTotal: 天数更新函数
  - reminderTime: 提醒时间
  - setReminderTime: 提醒时间更新函数

##### PlanDescriptionSection
- **功能**：
  - 输入计划描述
  - 支持多行文本
- **Props**：
  - description: 描述内容
  - setDescription: 描述更新函数

##### RecommendedTemplatesSection
- **功能**：
  - 显示推荐模板列表
  - 点击模板自动填充表单
  - 支持键盘导航
- **Props**：
  - onTemplateClick: 模板选择回调

##### SubmitButton
- **功能**：
  - 提交表单数据
  - 显示剩余天数
  - 处理提交结果
- **Props**：
  - days: 计划天数
  - onSubmit: 提交回调函数


### 页面实现
#### HomePage
- **功能**：
  - 展示用户计划和任务概览
  - 显示成就徽章
  - 提供快速导航和添加功能
- **子组件**：
  - Header: 顶部用户信息
  - PlanCard: 计划卡片
  - TaskCard: 任务卡片
  - BadgeCard: 成就徽章卡片
  - SectionHeader: 区块标题
  - BottomNav: 底部导航
  - AddButton: 浮动添加按钮
- **状态管理**：
  - 使用PlanStore管理计划数据
  - 使用AchievementStore管理成就数据
- **交互功能**：
  - 计划卡片点击查看详情
  - 任务卡片点击打卡
  - 底部导航切换页面

#### PlanListPage
- **功能**：
  - 展示所有计划列表
  - 支持按标签筛选
  - 提供搜索功能
- **子组件**：
  - SearchBar: 搜索框
  - TabBar: 标签筛选
  - PlanCard: 计划卡片
  - BottomNav: 底部导航
  - AddButton: 添加按钮
- **状态管理**：
  - 使用PlanStore过滤计划数据
- **交互功能**：
  - 搜索框实时过滤
  - 标签切换筛选计划
  - 计划卡片点击查看详情
  - 底部导航切换页面

#### CreatePlanPage
- **功能**：
  - 创建新计划的完整表单页面
  - 集成多个子组件实现完整功能
  - 使用react-router-dom处理导航
  - 支持模板选择自动填充
- **子组件**：
  - Header: 顶部返回导航
  - PlanInfoSection: 计划基本信息输入
  - PlanSettingsSection: 计划设置
  - PlanDescriptionSection: 计划描述
  - RecommendedTemplatesSection: 推荐模板选择
  - SubmitButton: 表单提交

#### PlanDetailPage
- **功能**：
  - 展示计划详情页面
  - 显示计划基本信息、进度、打卡日历和统计
  - 提供打卡功能
- **子组件**：
  - Header: 顶部导航栏
  - PlanInfoCard: 计划信息卡片
  - ProgressCircle: 进度圆环
  - Calendar: 打卡日历
  - CheckinRecord: 打卡记录
  - Statistics: 统计数据
  - CheckinButton: 底部打卡按钮
- **状态管理**：
  - 使用PlanStore管理计划数据
  - 通过URL参数获取计划ID
  - 使用mobx observer响应状态变化
- **交互功能**：
  - 点击打卡按钮更新打卡状态
  - 自动同步路由变化与导航状态
  - 根据打卡状态显示不同按钮样式

#### 组件实现
##### Header
- **功能**：
  - 显示返回按钮和分享按钮
  - 使用react-router-dom处理导航
- **Props**：
  - onBack: 返回回调函数
  - onShare: 分享回调函数

##### PlanInfoCard
- **功能**：
  - 显示计划类别、起止日期
  - 提供编辑和提醒设置按钮
- **Props**：
  - category: 计划类别
  - startDate: 开始日期
  - endDate: 结束日期
  - onEdit: 编辑回调
  - onRemind: 提醒设置回调

##### ProgressCircle
- **功能**：
  - 圆形进度条展示完成进度
  - 计算并显示完成百分比
- **Props**：
  - current: 当前完成天数
  - total: 总天数

##### Calendar
- **功能**：
  - 日历形式展示打卡记录
  - 高亮显示已打卡日期
- **Props**：
  - year: 年份
  - month: 月份
  - checkedDays: 已打卡日期数组
  - currentDay: 当前日期

##### CheckinRecord
- **功能**：
  - 列表形式展示打卡记录
  - 显示打卡时间和心情状态
- **Props**：
  - records: 打卡记录数组
  - onViewMore: 查看更多回调

##### Statistics
- **功能**：
  - 展示连续打卡天数等统计数据
  - 使用图表展示每周打卡趋势
- **Props**：
  - consecutiveDays: 连续打卡天数
  - longestStreak: 最长连续打卡
  - completionRate: 完成率
  - weeklyData: 每周打卡数据

##### CheckinButton
- **功能**：
  - 底部固定打卡按钮
  - 根据打卡状态显示不同样式
  - 处理打卡逻辑
- **Props**：
  - onCheckin: 打卡回调函数
  - isCheckedToday: 是否已打卡

### 新增功能：打卡页面实现

#### CheckinPage
- **功能**：
  - 提供完整的打卡功能界面
  - 集成心情选择、日记输入、图片上传和标签选择
  - 处理打卡数据提交
- **子组件**：
  - Header: 顶部导航栏
  - MoodSelector: 心情选择器
  - JournalInput: 日记输入框
  - ImageUploader: 图片上传组件
  - TagSelector: 标签选择器
  - CheckinButton: 底部打卡按钮
- **状态管理**：
  - 使用PlanStore管理打卡数据
  - 通过URL参数获取计划ID
  - 使用React状态管理表单数据
- **交互功能**：
  - 心情选择支持5种状态
  - 日记输入支持多行文本
  - 图片上传支持多张图片
  - 标签选择支持多选
  - 打卡按钮根据状态显示不同样式

#### check-in目录组件
##### MoodSelector
- **功能**：
  - 提供5种心情状态选择
  - 使用MOOD_CONFIG管理心情配置
  - 支持无障碍访问
- **Props**：
  - onMoodChange: 心情选择回调

##### JournalInput
- **功能**：
  - 多行文本输入框
  - 支持字数统计
  - 自动调整高度
- **Props**：
  - onContentChange: 内容变化回调

##### ImageUploader
- **功能**：
  - 支持多张图片上传
  - 显示缩略图
  - 支持删除已上传图片
- **Props**：无

##### TagSelector
- **功能**：
  - 提供标签多选功能
  - 支持自定义标签
  - 使用chips样式展示已选标签
- **Props**：
  - onTagsChange: 标签变化回调

##### CheckinButton
- **功能**：
  - 底部固定打卡按钮
  - 根据打卡状态显示不同文本和样式
  - 处理已完成/已放弃状态
- **Props**：
  - onCheckin: 打卡回调
  - isCheckedToday: 是否已打卡
  - isCompleted: 是否已完成
  - isAbandoned: 是否已放弃

### 回顾与补充
- 新增功能：
  - 完整的计划详情展示
  - 打卡状态实时更新
  - 自动同步路由与导航状态
- 技术实现：
  - 使用mobx observer实现响应式UI
  - 通过URL参数传递计划ID
  - 使用react-router-dom管理导航
  - 严格遵循无障碍标准
- 已实现功能：
  - 完整的创建计划流程
  - 模板选择自动填充
  - 表单验证
  - 响应式布局
- 技术实现：
  - 使用React状态管理表单数据
  - 通过PlanStore保存计划数据
  - 使用react-router-dom管理导航状态

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