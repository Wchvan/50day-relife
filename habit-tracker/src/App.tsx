import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlanListPage from './pages/PlanListPage';
import './App.css';
import CreatePlanPage from './pages/CreatePlanPage';
import PlanDetailPage from './pages/PlanDetailPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plan" element={<PlanListPage />} />
          <Route path="/add-plan" element={<CreatePlanPage />} />
          <Route path="/plan-detail" element={<PlanDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;