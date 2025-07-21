import React from 'react';

interface SectionHeaderProps {
  title: string;
  showViewAll?: boolean;
  onViewAllClick?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  showViewAll = false, 
  onViewAllClick 
}) => {
  const handleViewAllClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onViewAllClick) onViewAllClick();
  };

  return (
    <div className="flex justify-between items-center mb-3 w-full">
      <h2 className="font-medium text-base text-gray-800 m-0">{title}</h2>
      {showViewAll && (
        <a 
          href="#" 
          className="text-sm text-purple-500 no-underline" 
          onClick={handleViewAllClick}
        >
          查看全部
        </a>
      )}
    </div>
  );
};

export default SectionHeader;