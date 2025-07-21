import React from 'react';
import { useNavStore } from '@/stores/NavStore';
import { useNavigate } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const { navItems, activeNav, setActiveNav } = useNavStore();
  const navigate = useNavigate();

  const handleNavClick = (id: string, path: string) => {
    setActiveNav(id);
    navigate(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 bg-white border-t border-gray-200 flex justify-around items-center z-50">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col items-center justify-center ${activeNav === item.id ? 'text-green-500 font-medium' : 'text-gray-400'}`}
          onClick={() => handleNavClick(item.id, item.path)}
        >
          <img
            src={activeNav === item.id ? item.activeIconUrl : item.iconUrl}
            alt={item.label}
            className="w-5 h-4.5 mb-1"
          />
          <span className="text-xs">{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNav;