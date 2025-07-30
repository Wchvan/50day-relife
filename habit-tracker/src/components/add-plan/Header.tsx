import { useNavigate } from 'react-router-dom';
import BackIcon from './icons/BackIcon';

const Header = () => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-[52px] bg-white shadow-sm z-10 flex items-center px-4 max-w-[768px] mx-auto">
      <button 
        onClick={handleBack}
        className="text-gray-700 p-2"
        aria-label="返回"
      >
        <BackIcon />
      </button>
      
      <div className="flex-grow text-center">
        <h1 className="text-lg font-medium text-gray-800 inline-block">创建计划</h1>
      </div>
    </div>
  );
};

export default Header;