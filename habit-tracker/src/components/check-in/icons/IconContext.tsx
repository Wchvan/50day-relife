import React, { createContext, useContext, ReactNode } from 'react';

interface IconContextProps {
  color?: string;
  size?: string | number;
  className?: string;
}

const IconContext = createContext<IconContextProps>({
  color: 'currentColor',
  size: '1em',
  className: '',
});

interface IconProviderProps {
  value: IconContextProps;
  children: ReactNode;
}

export const IconProvider: React.FC<IconProviderProps> = ({ value, children }) => {
  return (
    <IconContext.Provider value={value}>
      {children}
    </IconContext.Provider>
  );
};

export const useIconContext = () => useContext(IconContext);

export default IconContext;