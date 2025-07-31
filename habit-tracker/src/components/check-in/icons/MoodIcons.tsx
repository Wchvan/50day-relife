import React from 'react';

interface MoodIconProps {
  className?: string;
}

// 很差
export const VeryBadIcon: React.FC<MoodIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" 
    className={className}
    fill="currentColor"
  >
    <circle cx="24" cy="24" r="20" fill="#FFCDD2" stroke="#F44336" strokeWidth="2"/>
    <circle cx="16" cy="20" r="2" fill="#37474F"/>
    <circle cx="32" cy="20" r="2" fill="#37474F"/>
    <path d="M16,32 C16,32 20,28 24,28 C28,28 32,32 32,32" stroke="#37474F" strokeWidth="2" fill="none"/>
    <path d="M12,12 L18,16 M36,12 L30,16" stroke="#37474F" strokeWidth="2" fill="none"/>
  </svg>
);

// 较差
export const BadIcon: React.FC<MoodIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" 
    className={className}
    fill="currentColor"
  >
    <circle cx="24" cy="24" r="20" fill="#FFE0B2" stroke="#FF9800" strokeWidth="2"/>
    <circle cx="16" cy="20" r="2" fill="#37474F"/>
    <circle cx="32" cy="20" r="2" fill="#37474F"/>
    <path d="M16,32 C16,32 20,29 24,29 C28,29 32,32 32,32" stroke="#37474F" strokeWidth="2" fill="none"/>
  </svg>
);

// 一般
export const NeutralIcon: React.FC<MoodIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" 
    className={className}
    fill="currentColor"
  >
    <circle cx="24" cy="24" r="20" fill="#FFF9C4" stroke="#FFC107" strokeWidth="2"/>
    <circle cx="16" cy="20" r="2" fill="#37474F"/>
    <circle cx="32" cy="20" r="2" fill="#37474F"/>
    <line x1="16" y1="32" x2="32" y2="32" stroke="#37474F" strokeWidth="2"/>
  </svg>
);

// 较好
export const GoodIcon: React.FC<MoodIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" 
    className={className}
    fill="currentColor"
  >
    <circle cx="24" cy="24" r="20" fill="#C8E6C9" stroke="#4CAF50" strokeWidth="2"/>
    <circle cx="16" cy="20" r="2" fill="#37474F"/>
    <circle cx="32" cy="20" r="2" fill="#37474F"/>
    <path d="M16,28 C16,28 20,34 24,34 C28,34 32,28 32,28" stroke="#37474F" strokeWidth="2" fill="none"/>
  </svg>
);

// 很好
export const VeryGoodIcon: React.FC<MoodIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" 
    className={className}
    fill="currentColor"
  >
    <circle cx="24" cy="24" r="20" fill="#BBDEFB" stroke="#2196F3" strokeWidth="2"/>
    <circle cx="16" cy="20" r="2" fill="#37474F"/>
    <circle cx="32" cy="20" r="2" fill="#37474F"/>
    <path d="M16,28 C16,28 20,36 24,36 C28,36 32,28 32,28" stroke="#37474F" strokeWidth="2" fill="none"/>
    <path d="M14,14 L18,16 M34,14 L30,16" stroke="#37474F" strokeWidth="2" fill="none"/>
  </svg>
);